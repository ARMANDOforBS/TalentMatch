"use client"

import { useState } from "react"
import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Bell, Shield, Lock, Key, User, Mail, Smartphone, Globe } from "lucide-react"

export default function PaginaConfiguracion() {
  const [notificacionesCorreo, setNotificacionesCorreo] = useState(true)
  const [notificacionesPush, setNotificacionesPush] = useState(true)
  const [actualizacionesVacantes, setActualizacionesVacantes] = useState(true)
  const [recomendacionesVacantes, setRecomendacionesVacantes] = useState(true)
  const [mensajesReclutadores, setMensajesReclutadores] = useState(true)
  const [alertasEntrevistas, setAlertasEntrevistas] = useState(true)
  const [idiomaSeleccionado, setIdiomaSeleccionado] = useState("es")
  const [temaSeleccionado, setTemaSeleccionado] = useState("claro")

  return (
    <div className="flex min-h-screen bg-background">
      <DashboardSidebar />
      <div className="flex-1 p-6 md:p-8">
        <h1 className="text-2xl font-bold text-[#0a192f] mb-6">Configuración</h1>
        
        <Tabs defaultValue="notificaciones">
          <TabsList className="mb-4">
            <TabsTrigger value="notificaciones">Notificaciones</TabsTrigger>
            <TabsTrigger value="privacidad">Privacidad y Seguridad</TabsTrigger>
            <TabsTrigger value="cuenta">Cuenta</TabsTrigger>
            <TabsTrigger value="preferencias">Preferencias</TabsTrigger>
          </TabsList>
          
          <TabsContent value="notificaciones">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Bell className="mr-2 h-5 w-5" />
                  Configuración de Notificaciones
                </CardTitle>
                <CardDescription>
                  Administra cómo y cuándo quieres recibir notificaciones.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-sm font-medium">Canales de notificación</h3>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="notificaciones-correo">Notificaciones por correo electrónico</Label>
                      <p className="text-sm text-muted-foreground">
                        Recibe actualizaciones importantes por correo electrónico
                      </p>
                    </div>
                    <Switch 
                      id="notificaciones-correo" 
                      checked={notificacionesCorreo} 
                      onCheckedChange={setNotificacionesCorreo} 
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="notificaciones-push">Notificaciones push</Label>
                      <p className="text-sm text-muted-foreground">
                        Recibe notificaciones en tu navegador
                      </p>
                    </div>
                    <Switch 
                      id="notificaciones-push" 
                      checked={notificacionesPush} 
                      onCheckedChange={setNotificacionesPush} 
                    />
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  <h3 className="text-sm font-medium">Tipos de notificaciones</h3>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="actualizaciones-vacantes">Actualizaciones de vacantes</Label>
                      <p className="text-sm text-muted-foreground">
                        Cambios en el estado de tus postulaciones
                      </p>
                    </div>
                    <Switch 
                      id="actualizaciones-vacantes" 
                      checked={actualizacionesVacantes} 
                      onCheckedChange={setActualizacionesVacantes} 
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="recomendaciones-vacantes">Recomendaciones de vacantes</Label>
                      <p className="text-sm text-muted-foreground">
                        Nuevas vacantes que coinciden con tu perfil
                      </p>
                    </div>
                    <Switch 
                      id="recomendaciones-vacantes" 
                      checked={recomendacionesVacantes} 
                      onCheckedChange={setRecomendacionesVacantes} 
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="mensajes-reclutadores">Mensajes de reclutadores</Label>
                      <p className="text-sm text-muted-foreground">
                        Notificaciones cuando un reclutador te contacta
                      </p>
                    </div>
                    <Switch 
                      id="mensajes-reclutadores" 
                      checked={mensajesReclutadores} 
                      onCheckedChange={setMensajesReclutadores} 
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="alertas-entrevistas">Alertas de entrevistas</Label>
                      <p className="text-sm text-muted-foreground">
                        Recordatorios de próximas entrevistas
                      </p>
                    </div>
                    <Switch 
                      id="alertas-entrevistas" 
                      checked={alertasEntrevistas} 
                      onCheckedChange={setAlertasEntrevistas} 
                    />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="ml-auto">Guardar cambios</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="privacidad">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="mr-2 h-5 w-5" />
                  Privacidad y Seguridad
                </CardTitle>
                <CardDescription>
                  Administra la visibilidad de tu perfil y mantén tu cuenta segura.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-sm font-medium">Visibilidad del perfil</h3>
                  <div className="space-y-3">
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="visibilidad-perfil">¿Quién puede ver tu perfil?</Label>
                      <Select defaultValue="todos">
                        <SelectTrigger id="visibilidad-perfil">
                          <SelectValue placeholder="Selecciona una opción" />
                        </SelectTrigger>
                        <SelectContent position="popper">
                          <SelectItem value="todos">Todos los reclutadores</SelectItem>
                          <SelectItem value="aplicados">Solo empresas a las que he aplicado</SelectItem>
                          <SelectItem value="nadie">Nadie (perfil oculto)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="visibilidad-datos">Datos personales visibles para reclutadores</Label>
                      <Select defaultValue="parcial">
                        <SelectTrigger id="visibilidad-datos">
                          <SelectValue placeholder="Selecciona una opción" />
                        </SelectTrigger>
                        <SelectContent position="popper">
                          <SelectItem value="completo">Mostrar todos mis datos</SelectItem>
                          <SelectItem value="parcial">Ocultar datos de contacto hasta match</SelectItem>
                          <SelectItem value="minimo">Mostrar solo información profesional</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  <h3 className="text-sm font-medium">Seguridad de la cuenta</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Autenticación de dos factores</Label>
                        <p className="text-sm text-muted-foreground">
                          Añade una capa extra de seguridad a tu cuenta
                        </p>
                      </div>
                      <Button variant="outline" className="gap-1">
                        <Lock className="h-4 w-4" />
                        Configurar
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Cambiar contraseña</Label>
                        <p className="text-sm text-muted-foreground">
                          Actualiza tu contraseña regularmente para mayor seguridad
                        </p>
                      </div>
                      <Button variant="outline" className="gap-1">
                        <Key className="h-4 w-4" />
                        Cambiar
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Sesiones activas</Label>
                        <p className="text-sm text-muted-foreground">
                          Gestiona todos los dispositivos donde has iniciado sesión
                        </p>
                      </div>
                      <Button variant="outline" className="gap-1">
                        <Smartphone className="h-4 w-4" />
                        Ver sesiones
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="ml-auto">Guardar cambios</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="cuenta">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <User className="mr-2 h-5 w-5" />
                  Información de la Cuenta
                </CardTitle>
                <CardDescription>
                  Gestiona la información básica de tu cuenta.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-sm font-medium">Datos personales</h3>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="nombre">Nombre</Label>
                      <Input id="nombre" placeholder="Tu nombre" defaultValue="Juan" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="apellido">Apellido</Label>
                      <Input id="apellido" placeholder="Tu apellido" defaultValue="Pérez" />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="email">Correo electrónico</Label>
                      <Input id="email" type="email" placeholder="tuemail@ejemplo.com" defaultValue="juan.perez@ejemplo.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="telefono">Teléfono</Label>
                      <Input id="telefono" placeholder="+51 999 888 777" defaultValue="+51 999 123 456" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="pais">País</Label>
                      <Select defaultValue="peru">
                        <SelectTrigger id="pais">
                          <SelectValue placeholder="Selecciona tu país" />
                        </SelectTrigger>
                        <SelectContent position="popper">
                          <SelectItem value="peru">Perú</SelectItem>
                          <SelectItem value="mexico">México</SelectItem>
                          <SelectItem value="colombia">Colombia</SelectItem>
                          <SelectItem value="argentina">Argentina</SelectItem>
                          <SelectItem value="chile">Chile</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  <h3 className="text-sm font-medium">Email secundario</h3>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Correo de recuperación</Label>
                      <p className="text-sm text-muted-foreground">
                        Añade un correo alternativo para recuperar tu cuenta
                      </p>
                    </div>
                    <Button variant="outline" className="gap-1">
                      <Mail className="h-4 w-4" />
                      Añadir
                    </Button>
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  <h3 className="text-sm font-medium">Acciones de cuenta</h3>
                  <div className="flex flex-wrap gap-2">
                    <Button variant="outline" className="gap-1">
                      <span>Exportar mis datos</span>
                    </Button>
                    <Button variant="destructive" className="gap-1">
                      <span>Desactivar cuenta</span>
                    </Button>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="ml-auto">Guardar cambios</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="preferencias">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Globe className="mr-2 h-5 w-5" />
                  Preferencias
                </CardTitle>
                <CardDescription>
                  Personaliza tu experiencia en la plataforma.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-sm font-medium">Idioma y región</h3>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="idioma">Idioma</Label>
                      <Select value={idiomaSeleccionado} onValueChange={setIdiomaSeleccionado}>
                        <SelectTrigger id="idioma">
                          <SelectValue placeholder="Selecciona un idioma" />
                        </SelectTrigger>
                        <SelectContent position="popper">
                          <SelectItem value="es">Español</SelectItem>
                          <SelectItem value="en">Inglés</SelectItem>
                          <SelectItem value="pt">Portugués</SelectItem>
                          <SelectItem value="fr">Francés</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="zona-horaria">Zona horaria</Label>
                      <Select defaultValue="america-lima">
                        <SelectTrigger id="zona-horaria">
                          <SelectValue placeholder="Selecciona tu zona horaria" />
                        </SelectTrigger>
                        <SelectContent position="popper">
                          <SelectItem value="america-lima">América/Lima (GMT-5)</SelectItem>
                          <SelectItem value="america-mexico">América/México (GMT-6)</SelectItem>
                          <SelectItem value="america-bogota">América/Bogotá (GMT-5)</SelectItem>
                          <SelectItem value="america-santiago">América/Santiago (GMT-4)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  <h3 className="text-sm font-medium">Apariencia</h3>
                  <div className="space-y-2">
                    <Label htmlFor="tema">Tema</Label>
                    <Select value={temaSeleccionado} onValueChange={setTemaSeleccionado}>
                      <SelectTrigger id="tema">
                        <SelectValue placeholder="Selecciona un tema" />
                      </SelectTrigger>
                      <SelectContent position="popper">
                        <SelectItem value="claro">Claro</SelectItem>
                        <SelectItem value="oscuro">Oscuro</SelectItem>
                        <SelectItem value="sistema">Usar configuración del sistema</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  <h3 className="text-sm font-medium">Preferencias laborales</h3>
                  <div className="space-y-2">
                    <Label htmlFor="modalidad">Modalidad de trabajo preferida</Label>
                    <Select defaultValue="hibrido">
                      <SelectTrigger id="modalidad">
                        <SelectValue placeholder="Selecciona una modalidad" />
                      </SelectTrigger>
                      <SelectContent position="popper">
                        <SelectItem value="presencial">Presencial</SelectItem>
                        <SelectItem value="remoto">Remoto</SelectItem>
                        <SelectItem value="hibrido">Híbrido</SelectItem>
                        <SelectItem value="cualquiera">Cualquiera</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="notificaciones-vacantes">Recibir notificaciones de vacantes</Label>
                    <Select defaultValue="diaria">
                      <SelectTrigger id="notificaciones-vacantes">
                        <SelectValue placeholder="Selecciona frecuencia" />
                      </SelectTrigger>
                      <SelectContent position="popper">
                        <SelectItem value="tiempo-real">En tiempo real</SelectItem>
                        <SelectItem value="diaria">Resumen diario</SelectItem>
                        <SelectItem value="semanal">Resumen semanal</SelectItem>
                        <SelectItem value="nunca">No recibir</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="ml-auto">Guardar preferencias</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
