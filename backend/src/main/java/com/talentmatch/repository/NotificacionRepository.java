package com.talentmatch.repository;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.talentmatch.model.entity.Notificacion;
import com.talentmatch.model.entity.Usuario;
import com.talentmatch.model.enums.TipoNotificacion;

/**
 * Repositorio para la entidad Notificación.
 */
@Repository
public interface NotificacionRepository extends JpaRepository<Notificacion, Long> {
    
    /**
     * Busca notificaciones por usuario.
     * 
     * @param usuario Usuario destinatario de las notificaciones
     * @return Lista de notificaciones del usuario
     */
    List<Notificacion> findByUsuario(Usuario usuario);
    
    /**
     * Busca notificaciones por usuario paginadas.
     * 
     * @param usuario Usuario destinatario de las notificaciones
     * @param pageable Información de paginación
     * @return Página de notificaciones del usuario
     */
    Page<Notificacion> findByUsuario(Usuario usuario, Pageable pageable);
    
    /**
     * Busca notificaciones por usuario ordenadas por fecha de creación descendente.
     * 
     * @param usuario Usuario destinatario de las notificaciones
     * @return Lista de notificaciones del usuario ordenadas por fecha
     */
    List<Notificacion> findByUsuarioOrderByFechaCreacionDesc(Usuario usuario);
    
    /**
     * Busca notificaciones por usuario y estado de lectura.
     * 
     * @param usuario Usuario destinatario de las notificaciones
     * @param leida Estado de lectura de las notificaciones
     * @return Lista de notificaciones del usuario con el estado de lectura especificado
     */
    List<Notificacion> findByUsuarioAndLeida(Usuario usuario, Boolean leida);
    
    /**
     * Busca notificaciones por usuario y tipo.
     * 
     * @param usuario Usuario destinatario de las notificaciones
     * @param tipo Tipo de las notificaciones
     * @return Lista de notificaciones del usuario del tipo especificado
     */
    List<Notificacion> findByUsuarioAndTipo(Usuario usuario, TipoNotificacion tipo);
    
    /**
     * Busca notificaciones por usuario, tipo y estado de lectura.
     * 
     * @param usuario Usuario destinatario de las notificaciones
     * @param tipo Tipo de las notificaciones
     * @param leida Estado de lectura de las notificaciones
     * @return Lista de notificaciones del usuario del tipo y estado de lectura especificados
     */
    List<Notificacion> findByUsuarioAndTipoAndLeida(Usuario usuario, TipoNotificacion tipo, Boolean leida);
    
    /**
     * Cuenta el número de notificaciones no leídas por usuario.
     * 
     * @param usuario Usuario destinatario de las notificaciones
     * @return Número de notificaciones no leídas del usuario
     */
    long countByUsuarioAndLeida(Usuario usuario, Boolean leida);
    
    /**
     * Busca notificaciones por usuario creadas después de la fecha especificada.
     * 
     * @param usuario Usuario destinatario de las notificaciones
     * @param fecha Fecha a partir de la cual buscar
     * @return Lista de notificaciones del usuario creadas después de la fecha especificada
     */
    List<Notificacion> findByUsuarioAndFechaCreacionGreaterThan(Usuario usuario, LocalDateTime fecha);
    
    /**
     * Busca notificaciones por referencia.
     * 
     * @param referenciaId ID de la referencia
     * @param referenciaTipo Tipo de la referencia
     * @return Lista de notificaciones con la referencia especificada
     */
    List<Notificacion> findByReferenciaIdAndReferenciaTipo(Long referenciaId, String referenciaTipo);
    
    /**
     * Busca notificaciones por usuario y referencia.
     * 
     * @param usuario Usuario destinatario de las notificaciones
     * @param referenciaId ID de la referencia
     * @param referenciaTipo Tipo de la referencia
     * @return Lista de notificaciones del usuario con la referencia especificada
     */
    @Query("SELECT n FROM Notificacion n WHERE n.usuario = :usuario AND n.referenciaId = :referenciaId AND n.referenciaTipo = :referenciaTipo")
    List<Notificacion> findByUsuarioAndReferencia(
            @Param("usuario") Usuario usuario, 
            @Param("referenciaId") Long referenciaId, 
            @Param("referenciaTipo") String referenciaTipo);
}
