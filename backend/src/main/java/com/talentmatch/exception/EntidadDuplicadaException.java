package com.talentmatch.exception;

/**
 * Excepción que se lanza cuando se intenta crear una entidad que ya existe en el sistema.
 */
public class EntidadDuplicadaException extends ExcepcionBase {
    
    private static final String CODIGO_ERROR = "ENTIDAD_DUPLICADA";
    
    /**
     * Constructor con mensaje de error.
     * 
     * @param mensaje Mensaje descriptivo del error
     */
    public EntidadDuplicadaException(String mensaje) {
        super(mensaje, CODIGO_ERROR);
    }
    
    /**
     * Constructor con mensaje y causa.
     * 
     * @param mensaje Mensaje descriptivo del error
     * @param causa Excepción que causó este error
     */
    public EntidadDuplicadaException(String mensaje, Throwable causa) {
        super(mensaje, causa, CODIGO_ERROR);
    }
    
    /**
     * Constructor para entidades duplicadas por un campo específico.
     * 
     * @param tipoEntidad Tipo de entidad que está duplicada
     * @param campo Nombre del campo que causa la duplicación
     * @param valor Valor del campo que causa la duplicación
     */
    public EntidadDuplicadaException(String tipoEntidad, String campo, String valor) {
        super("Ya existe " + tipoEntidad + " con " + campo + ": " + valor, CODIGO_ERROR);
    }
}
