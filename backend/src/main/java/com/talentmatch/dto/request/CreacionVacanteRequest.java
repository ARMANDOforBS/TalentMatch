package com.talentmatch.dto.request;

import java.time.LocalDateTime;

import jakarta.validation.constraints.Future;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * DTO para solicitudes de creación de vacantes.
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CreacionVacanteRequest {

    @NotBlank(message = "El título es obligatorio")
    @Size(min = 5, max = 100, message = "El título debe tener entre 5 y 100 caracteres")
    private String titulo;

    @NotBlank(message = "La descripción es obligatoria")
    @Size(min = 50, max = 2000, message = "La descripción debe tener entre 50 y 2000 caracteres")
    private String descripcion;

    @NotBlank(message = "El área es obligatoria")
    @Size(max = 50, message = "El área no debe exceder los 50 caracteres")
    private String area;

    @NotBlank(message = "La ubicación es obligatoria")
    @Size(max = 100, message = "La ubicación no debe exceder los 100 caracteres")
    private String ubicacion;

    @NotBlank(message = "La modalidad es obligatoria")
    @Pattern(regexp = "^(PRESENCIAL|REMOTO|HIBRIDO)$", message = "La modalidad debe ser PRESENCIAL, REMOTO o HIBRIDO")
    private String modalidad;

    @NotBlank(message = "El tipo de contrato es obligatorio")
    @Pattern(regexp = "^(TIEMPO_COMPLETO|MEDIO_TIEMPO|PRACTICAS|FREELANCE)$", 
             message = "El tipo de contrato debe ser TIEMPO_COMPLETO, MEDIO_TIEMPO, PRACTICAS o FREELANCE")
    private String tipoContrato;

    @Min(value = 0, message = "El salario mínimo no puede ser negativo")
    private Double salarioMinimo;

    @Min(value = 0, message = "El salario máximo no puede ser negativo")
    private Double salarioMaximo;

    @NotNull(message = "Debe especificar si se muestra el salario")
    private Boolean mostrarSalario;

    @NotBlank(message = "La experiencia requerida es obligatoria")
    @Size(max = 100, message = "La experiencia requerida no debe exceder los 100 caracteres")
    private String experienciaRequerida;

    @NotBlank(message = "Las habilidades requeridas son obligatorias")
    @Size(max = 500, message = "Las habilidades requeridas no deben exceder los 500 caracteres")
    private String habilidadesRequeridas;

    @Size(max = 500, message = "Los requisitos adicionales no deben exceder los 500 caracteres")
    private String requisitosAdicionales;

    @Size(max = 500, message = "Los beneficios no deben exceder los 500 caracteres")
    private String beneficios;

    @NotNull(message = "La fecha de publicación es obligatoria")
    private LocalDateTime fechaPublicacion;

    @Future(message = "La fecha de cierre debe ser una fecha futura")
    private LocalDateTime fechaCierre;
}
