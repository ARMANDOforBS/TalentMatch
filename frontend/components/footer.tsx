import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-bold text-xl text-[#0a192f]">
                Talent<span className="text-[#38bdf8]">Match</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Plataforma inteligente de reclutamiento exclusiva para Vertex.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-[#38bdf8]">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-[#38bdf8]">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-[#38bdf8]">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-[#38bdf8]">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium uppercase tracking-wider text-[#0a192f]">Plataforma</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/vacantes" className="text-sm text-muted-foreground hover:text-[#38bdf8]">
                  Vacantes
                </Link>
              </li>
              <li>
                <Link href="/registro" className="text-sm text-muted-foreground hover:text-[#38bdf8]">
                  Registro
                </Link>
              </li>
              <li>
                <Link href="/login" className="text-sm text-muted-foreground hover:text-[#38bdf8]">
                  Iniciar sesión
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-sm text-muted-foreground hover:text-[#38bdf8]">
                  Preguntas frecuentes
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium uppercase tracking-wider text-[#0a192f]">Empresa</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/sobre-nosotros" className="text-sm text-muted-foreground hover:text-[#38bdf8]">
                  Sobre Vertex
                </Link>
              </li>
              <li>
                <Link href="/sobre-nosotros/nuestra-cultura" className="text-sm text-muted-foreground hover:text-[#38bdf8]">
                  Nuestra cultura
                </Link>
              </li>
              <li>
                <Link href="/sobre-nosotros/beneficios" className="text-sm text-muted-foreground hover:text-[#38bdf8]">
                  Beneficios
                </Link>
              </li>
              <li>
                <Link href="/sobre-nosotros" className="text-sm text-muted-foreground hover:text-[#38bdf8]">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium uppercase tracking-wider text-[#0a192f]">Contacto</h3>
            <ul className="space-y-2">
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Av. Paseo de la Reforma 222, CDMX</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">+52 55 1234 5678</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">contacto@vertex.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Vertex. Todos los derechos reservados.
            </p>
            <div className="flex gap-4">
              <Link href="/privacidad" className="text-sm text-muted-foreground hover:text-[#38bdf8]">
                Política de privacidad
              </Link>
              <Link href="/terminos" className="text-sm text-muted-foreground hover:text-[#38bdf8]">
                Términos y condiciones
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
