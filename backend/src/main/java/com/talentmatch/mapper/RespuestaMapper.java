package com.talentmatch.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.springframework.beans.factory.annotation.Autowired;

import com.talentmatch.dto.request.CreacionRespuestaRequest;
import com.talentmatch.dto.response.RespuestaResponse;
import com.talentmatch.model.entity.Candidato;
import com.talentmatch.model.entity.Pregunta;
import com.talentmatch.model.entity.Respuesta;

/**
 * Mapper para convertir entre la entidad Respuesta y sus DTOs.
 */
@Mapper(componentModel = "spring", uses = {EvaluacionMapper.class})
public abstract class RespuestaMapper {

    @Autowired
    protected EvaluacionMapper evaluacionMapper;

    /**
     * Convierte un DTO CreacionRespuestaRequest a una entidad Respuesta.
     * 
     * @param request DTO CreacionRespuestaRequest a convertir
     * @param pregunta Entidad Pregunta asociada a la respuesta
     * @param candidato Entidad Candidato que realiza la respuesta
     * @return Entidad Respuesta con la información del DTO
     */
    @Mapping(target = "id", ignore = true)
    @Mapping(target = "pregunta", source = "pregunta")
    @Mapping(target = "candidato", source = "candidato")
    @Mapping(target = "contenido", source = "request.contenido")
    @Mapping(target = "tiempoRespuestaSegundos", source = "request.tiempoRespuestaSegundos")
    @Mapping(target = "fechaCreacion", ignore = true)
    @Mapping(target = "evaluacion", ignore = true)
    public abstract Respuesta toRespuesta(CreacionRespuestaRequest request, Pregunta pregunta, Candidato candidato);

    /**
     * Convierte una entidad Respuesta a un DTO RespuestaResponse.
     * 
     * @param respuesta Entidad Respuesta a convertir
     * @return DTO RespuestaResponse con la información de la respuesta
     */
    @Mapping(target = "preguntaId", source = "pregunta.id")
    @Mapping(target = "candidatoId", source = "candidato.id")
    @Mapping(target = "evaluada", expression = "java(respuesta.estaEvaluada())")
    @Mapping(target = "evaluacion", source = "respuesta.evaluacion")
    public abstract RespuestaResponse toRespuestaResponse(Respuesta respuesta);
}
