package com.talentmatch.dto.response;

import java.time.LocalDateTime;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * DTO para respuestas con información detallada de pruebas técnicas.
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PruebaTecnicaDetalleResponse {

    private Long id;
    private Long postulacionId;
    private ReclutadorResumidoResponse reclutador;
    private String titulo;
    private String descripcion;
    private String instrucciones;
    private Integer tiempoLimiteMinutos;
    private String nivelDificultad;
    private String tecnologias;
    private LocalDateTime fechaCreacion;
    private LocalDateTime fechaActualizacion;
    private LocalDateTime fechaInicio;
    private LocalDateTime fechaFinalizacion;
    private Boolean completada;
    private Integer puntuacionTotal;
    private List<PreguntaResponse> preguntas;
}
