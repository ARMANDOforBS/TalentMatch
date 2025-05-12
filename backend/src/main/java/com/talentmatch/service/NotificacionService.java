package com.talentmatch.service;

import java.util.List;

import com.talentmatch.dto.request.ActualizacionNotificacionRequest;
import com.talentmatch.dto.response.NotificacionResponse;
import com.talentmatch.model.entity.Postulacion;
import com.talentmatch.model.entity.Vacante;
import com.talentmatch.model.enums.EstadoPostulacion;

/**
 * Interfaz para el servicio de notificaciones.
 */
public interface NotificacionService {

    /**
     * Busca notificaciones por usuario.
     * 
     * @param usuarioId ID del usuario
     * @return Lista de DTOs NotificacionResponse con la información de las notificaciones
     */
    List<NotificacionResponse> buscarPorUsuario(Long usuarioId);

    /**
     * Busca notificaciones no leídas por usuario.
     * 
     * @param usuarioId ID del usuario
     * @return Lista de DTOs NotificacionResponse con la información de las notificaciones no leídas
     */
    List<NotificacionResponse> buscarNoLeidasPorUsuario(Long usuarioId);

    /**
     * Marca una notificación como leída.
     * 
     * @param id ID de la notificación
     * @param usuarioId ID del usuario que marca la notificación
     * @return DTO NotificacionResponse con la información actualizada de la notificación
     */
    NotificacionResponse marcarComoLeida(Long id, Long usuarioId);

    /**
     * Marca todas las notificaciones de un usuario como leídas.
     * 
     * @param usuarioId ID del usuario
     * @return Número de notificaciones marcadas como leídas
     */
    int marcarTodasComoLeidas(Long usuarioId);

    /**
     * Actualiza una notificación.
     * 
     * @param id ID de la notificación
     * @param usuarioId ID del usuario que actualiza la notificación
     * @param request DTO ActualizacionNotificacionRequest con la información actualizada
     * @return DTO NotificacionResponse con la información actualizada de la notificación
     */
    NotificacionResponse actualizar(Long id, Long usuarioId, ActualizacionNotificacionRequest request);

    /**
     * Elimina una notificación.
     * 
     * @param id ID de la notificación
     * @param usuarioId ID del usuario que elimina la notificación
     * @return true si se eliminó correctamente, false en caso contrario
     */
    boolean eliminar(Long id, Long usuarioId);

    /**
     * Notifica una nueva postulación al reclutador.
     * 
     * @param postulacion Postulación que genera la notificación
     */
    void notificarNuevaPostulacion(Postulacion postulacion);

    /**
     * Notifica un cambio de estado de postulación al candidato.
     * 
     * @param postulacion Postulación que genera la notificación
     * @param estadoAnterior Estado anterior de la postulación
     */
    void notificarCambioEstadoPostulacion(Postulacion postulacion, EstadoPostulacion estadoAnterior);

    /**
     * Notifica una nueva vacante a los candidatos que coinciden con el perfil.
     * 
     * @param vacante Vacante que genera la notificación
     */
    void notificarNuevaVacante(Vacante vacante);

    /**
     * Notifica la asignación de una prueba técnica al candidato.
     * 
     * @param postulacion Postulación asociada a la prueba técnica
     */
    void notificarAsignacionPruebaTecnica(Postulacion postulacion);

    /**
     * Notifica la finalización de una prueba técnica al reclutador.
     * 
     * @param postulacion Postulación asociada a la prueba técnica
     */
    void notificarFinalizacionPruebaTecnica(Postulacion postulacion);
}
