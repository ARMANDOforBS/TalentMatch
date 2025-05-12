package com.talentmatch.dto.request;

import java.time.LocalDate;

import jakarta.validation.constraints.Past;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * DTO para solicitudes de actualización de candidatos.
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ActualizacionCandidatoRequest {

    private String nombre;

    private String apellido;

    private String telefono;

    @Past(message = "La fecha de nacimiento debe ser en el pasado")
    private LocalDate fechaNacimiento;

    private String tituloProfesional;

    private String resumenPerfil;

    private String ubicacion;

    private String linkedinUrl;

    private String githubUrl;

    private String portfolioUrl;

    private String habilidadesPrincipales;

    private Integer experienciaAnios;

    private Boolean disponibilidadInmediata;
}
