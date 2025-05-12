"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

export default function ResetSession() {
  const router = useRouter();
  
  useEffect(() => {
    // Limpiar todo el almacenamiento
    Cookies.remove('token');
    Cookies.remove('usuario');
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    
    console.log("Sesión reiniciada. Todas las cookies y localStorage han sido eliminados.");
    
    // Redirigir a la página de login
    setTimeout(() => {
      router.push('/login');
    }, 2000);
  }, [router]);
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Reiniciando sesión...</h1>
      <p className="text-muted-foreground">
        Limpiando datos y redirigiendo a la página de inicio de sesión.
      </p>
    </div>
  );
} 