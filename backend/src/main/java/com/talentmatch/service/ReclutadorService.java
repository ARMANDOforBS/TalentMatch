package com.talentmatch.service;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.talentmatch.dto.request.ActualizacionReclutadorRequest;
import com.talentmatch.dto.request.RegistroReclutadorRequest;
import com.talentmatch.dto.response.ReclutadorResponse;
import com.talentmatch.model.entity.Reclutador;

/**
 * Interfaz para el servicio de reclutadores.
 */
public interface ReclutadorService {

    /**
     * Registra un nuevo reclutador.
     * 
     * @param request DTO RegistroReclutadorRequest con la información del reclutador
     * @return DTO ReclutadorResponse con la información del reclutador registrado
     */
    ReclutadorResponse registrar(RegistroReclutadorRequest request);

    /**
     * Busca un reclutador por su ID.
     * 
     * @param id ID del reclutador a buscar
     * @return DTO ReclutadorResponse con la información del reclutador
     */
    ReclutadorResponse buscarPorId(Long id);

    /**
     * Busca un reclutador por su email.
     * 
     * @param email Email del reclutador a buscar
     * @return DTO ReclutadorResponse con la información del reclutador
     */
    ReclutadorResponse buscarPorEmail(String email);

    /**
     * Actualiza la información de un reclutador.
     * 
     * @param id ID del reclutador a actualizar
     * @param request DTO ActualizacionReclutadorRequest con la información actualizada
     * @return DTO ReclutadorResponse con la información actualizada del reclutador
     */
    ReclutadorResponse actualizar(Long id, ActualizacionReclutadorRequest request);

    /**
     * Lista todos los reclutadores activos en el sistema.
     * 
     * @return Lista de DTOs ReclutadorResponse con la información de los reclutadores
     */
    List<ReclutadorResponse> listarTodos();

    /**
     * Actualiza la foto de perfil de un reclutador.
     * 
     * @param id ID del reclutador
     * @param fotoPerfil Archivo de la foto de perfil
     * @return URL de la foto de perfil subida
     */
    String actualizarFotoPerfil(Long id, MultipartFile fotoPerfil);

    /**
     * Busca reclutadores por departamento.
     * 
     * @param departamento Departamento a buscar
     * @return Lista de DTOs ReclutadorResponse con la información de los reclutadores
     */
    List<ReclutadorResponse> buscarPorDepartamento(String departamento);

    /**
     * Busca un reclutador por su ID para uso interno.
     * 
     * @param id ID del reclutador a buscar
     * @return Entidad Reclutador encontrada
     */
    Reclutador buscarReclutadorPorId(Long id);
}
