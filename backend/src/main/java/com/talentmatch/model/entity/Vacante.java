package com.talentmatch.model.entity;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

import com.talentmatch.model.enums.EstadoVacante;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.ForeignKey;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Index;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Future;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.PositiveOrZero;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.hibernate.annotations.BatchSize;

/**
 * Entidad que representa una vacante de empleo en el sistema TalentMatch.
 */
@Entity
@Table(name = "vacantes",
       indexes = {
           @Index(name = "idx_vacantes_reclutador", columnList = "reclutador_id"),
           @Index(name = "idx_vacantes_estado", columnList = "estado"),
           @Index(name = "idx_vacantes_fecha_publicacion", columnList = "fecha_publicacion"),
           @Index(name = "idx_vacantes_experiencia", columnList = "experiencia_requerida")
       })
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@ToString(exclude = {"postulaciones", "candidatosFavoritos"})
@EqualsAndHashCode(of = "id")
public class Vacante {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "El título es obligatorio")
    @Size(min = 5, max = 150, message = "El título debe tener entre 5 y 150 caracteres")
    @Column(nullable = false)
    private String titulo;

    @NotBlank(message = "La descripción es obligatoria")
    @Size(min = 20, message = "La descripción debe tener al menos 20 caracteres")
    @Column(columnDefinition = "TEXT", nullable = false)
    private String descripcion;

    @Size(max = 100, message = "El área no puede exceder los 100 caracteres")
    @Column(name = "area")
    private String area;

    @Size(max = 100, message = "La ubicación no puede exceder los 100 caracteres")
    @Column(name = "ubicacion")
    private String ubicacion;

    @Size(max = 50, message = "La modalidad no puede exceder los 50 caracteres")
    @Column(name = "modalidad")
    private String modalidad;

    @Size(max = 50, message = "El tipo de contrato no puede exceder los 50 caracteres")
    @Column(name = "tipo_contrato")
    private String tipoContrato;

    @PositiveOrZero(message = "El salario mínimo debe ser mayor o igual a cero")
    @Column(name = "salario_minimo")
    private BigDecimal salarioMinimo;

    @PositiveOrZero(message = "El salario máximo debe ser mayor o igual a cero")
    @Column(name = "salario_maximo")
    private BigDecimal salarioMaximo;

    @Column(name = "mostrar_salario")
    private Boolean mostrarSalario;

    @PositiveOrZero(message = "La experiencia requerida debe ser mayor o igual a cero")
    @Column(name = "experiencia_requerida")
    private Integer experienciaRequerida;

    @Size(max = 1000, message = "Las habilidades requeridas no pueden exceder los 1000 caracteres")
    @Column(name = "habilidades_requeridas", columnDefinition = "TEXT")
    private String habilidadesRequeridas;

    @Column(name = "requisitos_adicionales", columnDefinition = "TEXT")
    private String requisitosAdicionales;

    @Column(name = "beneficios", columnDefinition = "TEXT")
    private String beneficios;

    @Column(name = "fecha_publicacion")
    private LocalDate fechaPublicacion;

    @Future(message = "La fecha de cierre debe ser en el futuro")
    @Column(name = "fecha_cierre")
    private LocalDate fechaCierre;

    @NotNull(message = "El estado de la vacante es obligatorio")
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private EstadoVacante estado;

    @Column(name = "fecha_creacion", nullable = false, updatable = false)
    private LocalDateTime fechaCreacion;

    @Column(name = "fecha_actualizacion")
    private LocalDateTime fechaActualizacion;

    @NotNull(message = "El reclutador es obligatorio")
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "reclutador_id", nullable = false, foreignKey = @ForeignKey(name = "fk_vacantes_reclutadores"))
    private Reclutador reclutador;

    @OneToMany(mappedBy = "vacante", cascade = CascadeType.ALL, orphanRemoval = true)
    @Builder.Default
    @BatchSize(size = 20)
    private Set<Postulacion> postulaciones = new HashSet<>();

    @ManyToMany(mappedBy = "vacantesFavoritas", fetch = FetchType.LAZY)
    @Builder.Default
    @BatchSize(size = 20)
    private Set<Candidato> candidatosFavoritos = new HashSet<>();

    /**
     * Añade una postulación manteniendo la relación bidireccional.
     * 
     * @param postulacion Postulación a añadir
     * @return La postulación añadida
     */
    public Postulacion addPostulacion(Postulacion postulacion) {
        postulaciones.add(postulacion);
        postulacion.setVacante(this);
        return postulacion;
    }

    /**
     * Elimina una postulación manteniendo la relación bidireccional.
     * 
     * @param postulacion Postulación a eliminar
     * @return true si se eliminó correctamente, false en caso contrario
     */
    public boolean removePostulacion(Postulacion postulacion) {
        boolean removed = postulaciones.remove(postulacion);
        if (removed) {
            postulacion.setVacante(null);
        }
        return removed;
    }

    /**
     * Método que se ejecuta antes de persistir la entidad.
     * Inicializa fechas, estado por defecto y colecciones.
     */
    @PrePersist
    protected void onPrePersist() {
        if (fechaCreacion == null) {
            fechaCreacion = LocalDateTime.now();
        }
        if (estado == null) {
            estado = EstadoVacante.ACTIVA;
        }
        if (postulaciones == null) {
            postulaciones = new HashSet<>();
        }
        if (candidatosFavoritos == null) {
            candidatosFavoritos = new HashSet<>();
        }
    }

    /**
     * Método que se ejecuta antes de actualizar la entidad.
     * Actualiza la fecha de actualización.
     */
    @PreUpdate
    protected void onUpdate() {
        this.fechaActualizacion = LocalDateTime.now();
    }

    /**
     * Verifica si la vacante está activa.
     * 
     * @return true si la vacante está activa, false en caso contrario
     */
    public boolean estaActiva() {
        return this.estado == EstadoVacante.ACTIVA;
    }

    /**
     * Verifica si la vacante está cerrada.
     * 
     * @return true si la vacante está cerrada, false en caso contrario
     */
    public boolean estaCerrada() {
        return this.estado == EstadoVacante.CERRADA;
    }

    /**
     * Verifica si la vacante está cancelada.
     * 
     * @return true si la vacante está cancelada, false en caso contrario
     */
    public boolean estaCancelada() {
        return this.estado == EstadoVacante.CANCELADA;
    }
    
    /**
     * Verifica si un candidato ha marcado esta vacante como favorita.
     * 
     * @param candidato Candidato a verificar
     * @return true si la vacante está en favoritos del candidato, false en caso contrario
     */
    public boolean esFavoritaDe(Candidato candidato) {
        return this.candidatosFavoritos.contains(candidato);
    }
}
