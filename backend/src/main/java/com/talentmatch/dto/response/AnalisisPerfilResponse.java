package com.talentmatch.dto.response;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * DTO para la respuesta de análisis de perfil profesional.
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AnalisisPerfilResponse {
    
    /**
     * Puntos fuertes identificados en el perfil.
     */
    private List<String> puntosFuertes;
    
    /**
     * Áreas que podrían mejorarse en el perfil.
     */
    private List<String> areasAMejorar;
    
    /**
     * Recomendaciones de habilidades a desarrollar.
     */
    private List<String> recomendacionesHabilidades;
    
    /**
     * Recomendaciones de certificaciones o cursos a obtener.
     */
    private List<String> recomendacionesCertificaciones;
    
    /**
     * Consejos para mejorar el perfil profesional.
     */
    private List<String> consejosMejoraPerfil;
    
    /**
     * Análisis de tendencias del mercado laboral para este perfil.
     */
    private String tendenciasMercado;
} 