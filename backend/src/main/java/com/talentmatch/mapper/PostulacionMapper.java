package com.talentmatch.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;
import org.springframework.beans.factory.annotation.Autowired;

import com.talentmatch.dto.request.CambioEstadoPostulacionRequest;
import com.talentmatch.dto.request.CreacionPostulacionRequest;
import com.talentmatch.dto.response.PostulacionResponse;
import com.talentmatch.model.entity.Candidato;
import com.talentmatch.model.entity.Postulacion;
import com.talentmatch.model.entity.Vacante;
import com.talentmatch.model.enums.EstadoPostulacion;

/**
 * Mapper para convertir entre la entidad Postulacion y sus DTOs.
 */
@Mapper(componentModel = "spring", uses = {CandidatoMapper.class, VacanteMapper.class})
public abstract class PostulacionMapper {

    @Autowired
    protected CandidatoMapper candidatoMapper;

    @Autowired
    protected VacanteMapper vacanteMapper;

    /**
     * Convierte un DTO CreacionPostulacionRequest a una entidad Postulacion.
     * 
     * @param request DTO CreacionPostulacionRequest a convertir
     * @param candidato Entidad Candidato que realiza la postulación
     * @param vacante Entidad Vacante a la que se postula
     * @return Entidad Postulacion con la información del DTO
     */
    @Mapping(target = "id", ignore = true)
    @Mapping(target = "candidato", source = "candidato")
    @Mapping(target = "vacante", source = "vacante")
    @Mapping(target = "estado", constant = "APLICADA")
    @Mapping(target = "puntuacionMatch", ignore = true)
    @Mapping(target = "comentariosReclutador", ignore = true)
    @Mapping(target = "fechaEntrevista", ignore = true)
    @Mapping(target = "fechaCreacion", ignore = true)
    @Mapping(target = "fechaActualizacion", ignore = true)
    public abstract Postulacion toPostulacion(CreacionPostulacionRequest request, Candidato candidato, Vacante vacante);

    /**
     * Actualiza el estado de una entidad Postulacion con la información de un DTO CambioEstadoPostulacionRequest.
     * 
     * @param request DTO CambioEstadoPostulacionRequest con la información actualizada
     * @param postulacion Entidad Postulacion a actualizar
     */
    @Mapping(target = "id", ignore = true)
    @Mapping(target = "candidato", ignore = true)
    @Mapping(target = "vacante", ignore = true)
    @Mapping(target = "cartaPresentacion", ignore = true)
    @Mapping(target = "puntuacionMatch", ignore = true)
    @Mapping(target = "fechaCreacion", ignore = true)
    @Mapping(target = "fechaActualizacion", ignore = true)
    @Mapping(target = "estado", source = "request.nuevoEstado")
    public abstract void actualizarEstadoPostulacion(CambioEstadoPostulacionRequest request, @MappingTarget Postulacion postulacion);

    /**
     * Convierte una entidad Postulacion a un DTO PostulacionResponse.
     * 
     * @param postulacion Entidad Postulacion a convertir
     * @param tienePruebaTecnica Indica si la postulación tiene una prueba técnica asociada
     * @param pruebaTecnicaCompletada Indica si la prueba técnica asociada está completada
     * @return DTO PostulacionResponse con la información de la postulación
     */
    @Mapping(target = "id", source = "postulacion.id")
    @Mapping(target = "candidato", source = "postulacion.candidato")
    @Mapping(target = "vacante", expression = "java(postulacion != null ? vacanteMapper.toVacanteResumenResponse(postulacion.getVacante()) : null)")
    @Mapping(target = "estado", source = "postulacion.estado")
    @Mapping(target = "cartaPresentacion", source = "postulacion.cartaPresentacion")
    @Mapping(target = "puntuacionMatch", source = "postulacion.puntuacionMatch")
    @Mapping(target = "comentariosReclutador", source = "postulacion.comentariosReclutador")
    @Mapping(target = "fechaEntrevista", source = "postulacion.fechaEntrevista")
    @Mapping(target = "fechaCreacion", source = "postulacion.fechaCreacion")
    @Mapping(target = "fechaActualizacion", source = "postulacion.fechaActualizacion")
    @Mapping(target = "tienePruebaTecnica", source = "tienePruebaTecnica")
    @Mapping(target = "pruebaTecnicaCompletada", source = "pruebaTecnicaCompletada")
    public abstract PostulacionResponse toPostulacionResponse(Postulacion postulacion, Boolean tienePruebaTecnica, Boolean pruebaTecnicaCompletada);

    /**
     * Método de utilidad para obtener el estado aplicada de una postulación.
     * 
     * @return EstadoPostulacion.APLICADA
     */
    protected EstadoPostulacion getEstadoAplicada() {
        return EstadoPostulacion.APLICADA;
    }
}
