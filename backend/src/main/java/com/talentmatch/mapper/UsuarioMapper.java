package com.talentmatch.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;

import com.talentmatch.dto.response.UsuarioResponse;
import com.talentmatch.model.entity.Usuario;

/**
 * Mapper para convertir entre la entidad Usuario y sus DTOs.
 */
@Mapper(componentModel = "spring")
public interface UsuarioMapper {

    /**
     * Convierte una entidad Usuario a un DTO UsuarioResponse.
     * 
     * @param usuario Entidad Usuario a convertir
     * @return DTO UsuarioResponse con la información del usuario
     */
    UsuarioResponse toUsuarioResponse(Usuario usuario);
    
    /**
     * Actualiza una entidad Usuario con la información de otra entidad Usuario.
     * 
     * @param usuario Entidad Usuario con la información actualizada
     * @param usuarioActual Entidad Usuario a actualizar
     */
    @Mapping(target = "id", ignore = true)
    @Mapping(target = "email", ignore = true)
    @Mapping(target = "password", ignore = true)
    @Mapping(target = "rol", ignore = true)
    @Mapping(target = "fechaCreacion", ignore = true)
    @Mapping(target = "authorities", ignore = true)
    void actualizarUsuario(Usuario usuario, @MappingTarget Usuario usuarioActual);
}
