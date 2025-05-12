import type { Metadata } from "next"
import Link from "next/link"
import { ChevronLeft, BrainCircuit, Sparkles, Lightbulb, Zap, CheckCircle2, Settings, FileCode } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Crear Vacante - TalentMatch",
  description: "Crea una nueva vacante en TalentMatch",
}

export default function CreateVacancyPage() {
  return (
    <div className="flex flex-col space-y-6">
      <div className="flex items-center space-x-2">
        <Button variant="outline" size="icon" asChild>
          <Link href="/reclutador/vacantes">
            <ChevronLeft className="h-4 w-4" />
          </Link>
        </Button>
        <h2 className="text-3xl font-bold tracking-tight">Crear Vacante</h2>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Información de la Vacante</CardTitle>
          <CardDescription>Completa los detalles de la nueva vacante</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="title">Título de la Vacante</Label>
                <Input id="title" placeholder="Ej. Desarrollador Frontend Senior" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="department">Departamento</Label>
                <Select>
                  <SelectTrigger id="department">
                    <SelectValue placeholder="Seleccionar departamento" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="technology">Tecnología</SelectItem>
                    <SelectItem value="design">Diseño</SelectItem>
                    <SelectItem value="marketing">Marketing</SelectItem>
                    <SelectItem value="sales">Ventas</SelectItem>
                    <SelectItem value="hr">Recursos Humanos</SelectItem>
                    <SelectItem value="finance">Finanzas</SelectItem>
                    <SelectItem value="operations">Operaciones</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="location">Ubicación</Label>
                <Select>
                  <SelectTrigger id="location">
                    <SelectValue placeholder="Seleccionar ubicación" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cdmx">Ciudad de México</SelectItem>
                    <SelectItem value="guadalajara">Guadalajara</SelectItem>
                    <SelectItem value="monterrey">Monterrey</SelectItem>
                    <SelectItem value="remote">Remoto</SelectItem>
                    <SelectItem value="hybrid">Híbrido</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="type">Tipo de Contrato</Label>
                <Select>
                  <SelectTrigger id="type">
                    <SelectValue placeholder="Seleccionar tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="full-time">Tiempo Completo</SelectItem>
                    <SelectItem value="part-time">Medio Tiempo</SelectItem>
                    <SelectItem value="contract">Por Contrato</SelectItem>
                    <SelectItem value="freelance">Freelance</SelectItem>
                    <SelectItem value="internship">Prácticas</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="experience">Experiencia Requerida</Label>
                <Select>
                  <SelectTrigger id="experience">
                    <SelectValue placeholder="Seleccionar experiencia" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="entry">Entry Level (0-1 años)</SelectItem>
                    <SelectItem value="junior">Junior (1-3 años)</SelectItem>
                    <SelectItem value="mid">Mid-Level (3-5 años)</SelectItem>
                    <SelectItem value="senior">Senior (5-8 años)</SelectItem>
                    <SelectItem value="expert">Experto (8+ años)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="salary">Rango Salarial</Label>
                <Select>
                  <SelectTrigger id="salary">
                    <SelectValue placeholder="Seleccionar rango" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="range1">$15,000 - $25,000 MXN</SelectItem>
                    <SelectItem value="range2">$25,000 - $35,000 MXN</SelectItem>
                    <SelectItem value="range3">$35,000 - $50,000 MXN</SelectItem>
                    <SelectItem value="range4">$50,000 - $70,000 MXN</SelectItem>
                    <SelectItem value="range5">$70,000+ MXN</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <Separator />

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="description">Descripción de la Vacante</Label>
              <Textarea
                id="description"
                placeholder="Describe las responsabilidades y el rol..."
                className="min-h-[120px]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="requirements">Requisitos</Label>
              <Textarea
                id="requirements"
                placeholder="Lista los requisitos y habilidades necesarias..."
                className="min-h-[120px]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="benefits">Beneficios</Label>
              <Textarea
                id="benefits"
                placeholder="Describe los beneficios que ofrece la posición..."
                className="min-h-[120px]"
              />
            </div>
          </div>

          <Separator />

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Habilidades Requeridas</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="skill1">Habilidad 1</Label>
                <Input id="skill1" placeholder="Ej. React" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="skill2">Habilidad 2</Label>
                <Input id="skill2" placeholder="Ej. TypeScript" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="skill3">Habilidad 3</Label>
                <Input id="skill3" placeholder="Ej. Node.js" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="skill4">Habilidad 4</Label>
                <Input id="skill4" placeholder="Ej. AWS" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="skill5">Habilidad 5</Label>
                <Input id="skill5" placeholder="Ej. GraphQL" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="skill6">Habilidad 6</Label>
                <Input id="skill6" placeholder="Ej. Docker" />
              </div>
            </div>
          </div>
          
          <Separator />
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-medium flex items-center gap-2">
                  <BrainCircuit className="h-5 w-5 text-[#38bdf8]" />
                  <span>Prueba Técnica Generada por IA</span>
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  La IA creará automáticamente una prueba técnica personalizada basada en los requisitos de la vacante
                </p>
              </div>
              <Badge className="bg-[#38bdf8] text-white flex items-center gap-1">
                <Sparkles className="h-3 w-3" />
                <span>Potenciado por IA</span>
              </Badge>
            </div>
            
            <div className="rounded-lg border p-4 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="testType">Tipo de Prueba</Label>
                <Select>
                  <SelectTrigger id="testType">
                    <SelectValue placeholder="Seleccionar tipo de prueba" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="coding">Prueba de Codificación</SelectItem>
                    <SelectItem value="design">Prueba de Diseño</SelectItem>
                    <SelectItem value="theory">Prueba Teórica</SelectItem>
                    <SelectItem value="project">Mini Proyecto</SelectItem>
                    <SelectItem value="mixed">Prueba Mixta</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="difficulty">Nivel de Dificultad</Label>
                <Select>
                  <SelectTrigger id="difficulty">
                    <SelectValue placeholder="Seleccionar dificultad" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="basic">Básico</SelectItem>
                    <SelectItem value="intermediate">Intermedio</SelectItem>
                    <SelectItem value="advanced">Avanzado</SelectItem>
                    <SelectItem value="expert">Experto</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="duration">Duración Estimada</Label>
                <Select>
                  <SelectTrigger id="duration">
                    <SelectValue placeholder="Seleccionar duración" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="30min">30 minutos</SelectItem>
                    <SelectItem value="1h">1 hora</SelectItem>
                    <SelectItem value="2h">2 horas</SelectItem>
                    <SelectItem value="4h">4 horas</SelectItem>
                    <SelectItem value="8h">8 horas</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="focus">Enfoque Principal</Label>
                <Textarea
                  id="focus"
                  placeholder="Describe los aspectos específicos que debe evaluar la prueba..."
                  className="min-h-[80px]"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="rounded-lg border p-3 flex items-start gap-3">
                  <div className="rounded-full bg-green-100 p-1.5 text-green-600 mt-0.5">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium">Evaluación Automática</h4>
                    <p className="text-xs text-muted-foreground mt-1">
                      La IA evaluará automáticamente las respuestas de los candidatos
                    </p>
                  </div>
                </div>
                
                <div className="rounded-lg border p-3 flex items-start gap-3">
                  <div className="rounded-full bg-blue-100 p-1.5 text-blue-600 mt-0.5">
                    <Settings className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium">Personalizable</h4>
                    <p className="text-xs text-muted-foreground mt-1">
                      Podrás revisar y ajustar la prueba antes de enviarla
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center text-sm text-[#38bdf8]">
                  <Lightbulb className="mr-2 h-4 w-4" />
                  <span>La IA analizará las habilidades requeridas para generar la prueba</span>
                </div>
                <Button className="gap-2 bg-[#38bdf8] hover:bg-[#0ea5e9]">
                  <FileCode className="h-4 w-4" />
                  <span>Vista Previa</span>
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" asChild>
            <Link href="/reclutador/vacantes">Cancelar</Link>
          </Button>
          <Button>Publicar Vacante</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
