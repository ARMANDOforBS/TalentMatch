package com.talentmatch.exception;

/**
 * Clase abstracta base para todas las excepciones personalizadas del sistema TalentMatch.
 * Proporciona funcionalidad común para todas las excepciones de la aplicación.
 */
public abstract class ExcepcionBase extends RuntimeException {
    
    private final String codigo;
    
    /**
     * Constructor con mensaje de error y código.
     * 
     * @param mensaje Mensaje descriptivo del error
     * @param codigo Código único que identifica el tipo de error
     */
    protected ExcepcionBase(String mensaje, String codigo) {
        super(mensaje);
        this.codigo = codigo;
    }
    
    /**
     * Constructor con mensaje, causa y código.
     * 
     * @param mensaje Mensaje descriptivo del error
     * @param causa Excepción que causó este error
     * @param codigo Código único que identifica el tipo de error
     */
    protected ExcepcionBase(String mensaje, Throwable causa, String codigo) {
        super(mensaje, causa);
        this.codigo = codigo;
    }
    
    /**
     * Obtiene el código de error.
     * 
     * @return Código único que identifica el tipo de error
     */
    public String getCodigo() {
        return codigo;
    }
}
