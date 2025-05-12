package com.talentmatch.exception;

/**
 * Excepción que se lanza cuando un usuario intenta acceder a un recurso sin autorización.
 */
public class AccesoNoAutorizadoException extends ExcepcionBase {
    
    private static final String CODIGO_ERROR = "ACCESO_NO_AUTORIZADO";
    
    /**
     * Constructor con mensaje de error.
     * 
     * @param mensaje Mensaje descriptivo del error
     */
    public AccesoNoAutorizadoException(String mensaje) {
        super(mensaje, CODIGO_ERROR);
    }
    
    /**
     * Constructor con mensaje y causa.
     * 
     * @param mensaje Mensaje descriptivo del error
     * @param causa Excepción que causó este error
     */
    public AccesoNoAutorizadoException(String mensaje, Throwable causa) {
        super(mensaje, causa, CODIGO_ERROR);
    }
    
    /**
     * Constructor para acceso no autorizado a un recurso específico.
     * 
     * @param tipoRecurso Tipo de recurso al que se intentó acceder
     * @param id Identificador del recurso
     */
    public AccesoNoAutorizadoException(String tipoRecurso, Long id) {
        super("No tiene autorización para acceder a " + tipoRecurso + " con ID: " + id, CODIGO_ERROR);
    }
}
