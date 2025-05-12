package com.talentmatch.service.impl;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import com.talentmatch.model.entity.Usuario;
import com.talentmatch.service.SecurityService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

/**
 * Implementación del servicio de seguridad.
 * Proporciona métodos para verificar permisos y autorización.
 */
@Service
@RequiredArgsConstructor
@Slf4j
public class SecurityServiceImpl implements SecurityService {

    @Override
    public boolean esPropietario(Long id) {
        Long usuarioId = getUsuarioAutenticadoId();
        if (usuarioId == null) {
            return false;
        }
        return usuarioId.equals(id);
    }

    @Override
    public Long getUsuarioAutenticadoId() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication == null || !authentication.isAuthenticated() || 
                "anonymousUser".equals(authentication.getPrincipal())) {
            return null;
        }
        
        try {
            Usuario usuario = (Usuario) authentication.getPrincipal();
            return usuario.getId();
        } catch (ClassCastException e) {
            log.error("Error al obtener el usuario autenticado: {}", e.getMessage());
            return null;
        }
    }

    @Override
    public boolean tieneRol(String rol) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication == null || !authentication.isAuthenticated() || 
                "anonymousUser".equals(authentication.getPrincipal())) {
            return false;
        }
        
        String rolCompleto = "ROLE_" + rol;
        return authentication.getAuthorities().stream()
                .map(GrantedAuthority::getAuthority)
                .anyMatch(rolCompleto::equals);
    }
} 