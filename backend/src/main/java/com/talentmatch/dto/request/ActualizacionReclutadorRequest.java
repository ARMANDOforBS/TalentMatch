package com.talentmatch.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * DTO para solicitudes de actualización de reclutadores.
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ActualizacionReclutadorRequest {

    private String nombre;

    private String apellido;

    private String telefono;

    private String departamento;

    private String cargo;

    private String extensionTelefonica;

    private String descripcion;
}
