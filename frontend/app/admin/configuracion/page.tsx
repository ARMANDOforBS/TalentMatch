"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { AlertCircle, Save, RefreshCw } from "lucide-react"

export default function ConfiguracionPage() {
  const [mantenimiento, setMantenimiento] = useState(false)
  const [registroAbierto, setRegistroAbierto] = useState(true)
  const [correosSoporte, setCorreosSoporte] = useState("soporte@talentmatch.com")
  const [limiteVacantes, setLimiteVacantes] = useState(50)
  
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Configuración del Sistema</h2>
      </div>
      
      <Tabs defaultValue="general" className="space-y-4">
        <TabsList>
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="seguridad">Seguridad</TabsTrigger>
          <TabsTrigger value="notificaciones">Notificaciones</TabsTrigger>
          <TabsTrigger value="integraciones">Integraciones</TabsTrigger>
        </TabsList>
        
        <TabsContent value="general" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Configuración General</CardTitle>
              <CardDescription>
                Ajustes generales de la plataforma
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="maintenance-mode">Modo Mantenimiento</Label>
                    <p className="text-sm text-muted-foreground">
                      Activa el modo mantenimiento para realizar actualizaciones
                    </p>
                  </div>
                  <Switch 
                    id="maintenance-mode" 
                    checked={mantenimiento} 
                    onCheckedChange={setMantenimiento} 
                  />
                </div>
                
                <Separator />
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="open-registration">Registro Abierto</Label>
                    <p className="text-sm text-muted-foreground">
                      Permite que nuevos usuarios se registren en la plataforma
                    </p>
                  </div>
                  <Switch 
                    id="open-registration" 
                    checked={registroAbierto} 
                    onCheckedChange={setRegistroAbierto} 
                  />
                </div>
                
                <Separator />
                
                <div className="space-y-2">
                  <Label htmlFor="support-email">Correos de Soporte</Label>
                  <Input 
                    id="support-email" 
                    value={correosSoporte} 
                    onChange={(e) => setCorreosSoporte(e.target.value)} 
                  />
                  <p className="text-xs text-muted-foreground">
                    Correos a los que se enviarán las solicitudes de soporte
                  </p>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="vacancies-limit">Límite de Vacantes por Reclutador</Label>
                    <span className="text-sm">{limiteVacantes}</span>
                  </div>
                  <Slider
                    id="vacancies-limit"
                    min={10}
                    max={100}
                    step={5}
                    value={[limiteVacantes]}
                    onValueChange={(value) => setLimiteVacantes(value[0])}
                  />
                  <p className="text-xs text-muted-foreground">
                    Número máximo de vacantes activas que puede tener un reclutador
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="mr-2">
                <RefreshCw className="mr-2 h-4 w-4" />
                Restablecer
              </Button>
              <Button>
                <Save className="mr-2 h-4 w-4" />
                Guardar Cambios
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="seguridad" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Configuración de Seguridad</CardTitle>
              <CardDescription>
                Ajustes de seguridad de la plataforma
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="two-factor">Autenticación de Dos Factores</Label>
                    <p className="text-sm text-muted-foreground">
                      Requiere 2FA para todos los administradores
                    </p>
                  </div>
                  <Switch id="two-factor" defaultChecked />
                </div>
                
                <Separator />
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="password-expiry">Caducidad de Contraseñas</Label>
                    <p className="text-sm text-muted-foreground">
                      Fuerza el cambio de contraseñas cada 90 días
                    </p>
                  </div>
                  <Switch id="password-expiry" defaultChecked />
                </div>
                
                <Separator />
                
                <div className="space-y-2">
                  <Label htmlFor="session-timeout">Tiempo de Sesión (minutos)</Label>
                  <Input id="session-timeout" type="number" defaultValue={30} min={5} max={120} />
                  <p className="text-xs text-muted-foreground">
                    Tiempo de inactividad antes de cerrar sesión automáticamente
                  </p>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="login-attempts">Intentos de Inicio de Sesión</Label>
                  <Input id="login-attempts" type="number" defaultValue={5} min={3} max={10} />
                  <p className="text-xs text-muted-foreground">
                    Número máximo de intentos fallidos antes de bloquear la cuenta
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="mr-2">
                <RefreshCw className="mr-2 h-4 w-4" />
                Restablecer
              </Button>
              <Button>
                <Save className="mr-2 h-4 w-4" />
                Guardar Cambios
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="notificaciones" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Configuración de Notificaciones</CardTitle>
              <CardDescription>
                Ajustes de notificaciones del sistema
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="email-notifications">Notificaciones por Email</Label>
                    <p className="text-sm text-muted-foreground">
                      Envía notificaciones por correo electrónico
                    </p>
                  </div>
                  <Switch id="email-notifications" defaultChecked />
                </div>
                
                <Separator />
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="system-notifications">Notificaciones del Sistema</Label>
                    <p className="text-sm text-muted-foreground">
                      Muestra notificaciones en la plataforma
                    </p>
                  </div>
                  <Switch id="system-notifications" defaultChecked />
                </div>
                
                <Separator />
                
                <div className="space-y-2">
                  <Label htmlFor="notification-template">Plantilla de Correo</Label>
                  <Select defaultValue="default">
                    <SelectTrigger id="notification-template">
                      <SelectValue placeholder="Seleccionar plantilla" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="default">Plantilla Predeterminada</SelectItem>
                      <SelectItem value="minimal">Plantilla Minimalista</SelectItem>
                      <SelectItem value="corporate">Plantilla Corporativa</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-xs text-muted-foreground">
                    Plantilla para los correos electrónicos del sistema
                  </p>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email-footer">Pie de Página de Correos</Label>
                  <Textarea 
                    id="email-footer" 
                    placeholder="Texto del pie de página" 
                    defaultValue="© 2025 TalentMatch. Todos los derechos reservados." 
                  />
                  <p className="text-xs text-muted-foreground">
                    Texto que aparecerá en el pie de página de todos los correos
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="mr-2">
                <RefreshCw className="mr-2 h-4 w-4" />
                Restablecer
              </Button>
              <Button>
                <Save className="mr-2 h-4 w-4" />
                Guardar Cambios
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="integraciones" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Integraciones</CardTitle>
              <CardDescription>
                Configuración de integraciones con servicios externos
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="linkedin-integration">Integración con LinkedIn</Label>
                    <p className="text-sm text-muted-foreground">
                      Permite la importación de perfiles desde LinkedIn
                    </p>
                  </div>
                  <Switch id="linkedin-integration" defaultChecked />
                </div>
                
                <Separator />
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="google-integration">Integración con Google</Label>
                    <p className="text-sm text-muted-foreground">
                      Permite el inicio de sesión con Google
                    </p>
                  </div>
                  <Switch id="google-integration" defaultChecked />
                </div>
                
                <Separator />
                
                <div className="space-y-2">
                  <Label htmlFor="linkedin-api-key">API Key de LinkedIn</Label>
                  <Input id="linkedin-api-key" type="password" value="••••••••••••••••••••••••••••••" />
                  <p className="text-xs text-muted-foreground">
                    Clave de API para la integración con LinkedIn
                  </p>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="google-client-id">Client ID de Google</Label>
                  <Input id="google-client-id" type="password" value="••••••••••••••••••••••••••••••" />
                  <p className="text-xs text-muted-foreground">
                    ID de cliente para la integración con Google
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="mr-2">
                <RefreshCw className="mr-2 h-4 w-4" />
                Restablecer
              </Button>
              <Button>
                <Save className="mr-2 h-4 w-4" />
                Guardar Cambios
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
