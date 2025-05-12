"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"

export default function ConfiguracionIAPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Configuración de IA</h2>
      </div>
      
      <Tabs defaultValue="general" className="space-y-4">
        <TabsList>
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="matching">Matching</TabsTrigger>
          <TabsTrigger value="avanzado">Avanzado</TabsTrigger>
        </TabsList>
        
        <TabsContent value="general" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Configuración General</CardTitle>
              <CardDescription>
                Ajustes generales del sistema de IA
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="ai-enabled">Activar Sistema de IA</Label>
                    <p className="text-sm text-muted-foreground">
                      Habilita o deshabilita el sistema de IA en la plataforma
                    </p>
                  </div>
                  <Switch id="ai-enabled" defaultChecked />
                </div>
                
                <Separator />
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="auto-matching">Matching Automático</Label>
                    <p className="text-sm text-muted-foreground">
                      Realiza matching automático entre candidatos y vacantes
                    </p>
                  </div>
                  <Switch id="auto-matching" defaultChecked />
                </div>
                
                <Separator />
                
                <div className="space-y-2">
                  <Label htmlFor="api-key">API Key</Label>
                  <Input id="api-key" type="password" value="sk-••••••••••••••••••••••••••••••" />
                  <p className="text-xs text-muted-foreground">
                    Clave de API para el servicio de IA
                  </p>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="modelo">Modelo de IA</Label>
                  <select
                    id="modelo"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    defaultValue="gpt-4"
                  >
                    <option value="gpt-4">GPT-4</option>
                    <option value="gpt-3.5-turbo">GPT-3.5 Turbo</option>
                    <option value="claude-2">Claude 2</option>
                    <option value="custom">Modelo Personalizado</option>
                  </select>
                  <p className="text-xs text-muted-foreground">
                    Selecciona el modelo de IA a utilizar
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="ml-auto">Guardar Cambios</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="matching" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Configuración de Matching</CardTitle>
              <CardDescription>
                Ajusta los parámetros del algoritmo de matching
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="skills-weight">Peso de Habilidades</Label>
                    <span className="text-sm">80%</span>
                  </div>
                  <Slider
                    id="skills-weight"
                    defaultValue={[80]}
                    max={100}
                    step={1}
                  />
                  <p className="text-xs text-muted-foreground">
                    Importancia de las habilidades técnicas en el matching
                  </p>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="experience-weight">Peso de Experiencia</Label>
                    <span className="text-sm">60%</span>
                  </div>
                  <Slider
                    id="experience-weight"
                    defaultValue={[60]}
                    max={100}
                    step={1}
                  />
                  <p className="text-xs text-muted-foreground">
                    Importancia de la experiencia laboral en el matching
                  </p>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="education-weight">Peso de Educación</Label>
                    <span className="text-sm">50%</span>
                  </div>
                  <Slider
                    id="education-weight"
                    defaultValue={[50]}
                    max={100}
                    step={1}
                  />
                  <p className="text-xs text-muted-foreground">
                    Importancia de la educación en el matching
                  </p>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="location-weight">Peso de Ubicación</Label>
                    <span className="text-sm">40%</span>
                  </div>
                  <Slider
                    id="location-weight"
                    defaultValue={[40]}
                    max={100}
                    step={1}
                  />
                  <p className="text-xs text-muted-foreground">
                    Importancia de la ubicación en el matching
                  </p>
                </div>
                
                <Separator />
                
                <div className="space-y-2">
                  <Label htmlFor="threshold">Umbral de Compatibilidad</Label>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">70%</span>
                    <Input
                      id="threshold"
                      type="number"
                      className="w-20"
                      defaultValue={70}
                      min={0}
                      max={100}
                    />
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Porcentaje mínimo para considerar una compatibilidad válida
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="mr-2">Restablecer</Button>
              <Button>Guardar Cambios</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="avanzado" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Configuración Avanzada</CardTitle>
              <CardDescription>
                Ajustes avanzados del sistema de IA
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="temperature">Temperatura</Label>
                  <div className="flex items-center justify-between">
                    <Slider
                      id="temperature"
                      defaultValue={[0.7]}
                      max={1}
                      step={0.1}
                      className="w-[90%]"
                    />
                    <span className="text-sm ml-4">0.7</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Controla la aleatoriedad de las respuestas (0-1)
                  </p>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="max-tokens">Tokens Máximos</Label>
                  <Input id="max-tokens" type="number" defaultValue={2048} />
                  <p className="text-xs text-muted-foreground">
                    Número máximo de tokens para las respuestas
                  </p>
                </div>
                
                <Separator />
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="debug-mode">Modo Debug</Label>
                    <p className="text-sm text-muted-foreground">
                      Habilita logs detallados para depuración
                    </p>
                  </div>
                  <Switch id="debug-mode" />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="mr-2">Restablecer</Button>
              <Button>Guardar Cambios</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
