package com.talentmatch.service;

import java.util.List;

import com.talentmatch.dto.request.CreacionEvaluacionRequest;
import com.talentmatch.dto.request.CreacionPreguntaRequest;
import com.talentmatch.dto.request.CreacionPruebaTecnicaRequest;
import com.talentmatch.dto.request.CreacionRespuestaRequest;
import com.talentmatch.dto.response.EvaluacionResponse;
import com.talentmatch.dto.response.PreguntaResponse;
import com.talentmatch.dto.response.PruebaTecnicaDetalleResponse;
import com.talentmatch.dto.response.PruebaTecnicaResumenResponse;
import com.talentmatch.dto.response.RespuestaResponse;
import com.talentmatch.model.entity.PruebaTecnica;

/**
 * Interfaz para el servicio de pruebas técnicas.
 */
public interface PruebaTecnicaService {

    /**
     * Crea una nueva prueba técnica.
     * 
     * @param reclutadorId ID del reclutador que crea la prueba
     * @param request DTO CreacionPruebaTecnicaRequest con la información de la prueba
     * @return DTO PruebaTecnicaDetalleResponse con la información de la prueba creada
     */
    PruebaTecnicaDetalleResponse crear(Long reclutadorId, CreacionPruebaTecnicaRequest request);

    /**
     * Busca una prueba técnica por su ID.
     * 
     * @param id ID de la prueba técnica a buscar
     * @return DTO PruebaTecnicaDetalleResponse con la información detallada de la prueba
     */
    PruebaTecnicaDetalleResponse buscarPorId(Long id);

    /**
     * Asigna una prueba técnica a una postulación.
     * 
     * @param pruebaTecnicaId ID de la prueba técnica
     * @param postulacionId ID de la postulación
     * @param reclutadorId ID del reclutador que asigna la prueba
     * @return DTO PruebaTecnicaDetalleResponse con la información actualizada de la prueba
     */
    PruebaTecnicaDetalleResponse asignarAPostulacion(Long pruebaTecnicaId, Long postulacionId, Long reclutadorId);

    /**
     * Agrega una pregunta a una prueba técnica.
     * 
     * @param pruebaTecnicaId ID de la prueba técnica
     * @param reclutadorId ID del reclutador que agrega la pregunta
     * @param request DTO CreacionPreguntaRequest con la información de la pregunta
     * @return DTO PreguntaResponse con la información de la pregunta creada
     */
    PreguntaResponse agregarPregunta(Long pruebaTecnicaId, Long reclutadorId, CreacionPreguntaRequest request);

    /**
     * Agrega una respuesta a una pregunta.
     * 
     * @param preguntaId ID de la pregunta
     * @param candidatoId ID del candidato que agrega la respuesta
     * @param request DTO CreacionRespuestaRequest con la información de la respuesta
     * @return DTO RespuestaResponse con la información de la respuesta creada
     */
    RespuestaResponse agregarRespuesta(Long preguntaId, Long candidatoId, CreacionRespuestaRequest request);

    /**
     * Evalúa una prueba técnica.
     * 
     * @param pruebaTecnicaId ID de la prueba técnica
     * @param reclutadorId ID del reclutador que evalúa la prueba
     * @param request DTO CreacionEvaluacionRequest con la información de la evaluación
     * @return DTO EvaluacionResponse con la información de la evaluación creada
     */
    EvaluacionResponse evaluarPrueba(Long pruebaTecnicaId, Long reclutadorId, CreacionEvaluacionRequest request);

    /**
     * Genera una prueba técnica con IA.
     * 
     * @param vacanteId ID de la vacante
     * @param reclutadorId ID del reclutador que genera la prueba
     * @param titulo Título de la prueba
     * @param descripcion Descripción de la prueba
     * @param numPreguntas Número de preguntas a generar
     * @return DTO PruebaTecnicaDetalleResponse con la información de la prueba generada
     */
    PruebaTecnicaDetalleResponse generarPruebaConIA(Long vacanteId, Long reclutadorId, String titulo, String descripcion, int numPreguntas);

    /**
     * Busca pruebas técnicas por reclutador.
     * 
     * @param reclutadorId ID del reclutador
     * @return Lista de DTOs PruebaTecnicaResumenResponse con la información resumida de las pruebas
     */
    List<PruebaTecnicaResumenResponse> buscarPorReclutador(Long reclutadorId);

    /**
     * Busca pruebas técnicas por candidato.
     * 
     * @param candidatoId ID del candidato
     * @return Lista de DTOs PruebaTecnicaResumenResponse con la información resumida de las pruebas
     */
    List<PruebaTecnicaResumenResponse> buscarPorCandidato(Long candidatoId);

    /**
     * Busca pruebas técnicas por vacante.
     * 
     * @param vacanteId ID de la vacante
     * @return Lista de DTOs PruebaTecnicaResumenResponse con la información resumida de las pruebas
     */
    List<PruebaTecnicaResumenResponse> buscarPorVacante(Long vacanteId);

    /**
     * Busca pruebas técnicas pendientes por candidato.
     * 
     * @param candidatoId ID del candidato
     * @return Lista de DTOs PruebaTecnicaResumenResponse con la información resumida de las pruebas pendientes
     */
    List<PruebaTecnicaResumenResponse> buscarPendientesPorCandidato(Long candidatoId);

    /**
     * Busca pruebas técnicas completadas por candidato.
     * 
     * @param candidatoId ID del candidato
     * @return Lista de DTOs PruebaTecnicaResumenResponse con la información resumida de las pruebas completadas
     */
    List<PruebaTecnicaResumenResponse> buscarCompletadasPorCandidato(Long candidatoId);

    /**
     * Busca una prueba técnica por su ID para uso interno.
     * 
     * @param id ID de la prueba técnica a buscar
     * @return Entidad PruebaTecnica encontrada
     */
    PruebaTecnica buscarPruebaTecnicaPorId(Long id);
}
