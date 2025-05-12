package com.talentmatch.service;

import java.util.List;

import com.talentmatch.dto.request.AnalisisPerfilRequest;
import com.talentmatch.dto.response.AnalisisPerfilResponse;
import com.talentmatch.dto.response.CandidatoResponse;
import com.talentmatch.dto.response.EmparejamientoResponse;
import com.talentmatch.dto.response.VacanteResumenResponse;

/**
 * Interfaz para el servicio de inteligencia artificial.
 * Proporciona métodos para el análisis y emparejamiento de candidatos y vacantes.
 */
public interface IAService {

    /**
     * Recomienda vacantes para un candidato basado en su perfil.
     * 
     * @param candidatoId ID del candidato
     * @param limite Número máximo de vacantes a recomendar
     * @return Lista de DTOs VacanteResumenResponse con las vacantes recomendadas
     */
    List<VacanteResumenResponse> recomendarVacantes(Long candidatoId, int limite);

    /**
     * Recomienda candidatos para una vacante basado en los requisitos.
     * 
     * @param vacanteId ID de la vacante
     * @param limite Número máximo de candidatos a recomendar
     * @return Lista de DTOs CandidatoResponse con los candidatos recomendados
     */
    List<CandidatoResponse> recomendarCandidatos(Long vacanteId, int limite);

    /**
     * Calcula el porcentaje de emparejamiento entre un candidato y una vacante.
     * 
     * @param candidatoId ID del candidato
     * @param vacanteId ID de la vacante
     * @return DTO EmparejamientoResponse con el resultado del emparejamiento
     */
    EmparejamientoResponse calcularEmparejamiento(Long candidatoId, Long vacanteId);

    /**
     * Analiza el perfil de un candidato y genera recomendaciones de mejora.
     * 
     * @param request DTO AnalisisPerfilRequest con la información del perfil
     * @return DTO AnalisisPerfilResponse con el análisis y recomendaciones
     */
    AnalisisPerfilResponse analizarPerfil(AnalisisPerfilRequest request);

    /**
     * Genera una descripción de trabajo para una vacante basada en sus requisitos.
     * 
     * @param vacanteId ID de la vacante
     * @return Descripción generada para la vacante
     */
    String generarDescripcionVacante(Long vacanteId);
} 