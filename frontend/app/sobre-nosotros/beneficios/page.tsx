import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"
import { 
  Clock, 
  GraduationCap, 
  Heart, 
  Home,
  PiggyBank,
  Award,
  Plane
} from "lucide-react"

export default function Beneficios() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-16 items-center">
          <MainNav />
        </div>
      </header>
        <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-[#0a192f] to-[#112240]">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="space-y-2 max-w-[700px] mx-auto">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white mb-5">
                  Beneficios de Trabajar con Nosotros
                </h1>
                <p className="text-gray-300 md:text-xl mx-auto">
                  Descubre las ventajas que ofrecemos para que nuestro equipo se desarrolle personal y profesionalmente.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Nuestros Beneficios Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#0a192f]">
                  Nuestros Beneficios
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  En Vertex, valoramos el bienestar integral de nuestro equipo. Por eso, ofrecemos un paquete de beneficios 
                  diseñado para cubrir todas las dimensiones de la vida profesional y personal.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0a192f]">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">Horario Flexible</h3>
                <p className="text-muted-foreground">
                  Adaptamos los horarios de trabajo para permitir un mejor equilibrio entre la vida personal y profesional.
                </p>
              </div>
              <div className="flex flex-col space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0a192f]">
                  <Home className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">Trabajo Remoto</h3>
                <p className="text-muted-foreground">
                  Opciones de trabajo desde casa y política híbrida para mayor comodidad y reducción de tiempos de desplazamiento.
                </p>
              </div>
              <div className="flex flex-col space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0a192f]">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">Seguro de Salud</h3>
                <p className="text-muted-foreground">
                  Cobertura médica completa para empleados y opciones para incluir a familiares con tarifas preferenciales.
                </p>
              </div>
              <div className="flex flex-col space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0a192f]">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">Desarrollo Profesional</h3>
                <p className="text-muted-foreground">
                  Presupuesto anual para capacitación, acceso a plataformas educativas y tiempo dedicado al aprendizaje.
                </p>
              </div>
              <div className="flex flex-col space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0a192f]">
                  <PiggyBank className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">Plan de Ahorro</h3>
                <p className="text-muted-foreground">
                  Programa de ahorro con contribución de la empresa y asesoramiento financiero para planificación a largo plazo.
                </p>
              </div>
              <div className="flex flex-col space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0a192f]">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">Reconocimiento</h3>
                <p className="text-muted-foreground">
                  Programa de bonificaciones por desempeño y sistema de reconocimiento por logros y contribuciones destacadas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Beneficios Adicionales Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#0a192f]">
                    Beneficios Adicionales
                  </h2>
                  <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
                    Además de nuestros beneficios principales, ofrecemos una serie de ventajas adicionales 
                    diseñadas para mejorar la experiencia laboral en Vertex:
                  </p>
                  <ul className="space-y-2 text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
                    <li className="flex items-center gap-2">
                      <Plane className="h-5 w-5 text-[#0a192f]" />
                      <span>Días adicionales de vacaciones según antigüedad</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Plane className="h-5 w-5 text-[#0a192f]" />
                      <span>Programa de bienestar con actividades físicas y mentales</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Plane className="h-5 w-5 text-[#0a192f]" />
                      <span>Espacios de trabajo colaborativos y ergonómicos</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Plane className="h-5 w-5 text-[#0a192f]" />
                      <span>Eventos sociales y team buildings regulares</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Plane className="h-5 w-5 text-[#0a192f]" />
                      <span>Acceso a la última tecnología y herramientas de trabajo</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  width={500}
                  height={400}
                  alt="Beneficios adicionales"
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonios Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#0a192f]">
                  Lo Que Dice Nuestro Equipo
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Experiencias reales de quienes trabajan con nosotros.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="flex items-center space-x-4">
                  <Image
                    src="/placeholder.svg?height=50&width=50"
                    width={50}
                    height={50}
                    alt="Avatar de María"
                    className="rounded-full"
                  />
                  <div>
                    <h4 className="font-bold">María López</h4>
                    <p className="text-sm text-muted-foreground">Desarrolladora Senior</p>
                  </div>
                </div>
                <p className="italic text-muted-foreground">
                  "Lo que más valoro de Vertex es el equilibrio entre vida laboral y personal. El horario 
                  flexible me permite organizar mi día según mis necesidades y el trabajo remoto ha mejorado 
                  significativamente mi calidad de vida."
                </p>
              </div>
              <div className="flex flex-col space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="flex items-center space-x-4">
                  <Image
                    src="/placeholder.svg?height=50&width=50"
                    width={50}
                    height={50}
                    alt="Avatar de Carlos"
                    className="rounded-full"
                  />
                  <div>
                    <h4 className="font-bold">Carlos Ramírez</h4>
                    <p className="text-sm text-muted-foreground">Analista de Datos</p>
                  </div>
                </div>
                <p className="italic text-muted-foreground">
                  "Las oportunidades de desarrollo profesional han sido clave en mi crecimiento. Gracias al 
                  presupuesto para capacitación, he podido certificarme en tecnologías avanzadas que han 
                  impulsado mi carrera."
                </p>
              </div>
              <div className="flex flex-col space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="flex items-center space-x-4">
                  <Image
                    src="/placeholder.svg?height=50&width=50"
                    width={50}
                    height={50}
                    alt="Avatar de Ana"
                    className="rounded-full"
                  />
                  <div>
                    <h4 className="font-bold">Ana Martínez</h4>
                    <p className="text-sm text-muted-foreground">UX Designer</p>
                  </div>
                </div>
                <p className="italic text-muted-foreground">
                  "El ambiente de trabajo es excepcional. Los espacios colaborativos facilitan el intercambio 
                  de ideas y los eventos de team building han fortalecido los lazos con mis compañeros, creando 
                  un equipo verdaderamente unido."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#0a192f] text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  ¿Listo para disfrutar de estos beneficios?
                </h2>
                <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Únete a nuestro equipo y experimenta todas las ventajas de trabajar en Vertex.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/registro">
                  <Button size="lg" className="bg-[#38bdf8] hover:bg-[#0ea5e9] text-[#0a192f]">
                    Crea tu perfil ahora
                  </Button>
                </Link>
                <Link href="/vacantes">
                <Button size="lg" variant="outline" className="text-sky-400 border-sky-400 bg-sky-400/10 hover:bg-sky-400/20 hover:text-white hover:border-white transition duration-300">
                    Explorar vacantes
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
