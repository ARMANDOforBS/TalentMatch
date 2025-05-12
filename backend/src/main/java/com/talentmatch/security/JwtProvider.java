package com.talentmatch.security;

import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

import com.talentmatch.exception.AutenticacionException;
import com.talentmatch.model.entity.Usuario;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.UnsupportedJwtException;
import io.jsonwebtoken.security.Keys;
import io.jsonwebtoken.security.SignatureException;

import lombok.extern.slf4j.Slf4j;

import javax.annotation.PostConstruct;

/**
 * Componente para la generación y validación de tokens JWT.
 */
@Component
@Slf4j
public class JwtProvider {

    @Value("${jwt.secret}")
    private String jwtSecret;

    @Value("${jwt.expiration}")
    private long jwtExpiration;
    
    private Key key;
    
    @PostConstruct
    public void init() {
        // Generar clave segura a partir del secreto configurado
        this.key = Keys.hmacShaKeyFor(jwtSecret.getBytes());
    }

    /**
     * Genera un token JWT para un usuario autenticado.
     * 
     * @param authentication Objeto de autenticación
     * @return Token JWT generado
     */
    public String generateToken(Authentication authentication) {
        Usuario usuario = (Usuario) authentication.getPrincipal();
        
        Date now = new Date();
        Date expiryDate = new Date(now.getTime() + jwtExpiration);
        
        return Jwts.builder()
                .setSubject(Long.toString(usuario.getId()))
                .claim("email", usuario.getEmail())
                .claim("rol", usuario.getRol().name())
                .setIssuedAt(now)
                .setExpiration(expiryDate)
                .signWith(key, SignatureAlgorithm.HS512)
                .compact();
    }

    /**
     * Genera un token JWT para un usuario.
     * 
     * @param usuario Entidad de usuario
     * @return Token JWT generado
     */
    public String generateToken(Usuario usuario) {
        return generateToken(usuario.getEmail());
    }

    /**
     * Genera un token JWT a partir del ID del usuario.
     * 
     * @param usuarioId ID del usuario
     * @return Token JWT generado
     */
    public String generateTokenForUserId(Long usuarioId) {
        Map<String, Object> claims = new HashMap<>();
        claims.put("userId", usuarioId);
        return doGenerateToken(claims, usuarioId.toString());
    }

    /**
     * Genera un token JWT a partir del nombre de usuario.
     * 
     * @param username Nombre de usuario (normalmente email)
     * @return Token JWT generado
     */
    private String generateToken(String username) {
        Map<String, Object> claims = new HashMap<>();
        return doGenerateToken(claims, username);
    }

    /**
     * Proceso interno de generación de token.
     * 
     * @param claims Datos adicionales para incluir en el token
     * @param subject Sujeto del token (normalmente username o ID)
     * @return Token JWT generado
     */
    private String doGenerateToken(Map<String, Object> claims, String subject) {
        return Jwts.builder()
                .setClaims(claims)
                .setSubject(subject)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + jwtExpiration))
                .signWith(key, SignatureAlgorithm.HS512)
                .compact();
    }

    /**
     * Extrae el ID de usuario de un token JWT.
     * 
     * @param token Token JWT
     * @return ID del usuario
     */
    public Long getUserIdFromToken(String token) {
        Claims claims = Jwts.parserBuilder()
                .setSigningKey(key)
                .build()
                .parseClaimsJws(token)
                .getBody();
        
        return Long.parseLong(claims.getSubject());
    }

    /**
     * Valida un token JWT.
     * 
     * @param token Token JWT a validar
     * @return true si el token es válido, false en caso contrario
     */
    public boolean validateToken(String token) {
        try {
            Jwts.parserBuilder()
                .setSigningKey(key)
                .build()
                .parseClaimsJws(token);
            return true;
        } catch (SignatureException ex) {
            log.error("Firma JWT inválida");
            throw new AutenticacionException("Firma JWT inválida");
        } catch (MalformedJwtException ex) {
            log.error("Token JWT inválido");
            throw new AutenticacionException("Token JWT inválido");
        } catch (ExpiredJwtException ex) {
            log.error("Token JWT expirado");
            throw new AutenticacionException("Token JWT expirado");
        } catch (UnsupportedJwtException ex) {
            log.error("Token JWT no soportado");
            throw new AutenticacionException("Token JWT no soportado");
        } catch (IllegalArgumentException ex) {
            log.error("Claims JWT vacíos");
            throw new AutenticacionException("Claims JWT vacíos");
        }
    }

    /**
     * Extrae el nombre de usuario del token.
     * 
     * @param token Token JWT
     * @return Nombre de usuario
     */
    public String getUsernameFromToken(String token) {
        return getClaimFromToken(token, Claims::getSubject);
    }

    /**
     * Extrae la fecha de expiración del token.
     * 
     * @param token Token JWT
     * @return Fecha de expiración
     */
    public Date getExpirationDateFromToken(String token) {
        return getClaimFromToken(token, Claims::getExpiration);
    }

    /**
     * Extrae un claim específico del token.
     * 
     * @param <T> Tipo de dato del claim
     * @param token Token JWT
     * @param claimsResolver Función para extraer el claim deseado
     * @return Claim extraído
     */
    private <T> T getClaimFromToken(String token, Function<Claims, T> claimsResolver) {
        final Claims claims = getAllClaimsFromToken(token);
        return claimsResolver.apply(claims);
    }

    /**
     * Extrae todos los claims del token.
     * 
     * @param token Token JWT
     * @return Claims del token
     */
    private Claims getAllClaimsFromToken(String token) {
        return Jwts.parserBuilder()
                .setSigningKey(key)
                .build()
                .parseClaimsJws(token)
                .getBody();
    }
} 