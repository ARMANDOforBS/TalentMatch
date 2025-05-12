package com.talentmatch.dto.request;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * DTO para solicitar un análisis de perfil profesional.
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AnalisisPerfilRequest {
    
    /**
     * Título profesional del perfil a analizar.
     */
    @NotBlank(message = "El título profesional es requerido")
    private String tituloProfesional;
    
    /**
     * Años de experiencia del perfil.
     */
    @Min(value = 0, message = "Los años de experiencia deben ser un número positivo")
    private Integer experienciaAnios;
    
    /**
     * Habilidades del perfil, separadas por comas.
     */
    @NotBlank(message = "Las habilidades son requeridas")
    private String habilidades;
    
    /**
     * Descripción detallada del perfil profesional.
     */
    @NotBlank(message = "La descripción del perfil es requerida")
    private String descripcionPerfil;
    
    /**
     * Objetivos profesionales a corto y largo plazo.
     */
    private String objetivosProfesionales;
} 