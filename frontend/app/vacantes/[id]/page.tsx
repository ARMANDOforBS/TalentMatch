import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"
import {
  Briefcase,
  MapPin,
  Calendar,
  Clock,
  DollarSign,
  GraduationCap,
  Code,
  Languages,
  Heart,
  Share2,
  ArrowLeft,
  BrainCircuit,
} from "lucide-react"

interface JobDetailPageProps {
  params: {
    id: string
  }
}

export default async function JobDetailPage({ params }: JobDetailPageProps) {
  // En una aplicación real, obtendríamos los datos de la vacante desde una API
  // Aquí usamos datos de ejemplo para la demostración
  const job = {
    id: Number.parseInt(params.id),
    title: "Desarrollador Frontend Senior",
    department: "Tecnología",
    location: "Ciudad de México",
    type: "Tiempo completo",
    postedDate: "2025-05-01",
    salary: "$40,000 - $60,000 MXN",
    schedule: "Lunes a Viernes, 9:00 AM - 6:00 PM",
    description:
      "Estamos buscando un Desarrollador Frontend Senior para unirse a nuestro equipo de Tecnología. El candidato ideal tendrá experiencia sólida en React, TypeScript y desarrollo de interfaces de usuario modernas y responsivas.",
    responsibilities: [
      "Desarrollar interfaces de usuario atractivas y funcionales utilizando React y TypeScript",
      "Colaborar con diseñadores UX/UI para implementar diseños y prototipos",
      "Optimizar aplicaciones para máxima velocidad y escalabilidad",
      "Implementar diseño responsive para múltiples dispositivos",
      "Colaborar con equipos de backend para integrar APIs RESTful",
      "Participar en revisiones de código y compartir conocimientos con el equipo",
    ],
    requirements: [
      "Al menos 5 años de experiencia en desarrollo frontend",
      "Dominio de React, TypeScript, y herramientas modernas de desarrollo web",
      "Experiencia con sistemas de diseño y bibliotecas de componentes",
      "Conocimiento de prácticas de optimización de rendimiento web",
      "Experiencia con metodologías ágiles y trabajo en equipo",
      "Excelentes habilidades de comunicación y resolución de problemas",
    ],
    desirable: [
      "Experiencia con Next.js y SSR",
      "Conocimiento de GraphQL",
      "Experiencia con testing (Jest, React Testing Library)",
      "Contribuciones a proyectos open source",
    ],
    benefits: [
      "Salario competitivo",
      "Seguro de gastos médicos mayores",
      "Horario flexible",
      "Home office parcial",
      "Oportunidades de crecimiento profesional",
      "Capacitación continua",
    ],
    matchScore: 85,
  }

  // Función para formatear la fecha
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "long", day: "numeric" }
    return new Date(dateString).toLocaleDateString("es-ES", options)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-16 items-center">
          <MainNav />
        </div>
      </header>
      <main className="flex-1 py-12">
        <div className="container px-4 md:px-6">
          <div className="mb-6">
            <Link href="/vacantes" className="inline-flex items-center text-sm text-[#38bdf8] hover:underline">
              <ArrowLeft className="mr-1 h-4 w-4" />
              Volver a vacantes
            </Link>
          </div>

          {/* Encabezado de la vacante */}
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-[#0a192f]">{job.title}</h1>
              <div className="mt-2 flex flex-wrap items-center gap-3 text-muted-foreground">
                <div className="flex items-center">
                  <Briefcase className="mr-1 h-4 w-4" />
                  <span>{job.department}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="mr-1 h-4 w-4" />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="mr-1 h-4 w-4" />
                  <span>Publicado: {formatDate(job.postedDate)}</span>
                </div>
                <Badge
                  variant="outline"
                  className="bg-[#38bdf8]/10 text-[#38bdf8] hover:bg-[#38bdf8]/20 border-[#38bdf8]/20"
                >
                  {job.type}
                </Badge>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" className="rounded-full">
                <Heart className="h-4 w-4" />
                <span className="sr-only">Guardar vacante</span>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <Share2 className="h-4 w-4" />
                <span className="sr-only">Compartir vacante</span>
              </Button>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1fr_300px]">
            {/* Contenido principal */}
            <div className="space-y-8">
              {/* Detalles básicos */}
              <Card>
                <CardContent className="p-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="flex items-center gap-2">
                      <DollarSign className="h-5 w-5 text-[#38bdf8]" />
                      <div>
                        <p className="text-sm font-medium">Salario</p>
                        <p className="text-sm text-muted-foreground">{job.salary}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-[#38bdf8]" />
                      <div>
                        <p className="text-sm font-medium">Horario</p>
                        <p className="text-sm text-muted-foreground">{job.schedule}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Descripción */}
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-[#0a192f]">Descripción</h2>
                <p className="text-muted-foreground">{job.description}</p>
              </div>

              {/* Responsabilidades */}
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-[#0a192f]">Responsabilidades</h2>
                <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                  {job.responsibilities.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Requisitos */}
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-[#0a192f]">Requisitos</h2>
                <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                  {job.requirements.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Deseables */}
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-[#0a192f]">Deseables</h2>
                <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                  {job.desirable.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Beneficios */}
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-[#0a192f]">Beneficios</h2>
                <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                  {job.benefits.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="flex justify-center pt-4">
                <Button size="lg" className="bg-[#38bdf8] hover:bg-[#0ea5e9] text-[#0a192f]">
                  Postularme a esta vacante
                </Button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Compatibilidad con IA */}
              <Card className="overflow-hidden">
                <div className="bg-[#0a192f] p-4 text-white">
                  <div className="flex items-center gap-2">
                    <BrainCircuit className="h-5 w-5" />
                    <h3 className="font-medium">Compatibilidad con tu perfil</h3>
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm font-medium">Coincidencia</span>
                    <span className="text-sm font-bold text-[#38bdf8]">{job.matchScore}%</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
                    <div className="h-full rounded-full bg-[#38bdf8]" style={{ width: `${job.matchScore}%` }}></div>
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground">
                    Basado en tu perfil, tienes una alta compatibilidad con esta posición. Completa tu perfil para
                    mejorar aún más tu puntuación.
                  </p>
                </CardContent>
              </Card>

              {/* Habilidades requeridas */}
              <Card>
                <CardContent className="p-4">
                  <h3 className="mb-4 font-medium text-[#0a192f]">Habilidades clave</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Code className="h-4 w-4 text-[#38bdf8]" />
                      <span className="text-sm">React, TypeScript, HTML, CSS</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <GraduationCap className="h-4 w-4 text-[#38bdf8]" />
                      <span className="text-sm">Ingeniería o carrera afín</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Languages className="h-4 w-4 text-[#38bdf8]" />
                      <span className="text-sm">Inglés avanzado</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Compartir */}
              <Card>
                <CardContent className="p-4">
                  <h3 className="mb-4 font-medium text-[#0a192f]">Compartir esta vacante</h3>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-1 h-4 w-4"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                      Facebook
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-1 h-4 w-4"
                      >
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                      </svg>
                      Twitter
                    </Button>
                  </div>
                  <div className="mt-2">
                    <Button variant="outline" size="sm" className="w-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-1 h-4 w-4"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                      LinkedIn
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
