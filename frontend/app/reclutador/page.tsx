import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight, Briefcase, CheckCircle, Clock, Users, BrainCircuit, Sparkles, Zap, Lightbulb, BarChart, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Dashboard de Reclutador - TalentMatch",
  description: "Panel de control para reclutadores en TalentMatch",
}

export default function RecruiterDashboard() {
  return (
    <div className="flex flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
            <p className="text-muted-foreground mt-1">Gestiona tus procesos de reclutamiento potenciados por IA</p>
          </div>
          <div className="flex items-center space-x-2">
            <Link href="/reclutador/vacantes/crear">
              <Button className="flex items-center gap-2">
                <Briefcase className="h-4 w-4" />
                <span>Crear Vacante</span>
                <BrainCircuit className="h-4 w-4 text-blue-200" />
              </Button>
            </Link>
          </div>
        </div>

        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Resumen</TabsTrigger>
            <TabsTrigger value="analytics">Analíticas</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Vacantes Activas</CardTitle>
                  <Briefcase className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12</div>
                  <p className="text-xs text-muted-foreground">+2 desde el mes pasado</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Candidatos Analizados</CardTitle>
                  <BrainCircuit className="h-4 w-4 text-[#38bdf8]" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">245</div>
                  <div className="flex items-center text-xs text-muted-foreground mt-1">
                    <Sparkles className="h-3 w-3 mr-1 text-[#38bdf8]" />
                    <span>Perfiles evaluados por IA</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Contrataciones</CardTitle>
                  <CheckCircle className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">8</div>
                  <div className="flex items-center text-xs text-muted-foreground mt-1">
                    <Zap className="h-3 w-3 mr-1 text-green-500" />
                    <span>92% de precisión en matching</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Tiempo de Contratación</CardTitle>
                  <Clock className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">18 días</div>
                  <div className="flex items-center text-xs text-muted-foreground mt-1">
                    <ArrowRight className="h-3 w-3 mr-1 text-green-500" />
                    <span>-3 días con selección asistida</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4">
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>Vacantes Activas</CardTitle>
                    <CardDescription>Procesos de reclutamiento en curso</CardDescription>
                  </div>
                  <Badge className="bg-[#38bdf8] text-white flex items-center gap-1">
                    <BrainCircuit className="h-3 w-3" />
                    <span>IA Asistida</span>
                  </Badge>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        title: "Desarrollador Frontend Senior",
                        applicants: 24,
                        days: 5,
                        progress: 65,
                        topCandidate: "Carlos M. (92% match)",
                        aiInsight: "3 candidatos cumplen todos los requisitos técnicos"
                      },
                      {
                        title: "Ingeniero DevOps",
                        applicants: 18,
                        days: 3,
                        progress: 42,
                        topCandidate: "Roberto S. (88% match)",
                        aiInsight: "Recomendación: Ampliar búsqueda a perfiles con Kubernetes"
                      },
                      {
                        title: "Diseñador UX/UI",
                        applicants: 12,
                        days: 7,
                        progress: 78,
                        topCandidate: "Ana G. (95% match)",
                        aiInsight: "Candidata con excelente portafolio y experiencia"
                      },
                      {
                        title: "Desarrollador Backend",
                        applicants: 8,
                        days: 2,
                        progress: 25,
                        topCandidate: "Pendiente",
                        aiInsight: "Sugerencia: Revisar requisitos para atraer más candidatos"
                      },
                    ].map((job, index) => (
                      <div key={index} className="rounded-lg border p-3 relative overflow-hidden">
                        <div className="absolute top-0 right-0 bg-gradient-to-l from-[#38bdf8]/20 to-transparent w-1/2 h-1"></div>
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium leading-none">{job.title}</p>
                          <p className="text-sm text-muted-foreground">{job.applicants} candidatos</p>
                        </div>
                        <div className="flex items-center gap-2 mt-2">
                          <Progress value={job.progress} className="h-2 flex-1" />
                          <p className="text-xs text-muted-foreground whitespace-nowrap">{job.days} días</p>
                        </div>
                        <div className="mt-2 flex justify-between items-center text-xs">
                          <div className="flex items-center text-[#38bdf8]">
                            <Sparkles className="mr-1 h-3 w-3" />
                            <span>Top: {job.topCandidate}</span>
                          </div>
                          <Link href="/reclutador/candidatos" className="text-[#38bdf8] hover:underline">Ver candidatos</Link>
                        </div>
                        <div className="mt-1 text-xs text-muted-foreground flex items-center">
                          <Lightbulb className="mr-1 h-3 w-3 text-[#38bdf8]" />
                          <span>{job.aiInsight}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/reclutador/vacantes">
                      Ver todas las vacantes
                      <ArrowUpRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="col-span-3">
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>Candidatos Analizados por IA</CardTitle>
                    <CardDescription>Perfiles con mayor compatibilidad</CardDescription>
                  </div>
                  <BrainCircuit className="h-5 w-5 text-[#38bdf8]" />
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        name: "Carlos Mendoza",
                        role: "Desarrollador Frontend",
                        match: 95,
                        skills: ["React", "TypeScript", "UI/UX"],
                        insight: "Experiencia relevante en proyectos similares"
                      },
                      {
                        name: "Ana Gutiérrez",
                        role: "Diseñadora UX/UI",
                        match: 92,
                        skills: ["Figma", "User Research", "Prototipos"],
                        insight: "Portafolio excepcional con enfoque en usabilidad"
                      },
                      {
                        name: "Roberto Sánchez",
                        role: "Ingeniero DevOps",
                        match: 88,
                        skills: ["Docker", "CI/CD", "AWS"],
                        insight: "Certificaciones relevantes en cloud computing"
                      },
                      {
                        name: "Laura Torres",
                        role: "Product Manager",
                        match: 85,
                        skills: ["Agile", "Roadmapping", "Stakeholder Management"],
                        insight: "Fuerte capacidad de liderazgo y comunicación"
                      },
                    ].map((candidate) => (
                      <div key={candidate.name} className="rounded-lg border p-3 relative overflow-hidden">
                        <div className="absolute top-0 left-0 bg-gradient-to-r from-[#38bdf8]/20 to-transparent w-1/2 h-1"></div>
                        <div className="flex items-center justify-between">
                          <div className="space-y-1">
                            <p className="text-sm font-medium leading-none">{candidate.name}</p>
                            <p className="text-sm text-muted-foreground">{candidate.role}</p>
                          </div>
                          <Badge className="bg-[#38bdf8] flex items-center gap-1">
                            <Sparkles className="h-3 w-3" />
                            <span>{candidate.match}% match</span>
                          </Badge>
                        </div>
                        <div className="mt-2">
                          <div className="flex flex-wrap gap-1 mb-1">
                            {candidate.skills.map((skill) => (
                              <Badge key={skill} variant="outline" className="text-xs py-0 h-5">{skill}</Badge>
                            ))}
                          </div>
                          <div className="text-xs text-muted-foreground flex items-center mt-1">
                            <Lightbulb className="mr-1 h-3 w-3 text-[#38bdf8]" />
                            <span>{candidate.insight}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/reclutador/candidatos">
                      Ver todos los candidatos
                      <ArrowUpRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Estadísticas de Reclutamiento</CardTitle>
                <CardDescription>Análisis de tus procesos de reclutamiento</CardDescription>
              </CardHeader>
              <CardContent className="h-[400px] flex items-center justify-center">
                <p className="text-muted-foreground">Gráficos de estadísticas de reclutamiento</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
