package com.talentmatch.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import io.swagger.v3.oas.models.Components;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.License;
import io.swagger.v3.oas.models.security.SecurityRequirement;
import io.swagger.v3.oas.models.security.SecurityScheme;

/**
 * Configuración de OpenAPI/Swagger para la documentación de la API.
 */
@Configuration
public class OpenApiConfig {

    @Bean
    public OpenAPI openAPI() {
        return new OpenAPI()
                .info(new Info()
                        .title("TalentMatch API")
                        .description("API para la plataforma de reclutamiento TalentMatch")
                        .version("1.0.0")
                        .contact(new Contact()
                                .name("Vertex")
                                .url("https://www.vertex.com")
                                .email("contacto@vertex.com"))
                        .license(new License()
                                .name("Privada")
                                .url("https://www.vertex.com/licencia")))
                .addSecurityItem(new SecurityRequirement().addList("JWT"))
                .components(new Components()
                        .addSecuritySchemes("JWT", new SecurityScheme()
                                .name("JWT")
                                .type(SecurityScheme.Type.HTTP)
                                .scheme("bearer")
                                .bearerFormat("JWT")
                                .in(SecurityScheme.In.HEADER)
                                .description("Ingrese el token JWT con el prefijo Bearer: Bearer <token>")));
    }
}
