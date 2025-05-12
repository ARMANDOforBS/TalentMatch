"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';
import { authService } from '@/services/authService';
import Cookies from 'js-cookie';

interface Usuario {
    id: number;
    email: string;
    nombre: string;
    apellido: string;
    rol: string;
}

interface AuthContextType {
    usuario: Usuario | null;
    isAuthenticated: boolean;
    error: string | null;
    loading: boolean;
    login: (email: string, password: string) => Promise<any>;
    logout: () => void;
    clearError: () => void;
    isDemoMode: boolean;
    enableDemoMode: (role?: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [usuario, setUsuario] = useState<Usuario | null>(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [isDemoMode, setIsDemoMode] = useState(false);

    useEffect(() => {
        // Verificar si el modo demo está activado
        const demoMode = localStorage.getItem('demoMode') === 'true';
        setIsDemoMode(demoMode);
        
        if (demoMode) {
            // Cargar usuario de demo según el rol guardado
            const demoRole = localStorage.getItem('demoUserRole') || 'CANDIDATO';
            const demoUsuario = {
                id: 1,
                email: 'usuario.demo@talentmatch.com',
                nombre: demoRole === 'CANDIDATO' ? 'Juan' : demoRole === 'RECLUTADOR' ? 'Carlos' : 'Admin',
                apellido: demoRole === 'CANDIDATO' ? 'Pérez' : demoRole === 'RECLUTADOR' ? 'Mendoza' : 'Sistema',
                rol: demoRole
            };
            setUsuario(demoUsuario);
            setIsAuthenticated(true);
            
            // Guardar en cookies para que el middleware permita la navegación
            Cookies.set('demoMode', 'true', { expires: 1 });
            Cookies.set('usuario', JSON.stringify(demoUsuario), { expires: 1 });
        } else {
            // Verificar si hay un usuario en localStorage al cargar
            const usuarioGuardado = authService.getUsuario();
            if (usuarioGuardado) {
                console.log("Usuario cargado:", usuarioGuardado); // Debugging
                setUsuario(usuarioGuardado);
                setIsAuthenticated(true);
            }
        }
    }, []);

    const clearError = () => {
        setError(null);
    };

    const login = async (email: string, password: string) => {
        try {
            setLoading(true);
            setError(null); // Limpiar errores anteriores
            
            const response = await authService.login({ email, password });
            console.log("Respuesta de login:", response); // Debugging
            setUsuario(response.usuario);
            setIsAuthenticated(true);
            return response;
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'Error al iniciar sesión';
            setError(errorMessage);
            throw err; // Re-lanzar el error para que pueda ser manejado por el componente
        } finally {
            setLoading(false);
        }
    };

    const logout = () => {
        if (isDemoMode) {
            // Limpiar modo demo
            localStorage.removeItem('demoMode');
            localStorage.removeItem('demoUserRole');
            Cookies.remove('demoMode');
            Cookies.remove('usuario');
            setIsDemoMode(false);
            setUsuario(null);
            setIsAuthenticated(false);
            setError(null);
            window.location.href = '/login';
        } else {
            authService.logout();
            setUsuario(null);
            setIsAuthenticated(false);
            setError(null);
        }
    };

    // Función para activar el modo demo
    const enableDemoMode = (role: string = 'CANDIDATO') => {
        const demoUsuario = {
            id: 1,
            email: 'usuario.demo@talentmatch.com',
            nombre: role === 'CANDIDATO' ? 'Juan' : role === 'RECLUTADOR' ? 'Carlos' : 'Admin',
            apellido: role === 'CANDIDATO' ? 'Pérez' : role === 'RECLUTADOR' ? 'Mendoza' : 'Sistema',
            rol: role
        };
        
        setIsDemoMode(true);
        setUsuario(demoUsuario);
        setIsAuthenticated(true);
        setError(null);
        
        // Guardar en localStorage y cookies
        localStorage.setItem('demoMode', 'true');
        localStorage.setItem('demoUserRole', role);
        Cookies.set('demoMode', 'true', { expires: 1 });
        Cookies.set('usuario', JSON.stringify(demoUsuario), { expires: 1 });
        
        // Redirigir según el rol
        if (role === 'CANDIDATO') {
            window.location.href = '/dashboard';
        } else if (role === 'RECLUTADOR') {
            window.location.href = '/reclutador';
        } else {
            window.location.href = '/admin';
        }
    };
    
    return (
        <AuthContext.Provider value={{ 
            usuario, 
            isAuthenticated, 
            error,
            loading,
            login, 
            logout,
            clearError,
            isDemoMode,
            enableDemoMode
        }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth debe ser usado dentro de un AuthProvider');
    }
    return context;
}