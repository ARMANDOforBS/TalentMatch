package com.talentmatch.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.talentmatch.dto.request.ActualizacionVacanteRequest;
import com.talentmatch.dto.request.CreacionVacanteRequest;
import com.talentmatch.dto.response.VacanteDetalleResponse;
import com.talentmatch.dto.response.VacanteResumenResponse;
import com.talentmatch.model.enums.EstadoVacante;
import com.talentmatch.service.VacanteService;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

/**
 * Controlador REST para la gestión de vacantes.
 */
@RestController
@RequestMapping("/api/vacantes")
@RequiredArgsConstructor
public class VacanteController {

    private final VacanteService vacanteService;

    /**
     * Crea una nueva vacante.
     * 
     * @param reclutadorId ID del reclutador que crea la vacante
     * @param request DTO con la información de la vacante a crear
     * @return ResponseEntity con el DTO de la vacante creada
     */
    @PostMapping
    @PreAuthorize("hasAnyRole('RECLUTADOR', 'ADMINISTRADOR') and (authentication.principal.id == #reclutadorId or hasRole('ADMINISTRADOR'))")
    public ResponseEntity<VacanteDetalleResponse> crearVacante(
            @RequestParam Long reclutadorId,
            @Valid @RequestBody CreacionVacanteRequest request) {
        return ResponseEntity.status(HttpStatus.CREATED).body(vacanteService.crear(reclutadorId, request));
    }

    /**
     * Obtiene una vacante por su ID.
     * 
     * @param id ID de la vacante a buscar
     * @return ResponseEntity con el DTO de la vacante
     */
    @GetMapping("/{id}")
    public ResponseEntity<VacanteDetalleResponse> obtenerVacantePorId(@PathVariable Long id) {
        return ResponseEntity.ok(vacanteService.buscarPorId(id));
    }

    /**
     * Actualiza la información de una vacante.
     * 
     * @param id ID de la vacante a actualizar
     * @param reclutadorId ID del reclutador que actualiza la vacante
     * @param request DTO con la información actualizada
     * @return ResponseEntity con el DTO de la vacante actualizada
     */
    @PutMapping("/{id}")
    @PreAuthorize("hasAnyRole('RECLUTADOR', 'ADMINISTRADOR') and (authentication.principal.id == #reclutadorId or hasRole('ADMINISTRADOR'))")
    public ResponseEntity<VacanteDetalleResponse> actualizarVacante(
            @PathVariable Long id,
            @RequestParam Long reclutadorId,
            @Valid @RequestBody ActualizacionVacanteRequest request) {
        return ResponseEntity.ok(vacanteService.actualizar(id, reclutadorId, request));
    }

    /**
     * Cambia el estado de una vacante.
     * 
     * @param id ID de la vacante
     * @param reclutadorId ID del reclutador que cambia el estado
     * @param estado Nuevo estado de la vacante
     * @return ResponseEntity con el DTO de la vacante actualizada
     */
    @PutMapping("/{id}/estado")
    @PreAuthorize("hasAnyRole('RECLUTADOR', 'ADMINISTRADOR') and (authentication.principal.id == #reclutadorId or hasRole('ADMINISTRADOR'))")
    public ResponseEntity<VacanteDetalleResponse> cambiarEstadoVacante(
            @PathVariable Long id,
            @RequestParam Long reclutadorId,
            @RequestParam EstadoVacante estado) {
        return ResponseEntity.ok(vacanteService.cambiarEstado(id, reclutadorId, estado));
    }

    /**
     * Busca vacantes por título.
     * 
     * @param titulo Título a buscar
     * @return ResponseEntity con la lista de vacantes
     */
    @GetMapping("/buscar/titulo")
    public ResponseEntity<List<VacanteResumenResponse>> buscarPorTitulo(@RequestParam String titulo) {
        return ResponseEntity.ok(vacanteService.buscarPorTitulo(titulo));
    }

    /**
     * Busca vacantes por ubicación.
     * 
     * @param ubicacion Ubicación a buscar
     * @return ResponseEntity con la lista de vacantes
     */
    @GetMapping("/buscar/ubicacion")
    public ResponseEntity<List<VacanteResumenResponse>> buscarPorUbicacion(@RequestParam String ubicacion) {
        return ResponseEntity.ok(vacanteService.buscarPorUbicacion(ubicacion));
    }

    /**
     * Busca vacantes por habilidad requerida.
     * 
     * @param habilidad Habilidad a buscar
     * @return ResponseEntity con la lista de vacantes
     */
    @GetMapping("/buscar/habilidad")
    public ResponseEntity<List<VacanteResumenResponse>> buscarPorHabilidad(@RequestParam String habilidad) {
        return ResponseEntity.ok(vacanteService.buscarPorHabilidad(habilidad));
    }

    /**
     * Busca vacantes por estado.
     * 
     * @param estado Estado a buscar
     * @return ResponseEntity con la lista de vacantes
     */
    @GetMapping("/buscar/estado")
    public ResponseEntity<List<VacanteResumenResponse>> buscarPorEstado(@RequestParam EstadoVacante estado) {
        return ResponseEntity.ok(vacanteService.buscarPorEstado(estado));
    }

    /**
     * Busca vacantes por reclutador.
     * 
     * @param reclutadorId ID del reclutador
     * @return ResponseEntity con la lista de vacantes
     */
    @GetMapping("/reclutador/{reclutadorId}")
    public ResponseEntity<List<VacanteResumenResponse>> buscarPorReclutador(@PathVariable Long reclutadorId) {
        return ResponseEntity.ok(vacanteService.buscarPorReclutador(reclutadorId));
    }

    /**
     * Busca vacantes activas.
     * 
     * @return ResponseEntity con la lista de vacantes activas
     */
    @GetMapping("/activas")
    public ResponseEntity<List<VacanteResumenResponse>> buscarVacantesActivas() {
        return ResponseEntity.ok(vacanteService.buscarVacantesActivas());
    }

    /**
     * Busca vacantes destacadas.
     * 
     * @return ResponseEntity con la lista de vacantes destacadas
     */
    @GetMapping("/destacadas")
    public ResponseEntity<List<VacanteResumenResponse>> buscarVacantesDestacadas() {
        return ResponseEntity.ok(vacanteService.buscarVacantesDestacadas());
    }

    /**
     * Busca vacantes recomendadas para un candidato.
     * 
     * @param candidatoId ID del candidato
     * @return ResponseEntity con la lista de vacantes recomendadas
     */
    @GetMapping("/recomendadas")
    @PreAuthorize("hasAnyRole('CANDIDATO', 'ADMINISTRADOR') and (authentication.principal.id == #candidatoId or hasRole('ADMINISTRADOR'))")
    public ResponseEntity<List<VacanteResumenResponse>> buscarVacantesRecomendadas(@RequestParam Long candidatoId) {
        return ResponseEntity.ok(vacanteService.buscarVacantesRecomendadas(candidatoId));
    }
} 