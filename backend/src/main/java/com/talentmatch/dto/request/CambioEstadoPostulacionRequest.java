package com.talentmatch.dto.request;

import java.time.LocalDateTime;

import com.talentmatch.model.enums.EstadoPostulacion;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * DTO para solicitudes de cambio de estado de postulaciones.
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CambioEstadoPostulacionRequest {

    @NotNull(message = "El nuevo estado es obligatorio")
    private EstadoPostulacion nuevoEstado;

    private String comentariosReclutador;

    private LocalDateTime fechaEntrevista;
}
