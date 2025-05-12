package com.talentmatch.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import com.talentmatch.dto.request.ActualizacionCandidatoRequest;
import com.talentmatch.dto.request.RegistroCandidatoRequest;
import com.talentmatch.dto.response.CandidatoResponse;
import com.talentmatch.exception.EntidadDuplicadaException;
import com.talentmatch.exception.OperacionInvalidaException;
import com.talentmatch.exception.RecursoNoEncontradoException;
import com.talentmatch.mapper.CandidatoMapper;
import com.talentmatch.model.entity.Candidato;
import com.talentmatch.model.entity.Vacante;
import com.talentmatch.repository.CandidatoRepository;
import com.talentmatch.repository.VacanteRepository;
import com.talentmatch.service.CandidatoService;
import com.talentmatch.service.StorageService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

/**
 * Implementación del servicio de candidatos.
 */
@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
@Slf4j
public class CandidatoServiceImpl implements CandidatoService {

    private final CandidatoRepository candidatoRepository;
    private final VacanteRepository vacanteRepository;
    private final CandidatoMapper candidatoMapper;
    private final StorageService storageService;

    @Override
    @Transactional
    public CandidatoResponse registrar(RegistroCandidatoRequest request) {
        // Validación de email único
        if (candidatoRepository.existsByEmail(request.getEmail())) {
            throw new EntidadDuplicadaException("Ya existe un candidato con el email: " + request.getEmail());
        }
        
        // Convertir DTO a entidad y persistir
        Candidato candidato = candidatoMapper.toCandidato(request);
        candidato = candidatoRepository.save(candidato);
        
        log.info("Candidato registrado con ID: {}", candidato.getId());
        
        return candidatoMapper.toCandidatoResponse(candidato);
    }

    @Override
    public CandidatoResponse buscarPorId(Long id) {
        Candidato candidato = buscarCandidatoPorId(id);
        return candidatoMapper.toCandidatoResponse(candidato);
    }

    @Override
    public CandidatoResponse buscarPorEmail(String email) {
        return candidatoRepository.findByEmail(email)
                .map(candidatoMapper::toCandidatoResponse)
                .orElseThrow(() -> new RecursoNoEncontradoException("No se encontró candidato con email: " + email));
    }

    @Override
    @Transactional
    @PreAuthorize("hasRole('ROLE_ADMIN') or @securityService.esPropietario(#id)")
    public CandidatoResponse actualizar(Long id, ActualizacionCandidatoRequest request) {
        Candidato candidato = buscarCandidatoPorId(id);
        
        candidatoMapper.actualizarCandidato(request, candidato);
        candidato = candidatoRepository.save(candidato);
        
        log.info("Candidato actualizado con ID: {}", candidato.getId());
        
        return candidatoMapper.toCandidatoResponse(candidato);
    }

    @Override
    @Transactional
    @PreAuthorize("hasRole('ROLE_ADMIN') or @securityService.esPropietario(#id)")
    public String subirCurriculum(Long id, MultipartFile curriculum) {
        Candidato candidato = buscarCandidatoPorId(id);
        
        // Validar tipo de archivo
        String contentType = curriculum.getContentType();
        if (contentType == null || (!contentType.equals("application/pdf") && !contentType.contains("msword") && 
                !contentType.contains("application/vnd.openxmlformats-officedocument.wordprocessingml.document"))) {
            throw new OperacionInvalidaException("El archivo debe ser un PDF o un documento de Word");
        }
        
        // Eliminar curriculum anterior si existe
        if (candidato.getUrlCurriculum() != null) {
            storageService.eliminarArchivo(candidato.getUrlCurriculum());
        }
        
        // Guardar nuevo curriculum
        String ruta = "curriculos/" + id + "_" + System.currentTimeMillis() + "_" + curriculum.getOriginalFilename();
        String url = storageService.subirArchivo(curriculum, ruta);
        
        candidato.setUrlCurriculum(url);
        candidatoRepository.save(candidato);
        
        log.info("Currículum subido para el candidato ID: {}", id);
        
        return url;
    }

