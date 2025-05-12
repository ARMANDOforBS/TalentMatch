package com.talentmatch.dto.request;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * DTO para solicitudes de creación de preguntas.
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CreacionPreguntaRequest {

    @NotNull(message = "El ID de la prueba técnica es obligatorio")
    private Long pruebaTecnicaId;

    @NotBlank(message = "El enunciado es obligatorio")
    private String enunciado;

    @NotBlank(message = "El tipo de pregunta es obligatorio")
    @Pattern(regexp = "^(OPCION_MULTIPLE|DESARROLLO|VERDADERO_FALSO|CODIGO)$", 
            message = "El tipo de pregunta debe ser OPCION_MULTIPLE, DESARROLLO, VERDADERO_FALSO o CODIGO")
    private String tipoPregunta;

    private String opciones;

    private String respuestaCorrecta;

    @Min(value = 0, message = "La puntuación debe ser mayor o igual a 0")
    private Integer puntuacion;

    @Min(value = 1, message = "El orden debe ser mayor o igual a 1")
    private Integer orden;
}
