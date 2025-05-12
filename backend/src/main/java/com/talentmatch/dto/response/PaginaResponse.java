package com.talentmatch.dto.response;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * DTO genérico para respuestas paginadas.
 * 
 * @param <T> Tipo de datos de la página
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class PaginaResponse<T> {
    
    /**
     * Contenido de la página
     */
    private List<T> contenido;
    
    /**
     * Número de página actual (0-based)
     */
    private int numeroPagina;
    
    /**
     * Tamaño de la página
     */
    private int tamanioPagina;
    
    /**
     * Total de elementos en todas las páginas
     */
    private long totalElementos;
    
    /**
     * Total de páginas
     */
    private int totalPaginas;
    
    /**
     * Indica si es la primera página
     */
    private boolean esPrimera;
    
    /**
     * Indica si es la última página
     */
    private boolean esUltima;
} 