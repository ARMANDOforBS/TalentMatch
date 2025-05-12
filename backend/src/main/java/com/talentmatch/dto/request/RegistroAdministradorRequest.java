package com.talentmatch.dto.request;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * DTO para el registro de administradores.
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class RegistroAdministradorRequest {

    @NotBlank(message = "El email es obligatorio")
    @Email(message = "El formato del email no es válido")
    private String email;
    
    @NotBlank(message = "La contraseña es obligatoria")
    @Size(min = 8, message = "La contraseña debe tener al menos 8 caracteres")
    @Pattern(regexp = "^(?=.*[0-9])(?=.*[a-zA-Z]).*$", 
             message = "La contraseña debe contener al menos un número y una letra")
    private String password;
    
    @NotBlank(message = "La confirmación de contraseña es obligatoria")
    private String confirmacionPassword;
    
    @NotBlank(message = "El nombre es obligatorio")
    private String nombre;
    
    @NotBlank(message = "El apellido es obligatorio")
    private String apellido;
    
    @Pattern(regexp = "^\\+?[0-9]{9,15}$", message = "El formato del teléfono no es válido")
    private String telefono;
}
