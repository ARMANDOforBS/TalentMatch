package com.talentmatch.controller;

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
import org.springframework.web.multipart.MultipartFile;

import com.talentmatch.dto.request.ActualizacionReclutadorRequest;
import com.talentmatch.dto.request.RegistroReclutadorRequest;
import com.talentmatch.dto.response.ReclutadorResponse;
import com.talentmatch.service.ReclutadorService;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

import java.util.List;

/**
 * Controlador REST para la gestión de reclutadores.
 */
@RestController
@RequestMapping("/api/reclutadores")
@RequiredArgsConstructor
public class ReclutadorController {

    private final ReclutadorService reclutadorService;

    /**
     * Registra un nuevo reclutador.
     * 
     * @param request DTO con la información del reclutador a registrar
     * @return ResponseEntity con el DTO del reclutador registrado
     */
    @PostMapping
    public ResponseEntity<ReclutadorResponse> registrarReclutador(@Valid @RequestBody RegistroReclutadorRequest request) {
        return ResponseEntity.status(HttpStatus.CREATED).body(reclutadorService.registrar(request));
    }

    /**
     * Obtiene un reclutador por su ID.
     * 
     * @param id ID del reclutador a buscar
     * @return ResponseEntity con el DTO del reclutador
     */
    @GetMapping("/{id}")
    @PreAuthorize("hasAnyRole('RECLUTADOR', 'CANDIDATO', 'ADMINISTRADOR') and (authentication.principal.id == #id or hasRole('ADMINISTRADOR'))")
    public ResponseEntity<ReclutadorResponse> obtenerReclutadorPorId(@PathVariable Long id) {
        return ResponseEntity.ok(reclutadorService.buscarPorId(id));
    }

    /**
     * Obtiene un reclutador por su email.
     * 
     * @param email Email del reclutador a buscar
     * @return ResponseEntity con el DTO del reclutador
     */
    @GetMapping("/email/{email}")
    @PreAuthorize("hasRole('ADMINISTRADOR')")
    public ResponseEntity<ReclutadorResponse> obtenerReclutadorPorEmail(@PathVariable String email) {
        return ResponseEntity.ok(reclutadorService.buscarPorEmail(email));
    }

    /**
     * Actualiza la información de un reclutador.
     * 
     * @param id ID del reclutador a actualizar
     * @param request DTO con la información actualizada
     * @return ResponseEntity con el DTO del reclutador actualizado
     */
    @PutMapping("/{id}")
    @PreAuthorize("hasAnyRole('RECLUTADOR', 'ADMINISTRADOR') and (authentication.principal.id == #id or hasRole('ADMINISTRADOR'))")
    public ResponseEntity<ReclutadorResponse> actualizarReclutador(
            @PathVariable Long id,
            @Valid @RequestBody ActualizacionReclutadorRequest request) {
        return ResponseEntity.ok(reclutadorService.actualizar(id, request));
    }

    /**
     * Actualiza la foto de perfil de un reclutador.
     * 
     * @param id ID del reclutador
     * @param fotoPerfil Archivo de foto de perfil
     * @return ResponseEntity con la URL de la foto de perfil subida
     */
    @PostMapping("/{id}/foto-perfil")
    @PreAuthorize("hasAnyRole('RECLUTADOR', 'ADMINISTRADOR') and (authentication.principal.id == #id or hasRole('ADMINISTRADOR'))")
    public ResponseEntity<String> actualizarFotoPerfil(
            @PathVariable Long id,
            @RequestParam("archivo") MultipartFile fotoPerfil) {
        return ResponseEntity.ok(reclutadorService.actualizarFotoPerfil(id, fotoPerfil));
    }

    /**
     * Busca reclutadores por departamento.
     * 
     * @param departamento Departamento a buscar
     * @return ResponseEntity con la lista de reclutadores del departamento
     */
    @GetMapping("/buscar")
    @PreAuthorize("hasAnyRole('RECLUTADOR', 'ADMINISTRADOR')")
    public ResponseEntity<java.util.List<ReclutadorResponse>> buscarPorDepartamento(
            @RequestParam String departamento) {
        return ResponseEntity.ok(reclutadorService.buscarPorDepartamento(departamento));
    }

    /**
     * Lista todos los reclutadores activos.
     * 
     * @return ResponseEntity con la lista de DTOs de reclutadores
     */
    @GetMapping
    @PreAuthorize("hasAnyRole('RECLUTADOR', 'CANDIDATO', 'ADMINISTRADOR')")
    public ResponseEntity<List<ReclutadorResponse>> listarReclutadores() {
        return ResponseEntity.ok(reclutadorService.listarTodos());
    }
} 