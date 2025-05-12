package com.talentmatch.dto.request;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * DTO para solicitudes de registro de reclutadores.
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class RegistroReclutadorRequest {

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

    @NotBlank(message = "El departamento es obligatorio")
    private String departamento;

    @NotBlank(message = "El cargo es obligatorio")
    private String cargo;

    private String extensionTelefonica;

    private String descripcion;
}
