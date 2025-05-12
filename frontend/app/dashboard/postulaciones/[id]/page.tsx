import Link from "next/link"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import {
  ArrowLeft,
  BrainCircuit,
  Briefcase,
  Calendar,
  CheckCircle,
  Clock,
  FileText,
  MapPin,
  MessageSquare,
  User,
} from "lucide-react"

interface PostulacionDetailPageProps {
  params: {
    id: string
  }
}

export default function PostulacionDetailPage({ params }: PostulacionDetailPageProps) {
  // En una aplicación real, obtendríamos los datos de la postulación desde una API
  // Aquí usamos datos de ejemplo para la demostración
  const application = {
    id: Number.parseInt(params.id),
    title: "Desarrollador Frontend Senior",
    company: "Vertex",
    department: "Tecnología",
    location: "Ciudad de México",
    date: "10 de mayo, 2025",
    status: "En revisión",
    statusColor: "bg-yellow-500",
    matchScore: 85,
    nextStep: "Esperando revisión del reclutador",
    description:
      "Estamos buscando un Desarrollador Frontend Senior para unirse a nuestro equipo de Tecnología. El candidato ideal tendrá experiencia sólida en React, TypeScript y desarrollo de interfaces de usuario modernas y responsivas.",
    timeline: [
      {
        id: 1,
        date: "10 de mayo, 2025",
        title: "Postulación enviada",
        description: "Tu postulación ha sido recibida y está siendo procesada.",
        status: "completed",
      },
      {
        id: 2,
        date: "Pendiente",
        title: "Revisión de CV",
        description: "Tu CV será revisado por el equipo de reclutamiento.",
        status: "current",
      },
      {
        id: 3,
        date: "Pendiente",
        title: "Prueba técnica",
        description: "Evaluación de habilidades técnicas relacionadas con el puesto.",
        status: "upcoming",
      },
      {
        id: 4,
        date: "Pendiente",
        title: "Entrevista técnica",
        description: "Entrevista con el equipo técnico para evaluar conocimientos y experiencia.",
        status: "upcoming",
      },
      {
        id: 5,
        date: "Pendiente",
        title: "Entrevista final",
        description: "Entrevista con el gerente del área y recursos humanos.",
        status: "upcoming",
      },
      {
        id: 6,
        date: "Pendiente",
        title: "Decisión final",
        description: "Evaluación final y posible oferta de trabajo.",
        status: "upcoming",
      },
    ],
    feedback: null, // Aún no hay feedback
    recruiter: {
      name: "Ana Martínez",
      position: "Reclutadora Senior",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <Link
              href="/dashboard/postulaciones"
              className="inline-flex items-center text-sm text-[#38bdf8] hover:underline"
            >
              <ArrowLeft className="mr-1 h-4 w-4" />
              Volver a postulaciones
            </Link>
            <h1 className="mt-2 text-2xl font-bold tracking-tight text-[#0a192f]">{application.title}</h1>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Briefcase className="mr-1 h-4 w-4" />
                <span>{application.company}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="mr-1 h-4 w-4" />
                <span>{application.location}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="mr-1 h-4 w-4" />
                <span>Aplicado: {application.date}</span>
              </div>
            </div>
          </div>
          <Badge className={`${application.statusColor} text-white`}>{application.status}</Badge>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Columna izquierda */}
          <div className="space-y-6 md:col-span-2">
            {/* Descripción del puesto */}
            <Card>
              <CardHeader>
                <CardTitle>Descripción del puesto</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{application.description}</p>
              </CardContent>
            </Card>

            {/* Línea de tiempo del proceso */}
            <Card>
              <CardHeader>
                <CardTitle>Proceso de selección</CardTitle>
                <CardDescription>Seguimiento de tu postulación</CardDescription>
              </CardHeader>
              <CardContent>
                <ol className="relative border-l border-muted">
                  {application.timeline.map((step) => (
                    <li key={step.id} className="mb-6 ml-6">
                      <span
                        className={`absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full ${
                          step.status === "completed"
                            ? "bg-green-500"
                            : step.status === "current"
                              ? "bg-[#38bdf8]"
                              : "bg-muted"
                        } ring-8 ring-background`}
                      >
                        {step.status === "completed" ? (
                          <CheckCircle className="h-3 w-3 text-white" />
                        ) : (
                          <span
                            className={`h-3 w-3 rounded-full ${
                              step.status === "current" ? "bg-white" : "bg-muted-foreground"
                            }`}
                          ></span>
                        )}
                      </span>
                      <h3
                        className={`font-medium ${
                          step.status === "upcoming" ? "text-muted-foreground" : "text-[#0a192f]"
                        }`}
                      >
                        {step.title}
                      </h3>
                      <time
                        className={`mb-1 text-sm ${
                          step.status === "upcoming" ? "text-muted-foreground/70" : "text-muted-foreground"
                        }`}
                      >
                        {step.date}
                      </time>
                      <p
                        className={`text-sm ${
                          step.status === "upcoming" ? "text-muted-foreground/70" : "text-muted-foreground"
                        }`}
                      >
                        {step.description}
                      </p>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>

            {/* Feedback (si existe) */}
            {application.feedback ? (
              <Card>
                <CardHeader>
                  <CardTitle>Feedback del reclutador</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{application.feedback}</p>
                </CardContent>
              </Card>
            ) : null}
          </div>

          {/* Columna derecha */}
          <div className="space-y-6">
            {/* Compatibilidad */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Compatibilidad con el puesto</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <BrainCircuit className="mr-2 h-5 w-5 text-[#38bdf8]" />
                    <span className="font-medium">Match IA</span>
                  </div>
                  <span className="font-bold text-[#38bdf8]">{application.matchScore}%</span>
                </div>
                <Progress value={application.matchScore} className="mt-2 h-2" />
                <p className="mt-2 text-xs text-muted-foreground">
                  Basado en tu perfil, experiencia y habilidades técnicas
                </p>
              </CardContent>
            </Card>

            {/* Estado y próximos pasos */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Estado actual</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-lg bg-muted p-3">
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-[#38bdf8]" />
                    <span className="font-medium">Próximo paso</span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{application.nextStep}</p>
                </div>

                <div className="flex flex-col gap-2">
                  <Button className="w-full bg-[#38bdf8] hover:bg-[#0ea5e9] text-[#0a192f]">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Contactar al reclutador
                  </Button>
                  <Button variant="outline" className="w-full">
                    <FileText className="mr-2 h-4 w-4" />
                    Ver documentos enviados
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Reclutador asignado */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Reclutador asignado</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 overflow-hidden rounded-full">
                    <img
                      src={application.recruiter.avatar || "/placeholder.svg"}
                      alt={application.recruiter.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">{application.recruiter.name}</p>
                    <p className="text-sm text-muted-foreground">{application.recruiter.position}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Acciones */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Acciones</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full justify-start">
                  <Calendar className="mr-2 h-4 w-4" />
                  Ver calendario de entrevistas
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <User className="mr-2 h-4 w-4" />
                  Actualizar mi perfil
                </Button>
                <Separator className="my-2" />
                <Button
                  variant="outline"
                  className="w-full justify-start text-red-500 hover:bg-red-50 hover:text-red-600"
                >
                  Retirar mi postulación
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
