import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Award, Bell, BrainCircuit, Briefcase, CheckCircle, Clock, FileText, Lightbulb, Sparkles, User, Zap } from "lucide-react"

export default function DashboardPage() {
  // Datos de ejemplo para el dashboard
  const profileCompleteness = 75
  const activeApplications = 3
  const pendingTasks = 2
  const matchScore = 85
  const skillsAnalyzed = 18
  const aiSuggestions = 3

  const recentApplications = [
    {
      id: 1,
      title: "Desarrollador Frontend Senior",
      date: "10 de mayo, 2025",
      status: "En revisión",
      statusColor: "bg-yellow-500",
      aiInsight: "Tu experiencia con React coincide 95% con los requisitos",
    },
    {
      id: 2,
      title: "UX/UI Designer",
      date: "5 de mayo, 2025",
      status: "Entrevista programada",
      statusColor: "bg-blue-500",
      aiInsight: "Recomendación: Prepara ejemplos de diseño centrado en el usuario",
    },
    {
      id: 3,
      title: "DevOps Engineer",
      date: "1 de mayo, 2025",
      status: "Prueba técnica",
      statusColor: "bg-purple-500",
      aiInsight: "La prueba evaluará principalmente conocimientos en Kubernetes",
    },
  ]

  const recommendedJobs = [
    {
      id: 4,
      title: "Product Manager",
      department: "Producto",
      location: "Lima",
      matchScore: 92,
      aiReason: "Tus habilidades de comunicación y liderazgo destacan",
    },
    {
      id: 5,
      title: "Backend Developer",
      department: "Tecnología",
      location: "Remoto",
      matchScore: 88,
      aiReason: "Tu experiencia con APIs RESTful es relevante",
    },
  ]
  
  const skillsAnalysis = [
    { skill: "React", level: 85, trend: "creciente", demand: "alta" },
    { skill: "TypeScript", level: 78, trend: "creciente", demand: "alta" },
    { skill: "Node.js", level: 72, trend: "estable", demand: "media" },
  ]

  return (
    <div className="space-y-8">
      {/* Greeting and overview */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-[#0a192f]">¡Bienvenido, Juan!</h1>
        <p className="text-muted-foreground">
          Aquí tienes un resumen de tu actividad y recomendaciones personalizadas.
        </p>
      </div>

      {/* Stats cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Perfil completado</CardTitle>
            <User className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{profileCompleteness}%</div>
            <Progress value={profileCompleteness} className="mt-2 h-2" />
            <p className="mt-2 text-xs text-muted-foreground">Completa tu perfil para mejorar tus oportunidades</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Postulaciones activas</CardTitle>
            <Briefcase className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{activeApplications}</div>
            <p className="mt-2 text-xs text-muted-foreground">Procesos de selección en curso</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Tareas pendientes</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{pendingTasks}</div>
            <p className="mt-2 text-xs text-muted-foreground">Acciones que requieren tu atención</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Compatibilidad promedio</CardTitle>
            <BrainCircuit className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{matchScore}%</div>
            <Progress value={matchScore} className="mt-2 h-2" />
            <p className="mt-2 text-xs text-muted-foreground">Basado en tu perfil y preferencias</p>
          </CardContent>
        </Card>
      </div>

      {/* Main content */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Recent applications */}
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Postulaciones recientes</CardTitle>
            <CardDescription>Seguimiento de tus procesos activos</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentApplications.map((application) => (
                <div key={application.id} className="flex items-start justify-between space-x-4">
                  <div className="space-y-1">
                    <p className="font-medium leading-none text-[#0a192f]">{application.title}</p>
                    <div className="flex items-center pt-1">
                      <div className={`mr-2 h-2 w-2 rounded-full ${application.statusColor}`}></div>
                      <span className="text-xs">{application.status}</span>
                    </div>
                    <div className="mt-1 flex items-center text-xs text-[#38bdf8]">
                      <Sparkles className="mr-1 h-3 w-3" />
                      <span>{application.aiInsight}</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <p className="text-xs text-muted-foreground">{application.date}</p>
                    <Link href={`/dashboard/postulaciones/${application.id}`}>
                      <Button variant="ghost" size="sm" className="mt-2 h-7 text-xs text-[#38bdf8]">
                        Ver detalles
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 flex justify-center">
              <Link href="/dashboard/postulaciones">
                <Button variant="outline" size="sm" className="gap-1 text-[#0a192f]">
                  Ver todas
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Recommended jobs */}
        <Card className="col-span-1">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Vacantes recomendadas por IA</CardTitle>
              <CardDescription>Seleccionadas específicamente para tu perfil</CardDescription>
            </div>
            <BrainCircuit className="h-5 w-5 text-[#38bdf8]" />
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recommendedJobs.map((job) => (
                <div key={job.id} className="rounded-lg border p-3 relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-gradient-to-l from-[#38bdf8]/20 to-transparent w-1/2 h-1"></div>
                  <div className="flex justify-between">
                    <div>
                      <h3 className="font-medium text-[#0a192f]">{job.title}</h3>
                      <div className="mt-1 flex items-center text-sm text-muted-foreground">
                        <Briefcase className="mr-1 h-4 w-4" />
                        <span>{job.department}</span>
                        <span className="mx-2">•</span>
                        <span>{job.location}</span>
                      </div>
                    </div>
                    <Badge className="bg-[#38bdf8] hover:bg-[#0ea5e9] flex items-center gap-1">
                      <Sparkles className="h-3 w-3" />
                      <span>{job.matchScore}% match</span>
                    </Badge>
                  </div>
                  <div className="mt-2 text-xs text-[#38bdf8] flex items-center">
                    <Lightbulb className="mr-1 h-3 w-3" />
                    <span>{job.aiReason}</span>
                  </div>
                  <div className="mt-3 flex justify-end">
                    <Link href={`/vacantes/${job.id}`}>
                      <Button size="sm" className="bg-[#38bdf8] hover:bg-[#0ea5e9] text-[#0a192f]">
                        Ver vacante
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 flex justify-center">
              <Link href="/vacantes">
                <Button variant="outline" size="sm" className="gap-1 text-[#0a192f]">
                  Explorar más vacantes
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Skills Analysis powered by AI */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Análisis de habilidades por IA</CardTitle>
            <CardDescription>Evaluación inteligente de tu perfil profesional</CardDescription>
          </div>
          <Zap className="h-5 w-5 text-[#38bdf8]" />
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="skills">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="skills">Habilidades</TabsTrigger>
              <TabsTrigger value="trends">Tendencias</TabsTrigger>
              <TabsTrigger value="suggestions">Sugerencias</TabsTrigger>
            </TabsList>
            <TabsContent value="skills" className="space-y-4 pt-4">
              {skillsAnalysis.map((skill) => (
                <div key={skill.skill} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="font-medium text-sm">{skill.skill}</div>
                    <div className="text-xs text-muted-foreground flex items-center gap-1">
                      <span>Demanda: </span>
                      <Badge variant={skill.demand === "alta" ? "default" : skill.demand === "media" ? "outline" : "secondary"} className="text-[10px] h-4">
                        {skill.demand}
                      </Badge>
                    </div>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Nivel: {skill.level}%</span>
                    <span className="flex items-center gap-1">
                      Tendencia: 
                      <span className="text-[#38bdf8]">{skill.trend}</span>
                    </span>
                  </div>
                </div>
              ))}
              <div className="mt-4 text-center text-sm text-muted-foreground">
                <span className="flex items-center justify-center gap-1">
                  <BrainCircuit className="h-4 w-4 text-[#38bdf8]" />
                  <span>Análisis basado en {skillsAnalyzed} habilidades detectadas en tu perfil</span>
                </span>
              </div>
            </TabsContent>
            <TabsContent value="trends" className="pt-4">
              <div className="rounded-lg border p-4">
                <h3 className="font-medium text-sm mb-2">Tendencias del mercado laboral</h3>
                <p className="text-sm text-muted-foreground mb-4">Según el análisis de IA, estas son las habilidades más demandadas en tu área:</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-[#38bdf8]" />
                    <span>Desarrollo frontend con React y TypeScript</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-[#38bdf8]" />
                    <span>Arquitecturas basadas en microservicios</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-[#38bdf8]" />
                    <span>Integración de IA en aplicaciones web</span>
                  </li>
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="suggestions" className="pt-4">
              <div className="rounded-lg border p-4">
                <h3 className="font-medium text-sm mb-2">Sugerencias personalizadas</h3>
                <p className="text-sm text-muted-foreground mb-4">Basado en tu perfil, la IA recomienda enfocarte en:</p>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <Lightbulb className="h-4 w-4 text-[#38bdf8] mt-0.5" />
                    <div>
                      <span className="font-medium">Ampliar conocimientos en TypeScript</span>
                      <p className="text-xs text-muted-foreground mt-1">Mejoraría tu perfil para el 78% de las vacantes disponibles</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <Lightbulb className="h-4 w-4 text-[#38bdf8] mt-0.5" />
                    <div>
                      <span className="font-medium">Certificación en Cloud Computing</span>
                      <p className="text-xs text-muted-foreground mt-1">Aumentaría tus oportunidades en un 45%</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <Lightbulb className="h-4 w-4 text-[#38bdf8] mt-0.5" />
                    <div>
                      <span className="font-medium">Actualizar portafolio con proyectos recientes</span>
                      <p className="text-xs text-muted-foreground mt-1">Los reclutadores valoran ejemplos prácticos de tu trabajo</p>
                    </div>
                  </li>
                </ul>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Pending tasks and notifications */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Pending tasks */}
        <Card>
          <CardHeader>
            <CardTitle>Tareas pendientes</CardTitle>
            <CardDescription>Acciones que requieren tu atención</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start space-x-4 rounded-lg border p-3">
                <div className="rounded-full bg-yellow-100 p-2 text-yellow-600">
                  <FileText className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-[#0a192f]">Completar prueba técnica</h3>
                  <p className="text-sm text-muted-foreground">
                    Para la posición de Desarrollador Frontend Senior. Vence en 2 días.
                  </p>
                  <div className="mt-2">
                    <Link href="/dashboard/pruebas/1">
                      <Button size="sm" className="bg-[#38bdf8] hover:bg-[#0ea5e9] text-[#0a192f]">
                        Iniciar prueba
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex items-start space-x-4 rounded-lg border p-3">
                <div className="rounded-full bg-blue-100 p-2 text-blue-600">
                  <Clock className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-[#0a192f]">Confirmar entrevista</h3>
                  <p className="text-sm text-muted-foreground">
                    Para la posición de UX/UI Designer. Programada para el 15 de mayo.
                  </p>
                  <div className="mt-2">
                    <Link href="/dashboard/postulaciones/2">
                      <Button size="sm" className="bg-[#38bdf8] hover:bg-[#0ea5e9] text-[#0a192f]">
                        Confirmar asistencia
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent notifications */}
        <Card>
          <CardHeader>
            <CardTitle>Notificaciones recientes</CardTitle>
            <CardDescription>Actualizaciones de tus procesos</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="rounded-full bg-green-100 p-2 text-green-600">
                  <CheckCircle className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium text-[#0a192f]">Tu postulación ha sido recibida</p>
                  <p className="text-sm text-muted-foreground">Desarrollador Frontend Senior - Hace 2 horas</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="rounded-full bg-blue-100 p-2 text-blue-600">
                  <Bell className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium text-[#0a192f]">Entrevista programada</p>
                  <p className="text-sm text-muted-foreground">UX/UI Designer - Hace 1 día</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="rounded-full bg-purple-100 p-2 text-purple-600">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium text-[#0a192f]">¡Has completado tu perfil!</p>
                  <p className="text-sm text-muted-foreground">Tu perfil ahora es visible para reclutadores</p>
                </div>
              </div>
            </div>
            <div className="mt-4 flex justify-center">
              <Link href="/dashboard/notificaciones">
                <Button variant="outline" size="sm" className="gap-1 text-[#0a192f]">
                  Ver todas
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
