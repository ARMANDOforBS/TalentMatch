package com.talentmatch.model.entity;

import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

import jakarta.persistence.CascadeType;
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
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import jakarta.persistence.Table;
import jakarta.persistence.Index;
import jakarta.persistence.ForeignKey;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.ToString;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import org.hibernate.annotations.BatchSize;

/**
 * Entidad que representa una prueba técnica generada por IA en el sistema TalentMatch.
 */
@Entity
@Table(name = "pruebas_tecnicas",
       indexes = {
           @Index(name = "idx_pruebas_tecnicas_reclutador", columnList = "reclutador_id"),
           @Index(name = "idx_pruebas_tecnicas_completada", columnList = "completada"),
           @Index(name = "idx_pruebas_tecnicas_nivel", columnList = "nivel_dificultad"),
           @Index(name = "idx_pruebas_tecnicas_fecha", columnList = "fecha_creacion")
       })
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@ToString(exclude = {"preguntas", "postulacion"})
@EqualsAndHashCode(of = "id")
public class PruebaTecnica {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "postulacion_id", nullable = false, foreignKey = @ForeignKey(name = "fk_pruebas_tecnicas_postulaciones"))
    private Postulacion postulacion;

    @NotNull(message = "El reclutador es obligatorio")
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "reclutador_id", nullable = false, foreignKey = @ForeignKey(name = "fk_pruebas_tecnicas_reclutadores"))
    private Reclutador reclutador;

    @NotBlank(message = "El título es obligatorio")
    @Size(min = 5, max = 100, message = "El título debe tener entre 5 y 100 caracteres")
    @Column(nullable = false)
    private String titulo;

    @NotBlank(message = "La descripción es obligatoria")
    @Size(min = 20, message = "La descripción debe tener al menos 20 caracteres")
    @Column(columnDefinition = "TEXT", nullable = false)
    private String descripcion;

    @NotBlank(message = "Las instrucciones son obligatorias")
    @Size(min = 20, message = "Las instrucciones deben tener al menos 20 caracteres")
    @Column(name = "instrucciones", columnDefinition = "TEXT", nullable = false)
    private String instrucciones;

    @Min(value = 15, message = "El tiempo límite debe ser al menos 15 minutos")
    @Max(value = 180, message = "El tiempo límite no puede exceder 180 minutos")
    @Column(name = "tiempo_limite_minutos")
    private Integer tiempoLimiteMinutos;

    @NotBlank(message = "El nivel de dificultad es obligatorio")
    @Pattern(regexp = "^(BASICO|INTERMEDIO|AVANZADO)$", message = "El nivel de dificultad debe ser BASICO, INTERMEDIO o AVANZADO")
    @Column(name = "nivel_dificultad", nullable = false, length = 20)
    private String nivelDificultad;

    @NotBlank(message = "Las tecnologías son obligatorias")
    @Size(max = 255, message = "Las tecnologías no pueden exceder los 255 caracteres")
    @Column(name = "tecnologias", nullable = false)
    private String tecnologias;

    @Column(name = "fecha_creacion", nullable = false, updatable = false)
    private LocalDateTime fechaCreacion;

    @Column(name = "fecha_actualizacion")
    private LocalDateTime fechaActualizacion;

    @Column(name = "fecha_inicio")
    private LocalDateTime fechaInicio;

    @Column(name = "fecha_finalizacion")
    private LocalDateTime fechaFinalizacion;

    @Column(name = "completada")
    private Boolean completada;

    @Min(value = 0, message = "La puntuación total debe ser mayor o igual a 0")
    @Max(value = 100, message = "La puntuación total debe ser menor o igual a 100")
    @Column(name = "puntuacion_total")
    private Integer puntuacionTotal;

    @OneToMany(mappedBy = "pruebaTecnica", cascade = CascadeType.ALL, orphanRemoval = true)
    @Builder.Default
    @BatchSize(size = 20)
    private Set<Pregunta> preguntas = new HashSet<>();

    /**
     * Método que se ejecuta antes de persistir la entidad.
     * Inicializa fechas y estado por defecto.
     */
    @PrePersist
    protected void onPrePersist() {
        fechaCreacion = LocalDateTime.now();
        if (completada == null) {
            completada = false;
        }
        if (preguntas == null) {
            preguntas = new HashSet<>();
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
     * Inicia la prueba técnica.
     */
    public void iniciar() {
        this.fechaInicio = LocalDateTime.now();
    }

    /**
     * Finaliza la prueba técnica.
     */
    public void finalizar() {
        this.fechaFinalizacion = LocalDateTime.now();
        this.completada = true;
    }

    /**
     * Calcula la puntuación total de la prueba técnica.
     * 
     * @return Puntuación total
     */
    public int calcularPuntuacionTotal() {
        int puntuacion = 0;
        for (Pregunta pregunta : preguntas) {
            if (pregunta.getPuntuacion() != null) {
                puntuacion += pregunta.getPuntuacion();
            }
        }
        this.puntuacionTotal = puntuacion;
        return puntuacion;
    }
}
