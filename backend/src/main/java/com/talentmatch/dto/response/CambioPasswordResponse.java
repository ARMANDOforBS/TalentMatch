package com.talentmatch.dto.response;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * DTO para respuestas de cambio de contraseña.
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CambioPasswordResponse {
    
    private Long usuarioId;
    private String email;
    private String mensaje;
    private LocalDateTime fechaActualizacion;
    private Boolean exitoso;
} 