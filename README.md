# TalentMatch - Plataforma de Reclutamiento con IA

TalentMatch es una plataforma de reclutamiento desarrollada con Spring Boot y que utiliza inteligencia artificial de Google Cloud (Gemini AI) para emparejar candidatos con vacantes laborales.

## Características Principales

- **Registro y gestión de perfiles** para candidatos y reclutadores
- **Sistema de búsqueda avanzada** de candidatos y vacantes
- **Emparejamiento inteligente** mediante IA que analiza perfiles y requisitos
- **Almacenamiento seguro** de CV y documentos en Firebase Storage
- **Análisis de perfiles** con recomendaciones personalizadas
- **Gestión completa** del proceso de reclutamiento

## Tecnologías Utilizadas

- **Backend**: Java 17, Spring Boot 3.2
- **Base de Datos**: MySQL 8
- **Seguridad**: Spring Security, JWT
- **Almacenamiento**: Firebase Storage
- **IA**: Google Cloud Vertex AI (Gemini Pro)
- **Documentación**: OpenAPI/Swagger

## Requisitos Previos

- Java JDK 17 o superior
- Maven 3.8 o superior
- MySQL 8
- Una cuenta de Firebase con Storage habilitado
- Una cuenta de Google Cloud con acceso a Vertex AI
- Git

## Modo de Demostración

La aplicación incluye un modo de demostración que permite navegar por los diferentes dashboards **únicamente cuando el backend no está activo**. Para acceder, utiliza las siguientes credenciales en la página de inicio de sesión:

| Correo | Contraseña | Acceso |
|--------|------------|--------|
| candidato@demo.com | candidato | Dashboard de candidatos |
| reclutador@demo.com | reclutador | Dashboard de reclutadores |
| admin@demo.com | admin | Dashboard de administradores |


## Instalación y Configuración

### 1. Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/talentmatch.git
cd talentmatch
```

### 2. Configurar la base de datos

Crear una base de datos MySQL:

```sql
CREATE DATABASE talentmatch;
```

### 3. Configurar Firebase Storage

1. Crear un proyecto en Firebase
2. Habilitar Firebase Storage
3. Descargar el archivo de configuración de cuenta de servicio (JSON)
4. Colocar el archivo en `backend/src/main/resources/firebase-service-account.json`


### 5. Configurar application.properties

Actualizar el archivo `backend/src/main/resources/application.properties` con la información correcta:

```properties
# Base de datos
spring.datasource.url=jdbc:mysql://localhost:3306/talentmatch?useSSL=false&serverTimezone=UTC
spring.datasource.username=tu_usuario
spring.datasource.password=tu_contraseña

# Firebase
firebase.storage.bucket=tu-proyecto.appspot.com
firebase.config.path=firebase-service-account.json

# Google Cloud / Gemini AI
gcp.project.id=tu-proyecto-id
gcp.region=tu-region
gemini.model=gemini-pro

# JWT
jwt.secret=una_clave_segura_para_produccion
```

### 6. Compilar y ejecutar el proyecto

```bash
cd backend
mvn clean install
mvn spring-boot:run
```

El servidor estará disponible en `http://localhost:8080/api`

### 7. Acceder a la documentación API

Una vez iniciado el servidor, puede acceder a la documentación OpenAPI/Swagger en:

```
http://localhost:8080/api/swagger-ui
```

## Estructura del Proyecto

El proyecto sigue una arquitectura en capas:

- **Entity**: Modelos de datos (Candidato, Reclutador, Vacante, etc.)
- **Repository**: Interfaces para acceso a datos con Spring Data JPA
- **Service**: Lógica de negocio
- **Controller**: Endpoints REST para la API
- **DTO**: Objetos de transferencia de datos
- **Exception**: Manejo centralizado de excepciones
- **Security**: Configuración de seguridad y autenticación
- **Config**: Configuraciones generales del sistema

## Funcionamiento de la IA

El sistema utiliza Gemini Pro de Google Cloud para:

1. **Emparejamiento Candidato-Vacante**: Analiza perfiles y requisitos para calcular un porcentaje de compatibilidad.
2. **Recomendaciones Personalizadas**: Sugiere vacantes a candidatos y candidatos a reclutadores.
3. **Análisis de Perfiles**: Identifica fortalezas, debilidades y oportunidades de mejora.
4. **Generación de Descripciones**: Crea descripciones profesionales para vacantes.

