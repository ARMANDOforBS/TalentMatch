package com.talentmatch.dto.response;

import java.time.LocalDateTime;
import java.util.List;

import com.talentmatch.model.enums.EstadoPostulacion;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * DTO para respuestas con información detallada de postulaciones.
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PostulacionDetalleResponse {

    private Long id;
    private VacanteResponse vacante;
    private CandidatoResumidoResponse candidato;
    private EstadoPostulacion estado;
    private String motivacion;
    private String comentariosAdicionales;
    private String urlCurriculum;
    private List<String> documentosAdicionales;
    private LocalDateTime fechaPostulacion;
    private LocalDateTime fechaActualizacion;
    private String comentariosReclutador;
    private PruebaTecnicaResponse pruebaTecnica;
    private Integer puntuacionTotal;
    private Boolean apto;
}
