package com.talentmatch.controller;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.talentmatch.dto.request.ActualizacionCandidatoRequest;
import com.talentmatch.dto.request.RegistroCandidatoRequest;
import com.talentmatch.dto.response.CandidatoResponse;
import com.talentmatch.dto.response.PaginaResponse;
import com.talentmatch.service.CandidatoService;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

import java.util.List;

/**
 * Controlador REST para la gestión de candidatos.
 */
@RestController
@RequestMapping("/api/candidatos")
@RequiredArgsConstructor
public class CandidatoController {

    private final CandidatoService candidatoService;

    /**
     * Registra un nuevo candidato.
     * 
     * @param request DTO con la información del candidato a registrar
     * @return ResponseEntity con el DTO del candidato registrado
     */
    @PostMapping
    public ResponseEntity<CandidatoResponse> registrarCandidato(@Valid @RequestBody RegistroCandidatoRequest request) {
        return ResponseEntity.status(HttpStatus.CREATED).body(candidatoService.registrar(request));
    }

    /**
     * Obtiene un candidato por su ID.
     * 
     * @param id ID del candidato a buscar
     * @return ResponseEntity con el DTO del candidato
     */
    @GetMapping("/{id}")
    @PreAuthorize("hasAnyRole('CANDIDATO', 'RECLUTADOR', 'ADMINISTRADOR') and (authentication.principal.id == #id or hasRole('ADMINISTRADOR'))")
    public ResponseEntity<CandidatoResponse> obtenerCandidatoPorId(@PathVariable Long id) {
        return ResponseEntity.ok(candidatoService.buscarPorId(id));
    }

    /**
     * Actualiza la información de un candidato.
     * 
     * @param id ID del candidato a actualizar
     * @param request DTO con la información actualizada
     * @return ResponseEntity con el DTO del candidato actualizado
     */
    @PutMapping("/{id}")
    @PreAuthorize("hasAnyRole('CANDIDATO', 'ADMINISTRADOR') and (authentication.principal.id == #id or hasRole('ADMINISTRADOR'))")
    public ResponseEntity<CandidatoResponse> actualizarCandidato(
            @PathVariable Long id,
            @Valid @RequestBody ActualizacionCandidatoRequest request) {
        return ResponseEntity.ok(candidatoService.actualizar(id, request));
    }

    /**
     * Sube el currículum de un candidato.
     * 
     * @param id ID del candidato
     * @param curriculum Archivo de currículum
     * @return ResponseEntity con la URL del currículum subido
     */
    @PostMapping("/{id}/curriculum")
    @PreAuthorize("hasAnyRole('CANDIDATO', 'ADMINISTRADOR') and (authentication.principal.id == #id or hasRole('ADMINISTRADOR'))")
    public ResponseEntity<String> subirCurriculum(
            @PathVariable Long id,
            @RequestParam("archivo") MultipartFile curriculum) {
        return ResponseEntity.ok(candidatoService.subirCurriculum(id, curriculum));
    }

    /**
     * Agrega una vacante a favoritos.
     * 
     * @param candidatoId ID del candidato
     * @param vacanteId ID de la vacante
     * @return ResponseEntity con el resultado de la operación
     */
    @PostMapping("/{candidatoId}/favoritos/{vacanteId}")
    @PreAuthorize("hasAnyRole('CANDIDATO', 'ADMINISTRADOR') and (authentication.principal.id == #candidatoId or hasRole('ADMINISTRADOR'))")
    public ResponseEntity<Boolean> agregarVacanteFavorita(
            @PathVariable Long candidatoId,
            @PathVariable Long vacanteId) {
        return ResponseEntity.ok(candidatoService.agregarVacanteFavorita(candidatoId, vacanteId));
    }

    /**
     * Elimina una vacante de favoritos.
     * 
     * @param candidatoId ID del candidato
     * @param vacanteId ID de la vacante
     * @return ResponseEntity con el resultado de la operación
     */
    @DeleteMapping("/{candidatoId}/favoritos/{vacanteId}")
    @PreAuthorize("hasAnyRole('CANDIDATO', 'ADMINISTRADOR') and (authentication.principal.id == #candidatoId or hasRole('ADMINISTRADOR'))")
    public ResponseEntity<Boolean> eliminarVacanteFavorita(
            @PathVariable Long candidatoId,
            @PathVariable Long vacanteId) {
        return ResponseEntity.ok(candidatoService.eliminarVacanteFavorita(candidatoId, vacanteId));
    }

    /**
     * Verifica si una vacante está en favoritos.
     * 
     * @param candidatoId ID del candidato
     * @param vacanteId ID de la vacante
     * @return ResponseEntity con el resultado de la verificación
     */
    @GetMapping("/{candidatoId}/favoritos/{vacanteId}")
    @PreAuthorize("hasAnyRole('CANDIDATO', 'ADMINISTRADOR') and (authentication.principal.id == #candidatoId or hasRole('ADMINISTRADOR'))")
    public ResponseEntity<Boolean> esVacanteFavorita(
            @PathVariable Long candidatoId,
            @PathVariable Long vacanteId) {
        return ResponseEntity.ok(candidatoService.esVacanteFavorita(candidatoId, vacanteId));
    }

    /**
     * Busca candidatos por título profesional con paginación.
     * 
     * @param tituloProfesional Título profesional a buscar
     * @param pagina Número de página (0-based)
     * @param tamanio Tamaño de la página
     * @return ResponseEntity con la página de candidatos
     */
    @GetMapping("/buscar")
    @PreAuthorize("hasAnyRole('RECLUTADOR', 'ADMINISTRADOR')")
    public ResponseEntity<PaginaResponse<CandidatoResponse>> buscarPorTituloProfesional(
            @RequestParam String tituloProfesional,
            @RequestParam(defaultValue = "0") int pagina,
            @RequestParam(defaultValue = "10") int tamanio) {
        
        Pageable pageable = PageRequest.of(pagina, tamanio, Sort.by("id").descending());
        Page<CandidatoResponse> paginaCandidatos = candidatoService.buscarPorTituloProfesional(tituloProfesional, pageable);
        
        PaginaResponse<CandidatoResponse> respuesta = new PaginaResponse<>(
                paginaCandidatos.getContent(),
                paginaCandidatos.getNumber(),
                paginaCandidatos.getSize(),
                paginaCandidatos.getTotalElements(),
                paginaCandidatos.getTotalPages(),
                paginaCandidatos.isFirst(),
                paginaCandidatos.isLast());
        
        return ResponseEntity.ok(respuesta);
    }

    /**
     * Lista todos los candidatos activos.
     * 
     * @return ResponseEntity con la lista de DTOs de candidatos
     */
    @GetMapping
    @PreAuthorize("hasAnyRole('RECLUTADOR', 'ADMINISTRADOR')")
    public ResponseEntity<List<CandidatoResponse>> listarCandidatos() {
        return ResponseEntity.ok(candidatoService.listarTodos());
    }
} 