package com.talentmatch.service;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.talentmatch.dto.request.CambioEstadoPostulacionRequest;
import com.talentmatch.dto.request.CreacionPostulacionRequest;
import com.talentmatch.dto.response.PostulacionDetalleResponse;
import com.talentmatch.dto.response.PostulacionResumenResponse;
import com.talentmatch.model.entity.Postulacion;
import com.talentmatch.model.enums.EstadoPostulacion;

/**
 * Interfaz para el servicio de postulaciones.
 */
public interface PostulacionService {

    /**
     * Crea una nueva postulación.
     * 
     * @param candidatoId ID del candidato que realiza la postulación
     * @param request DTO CreacionPostulacionRequest con la información de la postulación
     * @return DTO PostulacionDetalleResponse con la información de la postulación creada
     */
    PostulacionDetalleResponse crear(Long candidatoId, CreacionPostulacionRequest request);

    /**
     * Busca una postulación por su ID.
     * 
     * @param id ID de la postulación a buscar
     * @return DTO PostulacionDetalleResponse con la información detallada de la postulación
     */
    PostulacionDetalleResponse buscarPorId(Long id);

    /**
     * Cambia el estado de una postulación.
     * 
     * @param id ID de la postulación
     * @param reclutadorId ID del reclutador que cambia el estado
     * @param request DTO CambioEstadoPostulacionRequest con la información del cambio
     * @return DTO PostulacionDetalleResponse con la información actualizada de la postulación
     */
    PostulacionDetalleResponse cambiarEstado(Long id, Long reclutadorId, CambioEstadoPostulacionRequest request);

    /**
     * Sube un documento adicional a una postulación.
     * 
     * @param id ID de la postulación
     * @param candidatoId ID del candidato que sube el documento
     * @param documento Archivo del documento
     * @param nombreDocumento Nombre descriptivo del documento
     * @return URL del documento subido
     */
    String subirDocumento(Long id, Long candidatoId, MultipartFile documento, String nombreDocumento);

    /**
     * Busca postulaciones por candidato.
     * 
     * @param candidatoId ID del candidato
     * @return Lista de DTOs PostulacionResumenResponse con la información resumida de las postulaciones
     */
    List<PostulacionResumenResponse> buscarPorCandidato(Long candidatoId);

    /**
     * Busca postulaciones por vacante.
     * 
     * @param vacanteId ID de la vacante
     * @return Lista de DTOs PostulacionResumenResponse con la información resumida de las postulaciones
     */
    List<PostulacionResumenResponse> buscarPorVacante(Long vacanteId);

    /**
     * Busca postulaciones por estado.
     * 
     * @param estado Estado a buscar
     * @return Lista de DTOs PostulacionResumenResponse con la información resumida de las postulaciones
     */
    List<PostulacionResumenResponse> buscarPorEstado(EstadoPostulacion estado);

    /**
     * Busca postulaciones por vacante y estado.
     * 
     * @param vacanteId ID de la vacante
     * @param estado Estado a buscar
     * @return Lista de DTOs PostulacionResumenResponse con la información resumida de las postulaciones
     */
    List<PostulacionResumenResponse> buscarPorVacanteYEstado(Long vacanteId, EstadoPostulacion estado);

    /**
     * Busca postulaciones por candidato y estado.
     * 
     * @param candidatoId ID del candidato
     * @param estado Estado a buscar
     * @return Lista de DTOs PostulacionResumenResponse con la información resumida de las postulaciones
     */
    List<PostulacionResumenResponse> buscarPorCandidatoYEstado(Long candidatoId, EstadoPostulacion estado);

    /**
     * Verifica si un candidato ya ha postulado a una vacante.
     * 
     * @param candidatoId ID del candidato
     * @param vacanteId ID de la vacante
     * @return true si el candidato ya ha postulado, false en caso contrario
     */
    boolean existePostulacion(Long candidatoId, Long vacanteId);

    /**
     * Busca una postulación por su ID para uso interno.
     * 
     * @param id ID de la postulación a buscar
     * @return Entidad Postulacion encontrada
     */
    Postulacion buscarPostulacionPorId(Long id);
}