    @Override
    @Transactional
    @PreAuthorize("hasRole('ROLE_CANDIDATO') and @securityService.esPropietario(#candidatoId)")
    public boolean agregarVacanteFavorita(Long candidatoId, Long vacanteId) {
        Candidato candidato = buscarCandidatoPorId(candidatoId);
        Vacante vacante = vacanteRepository.findById(vacanteId)
                .orElseThrow(() -> new RecursoNoEncontradoException("No se encontró vacante con ID: " + vacanteId));
        
        boolean resultado = candidato.agregarVacanteFavorita(vacante);
        candidatoRepository.save(candidato);
        
        log.info("Vacante ID: {} {} a favoritos del candidato ID: {}", 
                vacanteId, resultado ? "agregada" : "ya existe en", candidatoId);
        
        return resultado;
    }

    @Override
    @Transactional
    @PreAuthorize("hasRole('ROLE_CANDIDATO') and @securityService.esPropietario(#candidatoId)")
    public boolean eliminarVacanteFavorita(Long candidatoId, Long vacanteId) {
        Candidato candidato = buscarCandidatoPorId(candidatoId);
        Vacante vacante = vacanteRepository.findById(vacanteId)
                .orElseThrow(() -> new RecursoNoEncontradoException("No se encontró vacante con ID: " + vacanteId));
        
        boolean resultado = candidato.eliminarVacanteFavorita(vacante);
        candidatoRepository.save(candidato);
        
        log.info("Vacante ID: {} {} de favoritos del candidato ID: {}", 
                vacanteId, resultado ? "eliminada" : "no existe en", candidatoId);
        
        return resultado;
    }

    @Override
    public boolean esVacanteFavorita(Long candidatoId, Long vacanteId) {
        Candidato candidato = buscarCandidatoPorId(candidatoId);
        Vacante vacante = vacanteRepository.findById(vacanteId)
                .orElseThrow(() -> new RecursoNoEncontradoException("No se encontró vacante con ID: " + vacanteId));
        
        return candidato.esVacanteFavorita(vacante);
    }

    @Override
    public List<CandidatoResponse> buscarPorTituloProfesional(String tituloProfesional) {
        return candidatoRepository.findByTituloProfesionalContainingIgnoreCase(tituloProfesional)
                .stream()
                .map(candidatoMapper::toCandidatoResponse)
                .collect(Collectors.toList());
    }
    
    @Override
    public Page<CandidatoResponse> buscarPorTituloProfesional(String tituloProfesional, Pageable pageable) {
        return candidatoRepository.findByTituloProfesionalContainingIgnoreCase(tituloProfesional, pageable)
                .map(candidatoMapper::toCandidatoResponse);
    }

    @Override
    public List<CandidatoResponse> buscarPorUbicacion(String ubicacion) {
        return candidatoRepository.findByUbicacionContainingIgnoreCase(ubicacion)
                .stream()
                .map(candidatoMapper::toCandidatoResponse)
                .collect(Collectors.toList());
    }
    
    @Override
    public Page<CandidatoResponse> buscarPorUbicacion(String ubicacion, Pageable pageable) {
        return candidatoRepository.findByUbicacionContainingIgnoreCase(ubicacion, pageable)
                .map(candidatoMapper::toCandidatoResponse);
    }

    @Override
    public List<CandidatoResponse> buscarPorHabilidad(String habilidad) {
        return candidatoRepository.findByHabilidadesPrincipalesContainingIgnoreCase(habilidad)
                .stream()
                .map(candidatoMapper::toCandidatoResponse)
                .collect(Collectors.toList());
    }
    
    @Override
    public Page<CandidatoResponse> buscarPorHabilidad(String habilidad, Pageable pageable) {
        return candidatoRepository.findByHabilidadesPrincipalesContainingIgnoreCase(habilidad, pageable)
                .map(candidatoMapper::toCandidatoResponse);
    }

    @Override
    @Transactional(readOnly = true)
    public List<CandidatoResponse> listarTodos() {
        List<Candidato> candidatos = candidatoRepository.findAll();
        return candidatos.stream()
                .map(candidatoMapper::toCandidatoResponse)
                .toList();
    }

    @Override
    @Transactional(readOnly = true)
    public Candidato buscarCandidatoPorId(Long id) {
        return candidatoRepository.findById(id)
                .orElseThrow(() -> new RecursoNoEncontradoException("Candidato no encontrado con ID: " + id));
    }

    @Override
    @Transactional
    public String actualizarCurriculum(Long id, MultipartFile curriculum) {
        // TODO: Implementar lógica para subir el currículum a un servicio de almacenamiento
        // y actualizar la URL en el candidato
        throw new UnsupportedOperationException("Método no implementado");
    }
} 