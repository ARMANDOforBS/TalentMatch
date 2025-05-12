package com.talentmatch.model.entity;

import java.time.LocalDateTime;
import java.util.Collection;
import java.util.List;
import java.util.Set;
import java.util.HashSet;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.talentmatch.model.enums.EstadoUsuario;
import com.talentmatch.model.enums.RolUsuario;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Inheritance;
import jakarta.persistence.InheritanceType;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;
import jakarta.persistence.Index;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;
import lombok.ToString;
import jakarta.persistence.OneToMany;
import jakarta.persistence.CascadeType;
import org.hibernate.annotations.BatchSize;
import lombok.Builder;

/**
 * Entidad base que representa a un usuario en el sistema TalentMatch.
 * Esta clase implementa UserDetails para integrarse con Spring Security.
 */
@Entity
@Table(name = "usuarios",
       uniqueConstraints = {
           @UniqueConstraint(name = "uk_usuarios_email", columnNames = "email")
       },
       indexes = {
           @Index(name = "idx_usuarios_rol", columnList = "rol"),
           @Index(name = "idx_usuarios_estado", columnList = "estado"),
           @Index(name = "idx_usuarios_nombre_apellido", columnList = "nombre, apellido")
       })
@Inheritance(strategy = InheritanceType.JOINED)
@Data
@NoArgsConstructor
@AllArgsConstructor
@SuperBuilder
@ToString(exclude = {"notificaciones"})
public class Usuario implements UserDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", columnDefinition = "BIGINT", nullable = false)
    private Long id;

    @NotBlank(message = "El email es obligatorio")
    @Email(message = "El formato del email no es válido")
    @Column(nullable = false, unique = true)
    private String email;

    /**
     * Contraseña del usuario.
     * IMPORTANTE: Este campo debe ser encriptado antes de almacenarse en la base de datos.
     * La encriptación se realiza en la capa de servicio utilizando BCryptPasswordEncoder.
     */
    @NotBlank(message = "La contraseña es obligatoria")
    @Size(min = 8, message = "La contraseña debe tener al menos 8 caracteres")
    @Column(nullable = false)
    private String password;

    @NotBlank(message = "El nombre es obligatorio")
    @Column(nullable = false)
    private String nombre;

    @NotBlank(message = "El apellido es obligatorio")
    @Column(nullable = false)
    private String apellido;

    @Column(name = "url_foto")
    private String urlFoto;

    @Column(name = "telefono")
    private String telefono;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private RolUsuario rol;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private EstadoUsuario estado;

    @Column(name = "fecha_creacion", nullable = false, updatable = false)
    private LocalDateTime fechaCreacion;

    @Column(name = "fecha_actualizacion")
    private LocalDateTime fechaActualizacion;

    @Column(name = "ultimo_acceso")
    private LocalDateTime ultimoAcceso;

    @OneToMany(mappedBy = "usuario", cascade = CascadeType.ALL, orphanRemoval = true)
    @BatchSize(size = 20)
    @Builder.Default
    private Set<Notificacion> notificaciones = new HashSet<>();

    /**
     * Método que se ejecuta antes de persistir la entidad.
     * Inicializa fechas y estado por defecto.
     */
    @PrePersist
    protected void onCreate() {
        this.fechaCreacion = LocalDateTime.now();
        if (this.estado == null) {
            this.estado = EstadoUsuario.ACTIVO;
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
     * Registra el último acceso del usuario.
     */
    public void registrarAcceso() {
        this.ultimoAcceso = LocalDateTime.now();
    }

    /**
     * Obtiene los roles del usuario para Spring Security.
     */
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority("ROLE_" + rol.name()));
    }

    @Override
    public String getUsername() {
        return this.email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return this.estado == EstadoUsuario.ACTIVO;
    }
}
