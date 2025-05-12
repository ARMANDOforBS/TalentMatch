package com.talentmatch.model.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import jakarta.persistence.Index;
import jakarta.persistence.PrePersist;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.ToString;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.Max;
import java.util.HashSet;
import java.util.Set;
import org.hibernate.annotations.BatchSize;
import jakarta.persistence.ForeignKey;

/**
 * Entidad que representa una pregunta de una prueba técnica en el sistema TalentMatch.
 */
@Entity
@Table(name = "preguntas",
       indexes = {
           @Index(name = "idx_preguntas_prueba_tecnica", columnList = "prueba_tecnica_id"),
           @Index(name = "idx_preguntas_tipo", columnList = "tipo_pregunta"),
           @Index(name = "idx_preguntas_orden", columnList = "orden")
       })
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@ToString(exclude = {"pruebaTecnica", "respuestas"})
@EqualsAndHashCode(of = "id")
public class Pregunta {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull(message = "La prueba técnica es obligatoria")
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "prueba_tecnica_id", nullable = false, foreignKey = @ForeignKey(name = "fk_preguntas_pruebas_tecnicas"))
    private PruebaTecnica pruebaTecnica;

    @NotBlank(message = "El enunciado es obligatorio")
    @Size(min = 10, message = "El enunciado debe tener al menos 10 caracteres")
    @Column(columnDefinition = "TEXT", nullable = false)
    private String enunciado;

    @NotBlank(message = "El tipo de pregunta es obligatorio")
    @Pattern(regexp = "^(OPCION_MULTIPLE|DESARROLLO|VERDADERO_FALSO|CODIGO)$", 
            message = "El tipo de pregunta debe ser OPCION_MULTIPLE, DESARROLLO, VERDADERO_FALSO o CODIGO")
    @Column(name = "tipo_pregunta", nullable = false, length = 20)
    private String tipoPregunta;

    @Column(name = "opciones", columnDefinition = "TEXT")
    private String opciones;

    @Column(name = "respuesta_correcta", columnDefinition = "TEXT")
    private String respuestaCorrecta;

    @Min(value = 0, message = "La puntuación debe ser mayor o igual a 0")
    @Max(value = 100, message = "La puntuación debe ser menor o igual a 100")
    @Column(name = "puntuacion")
    private Integer puntuacion;

    @Min(value = 1, message = "El orden debe ser mayor o igual a 1")
    @Column(name = "orden", nullable = false)
    private Integer orden;

    @OneToMany(mappedBy = "pregunta", cascade = jakarta.persistence.CascadeType.ALL, orphanRemoval = true)
    @Builder.Default
    @BatchSize(size = 20)
    private Set<Respuesta> respuestas = new HashSet<>();

    @OneToOne(mappedBy = "pregunta", fetch = FetchType.LAZY)
    private Respuesta respuesta;

    @PrePersist
    protected void onPrePersist() {
        if (respuestas == null) {
            respuestas = new HashSet<>();
        }
        if (puntuacion == null) {
            puntuacion = 0;
        }
    }

    /**
     * Verifica si la pregunta ha sido respondida.
     * 
     * @return true si la pregunta ha sido respondida, false en caso contrario
     */
    public boolean estaRespondida() {
        return respuesta != null;
    }
}
