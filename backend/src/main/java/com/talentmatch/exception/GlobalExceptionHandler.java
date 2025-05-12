package com.talentmatch.exception;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;

import lombok.extern.slf4j.Slf4j;

/**
 * Manejador global de excepciones para la aplicación.
 */
@RestControllerAdvice
@Slf4j
public class GlobalExceptionHandler {

    /**
     * Maneja excepciones de recurso no encontrado.
     */
    @ExceptionHandler(RecursoNoEncontradoException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public ResponseEntity<ErrorResponse> manejarRecursoNoEncontrado(RecursoNoEncontradoException ex, WebRequest request) {
        log.error("Recurso no encontrado: {}", ex.getMessage());
        
        ErrorResponse errorResponse = new ErrorResponse(
                HttpStatus.NOT_FOUND.value(),
                "Recurso no encontrado",
                ex.getMessage(),
                request.getDescription(false));
        
        return new ResponseEntity<>(errorResponse, HttpStatus.NOT_FOUND);
    }

    /**
     * Maneja excepciones de entidad duplicada.
     */
    @ExceptionHandler(EntidadDuplicadaException.class)
    @ResponseStatus(HttpStatus.CONFLICT)
    public ResponseEntity<ErrorResponse> manejarEntidadDuplicada(EntidadDuplicadaException ex, WebRequest request) {
        log.error("Entidad duplicada: {}", ex.getMessage());
        
        ErrorResponse errorResponse = new ErrorResponse(
                HttpStatus.CONFLICT.value(),
                "Entidad duplicada",
                ex.getMessage(),
                request.getDescription(false));
        
        return new ResponseEntity<>(errorResponse, HttpStatus.CONFLICT);
    }

    /**
     * Maneja excepciones de operación inválida.
     */
    @ExceptionHandler(OperacionInvalidaException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ResponseEntity<ErrorResponse> manejarOperacionInvalida(OperacionInvalidaException ex, WebRequest request) {
        log.error("Operación inválida: {}", ex.getMessage());
        
        ErrorResponse errorResponse = new ErrorResponse(
                HttpStatus.BAD_REQUEST.value(),
                "Operación inválida",
                ex.getMessage(),
                request.getDescription(false));
        
        return new ResponseEntity<>(errorResponse, HttpStatus.BAD_REQUEST);
    }

    /**
     * Maneja excepciones de acceso no autorizado.
     */
    @ExceptionHandler(AccesoNoAutorizadoException.class)
    @ResponseStatus(HttpStatus.FORBIDDEN)
    public ResponseEntity<ErrorResponse> manejarAccesoNoAutorizado(AccesoNoAutorizadoException ex, WebRequest request) {
        log.error("Acceso no autorizado: {}", ex.getMessage());
        
        ErrorResponse errorResponse = new ErrorResponse(
                HttpStatus.FORBIDDEN.value(),
                "Acceso no autorizado",
                ex.getMessage(),
                request.getDescription(false));
        
        return new ResponseEntity<>(errorResponse, HttpStatus.FORBIDDEN);
    }

    /**
     * Maneja excepciones de autenticación.
     */
    @ExceptionHandler(AutenticacionException.class)
    @ResponseStatus(HttpStatus.UNAUTHORIZED)
    public ResponseEntity<ErrorResponse> manejarAutenticacion(AutenticacionException ex, WebRequest request) {
        log.error("Error de autenticación: {}", ex.getMessage());
        
        ErrorResponse errorResponse = new ErrorResponse(
                HttpStatus.UNAUTHORIZED.value(),
                "Error de autenticación",
                ex.getMessage(),
                request.getDescription(false));
        
        return new ResponseEntity<>(errorResponse, HttpStatus.UNAUTHORIZED);
    }

    /**
     * Maneja excepciones de validación.
     */
    @ExceptionHandler(ValidacionException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ResponseEntity<ErrorResponse> manejarValidacion(ValidacionException ex, WebRequest request) {
        log.error("Error de validación: {}", ex.getMessage());
        
        ErrorResponse errorResponse;
        
        if (ex.getErrores() != null && !ex.getErrores().isEmpty()) {
            errorResponse = new ErrorResponse(
                    HttpStatus.BAD_REQUEST.value(),
                    "Error de validación",
                    "Se encontraron errores de validación",
                    request.getDescription(false));
            errorResponse.setErroresValidacion(ex.getErrores());
        } else {
            errorResponse = new ErrorResponse(
                    HttpStatus.BAD_REQUEST.value(),
                    "Error de validación",
                    ex.getMessage(),
                    request.getDescription(false));
        }
        
        return new ResponseEntity<>(errorResponse, HttpStatus.BAD_REQUEST);
    }

    /**
     * Maneja excepciones de archivo.
     */
    @ExceptionHandler(ArchivoException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ResponseEntity<ErrorResponse> manejarArchivo(ArchivoException ex, WebRequest request) {
        log.error("Error de archivo: {}", ex.getMessage());
        
        ErrorResponse errorResponse = new ErrorResponse(
                HttpStatus.BAD_REQUEST.value(),
                "Error de archivo",
                ex.getMessage(),
                request.getDescription(false));
        
        return new ResponseEntity<>(errorResponse, HttpStatus.BAD_REQUEST);
    }

    /**
     * Maneja excepciones de servicio externo.
     */
    @ExceptionHandler(ServicioExternoException.class)
    @ResponseStatus(HttpStatus.SERVICE_UNAVAILABLE)
    public ResponseEntity<ErrorResponse> manejarServicioExterno(ServicioExternoException ex, WebRequest request) {
        log.error("Error de servicio externo: {}", ex.getMessage());
        
        ErrorResponse errorResponse = new ErrorResponse(
                HttpStatus.SERVICE_UNAVAILABLE.value(),
                "Error de servicio externo",
                ex.getMessage(),
                request.getDescription(false));
        
        return new ResponseEntity<>(errorResponse, HttpStatus.SERVICE_UNAVAILABLE);
    }

    /**
     * Maneja excepciones de postulación.
     */
    @ExceptionHandler(PostulacionException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ResponseEntity<ErrorResponse> manejarPostulacion(PostulacionException ex, WebRequest request) {
        log.error("Error de postulación: {}", ex.getMessage());
        
        ErrorResponse errorResponse = new ErrorResponse(
                HttpStatus.BAD_REQUEST.value(),
                "Error de postulación",
                ex.getMessage(),
                request.getDescription(false));
        
        return new ResponseEntity<>(errorResponse, HttpStatus.BAD_REQUEST);
    }

    /**
     * Maneja excepciones de prueba técnica.
     */
    @ExceptionHandler(PruebaTecnicaException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ResponseEntity<ErrorResponse> manejarPruebaTecnica(PruebaTecnicaException ex, WebRequest request) {
        log.error("Error de prueba técnica: {}", ex.getMessage());
        
        ErrorResponse errorResponse = new ErrorResponse(
                HttpStatus.BAD_REQUEST.value(),
                "Error de prueba técnica",
                ex.getMessage(),
                request.getDescription(false));
        
        return new ResponseEntity<>(errorResponse, HttpStatus.BAD_REQUEST);
    }

    /**
     * Maneja excepciones de validación de argumentos de método.
     */
    @ExceptionHandler(MethodArgumentNotValidException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ResponseEntity<ErrorResponse> manejarValidacionArgumentos(MethodArgumentNotValidException ex, WebRequest request) {
        log.error("Error de validación de argumentos: {}", ex.getMessage());
        
        Map<String, String> errores = new HashMap<>();
        ex.getBindingResult().getAllErrors().forEach(error -> {
            String campo = ((FieldError) error).getField();
            String mensaje = error.getDefaultMessage();
            errores.put(campo, mensaje);
        });
        
        ErrorResponse errorResponse = new ErrorResponse(
                HttpStatus.BAD_REQUEST.value(),
                "Error de validación",
                "Se encontraron errores de validación en los argumentos",
                request.getDescription(false));
        errorResponse.setErroresValidacion(errores);
        
        return new ResponseEntity<>(errorResponse, HttpStatus.BAD_REQUEST);
    }

    /**
     * Maneja excepciones de acceso denegado.
     */
    @ExceptionHandler(AccessDeniedException.class)
    @ResponseStatus(HttpStatus.FORBIDDEN)
    public ResponseEntity<ErrorResponse> manejarAccesoDenegado(AccessDeniedException ex, WebRequest request) {
        log.error("Acceso denegado: {}", ex.getMessage());
        
        ErrorResponse errorResponse = new ErrorResponse(
                HttpStatus.FORBIDDEN.value(),
                "Acceso denegado",
                "No tienes permiso para acceder a este recurso",
                request.getDescription(false));
        
        return new ResponseEntity<>(errorResponse, HttpStatus.FORBIDDEN);
    }

    /**
     * Maneja excepciones relacionadas con servicios de IA.
     */
    @ExceptionHandler(IAException.class)
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    public ResponseEntity<ErrorResponse> manejarErrorIA(IAException ex, WebRequest request) {
        log.error("Error en servicio de IA: {}", ex.getMessage());
        
        ErrorResponse errorResponse = new ErrorResponse(
                HttpStatus.INTERNAL_SERVER_ERROR.value(),
                "Error en servicio de IA",
                ex.getMessage(),
                request.getDescription(false));
        
        return new ResponseEntity<>(errorResponse, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    /**
     * Maneja excepciones generales.
     * No expone detalles internos del sistema en la respuesta al cliente.
     */
    @ExceptionHandler(Exception.class)
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    public ResponseEntity<ErrorResponse> manejarExcepcionGeneral(Exception ex, WebRequest request) {
        // Registramos el error completo con detalles para depuración interna
        log.error("Error interno del servidor: {}", ex.getMessage(), ex);
        
        // Generamos un código de referencia único para el error
        String codigoReferencia = generarCodigoReferenciaError();
        
        // Registramos el código de referencia junto con el error para poder rastrearlo
        log.error("Código de referencia del error: {}", codigoReferencia);
        
        // Creamos una respuesta genérica sin exponer detalles internos
        ErrorResponse errorResponse = new ErrorResponse(
                HttpStatus.INTERNAL_SERVER_ERROR.value(),
                "Error interno del servidor",
                "Ha ocurrido un error inesperado. Por favor, inténtelo de nuevo más tarde. " +
                "Si el problema persiste, contacte al soporte técnico con el código de referencia: " + codigoReferencia,
                request.getDescription(false));
        
        return new ResponseEntity<>(errorResponse, HttpStatus.INTERNAL_SERVER_ERROR);
    }
    
    /**
     * Genera un código de referencia único para errores.
     * 
     * @return Código de referencia único
     */
    private String generarCodigoReferenciaError() {
        return "ERR-" + System.currentTimeMillis() + "-" + 
               String.format("%04d", (int)(Math.random() * 10000));
    }

    /**
     * Clase para representar una respuesta de error.
     */
    public static class ErrorResponse {
        private final int estado;
        private final String tipo;
        private final String mensaje;
        private final String ruta;
        private final long timestamp;
        private Map<String, String> erroresValidacion;

        public ErrorResponse(int estado, String tipo, String mensaje, String ruta) {
            this.estado = estado;
            this.tipo = tipo;
            this.mensaje = mensaje;
            this.ruta = ruta;
            this.timestamp = System.currentTimeMillis();
        }

        public int getEstado() {
            return estado;
        }

        public String getTipo() {
            return tipo;
        }

        public String getMensaje() {
            return mensaje;
        }

        public String getRuta() {
            return ruta;
        }

        public long getTimestamp() {
            return timestamp;
        }

        public Map<String, String> getErroresValidacion() {
            return erroresValidacion;
        }

        public void setErroresValidacion(Map<String, String> erroresValidacion) {
            this.erroresValidacion = erroresValidacion;
        }
    }
}
