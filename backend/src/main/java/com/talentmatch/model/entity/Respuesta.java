package com.talentmatch.model.entity;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
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
 * Entidad que representa una respuesta a una pregunta de prueba técnica en el sistema TalentMatch.
 */
@Entity
@Table(name = "respuestas",
       indexes = {
           @Index(name = "idx_respuestas_pregunta", columnList = "pregunta_id"),
           @Index(name = "idx_respuestas_candidato", columnList = "candidato_id"),
           @Index(name = "idx_respuestas_fecha", columnList = "fecha_creacion")
       })
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@ToString(exclude = {"pregunta", "candidato", "evaluacion"})
@EqualsAndHashCode(of = "id")
public class Respuesta {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "pregunta_id", nullable = false, foreignKey = @ForeignKey(name = "fk_respuestas_preguntas"))
    private Pregunta pregunta;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "candidato_id", nullable = false, foreignKey = @ForeignKey(name = "fk_respuestas_candidatos"))
    private Candidato candidato;

    @Column(columnDefinition = "TEXT", nullable = false)
    private String contenido;

    @Column(name = "fecha_creacion", nullable = false, updatable = false)
    private LocalDateTime fechaCreacion;

    @Column(name = "tiempo_respuesta_segundos")
    private Integer tiempoRespuestaSegundos;

    @OneToOne(mappedBy = "respuesta", fetch = FetchType.LAZY)
    private Evaluacion evaluacion;

    /**
     * Método que se ejecuta antes de persistir la entidad.
     * Inicializa la fecha de creación.
     */
    @PrePersist
    protected void onCreate() {
        this.fechaCreacion = LocalDateTime.now();
    }

    /**
     * Verifica si la respuesta ha sido evaluada.
     * 
     * @return true si la respuesta ha sido evaluada, false en caso contrario
     */
    public boolean estaEvaluada() {
        return evaluacion != null;
    }
}
