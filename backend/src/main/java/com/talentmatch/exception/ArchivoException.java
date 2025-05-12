package com.talentmatch.exception;

/**
 * Excepción que se lanza cuando ocurren errores relacionados con el manejo de archivos.
 */
public class ArchivoException extends ExcepcionBase {
    
    private static final String CODIGO_ERROR = "ERROR_ARCHIVO";
    
    /**
     * Constructor con mensaje de error.
     * 
     * @param mensaje Mensaje descriptivo del error
     */
    public ArchivoException(String mensaje) {
        super(mensaje, CODIGO_ERROR);
    }
    
    /**
     * Constructor con mensaje y causa.
     * 
     * @param mensaje Mensaje descriptivo del error
     * @param causa Excepción que causó este error
     */
    public ArchivoException(String mensaje, Throwable causa) {
        super(mensaje, causa, CODIGO_ERROR);
    }
    
    /**
     * Constructor para errores específicos de tipo de archivo.
     * 
     * @param tipoEsperado Tipo de archivo esperado
     * @param tipoRecibido Tipo de archivo recibido
     */
    public ArchivoException(String tipoEsperado, String tipoRecibido) {
        super("Tipo de archivo no válido. Se esperaba: " + tipoEsperado + ", pero se recibió: " + tipoRecibido, CODIGO_ERROR);
    }
}
