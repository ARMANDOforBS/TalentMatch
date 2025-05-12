package com.talentmatch.dto.response;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.talentmatch.model.enums.EstadoUsuario;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * DTO para respuestas con información de candidatos.
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(Include.NON_NULL)
public class CandidatoResponse {

    private Long id;
    private String email;
    private String nombre;
    private String apellido;
    private String urlFoto;
    private String telefono;
    private EstadoUsuario estado;
    private LocalDateTime fechaCreacion;
    private LocalDateTime fechaActualizacion;
    private LocalDateTime ultimoAcceso;
    
    private LocalDate fechaNacimiento;
    private String urlCurriculum;
    private String tituloProfesional;
    private String resumenPerfil;
    private String ubicacion;
    private String linkedinUrl;
    private String githubUrl;
    private String portfolioUrl;
    private String habilidadesPrincipales;
    private Integer experienciaAnios;
    private Boolean disponibilidadInmediata;
    private Integer totalPostulaciones;
    
    private List<Long> vacantesFavoritasIds;
    private Double porcentajeEmparejamiento;
}
