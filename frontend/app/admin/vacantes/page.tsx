"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Plus, Filter, MoreHorizontal, Edit, Trash2, Eye, Briefcase } from "lucide-react"

// Datos de ejemplo para las vacantes
const vacantesEjemplo = [
  {
    id: 1,
    titulo: "Desarrollador Frontend",
    ubicacion: "Lima",
    modalidad: "Remoto",
    salario: "S/ 4,000 - S/ 6,000",
    estado: "Activa",
    fechaPublicacion: "10/05/2025",
    postulaciones: 24,
    reclutador: "María Rodríguez"
  },
  {
    id: 2,
    titulo: "Diseñador UX/UI",
    ubicacion: "Lima",
    modalidad: "Híbrido",
    salario: "S/ 3,500 - S/ 5,000",
    estado: "Activa",
    fechaPublicacion: "08/05/2025",
    postulaciones: 18,
    reclutador: "Carlos Mendoza"
  },
  {
    id: 3,
    titulo: "Desarrollador Backend",
    ubicacion: "Arequipa",
    modalidad: "Presencial",
    salario: "S/ 5,000 - S/ 7,000",
    estado: "Activa",
    fechaPublicacion: "05/05/2025",
    postulaciones: 15,
    reclutador: "Lucía Fernández"
  },
  {
    id: 4,
    titulo: "Especialista en Marketing Digital",
    ubicacion: "Lima",
    modalidad: "Híbrido",
    salario: "S/ 3,000 - S/ 4,500",
    estado: "Pausada",
    fechaPublicacion: "01/05/2025",
    postulaciones: 12,
    reclutador: "Jorge Sánchez"
  },
  {
    id: 5,
    titulo: "DevOps Engineer",
    ubicacion: "Lima",
    modalidad: "Remoto",
    salario: "S/ 6,000 - S/ 8,000",
    estado: "Cerrada",
    fechaPublicacion: "25/04/2025",
    postulaciones: 20,
    reclutador: "María Rodríguez"
  }
]

