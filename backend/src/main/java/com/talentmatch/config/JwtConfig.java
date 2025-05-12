package com.talentmatch.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;

import lombok.Getter;

/**
 * Configuración para JWT (JSON Web Token).
 * Esta clase carga las propiedades relacionadas con JWT desde el archivo de configuración.
 */
@Configuration
@Getter
public class JwtConfig {

    /**
     * Clave secreta utilizada para firmar los tokens JWT.
     */
    @Value("${jwt.secret}")
    private String secretKey;
    
    /**
     * Tiempo de expiración del token JWT en milisegundos.
     */
    @Value("${jwt.expiration}")
    private Long expiracion;
}
