package com.talentmatch.exception;

import java.util.HashMap;
import java.util.Map;

/**
 * Excepción que se lanza cuando ocurren errores de validación de datos.
 * Soporta múltiples errores por campo.
 */
public class ValidacionException extends ExcepcionBase {
    
    private static final String CODIGO_ERROR = "ERROR_VALIDACION";
    
    private final Map<String, String> errores;
    
    /**
     * Constructor con mensaje de error.
     * 
     * @param mensaje Mensaje descriptivo del error
     */
    public ValidacionException(String mensaje) {
        super(mensaje, CODIGO_ERROR);
        this.errores = new HashMap<>();
    }
    
    /**
     * Constructor con mensaje y errores específicos por campo.
     * 
     * @param mensaje Mensaje descriptivo del error
     * @param errores Mapa de errores por campo
     */
    public ValidacionException(String mensaje, Map<String, String> errores) {
        super(mensaje, CODIGO_ERROR);
        this.errores = errores;
    }
    
    /**
     * Constructor para un solo error de campo.
     * 
     * @param campo Nombre del campo con error
     * @param mensajeError Mensaje descriptivo del error para ese campo
     */
    public ValidacionException(String campo, String mensajeError) {
        super("Error de validación en campo: " + campo, CODIGO_ERROR);
        this.errores = new HashMap<>();
        this.errores.put(campo, mensajeError);
    }
    
    /**
     * Añade un error para un campo específico.
     * 
     * @param campo Nombre del campo con error
     * @param mensajeError Mensaje descriptivo del error para ese campo
     * @return La misma instancia de ValidacionException para encadenamiento
     */
    public ValidacionException agregarError(String campo, String mensajeError) {
        this.errores.put(campo, mensajeError);
        return this;
    }
    
    /**
     * Obtiene todos los errores de validación.
     * 
     * @return Mapa con los errores de validación por campo
     */
    public Map<String, String> getErrores() {
        return errores;
    }
    
    /**
     * Verifica si hay errores de validación.
     * 
     * @return true si hay errores, false en caso contrario
     */
    public boolean tieneErrores() {
        return !errores.isEmpty();
    }
}
