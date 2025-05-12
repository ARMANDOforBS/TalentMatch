import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertCircle, BrainCircuit, ClipboardList, Clock, Play, CheckCircle, AlertTriangle, Calendar, Sparkles, Zap, Lightbulb } from "lucide-react"

export default function PruebasPage() {
  // Datos de ejemplo para las pruebas técnicas generadas por IA
  const tests = [
    {
      id: 1,
      title: "Prueba técnica: React y TypeScript",
      job: "Desarrollador Frontend Senior",
      dueDate: "12 de mayo, 2025",
      timeLimit: "90 minutos",
      status: "pending",
      statusLabel: "Pendiente",
      statusColor: "bg-yellow-500",
      description: "Evaluación de habilidades en React, TypeScript y desarrollo de interfaces de usuario.",
      aiGenerated: true,
      aiInsight: "Prueba personalizada basada en tu perfil y los requisitos específicos de la vacante.",
      skillsFocus: ["React", "TypeScript", "UI/UX"],
      difficultyLevel: "Intermedio-Avanzado"
    },
    {
      id: 2,
      title: "Prueba de diseño UX/UI",
      job: "UX/UI Designer",
      dueDate: "15 de mayo, 2025",
      timeLimit: "120 minutos",
      status: "in_progress",
      statusLabel: "En progreso",
      statusColor: "bg-blue-500",
      description: "Diseño de una interfaz de usuario para una aplicación móvil siguiendo principios de UX.",
      progress: 35,
      aiGenerated: true,
      aiInsight: "La IA analizará tu enfoque de diseño centrado en el usuario y la usabilidad de tu solución.",
      skillsFocus: ["Diseño UX", "Wireframing", "Prototipos"],
      difficultyLevel: "Intermedio"
    },
    {
      id: 3,
      title: "Evaluación de DevOps",
      job: "DevOps Engineer",
      company: "Vertex",
      dueDate: "10 de mayo, 2025",
      timeLimit: "60 minutos",
      status: "completed",
      statusLabel: "Completada",
      statusColor: "bg-green-500",
      description: "Configuración de un pipeline CI/CD y resolución de problemas de infraestructura.",
      score: 85,
    },
    {
      id: 4,
      title: "Prueba de lógica y algoritmos",
      job: "Backend Developer",
      company: "Vertex",
      dueDate: "5 de mayo, 2025",
      timeLimit: "45 minutos",
      status: "expired",
      statusLabel: "Expirada",
      statusColor: "bg-red-500",
      description: "Resolución de problemas algorítmicos y optimización de código.",
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-[#0a192f]">Pruebas Técnicas</h1>
        <p className="text-muted-foreground">Gestiona y completa las evaluaciones técnicas para tus postulaciones</p>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">Todas</TabsTrigger>
          <TabsTrigger value="pending">Pendientes</TabsTrigger>
          <TabsTrigger value="completed">Completadas</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            {tests.map((test) => (
              <Card key={test.id}>
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle>{test.title}</CardTitle>
                      <CardDescription>
                        {test.job} - {test.company}
                      </CardDescription>
                    </div>
                    <Badge className={`${test.statusColor} text-white`}>{test.statusLabel}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">{test.description}</p>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center">
                      <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>Fecha límite: {test.dueDate}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>Duración: {test.timeLimit}</span>
                    </div>
                  </div>

                  {test.status === "in_progress" && (
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-sm">
                        <span>Progreso</span>
                        <span>{test.progress}%</span>
                      </div>
                      <Progress value={test.progress} className="h-2" />
                    </div>
                  )}

                  {test.status === "completed" && (
                    <div className="rounded-md bg-green-50 p-3">
                      <div className="flex items-center">
                        <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                        <div>
                          <p className="font-medium text-green-800">Prueba completada</p>
                          <p className="text-sm text-green-700">Puntuación: {test.score}/100</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {test.status === "expired" && (
                    <div className="rounded-md bg-red-50 p-3">
                      <div className="flex items-center">
                        <AlertTriangle className="mr-2 h-5 w-5 text-red-500" />
                        <div>
                          <p className="font-medium text-red-800">Prueba expirada</p>
                          <p className="text-sm text-red-700">La fecha límite ha pasado</p>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="flex justify-end">
                    {(test.status === "pending" || test.status === "in_progress") && (
                      <Link href={`/dashboard/pruebas/${test.id}`}>
                        <Button className="gap-1 bg-[#38bdf8] hover:bg-[#0ea5e9] text-[#0a192f]">
                          {test.status === "pending" ? (
                            <>
                              <Play className="h-4 w-4" />
                              Iniciar prueba
                            </>
                          ) : (
                            <>
                              <Play className="h-4 w-4" />
                              Continuar prueba
                            </>
                          )}
                        </Button>
                      </Link>
                    )}

                    {(test.status === "completed" || test.status === "expired") && (
                      <Link href={`/dashboard/pruebas/${test.id}`}>
                        <Button variant="outline" className="gap-1">
                          <ClipboardList className="h-4 w-4" />
                          Ver detalles
                        </Button>
                      </Link>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="pending" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            {tests
              .filter((test) => test.status === "pending" || test.status === "in_progress")
              .map((test) => (
                <Card key={test.id}>
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle>{test.title}</CardTitle>
                        <CardDescription>
                          {test.job} - {test.company}
                        </CardDescription>
                      </div>
                      <Badge className={`${test.statusColor} text-white`}>{test.statusLabel}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">{test.description}</p>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center">
                        <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                        <span>Fecha límite: {test.dueDate}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                        <span>Duración: {test.timeLimit}</span>
                      </div>
                    </div>

                    {test.status === "in_progress" && (
                      <div className="space-y-1">
                        <div className="flex items-center justify-between text-sm">
                          <span>Progreso</span>
                          <span>{test.progress}%</span>
                        </div>
                        <Progress value={test.progress} className="h-2" />
                      </div>
                    )}

                    <div className="flex justify-end">
                      <Link href={`/dashboard/pruebas/${test.id}`}>
                        <Button className="gap-1 bg-[#38bdf8] hover:bg-[#0ea5e9] text-[#0a192f]">
                          {test.status === "pending" ? (
                            <>
                              <Play className="h-4 w-4" />
                              Iniciar prueba
                            </>
                          ) : (
                            <>
                              <Play className="h-4 w-4" />
                              Continuar prueba
                            </>
                          )}
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </TabsContent>

        <TabsContent value="completed" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            {tests
              .filter((test) => test.status === "completed" || test.status === "expired")
              .map((test) => (
                <Card key={test.id}>
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle>{test.title}</CardTitle>
                        <CardDescription>
                          {test.job} - {test.company}
                        </CardDescription>
                      </div>
                      <Badge className={`${test.statusColor} text-white`}>{test.statusLabel}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">{test.description}</p>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center">
                        <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                        <span>Fecha límite: {test.dueDate}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                        <span>Duración: {test.timeLimit}</span>
                      </div>
                    </div>

                    {test.status === "completed" && (
                      <div className="rounded-md bg-green-50 p-3">
                        <div className="flex items-center">
                          <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                          <div>
                            <p className="font-medium text-green-800">Prueba completada</p>
                            <p className="text-sm text-green-700">Puntuación: {test.score}/100</p>
                          </div>
                        </div>
                      </div>
                    )}

                    {test.status === "expired" && (
                      <div className="rounded-md bg-red-50 p-3">
                        <div className="flex items-center">
                          <AlertTriangle className="mr-2 h-5 w-5 text-red-500" />
                          <div>
                            <p className="font-medium text-red-800">Prueba expirada</p>
                            <p className="text-sm text-red-700">La fecha límite ha pasado</p>
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="flex justify-end">
                      <Link href={`/dashboard/pruebas/${test.id}`}>
                        <Button variant="outline" className="gap-1">
                          <ClipboardList className="h-4 w-4" />
                          Ver detalles
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
