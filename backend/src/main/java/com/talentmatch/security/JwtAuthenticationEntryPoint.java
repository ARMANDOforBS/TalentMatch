package com.talentmatch.security;

import java.io.IOException;
import java.io.Serializable;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.ObjectMapper;

import lombok.extern.slf4j.Slf4j;

/**
 * Punto de entrada para manejar errores de autenticación.
 */
@Component
@Slf4j
public class JwtAuthenticationEntryPoint implements AuthenticationEntryPoint, Serializable {

    private static final long serialVersionUID = -7858869558953243875L;
    private final ObjectMapper objectMapper = new ObjectMapper();

    @Override
    public void commence(HttpServletRequest request, HttpServletResponse response,
                         AuthenticationException authException) throws IOException {
        log.error("Error de autenticación: {}", authException.getMessage());
        
        response.setContentType("application/json;charset=UTF-8");
        response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
        
        response.getWriter().write(objectMapper.writeValueAsString(
                new ErrorResponse("No autorizado", "No tienes permiso para acceder a este recurso")
        ));
    }
    
    private static class ErrorResponse {
        private final String error;
        private final String mensaje;
        
        public ErrorResponse(String error, String mensaje) {
            this.error = error;
            this.mensaje = mensaje;
        }
        
        @JsonProperty("error")
        public String getError() {
            return error;
        }
        
        @JsonProperty("mensaje")
        public String getMensaje() {
            return mensaje;
        }
    }
}
