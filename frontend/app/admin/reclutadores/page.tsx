"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Plus, Filter, MoreHorizontal, Mail, Phone, Edit, Trash2, UserPlus } from "lucide-react"

// Datos de ejemplo para los reclutadores
const reclutadoresEjemplo = [
  {
    id: 1,
    nombre: "María Rodríguez",
    email: "maria.rodriguez@talentmatch.com",
    telefono: "+51 987 654 321",
    especialidad: "Tecnología",
    estado: "Activo",
    vacantesActivas: 5,
    contratacionesMes: 3,
    fechaRegistro: "15/01/2025"
  },
  {
    id: 2,
    nombre: "Carlos Mendoza",
    email: "carlos.mendoza@talentmatch.com",
    telefono: "+51 987 123 456",
    especialidad: "Marketing",
    estado: "Activo",
    vacantesActivas: 3,
    contratacionesMes: 2,
    fechaRegistro: "20/02/2025"
  },
  {
    id: 3,
    nombre: "Ana López",
    email: "ana.lopez@talentmatch.com",
    telefono: "+51 999 888 777",
    especialidad: "Recursos Humanos",
    estado: "Inactivo",
    vacantesActivas: 0,
    contratacionesMes: 0,
    fechaRegistro: "10/03/2025"
  },
  {
    id: 4,
    nombre: "Jorge Sánchez",
    email: "jorge.sanchez@talentmatch.com",
    telefono: "+51 945 678 123",
    especialidad: "Ventas",
    estado: "Activo",
    vacantesActivas: 4,
    contratacionesMes: 1,
    fechaRegistro: "05/04/2025"
  },
  {
    id: 5,
    nombre: "Lucía Fernández",
    email: "lucia.fernandez@talentmatch.com",
    telefono: "+51 912 345 678",
    especialidad: "Tecnología",
    estado: "Activo",
    vacantesActivas: 6,
    contratacionesMes: 4,
    fechaRegistro: "22/04/2025"
  }
]