export default function VacantesPage() {
  const [busqueda, setBusqueda] = useState("")
  const [filtroEstado, setFiltroEstado] = useState("todos")
  const [filtroModalidad, setFiltroModalidad] = useState("todos")
  
  // Filtrar vacantes según los criterios
  const vacantesFiltradas = vacantesEjemplo.filter(vacante => {
    const coincideBusqueda = vacante.titulo.toLowerCase().includes(busqueda.toLowerCase())
    
    const coincideEstado = filtroEstado === "todos" || vacante.estado === filtroEstado
    
    const coincideModalidad = filtroModalidad === "todos" || vacante.modalidad === filtroModalidad
    
    return coincideBusqueda && coincideEstado && coincideModalidad
  })
  
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Gestión de Vacantes</h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Briefcase className="mr-2 h-4 w-4" />
              Nueva Vacante
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Crear Nueva Vacante</DialogTitle>
              <DialogDescription>
                Completa los datos para publicar una nueva vacante en la plataforma.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="titulo" className="text-right">
                  Título
                </Label>
                <Input id="titulo" className="col-span-3" placeholder="Ej. Desarrollador Frontend" />
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="ubicacion" className="text-right">
                  Ubicación
                </Label>
                <Input id="ubicacion" className="col-span-3" placeholder="Ciudad" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="modalidad" className="text-right">
                  Modalidad
                </Label>
                <Select>
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Seleccionar modalidad" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="remoto">Remoto</SelectItem>
                    <SelectItem value="hibrido">Híbrido</SelectItem>
                    <SelectItem value="presencial">Presencial</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="salario" className="text-right">
                  Salario
                </Label>
                <Input id="salario" className="col-span-3" placeholder="Ej. S/ 4,000 - S/ 6,000" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="reclutador" className="text-right">
                  Reclutador
                </Label>
                <Select>
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Asignar reclutador" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="maria">María Rodríguez</SelectItem>
                    <SelectItem value="carlos">Carlos Mendoza</SelectItem>
                    <SelectItem value="lucia">Lucía Fernández</SelectItem>
                    <SelectItem value="jorge">Jorge Sánchez</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Publicar Vacante</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      
      <Tabs defaultValue="listado" className="space-y-4">
        <TabsList>
          <TabsTrigger value="listado">Listado</TabsTrigger>
          <TabsTrigger value="estadisticas">Estadísticas</TabsTrigger>
        </TabsList>
        
        <TabsContent value="listado" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Vacantes</CardTitle>
              <CardDescription>
                Gestiona las vacantes publicadas en la plataforma
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1 relative">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Buscar por título o empresa..."
                    className="pl-8"
                    value={busqueda}
                    onChange={(e) => setBusqueda(e.target.value)}
                  />
                </div>
                <Select value={filtroEstado} onValueChange={setFiltroEstado}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Estado" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="todos">Todos los estados</SelectItem>
                    <SelectItem value="Activa">Activa</SelectItem>
                    <SelectItem value="Pausada">Pausada</SelectItem>
                    <SelectItem value="Cerrada">Cerrada</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={filtroModalidad} onValueChange={setFiltroModalidad}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Modalidad" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="todos">Todas las modalidades</SelectItem>
                    <SelectItem value="Remoto">Remoto</SelectItem>
                    <SelectItem value="Híbrido">Híbrido</SelectItem>
                    <SelectItem value="Presencial">Presencial</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Vacante</TableHead>
                      <TableHead>Ubicación</TableHead>
                      <TableHead>Modalidad</TableHead>
                      <TableHead>Estado</TableHead>
                      <TableHead>Postulaciones</TableHead>
                      <TableHead>Reclutador</TableHead>
                      <TableHead>Acciones</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {vacantesFiltradas.map((vacante) => (
                      <TableRow key={vacante.id}>
                        <TableCell>
                          <div>
                            <div className="font-medium">{vacante.titulo}</div>
                          </div>
                        </TableCell>
                        <TableCell>{vacante.ubicacion}</TableCell>
                        <TableCell>{vacante.modalidad}</TableCell>
                        <TableCell>
                          <Badge 
                            variant={
                              vacante.estado === "Activa" ? "default" : 
                              vacante.estado === "Pausada" ? "outline" : 
                              "secondary"
                            }
                          >
                            {vacante.estado}
                          </Badge>
                        </TableCell>
                        <TableCell>{vacante.postulaciones}</TableCell>
                        <TableCell>{vacante.reclutador}</TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button variant="ghost" size="icon">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon" className="text-red-500">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                    {vacantesFiltradas.length === 0 && (
                      <TableRow>
                        <TableCell colSpan={7} className="text-center py-6">
                          No se encontraron vacantes con los criterios de búsqueda.
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="text-sm text-muted-foreground">
                Mostrando {vacantesFiltradas.length} de {vacantesEjemplo.length} vacantes
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm" disabled>
                  Anterior
                </Button>
                <Button variant="outline" size="sm" disabled>
                  Siguiente
                </Button>
              </div>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="estadisticas" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Vacantes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{vacantesEjemplo.length}</div>
                <p className="text-xs text-muted-foreground">
                  {vacantesEjemplo.filter(v => v.estado === "Activa").length} activas
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Postulaciones
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {vacantesEjemplo.reduce((total, v) => total + v.postulaciones, 0)}
                </div>
                <p className="text-xs text-muted-foreground">
                  +15% respecto al mes anterior
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Promedio por Vacante
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {Math.round(vacantesEjemplo.reduce((total, v) => total + v.postulaciones, 0) / vacantesEjemplo.length)}
                </div>
                <p className="text-xs text-muted-foreground">
                  +3 respecto al mes anterior
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Tasa de Conversión
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">7.2%</div>
                <p className="text-xs text-muted-foreground">
                  +0.5% respecto al mes anterior
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Distribución por Modalidad</CardTitle>
                <CardDescription>
                  Vacantes agrupadas por modalidad de trabajo
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6 pt-4">
                  {[
                    { modalidad: "Remoto", cantidad: 2, porcentaje: 40 },
                    { modalidad: "Híbrido", cantidad: 2, porcentaje: 40 },
                    { modalidad: "Presencial", cantidad: 1, porcentaje: 20 }
                  ].map((item) => (
                    <div key={item.modalidad} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">{item.modalidad}</span>
                        <span className="text-sm font-medium">{item.cantidad} ({item.porcentaje}%)</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-secondary">
                        <div className="h-2 rounded-full bg-[#38bdf8]" style={{ width: `${item.porcentaje}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Distribución por Ubicación</CardTitle>
                <CardDescription>
                  Vacantes agrupadas por ubicación geográfica
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6 pt-4">
                  {[
                    { ubicacion: "Lima", cantidad: 4, porcentaje: 80 },
                    { ubicacion: "Arequipa", cantidad: 1, porcentaje: 20 }
                  ].map((item) => (
                    <div key={item.ubicacion} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">{item.ubicacion}</span>
                        <span className="text-sm font-medium">{item.cantidad} ({item.porcentaje}%)</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-secondary">
                        <div className="h-2 rounded-full bg-[#38bdf8]" style={{ width: `${item.porcentaje}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
