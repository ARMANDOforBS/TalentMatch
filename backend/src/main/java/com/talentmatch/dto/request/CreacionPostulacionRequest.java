package com.talentmatch.dto.request;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * DTO para solicitudes de creación de postulaciones.
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CreacionPostulacionRequest {

    @NotNull(message = "El ID de la vacante es obligatorio")
    private Long vacanteId;

    private String cartaPresentacion;
}
