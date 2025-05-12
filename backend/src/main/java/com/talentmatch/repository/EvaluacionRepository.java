package com.talentmatch.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.talentmatch.model.entity.Evaluacion;
import com.talentmatch.model.entity.Respuesta;

/**
 * Repositorio para la entidad Evaluación.
 */
@Repository
public interface EvaluacionRepository extends JpaRepository<Evaluacion, Long> {
    
    /**
     * Busca una evaluación por respuesta.
     * 
     * @param respuesta Respuesta asociada a la evaluación
     * @return Optional con la evaluación si existe, vacío en caso contrario
     */
    Optional<Evaluacion> findByRespuesta(Respuesta respuesta);
    
    /**
     * Verifica si existe una evaluación para una respuesta.
     * 
     * @param respuesta Respuesta a verificar
     * @return true si existe una evaluación para la respuesta, false en caso contrario
     */
    boolean existsByRespuesta(Respuesta respuesta);
    
    /**
     * Busca evaluaciones por si fueron generadas por IA.
     * 
     * @param generadaPorIA Indica si las evaluaciones fueron generadas por IA
     * @return Lista de evaluaciones según si fueron generadas por IA
     */
    List<Evaluacion> findByGeneradaPorIA(Boolean generadaPorIA);
    
    /**
     * Busca evaluaciones con puntuación mayor o igual a la especificada.
     * 
     * @param puntuacionMinima Puntuación mínima a buscar
     * @return Lista de evaluaciones con puntuación mayor o igual a la especificada
     */
    List<Evaluacion> findByPuntuacionGreaterThanEqual(Integer puntuacionMinima);
    
    /**
     * Busca evaluaciones con puntuación menor o igual a la especificada.
     * 
     * @param puntuacionMaxima Puntuación máxima a buscar
     * @return Lista de evaluaciones con puntuación menor o igual a la especificada
     */
    List<Evaluacion> findByPuntuacionLessThanEqual(Integer puntuacionMaxima);
}
