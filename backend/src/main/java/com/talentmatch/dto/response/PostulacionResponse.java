package com.talentmatch.dto.response;

import java.time.LocalDateTime;

import com.talentmatch.model.enums.EstadoPostulacion;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * DTO para respuestas con información de postulaciones.
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PostulacionResponse {

    private Long id;
    private CandidatoResumidoResponse candidato;
    private VacanteResumenResponse vacante;
    private EstadoPostulacion estado;
    private String cartaPresentacion;
    private Integer puntuacionMatch;
    private String comentariosReclutador;
    private LocalDateTime fechaEntrevista;
    private LocalDateTime fechaCreacion;
    private LocalDateTime fechaActualizacion;
    private Boolean tienePruebaTecnica;
    private Boolean pruebaTecnicaCompletada;
}
