package com.talentmatch.service;

import com.talentmatch.dto.request.AutenticacionRequest;
import com.talentmatch.dto.request.CambioPasswordRequest;
import com.talentmatch.dto.request.RegistroAdministradorRequest;
import com.talentmatch.dto.request.RegistroCandidatoRequest;
import com.talentmatch.dto.request.RegistroReclutadorRequest;
import com.talentmatch.dto.response.AutenticacionResponse;
import com.talentmatch.dto.response.CambioPasswordResponse;
import com.talentmatch.dto.response.UsuarioResponse;

/**
 * Interfaz para el servicio de autenticación.
 */
public interface AuthService {

    /**
     * Autentica a un usuario con sus credenciales.
     * 
     * @param request DTO AutenticacionRequest con las credenciales
     * @return DTO AutenticacionResponse con el token y la información del usuario
     */
    AutenticacionResponse autenticar(AutenticacionRequest request);

    /**
     * Registra un nuevo candidato.
     * 
     * @param request DTO RegistroCandidatoRequest con la información del candidato
     * @return DTO UsuarioResponse con la información del candidato registrado
     */
    UsuarioResponse registrarCandidato(RegistroCandidatoRequest request);

    /**
     * Registra un nuevo reclutador.
     * 
     * @param request DTO RegistroReclutadorRequest con la información del reclutador
     * @return DTO UsuarioResponse con la información del reclutador registrado
     */
    UsuarioResponse registrarReclutador(RegistroReclutadorRequest request);

    /**
     * Cambia la contraseña de un usuario.
     * 
     * @param usuarioId ID del usuario
     * @param request DTO CambioPasswordRequest con la información del cambio
     * @return DTO CambioPasswordResponse con el resultado de la operación
     */
    CambioPasswordResponse cambiarPassword(Long usuarioId, CambioPasswordRequest request);

    /**
     * Genera un nuevo token JWT para un usuario.
     * 
     * @param usuarioId ID del usuario
     * @return Nuevo token JWT
     */
    String generarToken(Long usuarioId);

    /**
     * Valida un token JWT.
     * 
     * @param token Token JWT a validar
     * @return ID del usuario si el token es válido, null en caso contrario
     */
    Long validarToken(String token);
    
    /**
     * Registra un nuevo administrador.
     * 
     * @param request DTO RegistroAdministradorRequest con la información del administrador
     * @return DTO UsuarioResponse con la información del administrador registrado
     */
    UsuarioResponse registrarAdministrador(RegistroAdministradorRequest request);
}
