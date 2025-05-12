package com.talentmatch.exception;

/**
 * Excepción que se lanza cuando ocurren errores específicos del proceso de postulación.
 */
public class PostulacionException extends ExcepcionBase {
    
    private static final String CODIGO_ERROR = "ERROR_POSTULACION";
    
    /**
     * Constructor con mensaje de error.
     * 
     * @param mensaje Mensaje descriptivo del error
     */
    public PostulacionException(String mensaje) {
        super(mensaje, CODIGO_ERROR);
    }
    
    /**
     * Constructor con mensaje y causa.
     * 
     * @param mensaje Mensaje descriptivo del error
     * @param causa Excepción que causó este error
     */
    public PostulacionException(String mensaje, Throwable causa) {
        super(mensaje, causa, CODIGO_ERROR);
    }
    
    /**
     * Constructor para errores de cambio de estado de postulación.
     * 
     * @param estadoActual Estado actual de la postulación
     * @param estadoNuevo Estado nuevo que se intentó asignar
     */
    public PostulacionException(String estadoActual, String estadoNuevo) {
        super("No se puede cambiar el estado de la postulación de " + estadoActual + " a " + estadoNuevo, CODIGO_ERROR);
    }
}
