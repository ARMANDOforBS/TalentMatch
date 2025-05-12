package com.talentmatch.service.impl;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.talentmatch.dto.request.AutenticacionRequest;
import com.talentmatch.dto.request.CambioPasswordRequest;
import com.talentmatch.dto.request.RegistroAdministradorRequest;
import com.talentmatch.dto.request.RegistroCandidatoRequest;
import com.talentmatch.dto.request.RegistroReclutadorRequest;
import com.talentmatch.dto.response.AutenticacionResponse;
import com.talentmatch.dto.response.CambioPasswordResponse;
import com.talentmatch.dto.response.UsuarioResponse;
import com.talentmatch.exception.AutenticacionException;
import com.talentmatch.exception.RecursoNoEncontradoException;
import com.talentmatch.exception.ValidacionException;
import com.talentmatch.mapper.CandidatoMapper;
import com.talentmatch.mapper.ReclutadorMapper;
import com.talentmatch.mapper.UsuarioMapper;
import com.talentmatch.model.entity.Candidato;
import com.talentmatch.model.entity.Reclutador;
import com.talentmatch.model.entity.Usuario;
import com.talentmatch.model.enums.EstadoUsuario;
import com.talentmatch.model.enums.RolUsuario;
import com.talentmatch.repository.UsuarioRepository;
import com.talentmatch.security.JwtService;
import com.talentmatch.service.AuthService;
import com.talentmatch.service.UsuarioService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import java.time.LocalDateTime;

/**
 * Implementación del servicio de autenticación.
 */
@Service
@RequiredArgsConstructor
@Slf4j
public class AuthServiceImpl implements AuthService {

    private final AuthenticationManager authenticationManager;
    private final JwtService jwtService;
    private final PasswordEncoder passwordEncoder;
    private final UsuarioRepository usuarioRepository;
    private final UsuarioService usuarioService;
    private final CandidatoMapper candidatoMapper;
    private final ReclutadorMapper reclutadorMapper;
    private final UsuarioMapper usuarioMapper;

    @Override
    public AutenticacionResponse autenticar(AutenticacionRequest request) {
        try {
            Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                    request.getEmail(),
                    request.getPassword()
                )
            );
            
            SecurityContextHolder.getContext().setAuthentication(authentication);
            Usuario usuario = (Usuario) authentication.getPrincipal();
            
            // Registrar acceso
            usuarioService.registrarAcceso(usuario.getId());
            
            // Generar token
            String token = jwtService.generarTokenParaUsuario(usuario.getId());
            
            log.info("Usuario autenticado exitosamente: {}", usuario.getEmail());
            
