package com.talentmatch.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;
import org.springframework.beans.factory.annotation.Autowired;

import com.talentmatch.dto.request.ActualizacionReclutadorRequest;
import com.talentmatch.dto.request.RegistroReclutadorRequest;
import com.talentmatch.dto.response.ReclutadorResumidoResponse;
import com.talentmatch.dto.response.ReclutadorResponse;
import com.talentmatch.model.entity.Reclutador;
import com.talentmatch.model.enums.EstadoUsuario;
import com.talentmatch.model.enums.RolUsuario;

/**
 * Mapper para convertir entre la entidad Reclutador y sus DTOs.
 */
@Mapper(componentModel = "spring", uses = {UsuarioMapper.class}, imports = {EstadoUsuario.class, RolUsuario.class}, unmappedTargetPolicy = org.mapstruct.ReportingPolicy.IGNORE)
public abstract class ReclutadorMapper {

    @Autowired
    protected UsuarioMapper usuarioMapper;
    
    /**
     * Convierte un DTO RegistroReclutadorRequest a una entidad Reclutador.
     * 
     * @param request DTO RegistroReclutadorRequest a convertir
     * @return Entidad Reclutador con la información del DTO
     */
    @Mapping(target = "id", ignore = true)
    @Mapping(target = "vacantes", ignore = true)
    @Mapping(target = "fechaCreacion", ignore = true)
    @Mapping(target = "fechaActualizacion", ignore = true)
    @Mapping(target = "ultimoAcceso", ignore = true)
    @Mapping(target = "urlFoto", ignore = true)
    @Mapping(target = "estado", constant = "ACTIVO")
    @Mapping(target = "rol", constant = "RECLUTADOR")
    public abstract Reclutador toReclutador(RegistroReclutadorRequest request);

    /**
     * Actualiza una entidad Reclutador con la información de un DTO ActualizacionReclutadorRequest.
     * 
     * @param request DTO ActualizacionReclutadorRequest con la información actualizada
     * @param reclutador Entidad Reclutador a actualizar
     */
    @Mapping(target = "id", ignore = true)
    @Mapping(target = "email", ignore = true)
    @Mapping(target = "password", ignore = true)
    @Mapping(target = "rol", ignore = true)
    @Mapping(target = "estado", ignore = true)
    @Mapping(target = "vacantes", ignore = true)
    @Mapping(target = "fechaCreacion", ignore = true)
    @Mapping(target = "fechaActualizacion", ignore = true)
    @Mapping(target = "ultimoAcceso", ignore = true)
    public abstract void actualizarReclutador(ActualizacionReclutadorRequest request, @MappingTarget Reclutador reclutador);

    /**
     * Convierte una entidad Reclutador a un DTO ReclutadorResponse.
     * 
     * @param reclutador Entidad Reclutador a convertir
     * @return DTO ReclutadorResponse con la información del reclutador
     */
    @Mapping(target = "totalVacantes", expression = "java(reclutador.getVacantes().size())")
    public abstract ReclutadorResponse toReclutadorResponse(Reclutador reclutador);

    /**
     * Convierte una entidad Reclutador a un DTO ReclutadorResumidoResponse.
     * 
     * @param reclutador Entidad Reclutador a convertir
     * @return DTO ReclutadorResumidoResponse con la información resumida del reclutador
     */
    public abstract ReclutadorResumidoResponse toReclutadorResumidoResponse(Reclutador reclutador);
}
