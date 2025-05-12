package com.talentmatch.dto.request;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * DTO para solicitudes de creación de pruebas técnicas.
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CreacionPruebaTecnicaRequest {

    @NotNull(message = "El ID de la postulación es obligatorio")
    private Long postulacionId;

    @NotBlank(message = "El título es obligatorio")
    private String titulo;

    @NotBlank(message = "La descripción es obligatoria")
    private String descripcion;

    @NotBlank(message = "Las instrucciones son obligatorias")
    private String instrucciones;

    @Min(value = 1, message = "El tiempo límite debe ser al menos 1 minuto")
    private Integer tiempoLimiteMinutos;

    @NotBlank(message = "El nivel de dificultad es obligatorio")
    private String nivelDificultad;

    @NotBlank(message = "Las tecnologías son obligatorias")
    private String tecnologias;
}
