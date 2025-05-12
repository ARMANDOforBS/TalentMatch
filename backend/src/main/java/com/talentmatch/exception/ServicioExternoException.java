package com.talentmatch.exception;

/**
 * Excepción que se lanza cuando ocurren errores al interactuar con servicios externos.
 */
public class ServicioExternoException extends ExcepcionBase {
    
    private static final String CODIGO_ERROR = "ERROR_SERVICIO_EXTERNO";
    
    /**
     * Constructor con mensaje de error.
     * 
     * @param mensaje Mensaje descriptivo del error
     */
    public ServicioExternoException(String mensaje) {
        super(mensaje, CODIGO_ERROR);
    }
    
    /**
     * Constructor con mensaje y causa.
     * 
     * @param mensaje Mensaje descriptivo del error
     * @param causa Excepción que causó este error
     */
    public ServicioExternoException(String mensaje, Throwable causa) {
        super(mensaje, causa, CODIGO_ERROR);
    }
    
    /**
     * Constructor para errores de un servicio externo específico.
     * 
     * @param nombreServicio Nombre del servicio externo
     * @param detalleError Detalle del error ocurrido
     */
    public ServicioExternoException(String nombreServicio, String detalleError) {
        super("Error al comunicarse con el servicio externo: " + nombreServicio + ". Detalle: " + detalleError, CODIGO_ERROR);
    }
}
