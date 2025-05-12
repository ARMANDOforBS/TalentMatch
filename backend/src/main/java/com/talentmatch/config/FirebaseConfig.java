package com.talentmatch.config;

import java.io.IOException;
import java.io.InputStream;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.ClassPathResource;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.cloud.storage.Storage;
import com.google.cloud.storage.StorageOptions;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import com.talentmatch.exception.ServicioExternoException;

import lombok.Getter;

/**
 * Configuración para Firebase Storage.
 * Esta clase se encarga de inicializar Firebase y configurar el acceso a Firebase Storage.
 */
@Configuration
@Getter
public class FirebaseConfig {

    /**
     * Nombre del bucket de Firebase Storage.
     */
    @Value("${firebase.storage.bucket}")
    private String bucketName;
    
    /**
     * Ruta al archivo de configuración de Firebase.
     */
    @Value("${firebase.config.path}")
    private String configPath;
    
    /**
     * Inicializa Firebase App si no está ya inicializado.
     * 
     * @return Instancia de FirebaseApp
     */
    @Bean
    public FirebaseApp firebaseApp() {
        try {
            if (FirebaseApp.getApps().isEmpty()) {
                ClassPathResource resource = new ClassPathResource(configPath);
                if (!resource.exists()) {
                    throw new ServicioExternoException("Archivo de configuración de Firebase no encontrado: " + configPath);
                }
                InputStream serviceAccount = resource.getInputStream();
                
                FirebaseOptions options = FirebaseOptions.builder()
                        .setCredentials(GoogleCredentials.fromStream(serviceAccount))
                        .setStorageBucket(bucketName)
                        .build();
                
                return FirebaseApp.initializeApp(options);
            } else {
                return FirebaseApp.getInstance();
            }
        } catch (IOException e) {
            throw new ServicioExternoException("Error al inicializar Firebase", e);
        }
    }
    
    /**
     * Configura y proporciona una instancia de Storage para acceder a Firebase Storage.
     * 
     * @return Instancia de Storage
     */
    @Bean
    public Storage storage() {
        try {
            ClassPathResource resource = new ClassPathResource(configPath);
            if (!resource.exists()) {
                throw new ServicioExternoException("Archivo de configuración de Firebase no encontrado: " + configPath);
            }
            InputStream serviceAccount = resource.getInputStream();
            
            return StorageOptions.newBuilder()
                    .setCredentials(GoogleCredentials.fromStream(serviceAccount))
                    .build()
                    .getService();
        } catch (IOException e) {
            throw new ServicioExternoException("Error al configurar Firebase Storage", e);
        }
    }
}
