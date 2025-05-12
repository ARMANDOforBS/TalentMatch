package com.talentmatch.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.multipart.MultipartFile;

import com.talentmatch.dto.request.ActualizacionCandidatoRequest;
import com.talentmatch.dto.request.RegistroCandidatoRequest;
import com.talentmatch.dto.response.CandidatoResponse;
import com.talentmatch.model.entity.Candidato;

/**
 * Interfaz para el servicio de candidatos.
 */
public interface CandidatoService {

    /**
     * Registra un nuevo candidato.
     * 
     * @param request DTO RegistroCandidatoRequest con la información del candidato
     * @return DTO CandidatoResponse con la información del candidato registrado
     */
    CandidatoResponse registrar(RegistroCandidatoRequest request);

    /**
     * Busca un candidato por su ID.
     * 
     * @param id ID del candidato a buscar
     * @return DTO CandidatoResponse con la información del candidato
     */
    CandidatoResponse buscarPorId(Long id);

    /**
     * Busca un candidato por su email.
     * 
     * @param email Email del candidato a buscar
     * @return DTO CandidatoResponse con la información del candidato
     */
    CandidatoResponse buscarPorEmail(String email);

    /**
     * Actualiza la información de un candidato.
     * 
     * @param id ID del candidato a actualizar
     * @param request DTO ActualizacionCandidatoRequest con la información actualizada
     * @return DTO CandidatoResponse con la información actualizada del candidato
     */
    CandidatoResponse actualizar(Long id, ActualizacionCandidatoRequest request);

    /**
     * Lista todos los candidatos activos en el sistema.
     * 
     * @return Lista de DTOs CandidatoResponse con la información de los candidatos
     */
    List<CandidatoResponse> listarTodos();

    /**
     * Actualiza el currículum de un candidato.
     * 
     * @param id ID del candidato
     * @param curriculum Archivo del currículum
     * @return URL del currículum subido
     */
    String actualizarCurriculum(Long id, MultipartFile curriculum);

    /**
     * Sube el currículum de un candidato.
     * 
     * @param id ID del candidato
     * @param curriculum Archivo del currículum
     * @return URL del currículum subido
     */
    String subirCurriculum(Long id, MultipartFile curriculum);

    /**
     * Agrega una vacante a favoritos.
     * 
     * @param candidatoId ID del candidato
     * @param vacanteId ID de la vacante a agregar a favoritos
     * @return true si se agregó correctamente, false si ya estaba en favoritos
     */
    boolean agregarVacanteFavorita(Long candidatoId, Long vacanteId);

    /**
     * Elimina una vacante de favoritos.
     * 
     * @param candidatoId ID del candidato
     * @param vacanteId ID de la vacante a eliminar de favoritos
     * @return true si se eliminó correctamente, false si no estaba en favoritos
     */
    boolean eliminarVacanteFavorita(Long candidatoId, Long vacanteId);

    /**
     * Verifica si una vacante está en favoritos.
     * 
     * @param candidatoId ID del candidato
     * @param vacanteId ID de la vacante a verificar
     * @return true si la vacante está en favoritos, false en caso contrario
     */
    boolean esVacanteFavorita(Long candidatoId, Long vacanteId);

    /**
     * Busca candidatos por título profesional.
     * 
     * @param tituloProfesional Título profesional a buscar
     * @return Lista de DTOs CandidatoResponse con la información de los candidatos
     */
    List<CandidatoResponse> buscarPorTituloProfesional(String tituloProfesional);

    /**
     * Busca candidatos por título profesional con paginación.
     * 
     * @param tituloProfesional Título profesional a buscar
     * @param pageable Configuración de paginación
     * @return Página de DTOs CandidatoResponse con la información de los candidatos
     */
    Page<CandidatoResponse> buscarPorTituloProfesional(String tituloProfesional, Pageable pageable);

    /**
     * Busca candidatos por ubicación.
     * 
     * @param ubicacion Ubicación a buscar
     * @return Lista de DTOs CandidatoResponse con la información de los candidatos
     */
    List<CandidatoResponse> buscarPorUbicacion(String ubicacion);

    /**
     * Busca candidatos por ubicación con paginación.
     * 
     * @param ubicacion Ubicación a buscar
     * @param pageable Configuración de paginación
     * @return Página de DTOs CandidatoResponse con la información de los candidatos
     */
    Page<CandidatoResponse> buscarPorUbicacion(String ubicacion, Pageable pageable);

    /**
     * Busca candidatos por habilidades.
     * 
     * @param habilidad Habilidad a buscar
     * @return Lista de DTOs CandidatoResponse con la información de los candidatos
     */
    List<CandidatoResponse> buscarPorHabilidad(String habilidad);

    /**
     * Busca candidatos por habilidades con paginación.
     * 
     * @param habilidad Habilidad a buscar
     * @param pageable Configuración de paginación
     * @return Página de DTOs CandidatoResponse con la información de los candidatos
     */
    Page<CandidatoResponse> buscarPorHabilidad(String habilidad, Pageable pageable);

    /**
     * Busca un candidato por su ID para uso interno.
     * 
     * @param id ID del candidato a buscar
     * @return Entidad Candidato encontrada
     */
    Candidato buscarCandidatoPorId(Long id);
}
