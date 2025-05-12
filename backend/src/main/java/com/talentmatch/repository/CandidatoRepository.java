package com.talentmatch.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.talentmatch.model.entity.Candidato;
import com.talentmatch.model.entity.Vacante;
import com.talentmatch.model.enums.EstadoUsuario;

/**
 * Repositorio para la entidad Candidato.
 */
@Repository
public interface CandidatoRepository extends JpaRepository<Candidato, Long> {
    
    /**
     * Busca un candidato por su email.
     * 
     * @param email Email del candidato
     * @return Optional con el candidato si existe, vacío en caso contrario
     */
    Optional<Candidato> findByEmail(String email);
    
    /**
     * Verifica si existe un candidato con el email especificado.
     * 
     * @param email Email a verificar
     * @return true si existe un candidato con ese email, false en caso contrario
     */
    boolean existsByEmail(String email);
    
    /**
     * Busca candidatos por su estado.
     * 
     * @param estado Estado del candidato
     * @return Lista de candidatos con el estado especificado
     */
    List<Candidato> findByEstado(EstadoUsuario estado);
    
    /**
     * Busca candidatos por su estado con paginación.
     * 
     * @param estado Estado del candidato
     * @param pageable Configuración de paginación
     * @return Página de candidatos con el estado especificado
     */
    Page<Candidato> findByEstado(EstadoUsuario estado, Pageable pageable);
    
    /**
     * Busca candidatos que tienen una vacante específica como favorita.
     * 
     * @param vacante Vacante a buscar en favoritos
     * @return Lista de candidatos que tienen la vacante como favorita
     */
    @Query("SELECT c FROM Candidato c JOIN c.vacantesFavoritas v WHERE v = :vacante")
    List<Candidato> findByVacanteFavorita(@Param("vacante") Vacante vacante);
    
    /**
     * Busca candidatos que tienen una vacante específica como favorita con paginación.
     * 
     * @param vacante Vacante a buscar en favoritos
     * @param pageable Configuración de paginación
     * @return Página de candidatos que tienen la vacante como favorita
     */
    @Query("SELECT c FROM Candidato c JOIN c.vacantesFavoritas v WHERE v = :vacante")
    Page<Candidato> findByVacanteFavorita(@Param("vacante") Vacante vacante, Pageable pageable);
    
    /**
     * Busca candidatos por título profesional.
     * 
     * @param tituloProfesional Título profesional a buscar
     * @return Lista de candidatos con el título profesional especificado
     */
    List<Candidato> findByTituloProfesionalContainingIgnoreCase(String tituloProfesional);
    
    /**
     * Busca candidatos por título profesional con paginación.
     * 
     * @param tituloProfesional Título profesional a buscar
     * @param pageable Configuración de paginación
     * @return Página de candidatos con el título profesional especificado
     */
    Page<Candidato> findByTituloProfesionalContainingIgnoreCase(String tituloProfesional, Pageable pageable);
    
    /**
     * Busca candidatos por ubicación.
     * 
     * @param ubicacion Ubicación a buscar
     * @return Lista de candidatos con la ubicación especificada
     */
    List<Candidato> findByUbicacionContainingIgnoreCase(String ubicacion);
    
    /**
     * Busca candidatos por ubicación con paginación.
     * 
     * @param ubicacion Ubicación a buscar
     * @param pageable Configuración de paginación
     * @return Página de candidatos con la ubicación especificada
     */
    Page<Candidato> findByUbicacionContainingIgnoreCase(String ubicacion, Pageable pageable);
    
    /**
     * Busca candidatos por habilidades principales.
     * 
     * @param habilidad Habilidad a buscar
     * @return Lista de candidatos que tienen la habilidad especificada
     */
    List<Candidato> findByHabilidadesPrincipalesContainingIgnoreCase(String habilidad);
    
    /**
     * Busca candidatos por habilidades principales con paginación.
     * 
     * @param habilidad Habilidad a buscar
     * @param pageable Configuración de paginación
     * @return Página de candidatos que tienen la habilidad especificada
     */
    Page<Candidato> findByHabilidadesPrincipalesContainingIgnoreCase(String habilidad, Pageable pageable);
    
    /**
     * Busca candidatos con experiencia mayor o igual a la especificada.
     * 
     * @param anios Años de experiencia mínimos
     * @return Lista de candidatos con experiencia mayor o igual a la especificada
     */
    List<Candidato> findByExperienciaAniosGreaterThanEqual(Integer anios);
    
    /**
     * Busca candidatos con experiencia mayor o igual a la especificada con paginación.
     * 
     * @param anios Años de experiencia mínimos
     * @param pageable Configuración de paginación
     * @return Página de candidatos con experiencia mayor o igual a la especificada
     */
    Page<Candidato> findByExperienciaAniosGreaterThanEqual(Integer anios, Pageable pageable);
    
    /**
     * Busca candidatos con disponibilidad inmediata.
     * 
     * @return Lista de candidatos con disponibilidad inmediata
     */
    List<Candidato> findByDisponibilidadInmediataTrue();
    
    /**
     * Busca candidatos con disponibilidad inmediata con paginación.
     * 
     * @param pageable Configuración de paginación
     * @return Página de candidatos con disponibilidad inmediata
     */
    Page<Candidato> findByDisponibilidadInmediataTrue(Pageable pageable);
}
