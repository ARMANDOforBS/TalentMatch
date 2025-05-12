package com.talentmatch.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.talentmatch.model.entity.Pregunta;
import com.talentmatch.model.entity.PruebaTecnica;

/**
 * Repositorio para la entidad Pregunta.
 */
@Repository
public interface PreguntaRepository extends JpaRepository<Pregunta, Long> {
    
    /**
     * Busca preguntas por prueba técnica.
     * 
     * @param pruebaTecnica Prueba técnica asociada a las preguntas
     * @return Lista de preguntas de la prueba técnica
     */
    List<Pregunta> findByPruebaTecnica(PruebaTecnica pruebaTecnica);
    
    /**
     * Busca preguntas por prueba técnica ordenadas por orden.
     * 
     * @param pruebaTecnica Prueba técnica asociada a las preguntas
     * @return Lista de preguntas de la prueba técnica ordenadas por orden
     */
    List<Pregunta> findByPruebaTecnicaOrderByOrden(PruebaTecnica pruebaTecnica);
    
    /**
     * Busca preguntas por tipo de pregunta.
     * 
     * @param tipoPregunta Tipo de las preguntas
     * @return Lista de preguntas del tipo especificado
     */
    List<Pregunta> findByTipoPregunta(String tipoPregunta);
    
    /**
     * Busca preguntas por prueba técnica y tipo de pregunta.
     * 
     * @param pruebaTecnica Prueba técnica asociada a las preguntas
     * @param tipoPregunta Tipo de las preguntas
     * @return Lista de preguntas de la prueba técnica del tipo especificado
     */
    List<Pregunta> findByPruebaTecnicaAndTipoPregunta(PruebaTecnica pruebaTecnica, String tipoPregunta);
    
    /**
     * Cuenta el número de preguntas por prueba técnica.
     * 
     * @param pruebaTecnica Prueba técnica a contar sus preguntas
     * @return Número de preguntas de la prueba técnica
     */
    long countByPruebaTecnica(PruebaTecnica pruebaTecnica);
}