            return AutenticacionResponse.builder()
                    .token(token)
                    .usuario(usuarioMapper.toUsuarioResponse(usuario))
                    .build();
        } catch (BadCredentialsException e) {
            log.error("Credenciales inválidas para el email: {}", request.getEmail());
            throw new AutenticacionException("Credenciales inválidas");
        } catch (Exception e) {
            log.error("Error durante la autenticación: {}", e.getMessage());
            throw new AutenticacionException("Error durante la autenticación: " + e.getMessage());
        }
    }

    @Override
    @Transactional
    public UsuarioResponse registrarCandidato(RegistroCandidatoRequest request) {
        // Validaciones
        validarPasswordsCoinciden(request.getPassword(), request.getConfirmacionPassword());
        validarEmailUnico(request.getEmail());
        
        // Encriptar contraseña
        String passwordEncriptada = passwordEncoder.encode(request.getPassword());
        request.setPassword(passwordEncriptada);
        
        // Convertir a entidad y persistir
        Candidato candidato = candidatoMapper.toCandidato(request);
        candidato = usuarioRepository.save(candidato);
        
        log.info("Candidato registrado exitosamente con email: {}", candidato.getEmail());
        
        return usuarioMapper.toUsuarioResponse(candidato);
    }

    @Override
    @Transactional
    public UsuarioResponse registrarReclutador(RegistroReclutadorRequest request) {
        // Validaciones
        validarPasswordsCoinciden(request.getPassword(), request.getConfirmacionPassword());
        validarEmailUnico(request.getEmail());
        
        // Encriptar contraseña
        String passwordEncriptada = passwordEncoder.encode(request.getPassword());
        request.setPassword(passwordEncriptada);
        
        // Convertir a entidad y persistir
        Reclutador reclutador = reclutadorMapper.toReclutador(request);
        reclutador = usuarioRepository.save(reclutador);
        
        log.info("Reclutador registrado exitosamente con email: {}", reclutador.getEmail());
        
        return usuarioMapper.toUsuarioResponse(reclutador);
    }

    @Override
    @Transactional
    public CambioPasswordResponse cambiarPassword(Long usuarioId, CambioPasswordRequest request) {
        // Validar que las contraseñas coincidan
        if (!request.getNuevaPassword().equals(request.getConfirmacionPassword())) {
            throw new ValidacionException("La nueva contraseña y su confirmación no coinciden");
        }
        
        // Buscar usuario
        Usuario usuario = usuarioRepository.findById(usuarioId)
                .orElseThrow(() -> new AutenticacionException("Usuario no encontrado"));
        
        // Validar contraseña actual
        if (!passwordEncoder.matches(request.getPasswordActual(), usuario.getPassword())) {
            throw new AutenticacionException("La contraseña actual es incorrecta");
        }
        
        // Actualizar contraseña
        usuario.setPassword(passwordEncoder.encode(request.getNuevaPassword()));
        usuarioRepository.save(usuario);
        
        log.info("Contraseña actualizada exitosamente para el usuario ID: {}", usuarioId);
        
        return CambioPasswordResponse.builder()
                .usuarioId(usuario.getId())
                .email(usuario.getEmail())
                .mensaje("Contraseña actualizada exitosamente")
                .fechaActualizacion(LocalDateTime.now())
                .exitoso(true)
                .build();
    }

    @Override
    public String generarToken(Long usuarioId) {
        // Verificar que el usuario existe
        usuarioRepository.findById(usuarioId)
                .orElseThrow(() -> new AutenticacionException("Usuario no encontrado"));
        
        String token = jwtService.generarTokenParaUsuario(usuarioId);
        
        log.info("Token generado exitosamente para el usuario ID: {}", usuarioId);
        
        return token;
    }

    @Override
    public Long validarToken(String token) {
        return jwtService.validarToken(token);
    }

    @Override
    @Transactional
    public UsuarioResponse registrarAdministrador(RegistroAdministradorRequest request) {
        // Validaciones
        validarPasswordsCoinciden(request.getPassword(), request.getConfirmacionPassword());
        validarEmailUnico(request.getEmail());
        
        // Encriptar contraseña
        String passwordEncriptada = passwordEncoder.encode(request.getPassword());
        
        // Crear entidad Usuario con rol ADMINISTRADOR
        Usuario administrador = new Usuario();
        administrador.setEmail(request.getEmail());
        administrador.setPassword(passwordEncriptada);
        administrador.setNombre(request.getNombre());
        administrador.setApellido(request.getApellido());
        administrador.setTelefono(request.getTelefono());
        administrador.setRol(RolUsuario.ADMINISTRADOR);
        administrador.setEstado(EstadoUsuario.ACTIVO);
        administrador.setFechaCreacion(LocalDateTime.now());
        
        // Persistir en base de datos
        administrador = usuarioRepository.save(administrador);
        
        log.info("Administrador registrado exitosamente con email: {}", administrador.getEmail());
        
        return usuarioMapper.toUsuarioResponse(administrador);
    }
    
    /**
     * Valida que las contraseñas coincidan.
     * 
     * @param password Contraseña
     * @param confirmPassword Confirmación de contraseña
     */
    private void validarPasswordsCoinciden(String password, String confirmPassword) {
        if (!password.equals(confirmPassword)) {
            throw new ValidacionException("Las contraseñas no coinciden");
        }
    }
    
    /**
     * Valida que el email no esté en uso.
     * 
     * @param email Email a validar
     */
    private void validarEmailUnico(String email) {
        if (usuarioRepository.existsByEmail(email)) {
            throw new ValidacionException("El email ya está registrado");
        }
    }
} 