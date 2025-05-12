package com.talentmatch.dto.request;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * DTO para solicitudes de creación de evaluaciones.
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CreacionEvaluacionRequest {

    @NotNull(message = "El ID de la respuesta es obligatorio")
    private Long respuestaId;

    @NotNull(message = "La puntuación es obligatoria")
    @Min(value = 0, message = "La puntuación mínima es 0")
    @Max(value = 100, message = "La puntuación máxima es 100")
    private Integer puntuacion;

    private String puntosFuertes;

    private String puntosMejora;

    @NotBlank(message = "La retroalimentación es obligatoria")
    private String retroalimentacion;

    private Boolean generadaPorIA;
}
