package com.talentmatch.dto.request;

import java.time.LocalDate;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Past;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * DTO para solicitudes de registro de candidatos.
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class RegistroCandidatoRequest {

    @NotBlank(message = "El nombre es obligatorio")
    private String nombre;

    @NotBlank(message = "El apellido es obligatorio")
    private String apellido;

    @NotBlank(message = "El correo electrónico es obligatorio")
    @Email(message = "El formato del correo electrónico no es válido")
    private String email;

    @NotBlank(message = "La contraseña es obligatoria")
    @Size(min = 8, message = "La contraseña debe tener al menos 8 caracteres")
    private String password;

    @NotBlank(message = "La confirmación de contraseña es obligatoria")
    private String confirmacionPassword;

    private String telefono;

    @Past(message = "La fecha de nacimiento debe ser en el pasado")
    private LocalDate fechaNacimiento;

    private String tituloProfesional;

    private String resumenPerfil;

    private String ubicacion;

    private String linkedinUrl;

    private String githubUrl;

    private String portfolioUrl;

    private String habilidadesPrincipales;

    private Integer experienciaAnios;

    @NotNull(message = "La disponibilidad inmediata es obligatoria")
    private Boolean disponibilidadInmediata;
}
