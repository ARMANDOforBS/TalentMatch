export interface AutenticacionRequest {
    email: string;
    password: string;
}

// Interfaz para el registro de usuarios
export interface RegistroRequest {
    nombre: string;
    apellido: string;
    email: string;
    password: string;
    // Podemos añadir otros campos si son necesarios para el registro
}

export interface AutenticacionResponse {
    token: string;
    usuario: {
        id: number;
        email: string;
        nombre: string;
        apellido: string;
        rol: string;
    };
}

export interface ErrorResponse {
    estado: number;
    tipo: string;
    mensaje: string;
    ruta: string;
    timestamp: number;
}