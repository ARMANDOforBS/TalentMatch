package com.talentmatch.service;

import java.util.List;

import com.talentmatch.dto.request.ActualizacionVacanteRequest;
import com.talentmatch.dto.request.CreacionVacanteRequest;
import com.talentmatch.dto.response.VacanteDetalleResponse;
import com.talentmatch.dto.response.VacanteResumenResponse;
import com.talentmatch.model.entity.Vacante;
import com.talentmatch.model.enums.EstadoVacante;

/**
 * Interfaz para el servicio de vacantes.
 */
public interface VacanteService {

    /**
     * Crea una nueva vacante.
     * 
     * @param reclutadorId ID del reclutador que crea la vacante
     * @param request DTO CreacionVacanteRequest con la información de la vacante
     * @return DTO VacanteDetalleResponse con la información de la vacante creada
     */
    VacanteDetalleResponse crear(Long reclutadorId, CreacionVacanteRequest request);

    /**
     * Busca una vacante por su ID.
     * 
     * @param id ID de la vacante a buscar
     * @return DTO VacanteDetalleResponse con la información detallada de la vacante
     */
    VacanteDetalleResponse buscarPorId(Long id);

    /**
     * Actualiza la información de una vacante.
     * 
     * @param id ID de la vacante a actualizar
     * @param reclutadorId ID del reclutador que actualiza la vacante
     * @param request DTO ActualizacionVacanteRequest con la información actualizada
     * @return DTO VacanteDetalleResponse con la información actualizada de la vacante
     */
    VacanteDetalleResponse actualizar(Long id, Long reclutadorId, ActualizacionVacanteRequest request);

    /**
     * Cambia el estado de una vacante.
     * 
     * @param id ID de la vacante
     * @param reclutadorId ID del reclutador que cambia el estado
     * @param estado Nuevo estado de la vacante
     * @return DTO VacanteDetalleResponse con la información actualizada de la vacante
     */
    VacanteDetalleResponse cambiarEstado(Long id, Long reclutadorId, EstadoVacante estado);

    /**
     * Busca vacantes por título.
     * 
     * @param titulo Título a buscar
     * @return Lista de DTOs VacanteResumenResponse con la información resumida de las vacantes
     */
    List<VacanteResumenResponse> buscarPorTitulo(String titulo);

    /**
     * Busca vacantes por ubicación.
     * 
     * @param ubicacion Ubicación a buscar
     * @return Lista de DTOs VacanteResumenResponse con la información resumida de las vacantes
     */
    List<VacanteResumenResponse> buscarPorUbicacion(String ubicacion);

    /**
     * Busca vacantes por habilidad requerida.
     * 
     * @param habilidad Habilidad a buscar
     * @return Lista de DTOs VacanteResumenResponse con la información resumida de las vacantes
     */
    List<VacanteResumenResponse> buscarPorHabilidad(String habilidad);

    /**
     * Busca vacantes por estado.
     * 
     * @param estado Estado a buscar
     * @return Lista de DTOs VacanteResumenResponse con la información resumida de las vacantes
     */
    List<VacanteResumenResponse> buscarPorEstado(EstadoVacante estado);

    /**
     * Busca vacantes por reclutador.
     * 
     * @param reclutadorId ID del reclutador
     * @return Lista de DTOs VacanteResumenResponse con la información resumida de las vacantes
     */
    List<VacanteResumenResponse> buscarPorReclutador(Long reclutadorId);

    /**
     * Busca vacantes activas.
     * 
     * @return Lista de DTOs VacanteResumenResponse con la información resumida de las vacantes activas
     */
    List<VacanteResumenResponse> buscarVacantesActivas();

    /**
     * Busca vacantes destacadas.
     * 
     * @return Lista de DTOs VacanteResumenResponse con la información resumida de las vacantes destacadas
     */
    List<VacanteResumenResponse> buscarVacantesDestacadas();

    /**
     * Busca vacantes recomendadas para un candidato.
     * 
     * @param candidatoId ID del candidato
     * @return Lista de DTOs VacanteResumenResponse con la información resumida de las vacantes recomendadas
     */
    List<VacanteResumenResponse> buscarVacantesRecomendadas(Long candidatoId);

    /**
     * Busca una vacante por su ID para uso interno.
     * 
     * @param id ID de la vacante a buscar
     * @return Entidad Vacante encontrada
     */
    Vacante buscarVacantePorId(Long id);
}
