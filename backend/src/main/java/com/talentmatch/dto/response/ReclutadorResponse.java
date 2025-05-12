package com.talentmatch.dto.response;

import java.time.LocalDateTime;

import com.talentmatch.model.enums.EstadoUsuario;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * DTO para respuestas con información de reclutadores.
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ReclutadorResponse {

    private Long id;
    private String email;
    private String nombre;
    private String apellido;
    private String urlFoto;
    private String telefono;
    private EstadoUsuario estado;
    private LocalDateTime fechaCreacion;
    private LocalDateTime fechaActualizacion;
    private LocalDateTime ultimoAcceso;
    
    private String departamento;
    private String cargo;
    private String extensionTelefonica;
    private String descripcion;
    private Integer totalVacantes;
}
