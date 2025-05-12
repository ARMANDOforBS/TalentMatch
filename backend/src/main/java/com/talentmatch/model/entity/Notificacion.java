package com.talentmatch.model.entity;

import java.time.LocalDateTime;

import com.talentmatch.model.enums.TipoNotificacion;

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
import jakarta.persistence.Table;
import jakarta.persistence.Index;
import jakarta.persistence.ForeignKey;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.ToString;

/**
 * Entidad que representa una notificación en el sistema TalentMatch.
 */
@Entity
@Table(name = "notificaciones",
       indexes = {
           @Index(name = "idx_notificaciones_usuario", columnList = "usuario_id"),
           @Index(name = "idx_notificaciones_tipo", columnList = "tipo"),
           @Index(name = "idx_notificaciones_leida", columnList = "leida"),
           @Index(name = "idx_notificaciones_fecha", columnList = "fecha_creacion")
       })
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@ToString(exclude = {"usuario"})
@EqualsAndHashCode(of = "id")
public class Notificacion {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", columnDefinition = "BIGINT", nullable = false)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "usuario_id", nullable = false, foreignKey = @ForeignKey(name = "fk_notificaciones_usuarios"))
    private Usuario usuario;

    @Column(nullable = false)
    private String titulo;

    @Column(columnDefinition = "TEXT", nullable = false)
    private String contenido;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private TipoNotificacion tipo;

    @Column(nullable = false)
    private Boolean leida;

    @Column(name = "fecha_creacion", nullable = false, updatable = false)
    private LocalDateTime fechaCreacion;

    @Column(name = "fecha_lectura")
    private LocalDateTime fechaLectura;

    @Column(name = "referencia_id")
    private Long referenciaId;

    @Column(name = "referencia_tipo")
    private String referenciaTipo;

    /**
     * Método que se ejecuta antes de persistir la entidad.
     * Inicializa fechas y estado por defecto.
     */
    @PrePersist
    protected void onCreate() {
        this.fechaCreacion = LocalDateTime.now();
        if (this.leida == null) {
            this.leida = false;
        }
    }

    /**
     * Marca la notificación como leída.
     */
    public void marcarComoLeida() {
        this.leida = true;
        this.fechaLectura = LocalDateTime.now();
    }
}
