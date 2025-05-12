package com.talentmatch.service;

import java.util.List;
import java.util.Map;

import org.springframework.web.multipart.MultipartFile;

/**
 * Interfaz para el servicio de integración con IA (Gemini API).
 */
public interface IntegracionIAService {

    /**
     * Analiza un currículum y extrae información relevante.
     * 
     * @param curriculum Archivo del currículum
     * @return Mapa con la información extraída del currículum
     */
    Map<String, Object> analizarCurriculum(MultipartFile curriculum);

    /**
     * Evalúa la compatibilidad entre un candidato y una vacante.
     * 
     * @param candidatoId ID del candidato
     * @param vacanteId ID de la vacante
     * @return Porcentaje de compatibilidad y recomendaciones
     */
    Map<String, Object> evaluarCompatibilidad(Long candidatoId, Long vacanteId);

    /**
     * Genera preguntas para una prueba técnica basada en la vacante.
     * 
     * @param tituloVacante Título de la vacante
     * @param descripcionVacante Descripción de la vacante
     * @param habilidadesRequeridas Habilidades requeridas para la vacante
     * @param numPreguntas Número de preguntas a generar
     * @return Lista de preguntas generadas
     */
    List<String> generarPreguntasPruebaTecnica(String tituloVacante, String descripcionVacante, 
            String habilidadesRequeridas, int numPreguntas);

    /**
     * Evalúa las respuestas de una prueba técnica.
     * 
     * @param pruebaTecnicaId ID de la prueba técnica
     * @return Mapa con la evaluación de cada respuesta y una puntuación general
     */
    Map<String, Object> evaluarRespuestasPruebaTecnica(Long pruebaTecnicaId);

    /**
     * Genera retroalimentación personalizada para un candidato.
     * 
     * @param postulacionId ID de la postulación
     * @return Retroalimentación generada
     */
    String generarRetroalimentacion(Long postulacionId);

    /**
     * Genera un ranking de candidatos para una vacante.
     * 
     * @param vacanteId ID de la vacante
     * @return Lista ordenada de candidatos con sus puntuaciones
     */
    List<Map<String, Object>> generarRankingCandidatos(Long vacanteId);

    /**
     * Sugiere mejoras para el perfil de un candidato.
     * 
     * @param candidatoId ID del candidato
     * @return Lista de sugerencias para mejorar el perfil
     */
    List<String> sugerirMejorasPerfil(Long candidatoId);

    /**
     * Sugiere vacantes para un candidato basado en su perfil.
     * 
     * @param candidatoId ID del candidato
     * @return Lista de IDs de vacantes recomendadas con puntuación de compatibilidad
     */
    List<Map<String, Object>> sugerirVacantes(Long candidatoId);
}
