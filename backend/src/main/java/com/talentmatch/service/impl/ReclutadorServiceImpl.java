package com.talentmatch.service.impl;

import java.util.List;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import com.talentmatch.dto.request.ActualizacionReclutadorRequest;
import com.talentmatch.dto.request.RegistroReclutadorRequest;
import com.talentmatch.dto.response.ReclutadorResponse;
import com.talentmatch.exception.RecursoNoEncontradoException;
import com.talentmatch.exception.ValidacionException;
import com.talentmatch.mapper.ReclutadorMapper;
import com.talentmatch.model.entity.Reclutador;
import com.talentmatch.repository.ReclutadorRepository;
import com.talentmatch.service.ReclutadorService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

/**
 * Implementación del servicio de reclutadores.
 */
@Service
@RequiredArgsConstructor
@Slf4j
public class ReclutadorServiceImpl implements ReclutadorService {

    private final ReclutadorRepository reclutadorRepository;
    private final ReclutadorMapper reclutadorMapper;
    private final PasswordEncoder passwordEncoder;

    @Override
    @Transactional
    public ReclutadorResponse registrar(RegistroReclutadorRequest request) {
        // Validar que el email no exista
        if (reclutadorRepository.existsByEmail(request.getEmail())) {
            throw new ValidacionException("El email ya está registrado");
        }
        
        // Encriptar contraseña
        String passwordEncriptada = passwordEncoder.encode(request.getPassword());
        request.setPassword(passwordEncriptada);
        
        // Convertir a entidad y persistir
        Reclutador reclutador = reclutadorMapper.toReclutador(request);
        reclutador = reclutadorRepository.save(reclutador);
        
        log.info("Reclutador registrado exitosamente con email: {}", reclutador.getEmail());
        
        return reclutadorMapper.toReclutadorResponse(reclutador);
    }

    @Override
    @Transactional(readOnly = true)
    public ReclutadorResponse buscarPorId(Long id) {
        Reclutador reclutador = buscarReclutadorPorId(id);
        return reclutadorMapper.toReclutadorResponse(reclutador);
    }

    @Override
    @Transactional(readOnly = true)
    public ReclutadorResponse buscarPorEmail(String email) {
        Reclutador reclutador = reclutadorRepository.findByEmail(email)
                .orElseThrow(() -> new RecursoNoEncontradoException("Reclutador no encontrado con email: " + email));
        
        return reclutadorMapper.toReclutadorResponse(reclutador);
    }

    @Override
    @Transactional
    public ReclutadorResponse actualizar(Long id, ActualizacionReclutadorRequest request) {
        Reclutador reclutador = buscarReclutadorPorId(id);
        
        reclutadorMapper.actualizarReclutador(request, reclutador);
        reclutador = reclutadorRepository.save(reclutador);
        
        log.info("Reclutador actualizado exitosamente con ID: {}", id);
        
        return reclutadorMapper.toReclutadorResponse(reclutador);
    }

    @Override
    @Transactional
    public String actualizarFotoPerfil(Long id, MultipartFile fotoPerfil) {
        // TODO: Implementar lógica para subir la foto a un servicio de almacenamiento
        // y actualizar la URL en el reclutador
        throw new UnsupportedOperationException("Método no implementado");
    }

    @Override
    @Transactional(readOnly = true)
    public List<ReclutadorResponse> buscarPorDepartamento(String departamento) {
        List<Reclutador> reclutadores = reclutadorRepository.findByDepartamentoContainingIgnoreCase(departamento);
        return reclutadores.stream()
                .map(reclutadorMapper::toReclutadorResponse)
                .toList();
    }

    @Override
    @Transactional(readOnly = true)
    public List<ReclutadorResponse> listarTodos() {
        List<Reclutador> reclutadores = reclutadorRepository.findAll();
        return reclutadores.stream()
                .map(reclutadorMapper::toReclutadorResponse)
                .toList();
    }

    @Override
    @Transactional(readOnly = true)
    public Reclutador buscarReclutadorPorId(Long id) {
        return reclutadorRepository.findById(id)
                .orElseThrow(() -> new RecursoNoEncontradoException("Reclutador no encontrado con ID: " + id));
    }
} 