import { AutenticacionRequest, AutenticacionResponse, ErrorResponse, RegistroRequest } from '@/types/auth';
import Cookies from 'js-cookie';

const API_URL = 'http://localhost:8080/api';

export const authService = {
    login: async (credentials: AutenticacionRequest): Promise<AutenticacionResponse> => {
        try {
            const response = await fetch(`${API_URL}/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(credentials),
            });

            if (!response.ok) {
                const errorData: ErrorResponse = await response.json();
                throw new Error(errorData.mensaje);
            }

            const data: AutenticacionResponse = await response.json();
            
            // Log para debugging
            console.log("Respuesta del servidor (login):", JSON.stringify(data, null, 2));
            console.log("Rol recibido:", data.usuario?.rol);
            
            // Log específico para administradores
            if (data.usuario?.rol === 'ADMINISTRADOR') {
                console.log("Usuario ADMINISTRADOR autenticado correctamente");
            }
            
            // Verificar que el usuario tenga todos los campos necesarios
            if (!data.usuario || !data.usuario.nombre || !data.usuario.apellido || !data.usuario.rol) {
                console.error("La respuesta del servidor no contiene todos los datos de usuario necesarios:", data);
            }
            
            // Guardar el token en cookies y localStorage
            Cookies.set('token', data.token, { expires: 7 }); // Expira en 7 días
            
            // También guardar el usuario en cookies para el middleware
            Cookies.set('usuario', JSON.stringify(data.usuario), { expires: 7 });
            
            // Guardar también en localStorage para respaldo
            localStorage.setItem('token', data.token);
            localStorage.setItem('usuario', JSON.stringify(data.usuario));
            
            return data;
        } catch (error) {
            console.error("Error durante el login:", error);
            throw error;
        }
    },

    logout: () => {
        // Limpiar cookies y localStorage
        Cookies.remove('token');
        Cookies.remove('usuario');
        localStorage.removeItem('token');
        localStorage.removeItem('usuario');
        window.location.href = '/login';
    },

    getToken: (): string | null => {
        return Cookies.get('token') || localStorage.getItem('token');
    },

    getUsuario: () => {
        const usuarioCookie = Cookies.get('usuario');
        let usuario = null;
        
        if (usuarioCookie) {
            try {
                usuario = JSON.parse(usuarioCookie);
                console.log("Usuario recuperado de cookie:", usuario);
                console.log("Rol del usuario:", usuario?.rol);
            } catch (e) {
                console.error("Error al parsear usuario de cookie:", e);
                // Si hay error al parsear, intentamos con localStorage
                const usuarioLS = localStorage.getItem('usuario');
                if (usuarioLS) {
                    try {
                        usuario = JSON.parse(usuarioLS);
                        console.log("Usuario recuperado de localStorage:", usuario);
                        console.log("Rol del usuario (localStorage):", usuario?.rol);
                    } catch (e) {
                        console.error("Error al parsear usuario de localStorage:", e);
                    }
                }
            }
        } else {
            // Si no hay cookie, intentamos con localStorage
            const usuarioLS = localStorage.getItem('usuario');
            if (usuarioLS) {
                try {
                    usuario = JSON.parse(usuarioLS);
                    console.log("Usuario recuperado de localStorage:", usuario);
                    console.log("Rol del usuario (localStorage):", usuario?.rol);
                } catch (e) {
                    console.error("Error al parsear usuario de localStorage:", e);
                }
            }
        }
        
        return usuario;
    },

    isAuthenticated: (): boolean => {
        return !!Cookies.get('token');
    },
    
    // Función para registrar nuevos usuarios
    registrar: async (datosRegistro: RegistroRequest): Promise<AutenticacionResponse> => {
        try {
            const respuesta = await fetch(`${API_URL}/auth/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(datosRegistro),
            });

            if (!respuesta.ok) {
                const datosError: ErrorResponse = await respuesta.json();
                throw new Error(datosError.mensaje);
            }

            const datos: AutenticacionResponse = await respuesta.json();
            
            // Log para debugging
            console.log("Respuesta del servidor (registro):", JSON.stringify(datos, null, 2));
            console.log("Rol asignado:", datos.usuario?.rol);
            
            // Verificar que el usuario tenga todos los campos necesarios
            if (!datos.usuario || !datos.usuario.nombre || !datos.usuario.apellido || !datos.usuario.rol) {
                console.error("La respuesta del servidor no contiene todos los datos de usuario necesarios:", datos);
            }
            
            // Guardar el token en cookies y localStorage
            Cookies.set('token', datos.token, { expires: 7 }); // Expira en 7 días
            
            // También guardar el usuario en cookies para el middleware
            Cookies.set('usuario', JSON.stringify(datos.usuario), { expires: 7 });
            
            // Guardar también en localStorage para respaldo
            localStorage.setItem('token', datos.token);
            localStorage.setItem('usuario', JSON.stringify(datos.usuario));
            
            return datos;
        } catch (error) {
            console.error("Error durante el registro:", error);
            throw error;
        }
    }
}; 