package com.talentmatch.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.talentmatch.model.entity.Usuario;
import com.talentmatch.model.enums.EstadoUsuario;

/**
 * Repositorio para la entidad Usuario.
 */
@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
    
    /**
     * Busca un usuario por su email.
     * 
     * @param email Email del usuario
     * @return Optional con el usuario si existe, vacío en caso contrario
     */
    Optional<Usuario> findByEmail(String email);
    
    /**
     * Verifica si existe un usuario con el email especificado.
     * 
     * @param email Email a verificar
     * @return true si existe un usuario con ese email, false en caso contrario
     */
    boolean existsByEmail(String email);
    
    /**
     * Busca usuarios por su estado.
     * 
     * @param estado Estado del usuario
     * @return Lista de usuarios con el estado especificado
     */
    Iterable<Usuario> findByEstado(EstadoUsuario estado);
}
