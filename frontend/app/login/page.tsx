"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"
import { Github, Linkedin } from "lucide-react"
import { toast } from "sonner"
import { useAuth } from "@/contexts/AuthContext"

export default function LoginPage() {
  const router = useRouter();
  const { login, error, loading, clearError, enableDemoMode } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  
  // Limpiar errores al montar el componente o cambiar de ruta
  useEffect(() => {
    clearError();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Verificar si son credenciales de demo
    const isDemoCredentials = 
      (formData.email === 'candidato@demo.com' && formData.password === 'candidato') ||
      (formData.email === 'reclutador@demo.com' && formData.password === 'reclutador') ||
      (formData.email === 'admin@demo.com' && formData.password === 'admin');

    // Si son credenciales de demo, primero verificar si el backend está disponible
    if (isDemoCredentials) {
      try {
        // Intentar hacer una petición simple al backend para verificar si está disponible
        const response = await fetch('http://localhost:8080/api/health', { 
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
          // Timeout corto para no esperar demasiado
          signal: AbortSignal.timeout(2000)
        });
        
        // Si el backend responde, no permitir el modo demo
        if (response.ok) {
          toast.error("El modo de demostración solo está disponible cuando el backend no está activo");
          return;
        }
      } catch (error) {
        // Si hay un error, significa que el backend no está disponible, activar modo demo
        if (formData.email === 'candidato@demo.com' && formData.password === 'candidato') {
          enableDemoMode('CANDIDATO');
          toast.success("¡Modo de demostración activado como Candidato!");
          return;
        } else if (formData.email === 'reclutador@demo.com' && formData.password === 'reclutador') {
          enableDemoMode('RECLUTADOR');
          toast.success("¡Modo de demostración activado como Reclutador!");
          return;
        } else if (formData.email === 'admin@demo.com' && formData.password === 'admin') {
          enableDemoMode('ADMINISTRADOR');
          toast.success("¡Modo de demostración activado como Administrador!");
          return;
        }
      }
    }

    try {
      // Intento de inicio de sesión normal
      await login(formData.email, formData.password);
      toast.success("¡Inicio de sesión exitoso!");
      
      // La redirección se manejará en el AuthProvider
      router.push("/dashboard");
    } catch (error) {
      // El error ya se maneja en el contexto, pero podemos mostrar un toast adicional
      toast.error(error instanceof Error ? error.message : "Error al iniciar sesión");
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-16 items-center">
          <MainNav />
        </div>
      </header>
      <main className="flex-1 flex items-center justify-center py-12">
        <div className="mx-auto max-w-md space-y-6 px-4 py-8 sm:px-8">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold text-[#0a192f]">Iniciar sesión</h1>
            <p className="text-muted-foreground">Ingresa tus credenciales para acceder a tu cuenta</p>
          </div>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="w-full">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </Button>
              <Button variant="outline" className="w-full">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Button>
            </div>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">O continúa con</span>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Correo electrónico</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="nombre@ejemplo.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Contraseña</Label>
                  <Link href="/recuperar-password" className="text-sm text-[#38bdf8] hover:underline">
                    ¿Olvidaste tu contraseña?
                  </Link>
                </div>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember" className="text-sm font-normal">
                  Recordar mi sesión
                </Label>
              </div>
              <Button
                type="submit"
                className="w-full bg-[#38bdf8] hover:bg-[#0ea5e9] text-[#0a192f]"
                disabled={loading}
              >
                {loading ? "Iniciando sesión..." : "Iniciar sesión"}
              </Button>
            </form>
          </div>
          <div className="text-center text-sm">
            ¿No tienes una cuenta?{" "}
            <Link href="/registro" className="text-[#38bdf8] hover:underline">
              Regístrate
            </Link>
          </div>
          

        </div>
      </main>
      <Footer />
    </div>
  )
}
