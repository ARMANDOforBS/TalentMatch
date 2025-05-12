package com.talentmatch.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;

import com.talentmatch.dto.request.ActualizacionVacanteRequest;
import com.talentmatch.dto.request.CreacionVacanteRequest;
import com.talentmatch.dto.response.VacanteDetalleResponse;
import com.talentmatch.dto.response.VacanteResumenResponse;
import com.talentmatch.model.entity.Reclutador;
import com.talentmatch.model.entity.Vacante;
import com.talentmatch.model.enums.EstadoVacante;

/**
 * Mapper para convertir entre la entidad Vacante y sus DTOs.
 */
@Mapper(componentModel = "spring", uses = {ReclutadorMapper.class}, imports = {EstadoVacante.class})
public interface VacanteMapper {

    /**
     * Convierte un DTO CreacionVacanteRequest a una entidad Vacante.
     * 
     * @param request DTO CreacionVacanteRequest a convertir
     * @param reclutador Entidad Reclutador asociada a la vacante
     * @return Entidad Vacante con la información del DTO
     */
    @Mapping(target = "id", ignore = true)
    @Mapping(target = "reclutador", source = "reclutador")
    @Mapping(target = "postulaciones", ignore = true)
    @Mapping(target = "candidatosFavoritos", ignore = true)
    @Mapping(target = "fechaCreacion", ignore = true)
    @Mapping(target = "fechaActualizacion", ignore = true)
    @Mapping(target = "estado", constant = "ACTIVA")
    @Mapping(target = "titulo", source = "request.titulo")
    @Mapping(target = "descripcion", source = "request.descripcion")
    @Mapping(target = "area", source = "request.area")
    @Mapping(target = "ubicacion", source = "request.ubicacion")
    @Mapping(target = "modalidad", source = "request.modalidad")
    @Mapping(target = "tipoContrato", source = "request.tipoContrato")
    @Mapping(target = "salarioMinimo", source = "request.salarioMinimo")
    @Mapping(target = "salarioMaximo", source = "request.salarioMaximo")
    @Mapping(target = "mostrarSalario", source = "request.mostrarSalario")
    @Mapping(target = "experienciaRequerida", source = "request.experienciaRequerida")
    @Mapping(target = "habilidadesRequeridas", source = "request.habilidadesRequeridas")
    @Mapping(target = "requisitosAdicionales", source = "request.requisitosAdicionales")
    @Mapping(target = "beneficios", source = "request.beneficios")
    @Mapping(target = "fechaPublicacion", source = "request.fechaPublicacion")
    @Mapping(target = "fechaCierre", source = "request.fechaCierre")
    Vacante toVacante(CreacionVacanteRequest request, Reclutador reclutador);

    /**
     * Actualiza una entidad Vacante con la información de un DTO ActualizacionVacanteRequest.
     * 
     * @param request DTO ActualizacionVacanteRequest con la información actualizada
     * @param vacante Entidad Vacante a actualizar
     */
    @Mapping(target = "id", ignore = true)
    @Mapping(target = "reclutador", ignore = true)
    @Mapping(target = "postulaciones", ignore = true)
    @Mapping(target = "candidatosFavoritos", ignore = true)
    @Mapping(target = "fechaCreacion", ignore = true)
    @Mapping(target = "fechaActualizacion", ignore = true)
    @Mapping(target = "estado", ignore = true)
    void actualizarVacante(ActualizacionVacanteRequest request, @MappingTarget Vacante vacante);

    /**
     * Convierte una entidad Vacante a un DTO VacanteDetalleResponse.
     * 
     * @param vacante Entidad Vacante a convertir
     * @return DTO VacanteDetalleResponse con la información detallada de la vacante
     */
    @Mapping(target = "reclutador", source = "reclutador")
    @Mapping(target = "totalPostulaciones", expression = "java(vacante.getPostulaciones().size())")
    VacanteDetalleResponse toVacanteDetalleResponse(Vacante vacante);

    /**
     * Convierte una entidad Vacante a un DTO VacanteResumenResponse.
     * 
     * @param vacante Entidad Vacante a convertir
     * @return DTO VacanteResumenResponse con la información resumida de la vacante
     */
    @Mapping(target = "reclutadorId", source = "reclutador.id")
    @Mapping(target = "nombreReclutador", expression = "java(vacante.getReclutador().getNombre() + \" \" + vacante.getReclutador().getApellido())")
    @Mapping(target = "totalPostulaciones", expression = "java(vacante.getPostulaciones().size())")
    VacanteResumenResponse toVacanteResumenResponse(Vacante vacante);
}
