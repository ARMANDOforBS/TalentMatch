package com.talentmatch.service;

/**
 * Interfaz para el servicio de seguridad.
 * Proporciona métodos para verificar permisos y autorización.
 */
public interface SecurityService {

    /**
     * Verifica si el usuario autenticado es el propietario del recurso.
     * 
     * @param id ID del recurso a verificar
     * @return true si el usuario autenticado es el propietario, false en caso contrario
     */
    boolean esPropietario(Long id);

    /**
     * Obtiene el ID del usuario autenticado actualmente.
     * 
     * @return ID del usuario autenticado o null si no hay usuario autenticado
     */
    Long getUsuarioAutenticadoId();

    /**
     * Verifica si el usuario autenticado tiene el rol especificado.
     * 
     * @param rol Nombre del rol a verificar
     * @return true si el usuario tiene el rol, false en caso contrario
     */
    boolean tieneRol(String rol);
} 