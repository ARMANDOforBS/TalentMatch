package com.talentmatch.dto.response;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * DTO para la respuesta de autenticación.
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AutenticacionResponse {

    /**
     * Token JWT de autenticación.
     */
    private String token;
    
    /**
     * Información del usuario autenticado.
     * Se mantiene el nombre "usuario" para la propiedad JSON y se usa "user" como nombre de método
     * para compatibilidad con el código existente.
     */
    @JsonProperty("usuario")
    private UsuarioResponse usuario;

    /**
     * Constructor con token y usuario.
     * 
     * @param token Token JWT
     * @param user Información del usuario
     */
    public static class AutenticacionResponseBuilder {
        /**
         * Método alternativo para establecer el usuario.
         * Permite usar .user() o .usuario() indistintamente.
         * 
         * @param user Información del usuario
         * @return Builder
         */
        public AutenticacionResponseBuilder user(UsuarioResponse user) {
            this.usuario = user;
            return this;
        }
    }
}
