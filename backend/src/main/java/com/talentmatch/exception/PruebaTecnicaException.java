package com.talentmatch.exception;

/**
 * Excepción que se lanza cuando ocurren errores relacionados con las pruebas técnicas.
 */
public class PruebaTecnicaException extends ExcepcionBase {
    
    private static final String CODIGO_ERROR = "ERROR_PRUEBA_TECNICA";
    
    /**
     * Constructor con mensaje de error.
     * 
     * @param mensaje Mensaje descriptivo del error
     */
    public PruebaTecnicaException(String mensaje) {
        super(mensaje, CODIGO_ERROR);
    }
    
    /**
     * Constructor con mensaje y causa.
     * 
     * @param mensaje Mensaje descriptivo del error
     * @param causa Excepción que causó este error
     */
    public PruebaTecnicaException(String mensaje, Throwable causa) {
        super(mensaje, causa, CODIGO_ERROR);
    }
    
    /**
     * Constructor para errores específicos de generación de pruebas.
     * 
     * @param tipoError Tipo de error en la generación
     * @param detalle Detalle del error
     */
    public PruebaTecnicaException(String tipoError, String detalle) {
        super("Error en prueba técnica: " + tipoError + ". Detalle: " + detalle, CODIGO_ERROR);
    }
}
