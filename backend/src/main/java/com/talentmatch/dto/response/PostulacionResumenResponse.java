package com.talentmatch.dto.response;

import java.time.LocalDateTime;

import com.talentmatch.model.enums.EstadoPostulacion;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * DTO para respuestas con información resumida de postulaciones.
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PostulacionResumenResponse {

    private Long id;
    private VacanteResumidaResponse vacante;
    private CandidatoResumidoResponse candidato;
    private EstadoPostulacion estado;
    private LocalDateTime fechaPostulacion;
    private LocalDateTime fechaActualizacion;
    private Boolean tienePruebaTecnica;
    private Boolean pruebaCompletada;
    private Integer puntuacionTotal;
}
