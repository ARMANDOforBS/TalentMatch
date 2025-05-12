package com.talentmatch.mapper;

import java.util.List;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.springframework.beans.factory.annotation.Autowired;

import com.talentmatch.dto.request.CreacionPruebaTecnicaRequest;
import com.talentmatch.dto.response.PreguntaResponse;
import com.talentmatch.dto.response.PruebaTecnicaResponse;
import com.talentmatch.model.entity.Postulacion;
import com.talentmatch.model.entity.PruebaTecnica;
import com.talentmatch.model.entity.Reclutador;

/**
 * Mapper para convertir entre la entidad PruebaTecnica y sus DTOs.
 */
@Mapper(componentModel = "spring", uses = {ReclutadorMapper.class, PreguntaMapper.class})
public abstract class PruebaTecnicaMapper {

    @Autowired
    protected ReclutadorMapper reclutadorMapper;

    @Autowired
    protected PreguntaMapper preguntaMapper;

    /**
     * Convierte un DTO CreacionPruebaTecnicaRequest a una entidad PruebaTecnica.
     * 
     * @param request DTO CreacionPruebaTecnicaRequest a convertir
     * @param postulacion Entidad Postulacion asociada a la prueba técnica
     * @param reclutador Entidad Reclutador que crea la prueba técnica
     * @return Entidad PruebaTecnica con la información del DTO
     */
    @Mapping(target = "id", ignore = true)
    @Mapping(target = "postulacion", source = "postulacion")
    @Mapping(target = "reclutador", source = "reclutador")
    @Mapping(target = "titulo", source = "request.titulo")
    @Mapping(target = "descripcion", source = "request.descripcion")
    @Mapping(target = "instrucciones", source = "request.instrucciones")
    @Mapping(target = "tiempoLimiteMinutos", source = "request.tiempoLimiteMinutos")
    @Mapping(target = "nivelDificultad", source = "request.nivelDificultad")
    @Mapping(target = "tecnologias", source = "request.tecnologias")
    @Mapping(target = "fechaCreacion", ignore = true)
    @Mapping(target = "fechaActualizacion", ignore = true)
    @Mapping(target = "fechaInicio", ignore = true)
    @Mapping(target = "fechaFinalizacion", ignore = true)
    @Mapping(target = "completada", constant = "false")
    @Mapping(target = "puntuacionTotal", ignore = true)
    @Mapping(target = "preguntas", ignore = true)
    public abstract PruebaTecnica toPruebaTecnica(CreacionPruebaTecnicaRequest request, Postulacion postulacion, Reclutador reclutador);

    /**
     * Convierte una entidad PruebaTecnica a un DTO PruebaTecnicaResponse.
     * 
     * @param pruebaTecnica Entidad PruebaTecnica a convertir
     * @param preguntas Lista de DTOs PreguntaResponse con la información de las preguntas de la prueba técnica
     * @return DTO PruebaTecnicaResponse con la información de la prueba técnica
     */
    @Mapping(target = "postulacionId", source = "pruebaTecnica.postulacion.id")
    @Mapping(target = "reclutador", source = "pruebaTecnica.reclutador")
    @Mapping(target = "titulo", source = "pruebaTecnica.titulo")
    @Mapping(target = "descripcion", source = "pruebaTecnica.descripcion")
    @Mapping(target = "instrucciones", source = "pruebaTecnica.instrucciones")
    @Mapping(target = "tiempoLimiteMinutos", source = "pruebaTecnica.tiempoLimiteMinutos")
    @Mapping(target = "nivelDificultad", source = "pruebaTecnica.nivelDificultad")
    @Mapping(target = "tecnologias", source = "pruebaTecnica.tecnologias")
    @Mapping(target = "fechaCreacion", source = "pruebaTecnica.fechaCreacion")
    @Mapping(target = "fechaActualizacion", source = "pruebaTecnica.fechaActualizacion")
    @Mapping(target = "fechaInicio", source = "pruebaTecnica.fechaInicio")
    @Mapping(target = "fechaFinalizacion", source = "pruebaTecnica.fechaFinalizacion")
    @Mapping(target = "completada", source = "pruebaTecnica.completada")
    @Mapping(target = "puntuacionTotal", source = "pruebaTecnica.puntuacionTotal")
    @Mapping(target = "preguntas", source = "preguntas")
    public abstract PruebaTecnicaResponse toPruebaTecnicaResponse(PruebaTecnica pruebaTecnica, List<PreguntaResponse> preguntas);

    /**
     * Convierte una entidad PruebaTecnica a un DTO PruebaTecnicaResponse sin incluir las preguntas.
     * 
     * @param pruebaTecnica Entidad PruebaTecnica a convertir
     * @return DTO PruebaTecnicaResponse con la información de la prueba técnica sin preguntas
     */
    @Mapping(target = "postulacionId", source = "postulacion.id")
    @Mapping(target = "reclutador", source = "reclutador")
    @Mapping(target = "titulo", source = "titulo")
    @Mapping(target = "descripcion", source = "descripcion")
    @Mapping(target = "instrucciones", source = "instrucciones")
    @Mapping(target = "tiempoLimiteMinutos", source = "tiempoLimiteMinutos")
    @Mapping(target = "nivelDificultad", source = "nivelDificultad")
    @Mapping(target = "tecnologias", source = "tecnologias")
    @Mapping(target = "fechaCreacion", source = "fechaCreacion")
    @Mapping(target = "fechaActualizacion", source = "fechaActualizacion")
    @Mapping(target = "fechaInicio", source = "fechaInicio")
    @Mapping(target = "fechaFinalizacion", source = "fechaFinalizacion")
    @Mapping(target = "completada", source = "completada")
    @Mapping(target = "puntuacionTotal", source = "puntuacionTotal")
    @Mapping(target = "preguntas", ignore = true)
    public abstract PruebaTecnicaResponse toPruebaTecnicaResponseSinPreguntas(PruebaTecnica pruebaTecnica);
}
