package com.talentmatch.dto.response;

import java.time.LocalDateTime;

import com.talentmatch.model.enums.TipoNotificacion;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * DTO para respuestas con información de notificaciones.
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class NotificacionResponse {

    private Long id;
    private String titulo;
    private String contenido;
    private TipoNotificacion tipo;
    private Boolean leida;
    private LocalDateTime fechaCreacion;
    private LocalDateTime fechaLectura;
    private Long referenciaId;
    private String referenciaTipo;
}
