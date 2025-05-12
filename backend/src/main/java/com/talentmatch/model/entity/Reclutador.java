package com.talentmatch.model.entity;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import jakarta.persistence.PrePersist;
import jakarta.persistence.Table;
import jakarta.persistence.Index;
import jakarta.persistence.PrimaryKeyJoinColumn;
import jakarta.persistence.ForeignKey;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.ToString;
import lombok.Builder;
import lombok.experimental.SuperBuilder;

/**
 * Entidad que representa a un reclutador en el sistema TalentMatch.
 * Extiende de la clase Usuario y añade información específica del reclutador.
 */
@Entity
@Table(name = "reclutadores",
       indexes = {
           @Index(name = "idx_reclutadores_departamento", columnList = "departamento"),
           @Index(name = "idx_reclutadores_cargo", columnList = "cargo")
       })
@PrimaryKeyJoinColumn(name = "id", foreignKey = @ForeignKey(name = "fk_reclutadores_usuarios"))
@Data
@EqualsAndHashCode(callSuper = true, onlyExplicitlyIncluded = true)
@ToString(callSuper = true, exclude = {"vacantes"})
@NoArgsConstructor
@AllArgsConstructor
@SuperBuilder
public class Reclutador extends Usuario {

    @Column(name = "departamento")
    private String departamento;

    @Column(name = "cargo")
    private String cargo;

    @Column(name = "extension_telefonica")
    private String extensionTelefonica;

    @Column(name = "descripcion", columnDefinition = "TEXT")
    private String descripcion;

    @OneToMany(mappedBy = "reclutador", cascade = CascadeType.ALL, orphanRemoval = true)
    @Builder.Default
    private List<Vacante> vacantes = new ArrayList<>();
    
    /**
     * Método que se ejecuta antes de persistir la entidad.
     * Asegura que las colecciones estén inicializadas.
     */
    @PrePersist
    protected void onPrePersist() {
        if (vacantes == null) {
            vacantes = new ArrayList<>();
        }
    }
}
