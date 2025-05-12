package com.talentmatch.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.talentmatch.model.entity.Reclutador;
import com.talentmatch.model.enums.EstadoUsuario;

/**
 * Repositorio para la entidad Reclutador.
 */
@Repository
public interface ReclutadorRepository extends JpaRepository<Reclutador, Long> {
    
    /**
     * Busca un reclutador por su email.
     * 
     * @param email Email del reclutador
     * @return Optional con el reclutador si existe, vacío en caso contrario
     */
    Optional<Reclutador> findByEmail(String email);
    
    /**
     * Verifica si existe un reclutador con el email especificado.
     * 
     * @param email Email a verificar
     * @return true si existe un reclutador con ese email, false en caso contrario
     */
    boolean existsByEmail(String email);
    
    /**
     * Busca reclutadores por su estado.
     * 
     * @param estado Estado del reclutador
     * @return Lista de reclutadores con el estado especificado
     */
    List<Reclutador> findByEstado(EstadoUsuario estado);
    
    /**
     * Busca reclutadores por departamento.
     * 
     * @param departamento Departamento a buscar
     * @return Lista de reclutadores del departamento especificado
     */
    List<Reclutador> findByDepartamentoContainingIgnoreCase(String departamento);
    
    /**
     * Busca reclutadores por cargo.
     * 
     * @param cargo Cargo a buscar
     * @return Lista de reclutadores con el cargo especificado
     */
    List<Reclutador> findByCargoContainingIgnoreCase(String cargo);
}
