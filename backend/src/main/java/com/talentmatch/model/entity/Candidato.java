package com.talentmatch.model.entity;

import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;
import jakarta.persistence.PrePersist;
import jakarta.persistence.Table;
import jakarta.persistence.Index;
import jakarta.persistence.ForeignKey;
import jakarta.validation.constraints.Past;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.ToString;
import lombok.Builder;
import lombok.experimental.SuperBuilder;
import org.hibernate.annotations.BatchSize;
import jakarta.persistence.PrimaryKeyJoinColumn;

/**
 * Entidad que representa a un candidato en el sistema TalentMatch.
 * Extiende de la clase Usuario y añade información específica del candidato.
 */
@Entity
@Table(name = "candidatos",
       indexes = {
           @Index(name = "idx_candidatos_titulo", columnList = "titulo_profesional"),
           @Index(name = "idx_candidatos_experiencia", columnList = "experiencia_anios"),
           @Index(name = "idx_candidatos_disponibilidad", columnList = "disponibilidad_inmediata")
       })
@PrimaryKeyJoinColumn(name = "id", foreignKey = @ForeignKey(name = "fk_candidatos_usuarios"))
@Data
@EqualsAndHashCode(callSuper = true, onlyExplicitlyIncluded = true)
@ToString(callSuper = true, exclude = {"postulaciones", "vacantesFavoritas"})
@NoArgsConstructor
@AllArgsConstructor
@SuperBuilder
public class Candidato extends Usuario {

    @Past(message = "La fecha de nacimiento debe ser en el pasado")
    @Column(name = "fecha_nacimiento")
    private LocalDate fechaNacimiento;

    @Column(name = "url_curriculum")
    private String urlCurriculum;

    @Size(max = 100, message = "El título profesional no puede exceder los 100 caracteres")
    @Column(name = "titulo_profesional")
    private String tituloProfesional;

    @Size(max = 2000, message = "El resumen del perfil no puede exceder los 2000 caracteres")
    @Column(name = "resumen_perfil", columnDefinition = "TEXT")
    private String resumenPerfil;

    @Size(max = 100, message = "La ubicación no puede exceder los 100 caracteres")
    @Column(name = "ubicacion")
    private String ubicacion;

    @Column(name = "linkedin_url")
    private String linkedinUrl;

    @Column(name = "github_url")
    private String githubUrl;

    @Column(name = "portfolio_url")
    private String portfolioUrl;

    @Size(max = 1000, message = "Las habilidades principales no pueden exceder los 1000 caracteres")
    @Column(name = "habilidades_principales", columnDefinition = "TEXT")
    private String habilidadesPrincipales;

    @Column(name = "experiencia_anios")
    private Integer experienciaAnios;

    @Column(name = "disponibilidad_inmediata")
    private Boolean disponibilidadInmediata;

    @OneToMany(mappedBy = "candidato", cascade = CascadeType.ALL, orphanRemoval = true)
    @Builder.Default
    @BatchSize(size = 20)
    private Set<Postulacion> postulaciones = new HashSet<>();

    @ManyToMany
    @JoinTable(
        name = "vacantes_favoritas",
        joinColumns = @JoinColumn(name = "candidato_id", foreignKey = @ForeignKey(name = "fk_favoritos_candidatos")),
        inverseJoinColumns = @JoinColumn(name = "vacante_id", foreignKey = @ForeignKey(name = "fk_favoritos_vacantes")),
        indexes = {
            @Index(name = "idx_favoritos_candidato", columnList = "candidato_id"),
            @Index(name = "idx_favoritos_vacante", columnList = "vacante_id")
        }
    )
    @Builder.Default
    @BatchSize(size = 20)
    private Set<Vacante> vacantesFavoritas = new HashSet<>();

    /**
     * Añade una postulación manteniendo la relación bidireccional.
     * 
     * @param postulacion Postulación a añadir
     * @return La postulación añadida
     */
    public Postulacion addPostulacion(Postulacion postulacion) {
        postulaciones.add(postulacion);
        postulacion.setCandidato(this);
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
            postulacion.setCandidato(null);
        }
        return removed;
    }

    /**
     * Añade una vacante a favoritos.
     * 
     * @param vacante Vacante a añadir a favoritos
     * @return true si se añadió correctamente, false si ya estaba en favoritos
     */
    public boolean agregarVacanteFavorita(Vacante vacante) {
        boolean added = this.vacantesFavoritas.add(vacante);
        if (added) {
            vacante.getCandidatosFavoritos().add(this);
        }
        return added;
    }

    /**
     * Elimina una vacante de favoritos.
     * 
     * @param vacante Vacante a eliminar de favoritos
     * @return true si se eliminó correctamente, false si no estaba en favoritos
     */
    public boolean eliminarVacanteFavorita(Vacante vacante) {
        boolean removed = this.vacantesFavoritas.remove(vacante);
        if (removed) {
            vacante.getCandidatosFavoritos().remove(this);
        }
        return removed;
    }

    /**
     * Verifica si una vacante está en favoritos.
     * 
     * @param vacante Vacante a verificar
     * @return true si la vacante está en favoritos, false en caso contrario
     */
    public boolean esVacanteFavorita(Vacante vacante) {
        return this.vacantesFavoritas.contains(vacante);
    }
    
    /**
     * Método que se ejecuta antes de persistir la entidad.
     * Asegura que las colecciones estén inicializadas.
     */
    @PrePersist
    protected void onPrePersist() {
        if (postulaciones == null) {
            postulaciones = new HashSet<>();
        }
        if (vacantesFavoritas == null) {
            vacantesFavoritas = new HashSet<>();
        }
    }
}
