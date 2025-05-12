package com.talentmatch.model.entity;

import java.time.LocalDateTime;

import com.talentmatch.model.enums.EstadoPostulacion;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.ToString;
import jakarta.persistence.Index;
import jakarta.validation.constraints.Future;
import jakarta.persistence.ForeignKey;

/**
 * Entidad que representa una postulación de un candidato a una vacante en el sistema TalentMatch.
 */
@Entity
@Table(name = "postulaciones",
       uniqueConstraints = {
           @UniqueConstraint(name = "uk_postulaciones_candidato_vacante", columnNames = {"candidato_id", "vacante_id"})
       },
       indexes = {
           @Index(name = "idx_postulaciones_estado", columnList = "estado"),
           @Index(name = "idx_postulaciones_fecha_creacion", columnList = "fecha_creacion"),
           @Index(name = "idx_postulaciones_puntuacion", columnList = "puntuacion_match")
       })
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@ToString(exclude = {"candidato", "vacante"})
@EqualsAndHashCode(of = "id")
public class Postulacion {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull(message = "El candidato es obligatorio")
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "candidato_id", nullable = false, foreignKey = @ForeignKey(name = "fk_postulaciones_candidatos"))
    private Candidato candidato;

    @NotNull(message = "La vacante es obligatoria")
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "vacante_id", nullable = false, foreignKey = @ForeignKey(name = "fk_postulaciones_vacantes"))
    private Vacante vacante;

    @NotNull(message = "El estado es obligatorio")
    @Enumerated(EnumType.STRING)
    @Column(nullable = false, length = 20)
    private EstadoPostulacion estado;

    @Size(max = 2000, message = "La carta de presentación no puede exceder los 2000 caracteres")
    @Column(name = "carta_presentacion", columnDefinition = "TEXT")
    private String cartaPresentacion;

    @Min(value = 0, message = "La puntuación debe ser mayor o igual a 0")
    @Max(value = 100, message = "La puntuación debe ser menor o igual a 100")
    @Column(name = "puntuacion_match")
    private Integer puntuacionMatch;

    @Size(max = 1000, message = "Los comentarios no pueden exceder los 1000 caracteres")
    @Column(name = "comentarios_reclutador", columnDefinition = "TEXT")
    private String comentariosReclutador;

    @Future(message = "La fecha de entrevista debe ser en el futuro")
    @Column(name = "fecha_entrevista")
    private LocalDateTime fechaEntrevista;

    @Column(name = "fecha_creacion", nullable = false, updatable = false)
    private LocalDateTime fechaCreacion;

    @Column(name = "fecha_actualizacion")
    private LocalDateTime fechaActualizacion;

    /**
     * Método que se ejecuta antes de persistir la entidad.
     * Inicializa fechas y estado por defecto.
     */
    @PrePersist
    protected void onPrePersist() {
        fechaCreacion = LocalDateTime.now();
        if (estado == null) {
            estado = EstadoPostulacion.APLICADA;
        }
    }

    /**
     * Método que se ejecuta antes de actualizar la entidad.
     * Actualiza la fecha de actualización.
     */
    @PreUpdate
    protected void onPreUpdate() {
        fechaActualizacion = LocalDateTime.now();
    }

    /**
     * Verifica si es posible cambiar el estado actual de la postulación al estado especificado.
     * 
     * @param nuevoEstado Nuevo estado al que se quiere cambiar
     * @return true si el cambio de estado es válido, false en caso contrario
     */
    public boolean esTransicionEstadoValida(EstadoPostulacion nuevoEstado) {
        if (this.estado == nuevoEstado) {
            return true; // No hay cambio real
        }

        switch (this.estado) {
            case APLICADA:
                return nuevoEstado == EstadoPostulacion.EN_REVISION || 
                       nuevoEstado == EstadoPostulacion.RECHAZADO;
            case EN_REVISION:
                return nuevoEstado == EstadoPostulacion.PRUEBA_PENDIENTE || 
                       nuevoEstado == EstadoPostulacion.ENTREVISTA || 
                       nuevoEstado == EstadoPostulacion.RECHAZADO;
            case PRUEBA_PENDIENTE:
                return nuevoEstado == EstadoPostulacion.PRUEBA_COMPLETADA || 
                       nuevoEstado == EstadoPostulacion.RECHAZADO;
            case PRUEBA_COMPLETADA:
                return nuevoEstado == EstadoPostulacion.ENTREVISTA || 
                       nuevoEstado == EstadoPostulacion.RECHAZADO;
            case ENTREVISTA:
                return nuevoEstado == EstadoPostulacion.SELECCIONADO || 
                       nuevoEstado == EstadoPostulacion.RECHAZADO;
            case SELECCIONADO:
            case RECHAZADO:
                return false; // Estados finales, no se pueden cambiar
            default:
                return false;
        }
    }
}
