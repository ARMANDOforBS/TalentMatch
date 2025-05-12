package com.talentmatch.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * DTO para solicitudes de actualización de notificaciones.
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ActualizacionNotificacionRequest {

    private Boolean leida;
}
