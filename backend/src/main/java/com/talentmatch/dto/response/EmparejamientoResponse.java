package com.talentmatch.dto.response;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * DTO para la respuesta de emparejamiento entre candidato y vacante.
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class EmparejamientoResponse {
    
    /**
     * ID del candidato evaluado.
     */
    private Long candidatoId;
    
    /**
     * Nombre completo del candidato.
     */
    private String candidatoNombre;
    
    /**
     * ID de la vacante evaluada.
     */
    private Long vacanteId;
    
    /**
     * Título de la vacante.
     */
    private String vacanteTitulo;
    
    /**
     * Porcentaje de emparejamiento entre candidato y vacante (0-100).
     */
    private Double porcentajeEmparejamiento;
    
    /**
     * Puntos fuertes del candidato para esta vacante.
     */
    private List<String> puntosFuertes;
    
    /**
     * Puntos débiles del candidato para esta vacante.
     */
    private List<String> puntosDebiles;
    
    /**
     * Recomendaciones para mejorar el nivel de emparejamiento.
     */
    private List<String> recomendaciones;
} 