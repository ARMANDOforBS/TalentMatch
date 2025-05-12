import type { Metadata } from "next"
import Link from "next/link"
import { BrainCircuit, Sparkles, Lightbulb, FileCode, CheckCircle2, Clock, AlertTriangle, Search, Filter, Plus, Download, Eye, ArrowUpDown, MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export const metadata: Metadata = {
  title: "Pruebas Técnicas - TalentMatch",
  description: "Gestiona las pruebas técnicas generadas por IA en TalentMatch",
}

export default function PruebasTecnicasPage() {
  // Datos de ejemplo para las pruebas técnicas
  const pruebas = [
    {
      id: "PT-001",
      titulo: "Prueba de React y TypeScript",
      vacante: "Desarrollador Frontend Senior",
      tipo: "Codificación",
      dificultad: "Avanzado",
      duracion: "2 horas",
      candidatosAsignados: 12,
      completadas: 8,
      fechaCreacion: "05/05/2025",
      estado: "Activa",
      generadaPorIA: true,
      tasaAprobacion: 75,
      habilidadesEvaluadas: ["React", "TypeScript", "CSS", "API Integration"]
    },
    {
      id: "PT-002",
      titulo: "Diseño de Interfaz de Usuario",
      vacante: "UX/UI Designer",
      tipo: "Diseño",
      dificultad: "Intermedio",
      duracion: "3 horas",
      candidatosAsignados: 8,
      completadas: 6,
      fechaCreacion: "03/05/2025",
      estado: "Activa",
      generadaPorIA: true,
      tasaAprobacion: 83,
      habilidadesEvaluadas: ["Figma", "Wireframing", "UX Research", "Prototyping"]
    },
    {
      id: "PT-003",
      titulo: "Configuración de CI/CD",
      vacante: "DevOps Engineer",
      tipo: "Proyecto",
      dificultad: "Avanzado",
      duracion: "4 horas",
      candidatosAsignados: 5,
      completadas: 3,
      fechaCreacion: "01/05/2025",
      estado: "Activa",
      generadaPorIA: true,
      tasaAprobacion: 67,
      habilidadesEvaluadas: ["Docker", "Jenkins", "AWS", "Kubernetes"]
    },
    {
      id: "PT-004",
      titulo: "Desarrollo de API REST",
      vacante: "Backend Developer",
      tipo: "Codificación",
      dificultad: "Intermedio",
      duracion: "2.5 horas",
      candidatosAsignados: 10,
      completadas: 7,
      fechaCreacion: "28/04/2025",
      estado: "Activa",
      generadaPorIA: true,
      tasaAprobacion: 71,
      habilidadesEvaluadas: ["Node.js", "Express", "MongoDB", "JWT"]
    },
    {
      id: "PT-005",
      titulo: "Gestión de Producto",
      vacante: "Product Manager",
      tipo: "Teórica",
      dificultad: "Intermedio",
      duracion: "1.5 horas",
      candidatosAsignados: 6,
      completadas: 6,
      fechaCreacion: "25/04/2025",
      estado: "Completada",
      generadaPorIA: true,
      tasaAprobacion: 83,
      habilidadesEvaluadas: ["Roadmapping", "User Stories", "Agile", "Stakeholder Management"]
    },
  ]

  return (
    <div className="flex flex-col space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Pruebas Técnicas</h2>
          <p className="text-muted-foreground mt-1">Gestiona las pruebas técnicas generadas por IA</p>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/reclutador/vacantes/crear">
            <Button className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              <span>Crear Prueba</span>
              <BrainCircuit className="h-4 w-4 text-blue-200" />
            </Button>
          </Link>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Input
            placeholder="Buscar pruebas..."
            className="w-[300px]"
          />
          <Button variant="outline" size="icon">
            <Search className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filtrar por estado" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos los estados</SelectItem>
              <SelectItem value="active">Activas</SelectItem>
              <SelectItem value="completed">Completadas</SelectItem>
              <SelectItem value="draft">Borradores</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <Download className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Pruebas Técnicas Generadas por IA</CardTitle>
            <CardDescription>Pruebas personalizadas para evaluar candidatos</CardDescription>
          </div>
          <Badge className="bg-[#38bdf8] text-white flex items-center gap-1">
            <BrainCircuit className="h-3 w-3" />
            <span>IA Avanzada</span>
          </Badge>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="todas" className="space-y-4">
            <TabsList>
              <TabsTrigger value="todas">Todas</TabsTrigger>
              <TabsTrigger value="activas">Activas</TabsTrigger>
              <TabsTrigger value="completadas">Completadas</TabsTrigger>
              <TabsTrigger value="borradores">Borradores</TabsTrigger>
            </TabsList>
            <TabsContent value="todas" className="space-y-4">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">ID</TableHead>
                    <TableHead>Título</TableHead>
                    <TableHead>Vacante</TableHead>
                    <TableHead>Tipo</TableHead>
                    <TableHead>Dificultad</TableHead>
                    <TableHead>Candidatos</TableHead>
                    <TableHead>Tasa de Aprobación</TableHead>
                    <TableHead className="text-right">Acciones</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {pruebas.map((prueba) => (
                    <TableRow key={prueba.id}>
                      <TableCell className="font-medium">{prueba.id}</TableCell>
                      <TableCell>
                        <div className="flex flex-col">
                          <span className="font-medium">{prueba.titulo}</span>
                          <div className="flex items-center text-xs text-muted-foreground mt-1">
                            <Clock className="h-3 w-3 mr-1" />
                            <span>{prueba.duracion}</span>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{prueba.vacante}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{prueba.tipo}</Badge>
                      </TableCell>
                      <TableCell>{prueba.dificultad}</TableCell>
                      <TableCell>
                        <div className="flex flex-col">
                          <span>{prueba.completadas}/{prueba.candidatosAsignados}</span>
                          <Progress 
                            value={(prueba.completadas/prueba.candidatosAsignados)*100} 
                            className="h-1 mt-1" 
                          />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <Badge className={`mr-2 ${prueba.tasaAprobacion >= 75 ? 'bg-green-500' : prueba.tasaAprobacion >= 50 ? 'bg-yellow-500' : 'bg-red-500'}`}>
                            {prueba.tasaAprobacion}%
                          </Badge>
                          <div className="flex items-center text-xs text-[#38bdf8]">
                            <Sparkles className="h-3 w-3 mr-1" />
                            <span>IA</span>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex items-center justify-end gap-2">
                          <Button variant="ghost" size="icon">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Acciones</DropdownMenuLabel>
                              <DropdownMenuItem>
                                <Eye className="h-4 w-4 mr-2" />
                                Ver detalles
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <FileCode className="h-4 w-4 mr-2" />
                                Editar prueba
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem>
                                <Download className="h-4 w-4 mr-2" />
                                Exportar resultados
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>
            <TabsContent value="activas">
              <div className="rounded-lg border p-4 text-center">
                <p>Filtro por pruebas activas aplicado</p>
              </div>
            </TabsContent>
            <TabsContent value="completadas">
              <div className="rounded-lg border p-4 text-center">
                <p>Filtro por pruebas completadas aplicado</p>
              </div>
            </TabsContent>
            <TabsContent value="borradores">
              <div className="rounded-lg border p-4 text-center">
                <p>Filtro por borradores aplicado</p>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Análisis de Rendimiento</CardTitle>
          <CardDescription>Estadísticas sobre las pruebas técnicas</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Pruebas Activas</CardTitle>
                <FileCode className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">4</div>
                <div className="flex items-center text-xs text-muted-foreground mt-1">
                  <Lightbulb className="h-3 w-3 mr-1 text-[#38bdf8]" />
                  <span>Todas generadas por IA</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Tasa de Aprobación</CardTitle>
                <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">76%</div>
                <div className="flex items-center text-xs text-muted-foreground mt-1">
                  <Sparkles className="h-3 w-3 mr-1 text-green-500" />
                  <span>+5% respecto al mes anterior</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Tiempo Promedio</CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2.5h</div>
                <div className="flex items-center text-xs text-muted-foreground mt-1">
                  <Sparkles className="h-3 w-3 mr-1 text-[#38bdf8]" />
                  <span>Duración promedio de pruebas</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Candidatos Evaluados</CardTitle>
                <BrainCircuit className="h-4 w-4 text-[#38bdf8]" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">41</div>
                <div className="flex items-center text-xs text-muted-foreground mt-1">
                  <AlertTriangle className="h-3 w-3 mr-1 text-yellow-500" />
                  <span>30 pruebas pendientes</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
