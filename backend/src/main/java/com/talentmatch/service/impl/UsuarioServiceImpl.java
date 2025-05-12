package com.talentmatch.service.impl;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import com.talentmatch.dto.request.CambioPasswordRequest;
import com.talentmatch.dto.response.UsuarioResponse;
import com.talentmatch.exception.AutenticacionException;
import com.talentmatch.exception.RecursoNoEncontradoException;
import com.talentmatch.mapper.UsuarioMapper;
import com.talentmatch.model.entity.Usuario;
import com.talentmatch.model.enums.EstadoUsuario;
import com.talentmatch.repository.UsuarioRepository;
import com.talentmatch.service.UsuarioService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

/**
 * Implementación del servicio de usuarios.
 */
@Service
@RequiredArgsConstructor
@Slf4j
public class UsuarioServiceImpl implements UsuarioService {

    private final UsuarioRepository usuarioRepository;
    private final UsuarioMapper usuarioMapper;
    private final PasswordEncoder passwordEncoder;

    @Override
    @Transactional(readOnly = true)
    public UsuarioResponse buscarPorId(Long id) {
        Usuario usuario = usuarioRepository.findById(id)
                .orElseThrow(() -> new RecursoNoEncontradoException("Usuario no encontrado con ID: " + id));
        
        return usuarioMapper.toUsuarioResponse(usuario);
    }

    @Override
    @Transactional(readOnly = true)
    public UsuarioResponse buscarPorEmail(String email) {
        Usuario usuario = usuarioRepository.findByEmail(email)
                .orElseThrow(() -> new RecursoNoEncontradoException("Usuario no encontrado con email: " + email));
        
        return usuarioMapper.toUsuarioResponse(usuario);
    }

    @Override
    @Transactional
    public void cambiarPassword(Long id, CambioPasswordRequest request) {
        Usuario usuario = usuarioRepository.findById(id)
                .orElseThrow(() -> new RecursoNoEncontradoException("Usuario no encontrado con ID: " + id));
        
        if (!passwordEncoder.matches(request.getPasswordActual(), usuario.getPassword())) {
            throw new AutenticacionException("La contraseña actual es incorrecta");
        }
        
        usuario.setPassword(passwordEncoder.encode(request.getNuevaPassword()));
        usuarioRepository.save(usuario);
        
        log.info("Contraseña actualizada exitosamente para el usuario ID: {}", id);
    }

    @Override
    @Transactional
    public String actualizarFotoPerfil(Long id, MultipartFile foto) {
        // TODO: Implementar lógica para subir la foto a un servicio de almacenamiento
        // y actualizar la URL en el usuario
        throw new UnsupportedOperationException("Método no implementado");
    }

    @Override
    @Transactional
    public UsuarioResponse cambiarEstado(Long id, EstadoUsuario estado) {
        Usuario usuario = usuarioRepository.findById(id)
                .orElseThrow(() -> new RecursoNoEncontradoException("Usuario no encontrado con ID: " + id));
        
        usuario.setEstado(estado);
        usuario = usuarioRepository.save(usuario);
        
        log.info("Estado actualizado a {} para el usuario ID: {}", estado, id);
        
        return usuarioMapper.toUsuarioResponse(usuario);
    }

    @Override
    @Transactional(readOnly = true)
    public Usuario buscarUsuarioPorEmail(String email) {
        return usuarioRepository.findByEmail(email)
                .orElseThrow(() -> new RecursoNoEncontradoException("Usuario no encontrado con email: " + email));
    }

    @Override
    @Transactional
    public void registrarAcceso(Long id) {
        Usuario usuario = usuarioRepository.findById(id)
                .orElseThrow(() -> new RecursoNoEncontradoException("Usuario no encontrado con ID: " + id));
        
        usuario.registrarAcceso();
        usuarioRepository.save(usuario);
        
        log.info("Acceso registrado para el usuario ID: {}", id);
    }
} 