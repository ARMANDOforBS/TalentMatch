package com.talentmatch.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * DTO para respuestas con información resumida de candidatos.
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CandidatoResumidoResponse {

    private Long id;
    private String nombre;
    private String apellido;
    private String urlFoto;
    private String tituloProfesional;
    private String ubicacion;
    private Integer experienciaAnios;
    private String habilidadesPrincipales;
}
