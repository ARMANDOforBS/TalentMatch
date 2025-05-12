package com.talentmatch.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;

import com.talentmatch.dto.request.ActualizacionNotificacionRequest;
import com.talentmatch.dto.response.NotificacionResponse;
import com.talentmatch.model.entity.Notificacion;
import com.talentmatch.model.entity.Usuario;
import com.talentmatch.model.enums.TipoNotificacion;

/**
 * Mapper para convertir entre la entidad Notificacion y sus DTOs.
 */
@Mapper(componentModel = "spring")
public interface NotificacionMapper {

    /**
     * Crea una nueva notificación.
     * 
     * @param usuario Usuario destinatario de la notificación
     * @param titulo Título de la notificación
     * @param contenido Contenido de la notificación
     * @param tipo Tipo de la notificación
     * @param referenciaId ID de la referencia (opcional)
     * @param referenciaTipo Tipo de la referencia (opcional)
     * @return Entidad Notificacion creada
     */
    @Mapping(target = "id", ignore = true)
    @Mapping(target = "usuario", source = "usuario")
    @Mapping(target = "titulo", source = "titulo")
    @Mapping(target = "contenido", source = "contenido")
    @Mapping(target = "tipo", source = "tipo")
    @Mapping(target = "leida", constant = "false")
    @Mapping(target = "fechaCreacion", ignore = true)
    @Mapping(target = "fechaLectura", ignore = true)
    @Mapping(target = "referenciaId", source = "referenciaId")
    @Mapping(target = "referenciaTipo", source = "referenciaTipo")
    Notificacion crearNotificacion(
            Usuario usuario, 
            String titulo, 
            String contenido, 
            TipoNotificacion tipo, 
            Long referenciaId, 
            String referenciaTipo);

    /**
     * Marca una notificación como leída.
     * 
     * @param actualizacion DTO ActualizacionNotificacionRequest con la información actualizada
     * @param notificacion Entidad Notificacion a actualizar
     */
    @Mapping(target = "id", ignore = true)
    @Mapping(target = "usuario", ignore = true)
    @Mapping(target = "titulo", ignore = true)
    @Mapping(target = "contenido", ignore = true)
    @Mapping(target = "tipo", ignore = true)
    @Mapping(target = "fechaCreacion", ignore = true)
    @Mapping(target = "referenciaId", ignore = true)
    @Mapping(target = "referenciaTipo", ignore = true)
    @Mapping(target = "leida", source = "actualizacion.leida")
    @Mapping(target = "fechaLectura", expression = "java(actualizacion.getLeida() ? java.time.LocalDateTime.now() : null)")
    void marcarComoLeida(ActualizacionNotificacionRequest actualizacion, @MappingTarget Notificacion notificacion);

    /**
     * Convierte una entidad Notificacion a un DTO NotificacionResponse.
     * 
     * @param notificacion Entidad Notificacion a convertir
     * @return DTO NotificacionResponse con la información de la notificación
     */
    NotificacionResponse toNotificacionResponse(Notificacion notificacion);
}
