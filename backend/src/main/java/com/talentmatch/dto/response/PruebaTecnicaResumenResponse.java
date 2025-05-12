package com.talentmatch.dto.response;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * DTO para respuestas con información resumida de pruebas técnicas.
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PruebaTecnicaResumenResponse {

    private Long id;
    private Long postulacionId;
    private String titulo;
    private String nivelDificultad;
    private String tecnologias;
    private Integer tiempoLimiteMinutos;
    private LocalDateTime fechaCreacion;
    private LocalDateTime fechaInicio;
    private LocalDateTime fechaFinalizacion;
    private Boolean completada;
    private Integer puntuacionTotal;
    private Integer totalPreguntas;
    private Integer preguntasRespondidas;
}
