package com.talentmatch.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.springframework.beans.factory.annotation.Autowired;

import com.talentmatch.dto.request.CreacionPreguntaRequest;
import com.talentmatch.dto.response.PreguntaResponse;
import com.talentmatch.model.entity.Pregunta;
import com.talentmatch.model.entity.PruebaTecnica;

/**
 * Mapper para convertir entre la entidad Pregunta y sus DTOs.
 */
@Mapper(componentModel = "spring", uses = {RespuestaMapper.class})
public abstract class PreguntaMapper {

    @Autowired
    protected RespuestaMapper respuestaMapper;

    /**
     * Convierte un DTO CreacionPreguntaRequest a una entidad Pregunta.
     * 
     * @param request DTO CreacionPreguntaRequest a convertir
     * @param pruebaTecnica Entidad PruebaTecnica asociada a la pregunta
     * @return Entidad Pregunta con la información del DTO
     */
    @Mapping(target = "id", ignore = true)
    @Mapping(target = "pruebaTecnica", source = "pruebaTecnica")
    @Mapping(target = "enunciado", source = "request.enunciado")
    @Mapping(target = "tipoPregunta", source = "request.tipoPregunta")
    @Mapping(target = "opciones", source = "request.opciones")
    @Mapping(target = "respuestaCorrecta", source = "request.respuestaCorrecta")
    @Mapping(target = "puntuacion", source = "request.puntuacion")
    @Mapping(target = "orden", source = "request.orden")
    @Mapping(target = "respuestas", expression = "java(new java.util.HashSet<>())")
    @Mapping(target = "respuesta", ignore = true)
    public abstract Pregunta toPregunta(CreacionPreguntaRequest request, PruebaTecnica pruebaTecnica);

    /**
     * Convierte una entidad Pregunta a un DTO PreguntaResponse.
     * 
     * @param pregunta Entidad Pregunta a convertir
     * @return DTO PreguntaResponse con la información de la pregunta
     */
    @Mapping(target = "pruebaTecnicaId", source = "pruebaTecnica.id")
    @Mapping(target = "enunciado", source = "enunciado")
    @Mapping(target = "tipoPregunta", source = "tipoPregunta")
    @Mapping(target = "opciones", source = "opciones")
    @Mapping(target = "puntuacion", source = "puntuacion")
    @Mapping(target = "orden", source = "orden")
    @Mapping(target = "respuesta", source = "respuesta")
    @Mapping(target = "respondida", expression = "java(pregunta.estaRespondida())")
    public abstract PreguntaResponse toPreguntaResponse(Pregunta pregunta);
}
