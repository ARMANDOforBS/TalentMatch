package com.talentmatch.exception;

/**
 * Excepción que se lanza cuando un recurso solicitado no se encuentra en el sistema.
 */
public class RecursoNoEncontradoException extends ExcepcionBase {
    
    private static final String CODIGO_ERROR = "RECURSO_NO_ENCONTRADO";
    
    /**
     * Constructor con mensaje de error.
     * 
     * @param mensaje Mensaje descriptivo del error
     */
    public RecursoNoEncontradoException(String mensaje) {
        super(mensaje, CODIGO_ERROR);
    }
    
    /**
     * Constructor con mensaje y causa.
     * 
     * @param mensaje Mensaje descriptivo del error
     * @param causa Excepción que causó este error
     */
    public RecursoNoEncontradoException(String mensaje, Throwable causa) {
        super(mensaje, causa, CODIGO_ERROR);
    }
    
    /**
     * Constructor para recursos específicos por ID.
     * 
     * @param tipoRecurso Tipo de recurso que no se encontró
     * @param id Identificador del recurso
     */
    public RecursoNoEncontradoException(String tipoRecurso, Long id) {
        super("No se encontró " + tipoRecurso + " con ID: " + id, CODIGO_ERROR);
    }
    
    /**
     * Constructor para recursos específicos por otro campo.
     * 
     * @param tipoRecurso Tipo de recurso que no se encontró
     * @param campo Nombre del campo utilizado para buscar
     * @param valor Valor del campo utilizado para buscar
     */
    public RecursoNoEncontradoException(String tipoRecurso, String campo, String valor) {
        super("No se encontró " + tipoRecurso + " con " + campo + ": " + valor, CODIGO_ERROR);
    }
}
