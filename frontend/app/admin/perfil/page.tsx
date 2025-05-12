"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { User, Building2, MapPin, Mail, Phone, Calendar, Edit, Camera, Shield, Key } from "lucide-react"
import { useAuth } from "@/contexts/AuthContext"

export default function PerfilAdministrador() {
  const [modoEdicion, setModoEdicion] = useState(false)
  const { usuario } = useAuth()
  
  // Datos de ejemplo para el perfil
  const perfilUsuario = {
    nombre: usuario?.nombre || "Administrador",
    apellido: usuario?.apellido || "Sistema",
    cargo: "Administrador Principal",
    email: usuario?.email || "admin@talentmatch.com",
    telefono: "+51 999 888 777", // Valor por defecto ya que no existe en el tipo Usuario
    fechaUnion: "Enero 2025",
    descripcion: "Administrador del sistema con acceso completo a todas las funcionalidades de la plataforma. Responsable de la gestión de usuarios, configuración del sistema y supervisión de operaciones."
  }
  
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Mi Perfil</h2>
        <Button onClick={() => setModoEdicion(!modoEdicion)}>
          {modoEdicion ? "Cancelar" : (
            <>
              <Edit className="mr-2 h-4 w-4" />
              Editar Perfil
            </>
          )}
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-1">
          <CardHeader>
            <div className="flex flex-col items-center space-y-4">
              <div className="relative">
                <Avatar className="h-32 w-32">
                  <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${perfilUsuario.nombre} ${perfilUsuario.apellido}`} alt={`${perfilUsuario.nombre} ${perfilUsuario.apellido}`} />
                  <AvatarFallback className="text-3xl">{perfilUsuario.nombre[0]}{perfilUsuario.apellido[0]}</AvatarFallback>
                </Avatar>
                {modoEdicion && (
                  <Button size="icon" variant="secondary" className="absolute bottom-0 right-0 rounded-full">
                    <Camera className="h-4 w-4" />
                  </Button>
                )}
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold">{perfilUsuario.nombre} {perfilUsuario.apellido}</h3>
                <p className="text-sm text-muted-foreground">{perfilUsuario.cargo}</p>
                <div className="mt-2 flex justify-center">
                  <Badge className="bg-[#38bdf8] hover:bg-[#0ea5e9]">
                    <Shield className="mr-1 h-3 w-3" />
                    Administrador
                  </Badge>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="mr-2 h-4 w-4 text-muted-foreground" />
                <span className="text-sm">{perfilUsuario.email}</span>
              </div>
              <div className="flex items-center">
                <Phone className="mr-2 h-4 w-4 text-muted-foreground" />
                <span className="text-sm">{perfilUsuario.telefono}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                <span className="text-sm">Miembro desde {perfilUsuario.fechaUnion}</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              <Key className="mr-2 h-4 w-4" />
              Cambiar Contraseña
            </Button>
          </CardFooter>
        </Card>
        
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Información del Perfil</CardTitle>
            <CardDescription>
              Gestiona tu información personal y preferencias
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="personal" className="space-y-4">
              <TabsList>
                <TabsTrigger value="personal">Información Personal</TabsTrigger>
                <TabsTrigger value="seguridad">Seguridad</TabsTrigger>
                <TabsTrigger value="preferencias">Preferencias</TabsTrigger>
              </TabsList>
              
              <TabsContent value="personal" className="space-y-4">
                {modoEdicion ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="nombre">Nombre</Label>
                      <Input id="nombre" defaultValue={perfilUsuario.nombre} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="apellido">Apellido</Label>
                      <Input id="apellido" defaultValue={perfilUsuario.apellido} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cargo">Cargo</Label>
                      <Input id="cargo" defaultValue={perfilUsuario.cargo} />
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
                      <Label htmlFor="descripcion">Descripción</Label>
                      <Textarea id="descripcion" rows={4} defaultValue={perfilUsuario.descripcion} />
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h3 className="text-sm font-medium text-muted-foreground">Nombre</h3>
                        <p>{perfilUsuario.nombre}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-muted-foreground">Apellido</h3>
                        <p>{perfilUsuario.apellido}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-muted-foreground">Cargo</h3>
                        <p>{perfilUsuario.cargo}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-muted-foreground">Email</h3>
                        <p>{perfilUsuario.email}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-muted-foreground">Teléfono</h3>
                        <p>{perfilUsuario.telefono}</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground">Descripción</h3>
                      <p className="text-sm">{perfilUsuario.descripcion}</p>
                    </div>
                  </div>
                )}
              </TabsContent>
              
              <TabsContent value="seguridad" className="space-y-4">
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground">Último Inicio de Sesión</h3>
                      <p>11/05/2025, 21:45</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground">Último Cambio de Contraseña</h3>
                      <p>01/05/2025</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground">Autenticación de Dos Factores</h3>
                      <p className="text-green-600 font-medium">Activada</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground">Sesiones Activas</h3>
                      <p>1 sesión activa</p>
                    </div>
                  </div>
                  <div className="pt-4">
                    <Button variant="outline" className="mr-2">
                      <Key className="mr-2 h-4 w-4" />
                      Cambiar Contraseña
                    </Button>
                    <Button variant="outline">
                      Gestionar 2FA
                    </Button>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="preferencias" className="space-y-4">
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground">Idioma</h3>
                      <p>Español</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground">Zona Horaria</h3>
                      <p>América/Lima (GMT-5)</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground">Notificaciones por Email</h3>
                      <p className="text-green-600 font-medium">Activadas</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground">Notificaciones del Sistema</h3>
                      <p className="text-green-600 font-medium">Activadas</p>
                    </div>
                  </div>
                  <div className="pt-4">
                    <Button variant="outline">
                      Editar Preferencias
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter>
            {modoEdicion && (
              <div className="flex justify-end w-full">
                <Button variant="outline" className="mr-2" onClick={() => setModoEdicion(false)}>
                  Cancelar
                </Button>
                <Button onClick={() => setModoEdicion(false)}>
                  Guardar Cambios
                </Button>
              </div>
            )}
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
