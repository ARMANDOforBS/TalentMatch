package com.talentmatch.repository;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.talentmatch.model.entity.Candidato;
import com.talentmatch.model.entity.Reclutador;
import com.talentmatch.model.entity.Vacante;
import com.talentmatch.model.enums.EstadoVacante;

/**
 * Repositorio para la entidad Vacante.
 */
@Repository
public interface VacanteRepository extends JpaRepository<Vacante, Long> {
    
    /**
     * Busca vacantes por su estado.
     * 
     * @param estado Estado de la vacante
     * @return Lista de vacantes con el estado especificado
     */
    List<Vacante> findByEstado(EstadoVacante estado);
    
    /**
     * Busca vacantes por su estado con paginación.
     * 
     * @param estado Estado de la vacante
     * @param pageable Configuración de paginación
     * @return Página de vacantes con el estado especificado
     */
    Page<Vacante> findByEstado(EstadoVacante estado, Pageable pageable);
    
    /**
     * Busca vacantes activas (publicadas).
     * 
     * @return Lista de vacantes activas
     */
    @Query("SELECT v FROM Vacante v WHERE v.estado = :estado")
    List<Vacante> findByEstadoActivo(@Param("estado") EstadoVacante estado);
    
    /**
     * Método alternativo para buscar vacantes activas utilizando el método derivado.
     * Para reemplazar el método findDestacadas() que hacía referencia a un campo inexistente.
     * 
     * @return Lista de vacantes activas
     */
    List<Vacante> findByEstadoOrderByFechaCreacionDesc(EstadoVacante estado);
    
    /**
     * Busca vacantes por reclutador.
     * 
     * @param reclutador Reclutador que publicó las vacantes
     * @return Lista de vacantes publicadas por el reclutador especificado
     */
    List<Vacante> findByReclutador(Reclutador reclutador);
    
    /**
     * Busca vacantes por reclutador y estado.
     * 
     * @param reclutador Reclutador que publicó las vacantes
     * @param estado Estado de las vacantes
     * @return Lista de vacantes publicadas por el reclutador y con el estado especificados
     */
    List<Vacante> findByReclutadorAndEstado(Reclutador reclutador, EstadoVacante estado);
    
    /**
     * Busca vacantes por título.
     * 
     * @param titulo Título a buscar
     * @return Lista de vacantes que contienen el título especificado
     */
    List<Vacante> findByTituloContainingIgnoreCase(String titulo);
    
    /**
     * Busca vacantes por título con paginación.
     * 
     * @param titulo Título a buscar
     * @param pageable Configuración de paginación
     * @return Página de vacantes que contienen el título especificado
     */
    Page<Vacante> findByTituloContainingIgnoreCase(String titulo, Pageable pageable);
    
    /**
     * Busca vacantes por área.
     * 
     * @param area Área a buscar
     * @return Lista de vacantes del área especificada
     */
    List<Vacante> findByAreaContainingIgnoreCase(String area);
    
    /**
     * Busca vacantes por ubicación.
     * 
     * @param ubicacion Ubicación a buscar
     * @return Lista de vacantes en la ubicación especificada
     */
    List<Vacante> findByUbicacionContainingIgnoreCase(String ubicacion);
    
    /**
     * Busca vacantes por modalidad.
     * 
     * @param modalidad Modalidad a buscar
     * @return Lista de vacantes con la modalidad especificada
     */
    List<Vacante> findByModalidadContainingIgnoreCase(String modalidad);
    
    /**
     * Busca vacantes por tipo de contrato.
     * 
     * @param tipoContrato Tipo de contrato a buscar
     * @return Lista de vacantes con el tipo de contrato especificado
     */
    List<Vacante> findByTipoContratoContainingIgnoreCase(String tipoContrato);
    
    /**
     * Busca vacantes con experiencia requerida menor o igual a la especificada.
     * 
     * @param experiencia Experiencia máxima requerida
     * @return Lista de vacantes con experiencia requerida menor o igual a la especificada
     */
    List<Vacante> findByExperienciaRequeridaLessThanEqual(Integer experiencia);
    
    /**
     * Busca vacantes por habilidades requeridas.
     * 
     * @param habilidad Habilidad a buscar
     * @return Lista de vacantes que requieren la habilidad especificada
     */
    List<Vacante> findByHabilidadesRequeridasContainingIgnoreCase(String habilidad);
    
    /**
     * Busca vacantes publicadas después de la fecha especificada.
     * 
     * @param fecha Fecha a partir de la cual buscar
     * @return Lista de vacantes publicadas después de la fecha especificada
     */
    List<Vacante> findByFechaPublicacionGreaterThanEqual(LocalDate fecha);
    
    /**
     * Busca vacantes que cierran antes de la fecha especificada.
     * 
     * @param fecha Fecha límite de cierre
     * @return Lista de vacantes que cierran antes de la fecha especificada
     */
    List<Vacante> findByFechaCierreLessThanEqual(LocalDate fecha);
    
    /**
     * Busca vacantes favoritas de un candidato.
     * 
     * @param candidato Candidato a buscar sus favoritos
     * @return Lista de vacantes favoritas del candidato
     */
    @Query("SELECT v FROM Vacante v JOIN v.candidatosFavoritos c WHERE c = :candidato")
    List<Vacante> findByFavoritoDe(@Param("candidato") Candidato candidato);
    
    /**
     * Busca vacantes por múltiples criterios.
     * 
     * @param titulo Título a buscar
     * @param area Área a buscar
     * @param ubicacion Ubicación a buscar
     * @param estado Estado de las vacantes a buscar (por defecto ACTIVA)
     * @return Lista de vacantes que cumplen con los criterios especificados
     */
    @Query("SELECT v FROM Vacante v WHERE v.estado = :estado AND " +
           "(:titulo IS NULL OR LOWER(v.titulo) LIKE LOWER(CONCAT('%', :titulo, '%'))) AND " +
           "(:area IS NULL OR LOWER(v.area) LIKE LOWER(CONCAT('%', :area, '%'))) AND " +
           "(:ubicacion IS NULL OR LOWER(v.ubicacion) LIKE LOWER(CONCAT('%', :ubicacion, '%')))")
    List<Vacante> buscarPorCriterios(
            @Param("titulo") String titulo,
            @Param("area") String area,
            @Param("ubicacion") String ubicacion,
            @Param("estado") EstadoVacante estado);
    
    /**
     * Busca vacantes por reclutador con paginación.
     * 
     * @param reclutadorId ID del reclutador
     * @param pageable Configuración de paginación
     * @return Página de vacantes publicadas por el reclutador
     */
    @Query("SELECT v FROM Vacante v WHERE v.reclutador.id = :reclutadorId")
    Page<Vacante> findByReclutadorId(@Param("reclutadorId") Long reclutadorId, Pageable pageable);
}
