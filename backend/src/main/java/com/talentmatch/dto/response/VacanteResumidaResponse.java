package com.talentmatch.dto.response;

import java.time.LocalDate;

import com.talentmatch.model.enums.EstadoVacante;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * DTO para respuestas con información resumida de vacantes.
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class VacanteResumidaResponse {

    private Long id;
    private String titulo;
    private String area;
    private String ubicacion;
    private String modalidad;
    private EstadoVacante estado;
    private LocalDate fechaPublicacion;
    private LocalDate fechaCierre;
    private Integer totalPostulaciones;
}
