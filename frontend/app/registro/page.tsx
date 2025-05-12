"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"
import { Github, Linkedin, Upload } from "lucide-react"
import { toast } from "sonner"
import { authService } from "@/services/authService"

export default function RegistroPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [aceptaTerminos, setAceptaTerminos] = useState(false);
  const [cargando, setCargando] = useState(false);
  const [errorPassword, setErrorPassword] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Verificar si las contraseñas coinciden cuando se modifica alguna de ellas
    if (name === "password" || name === "confirmPassword") {
      if (name === "confirmPassword" && value !== formData.password) {
        setErrorPassword("Las contraseñas no coinciden");
      } else if (name === "password" && value !== formData.confirmPassword && formData.confirmPassword) {
        setErrorPassword("Las contraseñas no coinciden");
      } else {
        setErrorPassword("");
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validaciones
    if (formData.password !== formData.confirmPassword) {
      toast.error("Las contraseñas no coinciden");
      return;
    }

    if (!aceptaTerminos) {
      toast.error("Debes aceptar los términos y condiciones");
      return;
    }

    setCargando(true);

    try {
      // Enviamos los datos al servicio de autenticación (sin confirmPassword)
      const datosRegistro = {
        nombre: formData.nombre,
        apellido: formData.apellido,
        email: formData.email,
        password: formData.password
      };

      await authService.registrar(datosRegistro);
      toast.success("¡Registro exitoso! Ya puedes acceder a tu cuenta");
      router.push("/dashboard");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Error al registrar la cuenta");
    } finally {
      setCargando(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-16 items-center">
          <MainNav />
        </div>
      </header>
      <main className="flex-1 py-12">
        <div className="mx-auto max-w-md space-y-6 px-4 py-8 sm:px-8">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold text-[#0a192f]">Crea tu cuenta</h1>
            <p className="text-muted-foreground">Regístrate para acceder a todas las vacantes de Vertex</p>
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
                <span className="bg-background px-2 text-muted-foreground">O regístrate con</span>
              </div>
            </div>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first-name">Nombre</Label>
                  <Input 
                    id="first-name" 
                    name="nombre" 
                    value={formData.nombre} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Apellido</Label>
                  <Input 
                    id="last-name" 
                    name="apellido" 
                    value={formData.apellido} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
              </div>
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
                <Label htmlFor="password">Contraseña</Label>
                <Input 
                  id="password" 
                  name="password" 
                  type="password" 
                  value={formData.password} 
                  onChange={handleChange} 
                  required 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirmar contraseña</Label>
                <Input 
                  id="confirm-password" 
                  name="confirmPassword" 
                  type="password" 
                  value={formData.confirmPassword} 
                  onChange={handleChange} 
                  required 
                />
                {errorPassword && (
                  <p className="text-sm text-red-500">{errorPassword}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="cv">Curriculum Vitae (opcional)</Label>
                <div className="flex items-center justify-center w-full">
                  <label
                    htmlFor="cv-upload"
                    className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 border-gray-300"
                  >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <Upload className="w-8 h-8 mb-2 text-gray-500" />
                      <p className="mb-2 text-sm text-gray-500">
                        <span className="font-semibold">Haz clic para subir</span> o arrastra y suelta
                      </p>
                      <p className="text-xs text-gray-500">PDF, DOCX (MAX. 5MB)</p>
                    </div>
                    <Input id="cv-upload" type="file" className="hidden" accept=".pdf,.docx" />
                  </label>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <Checkbox 
                  id="terms" 
                  className="mt-1" 
                  checked={aceptaTerminos} 
                  onCheckedChange={(checked) => setAceptaTerminos(checked as boolean)} 
                />
                <Label htmlFor="terms" className="text-sm font-normal">
                  Acepto los{" "}
                  <Link href="/terminos" className="text-[#38bdf8] hover:underline">
                    términos y condiciones
                  </Link>{" "}
                  y la{" "}
                  <Link href="/privacidad" className="text-[#38bdf8] hover:underline">
                    política de privacidad
                  </Link>
                </Label>
              </div>
              <Button 
                type="submit" 
                className="w-full bg-[#38bdf8] hover:bg-[#0ea5e9] text-[#0a192f]" 
                disabled={cargando}
              >
                {cargando ? "Creando cuenta..." : "Crear cuenta"}
              </Button>
            </form>
          </div>
          <div className="text-center text-sm">
            ¿Ya tienes una cuenta?{" "}
            <Link href="/login" className="text-[#38bdf8] hover:underline">
              Inicia sesión
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
