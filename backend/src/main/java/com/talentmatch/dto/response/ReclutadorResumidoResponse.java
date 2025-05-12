package com.talentmatch.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * DTO para respuestas con información resumida de reclutadores.
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ReclutadorResumidoResponse {

    private Long id;
    private String nombre;
    private String apellido;
    private String urlFoto;
    private String departamento;
    private String cargo;
}
