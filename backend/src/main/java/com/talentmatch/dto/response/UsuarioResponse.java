package com.talentmatch.dto.response;

import java.time.LocalDateTime;

import com.talentmatch.model.enums.EstadoUsuario;
import com.talentmatch.model.enums.RolUsuario;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * DTO para respuestas con información de usuarios.
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UsuarioResponse {

    private Long id;
    private String email;
    private String nombre;
    private String apellido;
    private String urlFoto;
    private String telefono;
    private RolUsuario rol;
    private EstadoUsuario estado;
    private LocalDateTime fechaCreacion;
    private LocalDateTime fechaActualizacion;
    private LocalDateTime ultimoAcceso;
}
