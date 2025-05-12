package com.talentmatch.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.talentmatch.model.entity.Candidato;
import com.talentmatch.model.entity.Postulacion;
import com.talentmatch.model.entity.Vacante;
import com.talentmatch.model.enums.EstadoPostulacion;

/**
 * Repositorio para la entidad Postulación.
 */
@Repository
public interface PostulacionRepository extends JpaRepository<Postulacion, Long> {
    
    /**
     * Busca postulaciones por candidato.
     * 
     * @param candidato Candidato que realizó las postulaciones
     * @return Lista de postulaciones del candidato
     */
    List<Postulacion> findByCandidato(Candidato candidato);
    
    /**
     * Busca postulaciones por vacante.
     * 
     * @param vacante Vacante a la que se postularon
     * @return Lista de postulaciones a la vacante
     */
    List<Postulacion> findByVacante(Vacante vacante);
    
    /**
     * Busca postulaciones por estado.
     * 
     * @param estado Estado de las postulaciones
     * @return Lista de postulaciones con el estado especificado
     */
    List<Postulacion> findByEstado(EstadoPostulacion estado);
    
    /**
     * Busca postulaciones por candidato y estado.
     * 
     * @param candidato Candidato que realizó las postulaciones
     * @param estado Estado de las postulaciones
     * @return Lista de postulaciones del candidato con el estado especificado
     */
    List<Postulacion> findByCandidatoAndEstado(Candidato candidato, EstadoPostulacion estado);
    
    /**
     * Busca postulaciones por vacante y estado.
     * 
     * @param vacante Vacante a la que se postularon
     * @param estado Estado de las postulaciones
     * @return Lista de postulaciones a la vacante con el estado especificado
     */
    List<Postulacion> findByVacanteAndEstado(Vacante vacante, EstadoPostulacion estado);
    
    /**
     * Busca una postulación por candidato y vacante.
     * 
     * @param candidato Candidato que realizó la postulación
     * @param vacante Vacante a la que se postuló
     * @return Optional con la postulación si existe, vacío en caso contrario
     */
    Optional<Postulacion> findByCandidatoAndVacante(Candidato candidato, Vacante vacante);
    
    /**
     * Verifica si existe una postulación por candidato y vacante.
     * 
     * @param candidato Candidato a verificar
     * @param vacante Vacante a verificar
     * @return true si existe una postulación del candidato a la vacante, false en caso contrario
     */
    boolean existsByCandidatoAndVacante(Candidato candidato, Vacante vacante);
    
    /**
     * Cuenta el número de postulaciones por vacante.
     * 
     * @param vacante Vacante a contar sus postulaciones
     * @return Número de postulaciones a la vacante
     */
    long countByVacante(Vacante vacante);
    
    /**
     * Cuenta el número de postulaciones por vacante y estado.
     * 
     * @param vacante Vacante a contar sus postulaciones
     * @param estado Estado de las postulaciones a contar
     * @return Número de postulaciones a la vacante con el estado especificado
     */
    long countByVacanteAndEstado(Vacante vacante, EstadoPostulacion estado);
    
    /**
     * Busca postulaciones por vacante ordenadas por puntuación de match de forma descendente.
     * 
     * @param vacante Vacante a buscar sus postulaciones
     * @return Lista de postulaciones ordenadas por puntuación de match
     */
    @Query("SELECT p FROM Postulacion p WHERE p.vacante = :vacante ORDER BY p.puntuacionMatch DESC")
    List<Postulacion> findByVacanteOrderByPuntuacionMatchDesc(@Param("vacante") Vacante vacante);
    
    /**
     * Busca postulaciones por vacante y estado ordenadas por puntuación de match de forma descendente.
     * 
     * @param vacante Vacante a buscar sus postulaciones
     * @param estado Estado de las postulaciones a buscar
     * @return Lista de postulaciones con el estado especificado ordenadas por puntuación de match
     */
    @Query("SELECT p FROM Postulacion p WHERE p.vacante = :vacante AND p.estado = :estado ORDER BY p.puntuacionMatch DESC")
    List<Postulacion> findByVacanteAndEstadoOrderByPuntuacionMatchDesc(
            @Param("vacante") Vacante vacante, 
            @Param("estado") EstadoPostulacion estado);
}