export default function ReclutadoresPage() {
  const [busqueda, setBusqueda] = useState("")
  const [filtroEspecialidad, setFiltroEspecialidad] = useState("todos")
  const [filtroEstado, setFiltroEstado] = useState("todos")
  
  // Filtrar reclutadores según los criterios
  const reclutadoresFiltrados = reclutadoresEjemplo.filter(reclutador => {
    const coincideBusqueda = reclutador.nombre.toLowerCase().includes(busqueda.toLowerCase()) || 
                            reclutador.email.toLowerCase().includes(busqueda.toLowerCase())
    
    const coincideEspecialidad = filtroEspecialidad === "todos" || reclutador.especialidad === filtroEspecialidad
    
    const coincideEstado = filtroEstado === "todos" || reclutador.estado === filtroEstado
    
    return coincideBusqueda && coincideEspecialidad && coincideEstado
  })
  
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Gestión de Reclutadores</h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <UserPlus className="mr-2 h-4 w-4" />
              Nuevo Reclutador
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Añadir Reclutador</DialogTitle>
              <DialogDescription>
                Completa los datos para registrar un nuevo reclutador en el sistema.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="nombre" className="text-right">
                  Nombre
                </Label>
                <Input id="nombre" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">
                  Email
                </Label>
                <Input id="email" type="email" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="telefono" className="text-right">
                  Teléfono
                </Label>
                <Input id="telefono" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="especialidad" className="text-right">
                  Especialidad
                </Label>
                <Select>
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Seleccionar especialidad" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tecnologia">Tecnología</SelectItem>
                    <SelectItem value="marketing">Marketing</SelectItem>
                    <SelectItem value="rrhh">Recursos Humanos</SelectItem>
                    <SelectItem value="ventas">Ventas</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Guardar</Button>
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
              <CardTitle>Reclutadores</CardTitle>
              <CardDescription>
                Gestiona los reclutadores de la plataforma
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1 relative">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Buscar por nombre o email..."
                    className="pl-8"
                    value={busqueda}
                    onChange={(e) => setBusqueda(e.target.value)}
                  />
                </div>
                <Select value={filtroEspecialidad} onValueChange={setFiltroEspecialidad}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Especialidad" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="todos">Todas las especialidades</SelectItem>
                    <SelectItem value="Tecnología">Tecnología</SelectItem>
                    <SelectItem value="Marketing">Marketing</SelectItem>
                    <SelectItem value="Recursos Humanos">Recursos Humanos</SelectItem>
                    <SelectItem value="Ventas">Ventas</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={filtroEstado} onValueChange={setFiltroEstado}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Estado" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="todos">Todos los estados</SelectItem>
                    <SelectItem value="Activo">Activo</SelectItem>
                    <SelectItem value="Inactivo">Inactivo</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Reclutador</TableHead>
                      <TableHead>Especialidad</TableHead>
                      <TableHead>Estado</TableHead>
                      <TableHead>Vacantes Activas</TableHead>
                      <TableHead>Contrataciones</TableHead>
                      <TableHead>Acciones</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {reclutadoresFiltrados.map((reclutador) => (
                      <TableRow key={reclutador.id}>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <Avatar>
                              <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${reclutador.nombre}`} alt={reclutador.nombre} />
                              <AvatarFallback>{reclutador.nombre.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium">{reclutador.nombre}</div>
                              <div className="text-sm text-muted-foreground">{reclutador.email}</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>{reclutador.especialidad}</TableCell>
                        <TableCell>
                          <Badge variant={reclutador.estado === "Activo" ? "default" : "secondary"}>
                            {reclutador.estado}
                          </Badge>
                        </TableCell>
                        <TableCell>{reclutador.vacantesActivas}</TableCell>
                        <TableCell>{reclutador.contratacionesMes}</TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button variant="ghost" size="icon">
                              <Mail className="h-4 w-4" />
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
                    {reclutadoresFiltrados.length === 0 && (
                      <TableRow>
                        <TableCell colSpan={6} className="text-center py-6">
                          No se encontraron reclutadores con los criterios de búsqueda.
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="text-sm text-muted-foreground">
                Mostrando {reclutadoresFiltrados.length} de {reclutadoresEjemplo.length} reclutadores
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
                  Total Reclutadores
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{reclutadoresEjemplo.length}</div>
                <p className="text-xs text-muted-foreground">
                  {reclutadoresEjemplo.filter(r => r.estado === "Activo").length} activos
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Vacantes Activas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {reclutadoresEjemplo.reduce((total, r) => total + r.vacantesActivas, 0)}
                </div>
                <p className="text-xs text-muted-foreground">
                  {(reclutadoresEjemplo.reduce((total, r) => total + r.vacantesActivas, 0) / reclutadoresEjemplo.filter(r => r.estado === "Activo").length).toFixed(1)} por reclutador
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Contrataciones del Mes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {reclutadoresEjemplo.reduce((total, r) => total + r.contratacionesMes, 0)}
                </div>
                <p className="text-xs text-muted-foreground">
                  +12% respecto al mes anterior
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Eficiencia Promedio
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">78%</div>
                <p className="text-xs text-muted-foreground">
                  +5% respecto al mes anterior
                </p>
              </CardContent>
            </Card>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Distribución por Especialidad</CardTitle>
              <CardDescription>
                Reclutadores agrupados por área de especialidad
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6 pt-4">
                {[
                  { especialidad: "Tecnología", cantidad: 2, porcentaje: 40 },
                  { especialidad: "Marketing", cantidad: 1, porcentaje: 20 },
                  { especialidad: "Recursos Humanos", cantidad: 1, porcentaje: 20 },
                  { especialidad: "Ventas", cantidad: 1, porcentaje: 20 }
                ].map((item) => (
                  <div key={item.especialidad} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">{item.especialidad}</span>
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
        </TabsContent>
      </Tabs>
    </div>
  )
}
