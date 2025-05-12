package com.talentmatch.security;

import org.springframework.stereotype.Service;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

/**
 * Servicio para manejar operaciones relacionadas con JWT.
 * Esta clase se crea para romper la dependencia circular entre JwtAuthenticationFilter, 
 * AuthServiceImpl y SecurityConfig.
 */
@Service
@RequiredArgsConstructor
@Slf4j
public class JwtService {

    private final JwtProvider jwtProvider;

    /**
     * Valida un token JWT.
     * 
     * @param token Token JWT a validar
     * @return ID del usuario si el token es válido, null en caso contrario
     */
    public Long validarToken(String token) {
        if (jwtProvider.validateToken(token)) {
            Long usuarioId = jwtProvider.getUserIdFromToken(token);
            log.info("Token validado exitosamente para el usuario ID: {}", usuarioId);
            return usuarioId;
        }
        
        log.error("Token inválido");
        return null;
    }
    
    /**
     * Genera un nuevo token JWT para un usuario.
     * 
     * @param usuarioId ID del usuario
     * @return Nuevo token JWT
     */
    public String generarTokenParaUsuario(Long usuarioId) {
        String token = jwtProvider.generateTokenForUserId(usuarioId);
        log.info("Token generado exitosamente para el usuario ID: {}", usuarioId);
        return token;
    }
} 