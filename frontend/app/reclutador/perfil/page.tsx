"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { User, Building2, MapPin, Mail, Phone, Calendar, Edit, Camera, LinkIcon } from "lucide-react"

export default function PerfilReclutador() {
  const [modoEdicion, setModoEdicion] = useState(false)
  
  const perfilUsuario = {
    nombre: "María Rodríguez",
    cargo: "Reclutadora Senior",
    empresa: "TechTalent Solutions",
    ubicacion: "Lima, Perú",
    email: "maria.rodriguez@techtalent.com",
    telefono: "+51 987 654 321",
    fechaUnion: "Enero 2024",
    descripcion: "Profesional con más de 5 años de experiencia en reclutamiento y selección de perfiles tecnológicos. Especializada en la búsqueda de talento para startups y empresas de tecnología."
  }
  
  const habilidades = [
    "Entrevistas técnicas",
    "Sourcing",
    "LinkedIn Recruiter",
    "Evaluación de competencias",
    "Onboarding",
    "Gestión de ATS",
    "Employer Branding"
  ]
  
  const estadisticas = [
    { titulo: "Vacantes Publicadas", valor: 42 },
    { titulo: "Contrataciones", valor: 25 },
    { titulo: "Candidatos Evaluados", valor: 430 },
    { titulo: "Tiempo Promedio", valor: "20 días" }
  ]
  
  const historialVacantes = [
    {
      titulo: "Full Stack Developer",
      estado: "Cubierta",
      candidatos: 48,
      fechaPublicacion: "15/04/2025",
      fechaCierre: "10/05/2025"
    },
    {
      titulo: "UX/UI Designer",
      estado: "Cubierta",
      candidatos: 35,
      fechaPublicacion: "02/04/2025",
      fechaCierre: "28/04/2025"
    },
    {
      titulo: "Data Scientist",
      estado: "Activa",
      candidatos: 22,
      fechaPublicacion: "01/05/2025",
      fechaCierre: "-"
    },
    {
      titulo: "Product Manager",
      estado: "Activa",
      candidatos: 18,
      fechaPublicacion: "10/05/2025",
      fechaCierre: "-"
    }
  ]

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <h1 className="text-2xl font-bold text-[#0a192f]">Mi Perfil</h1>
          <Button 
            onClick={() => setModoEdicion(!modoEdicion)} 
            className="mt-4 md:mt-0"
            variant={modoEdicion ? "default" : "outline"}
          >
            {modoEdicion ? "Guardar Cambios" : (
              <>
                <Edit className="mr-2 h-4 w-4" />
                Editar Perfil
              </>
            )}
          </Button>
        </div>
        
        <div className="mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="relative">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src="/avatars/reclutador1.jpg" alt={perfilUsuario.nombre} />
                    <AvatarFallback>
                      {perfilUsuario.nombre.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  {modoEdicion && (
                    <Button size="icon" variant="outline" className="absolute bottom-0 right-0 h-8 w-8 rounded-full bg-white">
                      <Camera className="h-4 w-4" />
                    </Button>
                  )}
                </div>
                
                <div className="flex-1 space-y-4">
                  {modoEdicion ? (
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="nombre">Nombre completo</Label>
                        <Input id="nombre" defaultValue={perfilUsuario.nombre} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cargo">Cargo</Label>
                        <Input id="cargo" defaultValue={perfilUsuario.cargo} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="empresa">Empresa</Label>
                        <Input id="empresa" defaultValue={perfilUsuario.empresa} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="ubicacion">Ubicación</Label>
                        <Input id="ubicacion" defaultValue={perfilUsuario.ubicacion} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" defaultValue={perfilUsuario.email} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="telefono">Teléfono</Label>
                        <Input id="telefono" defaultValue={perfilUsuario.telefono} />
                      </div>
                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="descripcion">Acerca de mí</Label>
                        <Textarea
                          id="descripcion"
                          className="min-h-32"
                          defaultValue={perfilUsuario.descripcion}
                        />
                      </div>
                    </div>
                  ) : (
                    <>
                      <div>
                        <h2 className="text-2xl font-bold">{perfilUsuario.nombre}</h2>
                        <p className="text-muted-foreground">{perfilUsuario.cargo}</p>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex items-center gap-2">
                          <Building2 className="h-4 w-4 text-muted-foreground" />
                          <span>{perfilUsuario.empresa}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-muted-foreground" />
                          <span>{perfilUsuario.ubicacion}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Mail className="h-4 w-4 text-muted-foreground" />
                          <span>{perfilUsuario.email}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4 text-muted-foreground" />
                          <span>{perfilUsuario.telefono}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">
                          Miembro desde {perfilUsuario.fechaUnion}
                        </span>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Acerca de mí</h3>
                        <p>{perfilUsuario.descripcion}</p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Tabs defaultValue="estadisticas">
          <TabsList className="mb-6">
            <TabsTrigger value="estadisticas">Estadísticas</TabsTrigger>
            <TabsTrigger value="habilidades">Habilidades</TabsTrigger>
            <TabsTrigger value="historial">Historial de Vacantes</TabsTrigger>
            <TabsTrigger value="preferencias">Preferencias</TabsTrigger>
          </TabsList>
          
          <TabsContent value="estadisticas">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {estadisticas.map((item, index) => (
                <Card key={index}>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      {item.titulo}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{item.valor}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Rendimiento Mensual</CardTitle>
                <CardDescription>
                  Estadísticas de los últimos 6 meses
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] w-full">
                  <div className="flex h-full items-end gap-2 pb-6">
                    {["Dic", "Ene", "Feb", "Mar", "Abr", "May"].map((mes, index) => (
                      <div key={index} className="relative flex w-full flex-col items-center">
                        <div
                          className="w-full max-w-[60px] rounded-t bg-[#38bdf8]"
                          style={{ height: `${20 + Math.floor(Math.random() * 60)}%` }}
                        ></div>
                        <span className="absolute -bottom-6 text-xs text-muted-foreground">
                          {mes}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="habilidades">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Habilidades y Áreas de Especialización</span>
                  {modoEdicion && (
                    <Button variant="outline" size="sm">
                      <Edit className="mr-2 h-4 w-4" />
                      Añadir Habilidad
                    </Button>
                  )}
                </CardTitle>
                <CardDescription>
                  Competencias y especialidades relevantes para tu rol como reclutador
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {habilidades.map((habilidad, index) => (
                    <div key={index} className="relative">
                      <Badge variant="secondary" className="px-3 py-1 text-base">
                        {habilidad}
                      </Badge>
                      {modoEdicion && (
                        <button className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-white">
                          &times;
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Áreas de Especialización</CardTitle>
                <CardDescription>
                  Perfiles y roles en los que tienes mayor experiencia
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Desarrolladores</span>
                      <span className="text-sm font-medium">90%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-secondary">
                      <div className="h-2 rounded-full bg-[#38bdf8]" style={{ width: "90%" }}></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Diseñadores UX/UI</span>
                      <span className="text-sm font-medium">75%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-secondary">
                      <div className="h-2 rounded-full bg-[#38bdf8]" style={{ width: "75%" }}></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Product Managers</span>
                      <span className="text-sm font-medium">60%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-secondary">
                      <div className="h-2 rounded-full bg-[#38bdf8]" style={{ width: "60%" }}></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Data Scientists</span>
                      <span className="text-sm font-medium">50%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-secondary">
                      <div className="h-2 rounded-full bg-[#38bdf8]" style={{ width: "50%" }}></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Marketing Digital</span>
                      <span className="text-sm font-medium">40%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-secondary">
                      <div className="h-2 rounded-full bg-[#38bdf8]" style={{ width: "40%" }}></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="historial">
            <Card>
              <CardHeader>
                <CardTitle>Historial de Vacantes</CardTitle>
                <CardDescription>
                  Vacantes que has publicado y gestionado
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3">Puesto</th>
                        <th className="text-left py-3">Estado</th>
                        <th className="text-left py-3">Candidatos</th>
                        <th className="text-left py-3">Fecha Publicación</th>
                        <th className="text-left py-3">Fecha Cierre</th>
                      </tr>
                    </thead>
                    <tbody>
                      {historialVacantes.map((vacante, index) => (
                        <tr key={index} className="border-b">
                          <td className="py-3">
                            <div className="font-medium">{vacante.titulo}</div>
                          </td>
                          <td className="py-3">
                            <Badge
                              variant={vacante.estado === "Cubierta" ? "outline" : "default"}
                              className={vacante.estado === "Cubierta" 
                                ? "bg-green-100 text-green-800 hover:bg-green-100 hover:text-green-800" 
                                : "bg-[#38bdf8]/10 text-[#38bdf8] hover:bg-[#38bdf8]/20"
                              }
                            >
                              {vacante.estado}
                            </Badge>
                          </td>
                          <td className="py-3">{vacante.candidatos}</td>
                          <td className="py-3">{vacante.fechaPublicacion}</td>
                          <td className="py-3">{vacante.fechaCierre}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="ml-auto">
                  Ver Historial Completo
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="preferencias">
            <Card>
              <CardHeader>
                <CardTitle>Preferencias de Notificaciones</CardTitle>
                <CardDescription>
                  Configura cómo quieres recibir las notificaciones
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="notif-nuevos-candidatos">Nuevos candidatos</Label>
                    <p className="text-sm text-muted-foreground">
                      Recibe notificaciones cuando un candidato se postule a tus vacantes
                    </p>
                  </div>
                  <Select defaultValue="tiempo-real">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Frecuencia" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tiempo-real">Tiempo real</SelectItem>
                      <SelectItem value="diario">Resumen diario</SelectItem>
                      <SelectItem value="semanal">Resumen semanal</SelectItem>
                      <SelectItem value="no">No recibir</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="notif-entrevistas">Recordatorios de entrevistas</Label>
                    <p className="text-sm text-muted-foreground">
                      Recordatorios sobre próximas entrevistas programadas
                    </p>
                  </div>
                  <Select defaultValue="dia-anterior">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Frecuencia" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="semana-anterior">1 semana antes</SelectItem>
                      <SelectItem value="dia-anterior">1 día antes</SelectItem>
                      <SelectItem value="horas-antes">3 horas antes</SelectItem>
                      <SelectItem value="no">No recibir</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="notif-mensajes">Mensajes</Label>
                    <p className="text-sm text-muted-foreground">
                      Notificaciones sobre nuevos mensajes de candidatos
                    </p>
                  </div>
                  <Select defaultValue="tiempo-real">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Frecuencia" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tiempo-real">Tiempo real</SelectItem>
                      <SelectItem value="diario">Resumen diario</SelectItem>
                      <SelectItem value="no">No recibir</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
            
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Enlaces y Redes Sociales</CardTitle>
                <CardDescription>
                  Añade enlaces a tus perfiles profesionales
                </CardDescription>
              </CardHeader>
              <CardContent>
                {modoEdicion ? (
                  <div className="grid gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="linkedin">LinkedIn</Label>
                      <Input id="linkedin" defaultValue="https://linkedin.com/in/maria-rodriguez" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="twitter">Twitter</Label>
                      <Input id="twitter" defaultValue="https://twitter.com/maria_r" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="sitio-web">Sitio web</Label>
                      <Input id="sitio-web" defaultValue="https://mariarecluta.com" />
                    </div>
                    <Button variant="outline">Añadir nuevo enlace</Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <LinkIcon className="mr-2 h-4 w-4 text-muted-foreground" />
                      <a
                        href="https://linkedin.com/in/maria-rodriguez"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#38bdf8] hover:underline"
                      >
                        linkedin.com/in/maria-rodriguez
                      </a>
                    </div>
                    <div className="flex items-center">
                      <LinkIcon className="mr-2 h-4 w-4 text-muted-foreground" />
                      <a
                        href="https://twitter.com/maria_r"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#38bdf8] hover:underline"
                      >
                        twitter.com/maria_r
                      </a>
                    </div>
                    <div className="flex items-center">
                      <LinkIcon className="mr-2 h-4 w-4 text-muted-foreground" />
                      <a
                        href="https://mariarecluta.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#38bdf8] hover:underline"
                      >
                        mariarecluta.com
                      </a>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
    </div>
  )
}
