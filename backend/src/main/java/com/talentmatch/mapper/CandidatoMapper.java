package com.talentmatch.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;
import org.springframework.beans.factory.annotation.Autowired;

import com.talentmatch.dto.request.ActualizacionCandidatoRequest;
import com.talentmatch.dto.request.RegistroCandidatoRequest;
import com.talentmatch.dto.response.CandidatoResumidoResponse;
import com.talentmatch.dto.response.CandidatoResponse;
import com.talentmatch.model.entity.Candidato;
import com.talentmatch.model.enums.EstadoUsuario;
import com.talentmatch.model.enums.RolUsuario;

/**
 * Mapper para convertir entre la entidad Candidato y sus DTOs.
 */
@Mapper(componentModel = "spring", uses = {UsuarioMapper.class}, imports = {EstadoUsuario.class, RolUsuario.class}, unmappedTargetPolicy = org.mapstruct.ReportingPolicy.IGNORE)
public abstract class CandidatoMapper {

    @Autowired
    protected UsuarioMapper usuarioMapper;

    /**
     * Convierte un DTO RegistroCandidatoRequest a una entidad Candidato.
     * 
     * @param request DTO RegistroCandidatoRequest a convertir
     * @return Entidad Candidato con la información del DTO
     */
    @Mapping(target = "id", ignore = true)
    @Mapping(target = "urlCurriculum", ignore = true)
    @Mapping(target = "postulaciones", ignore = true)
    @Mapping(target = "vacantesFavoritas", ignore = true)
    @Mapping(target = "fechaCreacion", ignore = true)
    @Mapping(target = "fechaActualizacion", ignore = true)
    @Mapping(target = "ultimoAcceso", ignore = true)
    @Mapping(target = "urlFoto", ignore = true)
    @Mapping(target = "estado", constant = "ACTIVO")
    @Mapping(target = "rol", constant = "CANDIDATO")
    public abstract Candidato toCandidato(RegistroCandidatoRequest request);

    /**
     * Actualiza una entidad Candidato con la información de un DTO ActualizacionCandidatoRequest.
     * 
     * @param request DTO ActualizacionCandidatoRequest con la información actualizada
     * @param candidato Entidad Candidato a actualizar
     */
    @Mapping(target = "id", ignore = true)
    @Mapping(target = "email", ignore = true)
    @Mapping(target = "password", ignore = true)
    @Mapping(target = "rol", ignore = true)
    @Mapping(target = "estado", ignore = true)
    @Mapping(target = "urlCurriculum", ignore = true)
    @Mapping(target = "postulaciones", ignore = true)
    @Mapping(target = "vacantesFavoritas", ignore = true)
    @Mapping(target = "fechaCreacion", ignore = true)
    @Mapping(target = "fechaActualizacion", ignore = true)
    @Mapping(target = "ultimoAcceso", ignore = true)
    @Mapping(target = "urlFoto", ignore = true)
    public abstract void actualizarCandidato(ActualizacionCandidatoRequest request, @MappingTarget Candidato candidato);

    /**
     * Convierte una entidad Candidato a un DTO CandidatoResponse.
     * 
     * @param candidato Entidad Candidato a convertir
     * @return DTO CandidatoResponse con la información del candidato
     */
    @Mapping(target = "totalPostulaciones", expression = "java(candidato.getPostulaciones().size())")
    public abstract CandidatoResponse toCandidatoResponse(Candidato candidato);

    /**
     * Convierte una entidad Candidato a un DTO CandidatoResumidoResponse.
     * 
     * @param candidato Entidad Candidato a convertir
     * @return DTO CandidatoResumidoResponse con la información resumida del candidato
     */
    public abstract CandidatoResumidoResponse toCandidatoResumidoResponse(Candidato candidato);
}
