package com.talentmatch.exception;

/**
 * Excepción que se lanza cuando se intenta realizar una operación inválida en el sistema.
 */
public class OperacionInvalidaException extends ExcepcionBase {
    
    private static final String CODIGO_ERROR = "OPERACION_INVALIDA";
    
    /**
     * Constructor con mensaje de error.
     * 
     * @param mensaje Mensaje descriptivo del error
     */
    public OperacionInvalidaException(String mensaje) {
        super(mensaje, CODIGO_ERROR);
    }
    
    /**
     * Constructor con mensaje y causa.
     * 
     * @param mensaje Mensaje descriptivo del error
     * @param causa Excepción que causó este error
     */
    public OperacionInvalidaException(String mensaje, Throwable causa) {
        super(mensaje, causa, CODIGO_ERROR);
    }
}
