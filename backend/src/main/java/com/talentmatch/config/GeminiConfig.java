package com.talentmatch.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestTemplate;
import org.springframework.context.annotation.Bean;

import lombok.Getter;

/**
 * Configuración para la API de Gemini.
 * Esta clase carga las propiedades relacionadas con la API de Gemini desde el archivo de configuración.
 */
@Configuration
@Getter
public class GeminiConfig {

    /**
     * Clave de API para acceder a la API de Gemini.
     */
    @Value("${gemini.api.key}")
    private String apiKey;
    
    /**
     * URL base para las solicitudes a la API de Gemini.
     */
    @Value("${gemini.api.url}")
    private String apiUrl;
    
    /**
     * Proporciona una instancia de RestTemplate para realizar solicitudes HTTP a la API de Gemini.
     * 
     * @return Instancia de RestTemplate
     */
    @Bean
    public RestTemplate restTemplate() {
        return new RestTemplate();
    }
}
