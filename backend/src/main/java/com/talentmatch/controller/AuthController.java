package com.talentmatch.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.talentmatch.dto.request.AutenticacionRequest;
import com.talentmatch.dto.request.CambioPasswordRequest;
import com.talentmatch.dto.request.RegistroCandidatoRequest;
import com.talentmatch.dto.request.RegistroReclutadorRequest;
import com.talentmatch.dto.response.AutenticacionResponse;
import com.talentmatch.dto.response.CambioPasswordResponse;
import com.talentmatch.dto.response.UsuarioResponse;
import com.talentmatch.service.AuthService;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

/**
 * Controlador REST para la autenticación y gestión de usuarios.
 */
@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    /**
     * Autentica a un usuario y genera un token JWT.
     * 
     * @param request DTO con las credenciales del usuario
     * @return ResponseEntity con el token JWT y la información del usuario
     */
    @PostMapping("/login")
    public ResponseEntity<AutenticacionResponse> login(@Valid @RequestBody AutenticacionRequest request) {
        return ResponseEntity.ok(authService.autenticar(request));
    }

    /**
     * Registra un nuevo candidato.
     * 
     * @param request DTO con la información del candidato
     * @return ResponseEntity con la información del candidato registrado
     */
    @PostMapping("/registro/candidato")
    public ResponseEntity<UsuarioResponse> registrarCandidato(@Valid @RequestBody RegistroCandidatoRequest request) {
        return ResponseEntity.status(HttpStatus.CREATED).body(authService.registrarCandidato(request));
    }

    /**
     * Registra un nuevo reclutador.
     * 
     * @param request DTO con la información del reclutador
     * @return ResponseEntity con la información del reclutador registrado
     */
    @PostMapping("/registro/reclutador")
    public ResponseEntity<UsuarioResponse> registrarReclutador(@Valid @RequestBody RegistroReclutadorRequest request) {
        return ResponseEntity.status(HttpStatus.CREATED).body(authService.registrarReclutador(request));
    }

    /**
     * Cambia la contraseña de un usuario.
     * 
     * @param id ID del usuario
     * @param request DTO con la información de cambio de contraseña
     * @return ResponseEntity con el resultado de la operación
     */
    @PutMapping("/cambiar-password/{id}")
    @PreAuthorize("authentication.principal.id == #id")
    public ResponseEntity<CambioPasswordResponse> cambiarPassword(
            @PathVariable Long id,
            @Valid @RequestBody CambioPasswordRequest request) {
        return ResponseEntity.ok(authService.cambiarPassword(id, request));
    }

    /**
     * Valida un token JWT.
     * 
     * @param token Token JWT a validar
     * @return ResponseEntity con el ID del usuario al que pertenece el token
     */
    @GetMapping("/validar-token")
    public ResponseEntity<Long> validarToken(@RequestParam String token) {
        Long usuarioId = authService.validarToken(token);
        if (usuarioId != null) {
            return ResponseEntity.ok(usuarioId);
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
    }

    /**
     * Genera un nuevo token para un usuario.
     * 
     * @param id ID del usuario
     * @return ResponseEntity con el nuevo token generado
     */
    @GetMapping("/generar-token/{id}")
    @PreAuthorize("hasRole('ADMINISTRADOR') or authentication.principal.id == #id")
    public ResponseEntity<String> generarToken(@PathVariable Long id) {
        return ResponseEntity.ok(authService.generarToken(id));
    }
    
    /*
     * Crea un usuario administrador en el sistema.
     * IMPORTANTE: Este endpoint está comentado por seguridad.
     * Descomenta este método SOLO cuando necesites crear un administrador
     * y vuelve a comentarlo inmediatamente después.
     * 
     * @param request Datos para el registro del administrador
     * @return ResponseEntity con la información del administrador creado
     */
    /*
    @PostMapping("/crear-administrador")
    public ResponseEntity<UsuarioResponse> crearAdministrador(@Valid @RequestBody RegistroAdministradorRequest request) {
        // Validar que la contraseña y confirmación coincidan
        if (!request.getPassword().equals(request.getConfirmacionPassword())) {
            throw new BadRequestException("Las contraseñas no coinciden");
        }
        
        // Crear el administrador
        UsuarioResponse administrador = authService.registrarAdministrador(request);
        
        // Registrar en logs la creación del administrador
        log.info("Administrador creado exitosamente con email: {}", request.getEmail());
        
        return ResponseEntity.status(HttpStatus.CREATED).body(administrador);
    }
    */
} 