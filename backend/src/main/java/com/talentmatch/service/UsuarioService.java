package com.talentmatch.service;

import org.springframework.web.multipart.MultipartFile;

import com.talentmatch.dto.request.CambioPasswordRequest;
import com.talentmatch.dto.response.UsuarioResponse;
import com.talentmatch.model.entity.Usuario;
import com.talentmatch.model.enums.EstadoUsuario;

/**
 * Interfaz para el servicio de usuarios.
 */
public interface UsuarioService {

    /**
     * Busca un usuario por su ID.
     * 
     * @param id ID del usuario a buscar
     * @return DTO UsuarioResponse con la información del usuario
     */
    UsuarioResponse buscarPorId(Long id);

    /**
     * Busca un usuario por su email.
     * 
     * @param email Email del usuario a buscar
     * @return DTO UsuarioResponse con la información del usuario
     */
    UsuarioResponse buscarPorEmail(String email);

    /**
     * Cambia la contraseña de un usuario.
     * 
     * @param id ID del usuario
     * @param request DTO CambioPasswordRequest con la información de cambio de contraseña
     */
    void cambiarPassword(Long id, CambioPasswordRequest request);

    /**
     * Actualiza la foto de perfil de un usuario.
     * 
     * @param id ID del usuario
     * @param foto Archivo de imagen de la foto de perfil
     * @return URL de la foto de perfil actualizada
     */
    String actualizarFotoPerfil(Long id, MultipartFile foto);

    /**
     * Cambia el estado de un usuario.
     * 
     * @param id ID del usuario
     * @param estado Nuevo estado del usuario
     * @return DTO UsuarioResponse con la información actualizada del usuario
     */
    UsuarioResponse cambiarEstado(Long id, EstadoUsuario estado);

    /**
     * Busca un usuario por su email para autenticación.
     * 
     * @param email Email del usuario a buscar
     * @return Entidad Usuario encontrada
     */
    Usuario buscarUsuarioPorEmail(String email);

    /**
     * Registra el acceso de un usuario.
     * 
     * @param id ID del usuario
     */
    void registrarAcceso(Long id);
}
