package com.talentmatch.dto.response;

import java.time.LocalDateTime;

import com.talentmatch.model.enums.EstadoVacante;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * DTO para respuestas con información detallada de vacantes.
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class VacanteDetalleResponse {

    private Long id;
    private String titulo;
    private String descripcion;
    private String area;
    private String ubicacion;
    private String modalidad;
    private String tipoContrato;
    private Double salarioMinimo;
    private Double salarioMaximo;
    private Boolean mostrarSalario;
    private String experienciaRequerida;
    private String habilidadesRequeridas;
    private String requisitosAdicionales;
    private String beneficios;
    private LocalDateTime fechaPublicacion;
    private LocalDateTime fechaCierre;
    private EstadoVacante estado;
    private LocalDateTime fechaCreacion;
    private LocalDateTime fechaActualizacion;
    private ReclutadorResumidoResponse reclutador;
    private Integer totalPostulaciones;
}
