package com.talentmatch.service.impl;

import java.io.IOException;
import java.net.URL;
import java.util.concurrent.TimeUnit;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.google.cloud.storage.Blob;
import com.google.cloud.storage.BlobId;
import com.google.cloud.storage.BlobInfo;
import com.google.cloud.storage.Storage;
import com.google.cloud.storage.StorageException;
import com.talentmatch.exception.ArchivoException;
import com.talentmatch.service.StorageService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

/**
 * Implementación del servicio de almacenamiento usando Firebase Storage.
 */
@Service
@RequiredArgsConstructor
@Slf4j
public class FirebaseStorageServiceImpl implements StorageService {

    private final Storage storage;

    @Value("${firebase.storage.bucket}")
    private String bucketName;

    @Override
    public String subirArchivo(MultipartFile archivo, String ruta) {
        try {
            BlobId blobId = BlobId.of(bucketName, ruta);
            BlobInfo blobInfo = BlobInfo.newBuilder(blobId)
                    .setContentType(archivo.getContentType())
                    .build();

            Blob blob = storage.create(blobInfo, archivo.getBytes());
            
            log.info("Archivo subido exitosamente: {}", ruta);
            
            return blob.getMediaLink();
        } catch (IOException e) {
            log.error("Error al leer el archivo", e);
            throw new ArchivoException("Error al leer el archivo: " + e.getMessage());
        } catch (StorageException e) {
            log.error("Error al subir el archivo a Firebase", e);
            throw new ArchivoException("Error al subir el archivo a Firebase: " + e.getMessage());
        }
    }

    @Override
    public boolean eliminarArchivo(String url) {
        try {
            // Extrae el nombre del archivo de la URL
            String nombreArchivo = extraerNombreArchivo(url);
            BlobId blobId = BlobId.of(bucketName, nombreArchivo);
            
            boolean eliminado = storage.delete(blobId);
            
            if (eliminado) {
                log.info("Archivo eliminado exitosamente: {}", nombreArchivo);
            } else {
                log.warn("No se pudo eliminar el archivo: {}", nombreArchivo);
            }
            
            return eliminado;
        } catch (StorageException e) {
            log.error("Error al eliminar el archivo de Firebase", e);
            throw new ArchivoException("Error al eliminar el archivo de Firebase: " + e.getMessage());
        }
    }

    public String obtenerUrlPublica(String ruta) {
        try {
            BlobId blobId = BlobId.of(bucketName, ruta);
            Blob blob = storage.get(blobId);
            
            if (blob == null) {
                log.warn("No se encontró el archivo: {}", ruta);
                throw new ArchivoException("No se encontró el archivo: " + ruta);
            }
            
            log.info("URL pública generada para: {}", ruta);
            return blob.getMediaLink();
        } catch (StorageException e) {
            log.error("Error al obtener URL pública", e);
            throw new ArchivoException("Error al obtener URL pública: " + e.getMessage());
        }
    }

    public String generarUrlTemporal(String url, int duracionMinutos) {
        try {
            String nombreArchivo = extraerNombreArchivo(url);
            BlobId blobId = BlobId.of(bucketName, nombreArchivo);
            
            URL signedUrl = storage.signUrl(BlobInfo.newBuilder(blobId).build(), 
                    duracionMinutos, TimeUnit.MINUTES);
            
            log.info("URL temporal generada para: {}", nombreArchivo);
            
            return signedUrl.toString();
        } catch (StorageException e) {
            log.error("Error al generar URL temporal", e);
            throw new ArchivoException("Error al generar URL temporal: " + e.getMessage());
        }
    }
    
    private String extraerNombreArchivo(String url) {
        // Implementación simplificada, podría necesitar ajustes según formato de URL real
        if (url.contains("firebase.googleapis.com")) {
            String[] partes = url.split("/o/");
            if (partes.length > 1) {
                String nombreCodificado = partes[1].split("\\?")[0];
                return java.net.URLDecoder.decode(nombreCodificado, java.nio.charset.StandardCharsets.UTF_8);
            }
        }
        
        // Si no podemos extraer el nombre, devolvemos la URL completa
        return url;
    }
} 