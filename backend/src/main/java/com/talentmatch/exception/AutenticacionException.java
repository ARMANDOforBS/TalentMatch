package com.talentmatch.exception;

/**
 * Excepción que se lanza cuando ocurre un error durante el proceso de autenticación.
 */
public class AutenticacionException extends ExcepcionBase {
    
    private static final String CODIGO_ERROR = "ERROR_AUTENTICACION";
    
    /**
     * Constructor con mensaje de error.
     * 
     * @param mensaje Mensaje descriptivo del error
     */
    public AutenticacionException(String mensaje) {
        super(mensaje, CODIGO_ERROR);
    }
    
    /**
     * Constructor con mensaje y causa.
     * 
     * @param mensaje Mensaje descriptivo del error
     * @param causa Excepción que causó este error
     */
    public AutenticacionException(String mensaje, Throwable causa) {
        super(mensaje, causa, CODIGO_ERROR);
    }
}
