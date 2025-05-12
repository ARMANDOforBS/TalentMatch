package com.talentmatch.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * DTO para respuestas con información de preguntas.
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PreguntaResponse {

    private Long id;
    private Long pruebaTecnicaId;
    private String enunciado;
    private String tipoPregunta;
    private String opciones;
    private Integer puntuacion;
    private Integer orden;
    private Boolean respondida;
    private RespuestaResponse respuesta;
}
