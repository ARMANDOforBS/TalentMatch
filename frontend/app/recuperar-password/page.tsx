import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"
import { ArrowLeft } from "lucide-react"

export default function RecuperarPasswordPage() {
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
            <h1 className="text-3xl font-bold text-[#0a192f]">Recuperar contraseña</h1>
            <p className="text-muted-foreground">
              Ingresa tu correo electrónico para recibir un enlace de recuperación
            </p>
          </div>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Correo electrónico</Label>
              <Input id="email" type="email" placeholder="nombre@ejemplo.com" required />
            </div>
            <Button type="submit" className="w-full bg-[#38bdf8] hover:bg-[#0ea5e9] text-[#0a192f]">
              Enviar enlace de recuperación
            </Button>
          </form>
          <div className="text-center">
            <Link href="/login" className="inline-flex items-center text-sm text-[#38bdf8] hover:underline">
              <ArrowLeft className="mr-1 h-4 w-4" />
              Volver a iniciar sesión
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
