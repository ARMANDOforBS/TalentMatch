package com.talentmatch.service;

import org.springframework.web.multipart.MultipartFile;

/**
 * Interfaz para el servicio de almacenamiento de archivos.
 */
public interface StorageService {

    /**
     * Sube un archivo al almacenamiento.
     * 
     * @param archivo Archivo a subir
     * @param ruta Ruta donde se almacenará el archivo
     * @return URL pública del archivo
     */
    String subirArchivo(MultipartFile archivo, String ruta);

    /**
     * Elimina un archivo del almacenamiento.
     * 
     * @param url URL del archivo a eliminar
     * @return true si se eliminó correctamente, false en caso contrario
     */
    boolean eliminarArchivo(String url);

    /**
     * Genera una URL pública temporal para un archivo.
     * 
     * @param url URL del archivo
     * @param duracionMinutos Duración de la URL temporal en minutos
     * @return URL pública temporal
     */
    String generarUrlTemporal(String url, int duracionMinutos);
} 