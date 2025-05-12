package com.talentmatch.exception;

/**
 * Excepción personalizada para servicios de inteligencia artificial.
 */
public class IAException extends ExcepcionBase {
    
    private static final String CODIGO_ERROR = "ERROR_IA";
    
    /**
     * Constructor con mensaje de error.
     * 
     * @param mensaje Mensaje descriptivo del error
     */
    public IAException(String mensaje) {
        super(mensaje, CODIGO_ERROR);
    }

    /**
     * Constructor con mensaje y causa.
     * 
     * @param mensaje Mensaje descriptivo del error
     * @param causa Causa raíz del error
     */
    public IAException(String mensaje, Throwable causa) {
        super(mensaje, causa, CODIGO_ERROR);
    }
    
    /**
     * Constructor para errores específicos de servicios de IA.
     * 
     * @param servicio Nombre del servicio de IA
     * @param detalle Detalle del error
     */
    public IAException(String servicio, String detalle) {
        super("Error en servicio de IA: " + servicio + ". Detalle: " + detalle, CODIGO_ERROR);
    }
} 