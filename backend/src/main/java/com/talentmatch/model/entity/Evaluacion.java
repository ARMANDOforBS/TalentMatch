package com.talentmatch.model.entity;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
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
 * Entidad que representa una evaluación de respuesta generada por IA en el sistema TalentMatch.
 */
@Entity
@Table(name = "evaluaciones",
       indexes = {
           @Index(name = "idx_evaluaciones_respuesta", columnList = "respuesta_id"),
           @Index(name = "idx_evaluaciones_fecha", columnList = "fecha_creacion"),
           @Index(name = "idx_evaluaciones_puntuacion", columnList = "puntuacion")
       })
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@ToString(exclude = {"respuesta"})
@EqualsAndHashCode(of = "id")
public class Evaluacion {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "respuesta_id", nullable = false, foreignKey = @ForeignKey(name = "fk_evaluaciones_respuestas"))
    private Respuesta respuesta;

    @Column(name = "puntuacion", nullable = false)
    private Integer puntuacion;

    @Column(name = "puntos_fuertes", columnDefinition = "TEXT")
    private String puntosFuertes;

    @Column(name = "puntos_mejora", columnDefinition = "TEXT")
    private String puntosMejora;

    @Column(name = "retroalimentacion", columnDefinition = "TEXT", nullable = false)
    private String retroalimentacion;

    @Column(name = "fecha_creacion", nullable = false, updatable = false)
    private LocalDateTime fechaCreacion;

    @Column(name = "generada_por_ia", nullable = false)
    private Boolean generadaPorIA;

    /**
     * Método que se ejecuta antes de persistir la entidad.
     * Inicializa la fecha de creación y valores por defecto.
     */
    @PrePersist
    protected void onCreate() {
        this.fechaCreacion = LocalDateTime.now();
        if (this.generadaPorIA == null) {
            this.generadaPorIA = true;
        }
    }
}
