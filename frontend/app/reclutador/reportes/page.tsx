"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Download, BarChart3, LineChart, PieChart, TrendingUp, Filter } from "lucide-react"

// Definición de interfaces
interface DatoGrafico {
  etiqueta: string;
  valor: number;
}

// Componente de gráfico de barras simplificado
const GraficoBarras = ({ data }: { data: DatoGrafico[] }) => (
  <div className="h-[300px] w-full">
    <div className="flex h-full items-end gap-2 pb-6">
      {data.map((item: DatoGrafico, index: number) => (
        <div key={index} className="relative flex w-full flex-col items-center">
          <div
            className="w-full max-w-[60px] rounded-t bg-[#38bdf8]"
            style={{ height: `${item.valor}%` }}
          ></div>
          <span className="absolute -bottom-6 text-xs text-muted-foreground">
            {item.etiqueta}
          </span>
        </div>
      ))}
    </div>
  </div>
)

// Componente de gráfico de línea simplificado
const GraficoLinea = ({ data }: { data: DatoGrafico[] }) => (
  <div className="h-[300px] w-full">
    <div className="relative h-full w-full">
      <div className="absolute inset-0 flex items-end">
        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path
            d={`M0,100 ${data.map((item: DatoGrafico, i: number) => `L${(i / (data.length - 1)) * 100},${100 - item.valor}`).join(' ')} L100,100 Z`}
            className="fill-[#38bdf8]/20 stroke-[#38bdf8] stroke-2"
          />
        </svg>
      </div>
      <div className="absolute bottom-0 flex w-full justify-between pb-6">
        {data.map((item: DatoGrafico, index: number) => (
          <span key={index} className="text-xs text-muted-foreground">
            {item.etiqueta}
          </span>
        ))}
      </div>
    </div>
  </div>
)

// Componente de gráfico circular simplificado
const GraficoCircular = ({ data }: { data: DatoGrafico[] }) => (
  <div className="flex h-[300px] w-full items-center justify-center">
    <div className="relative h-[200px] w-[200px]">
      <svg viewBox="0 0 100 100" className="h-full w-full">
        {data.map((item: DatoGrafico, index: number) => {
          const startAngle = index > 0 
            ? data.slice(0, index).reduce((sum: number, i: DatoGrafico) => sum + i.valor, 0) / 100 * 360 
            : 0
          const endAngle = startAngle + (item.valor / 100 * 360)
          const x1 = 50 + 45 * Math.cos((startAngle - 90) * Math.PI / 180)
          const y1 = 50 + 45 * Math.sin((startAngle - 90) * Math.PI / 180)
          const x2 = 50 + 45 * Math.cos((endAngle - 90) * Math.PI / 180)
          const y2 = 50 + 45 * Math.sin((endAngle - 90) * Math.PI / 180)
          const largeArcFlag = endAngle - startAngle > 180 ? 1 : 0
          
          return (
            <path
              key={index}
              d={`M50,50 L${x1},${y1} A45,45 0 ${largeArcFlag},1 ${x2},${y2} z`}
              fill={`hsl(${index * 50}, 70%, 60%)`}
            />
          )
        })}
        <circle cx="50" cy="50" r="25" fill="white" />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-xl font-bold">100%</span>
      </div>
    </div>
    <div className="ml-4 space-y-2">
      {data.map((item: DatoGrafico, index: number) => (
        <div key={index} className="flex items-center">
          <div
            className="mr-2 h-3 w-3 rounded-full"
            style={{ backgroundColor: `hsl(${index * 50}, 70%, 60%)` }}
          ></div>
          <span className="text-sm">
            {item.etiqueta} ({item.valor}%)
          </span>
        </div>
      ))}
    </div>
  </div>
)

export default function PaginaReportes() {
  const [periodoSeleccionado, setPeriodoSeleccionado] = useState("mes")
  
  // Datos de ejemplo para los gráficos
  const datosPostulaciones = [
    { etiqueta: "Ene", valor: 65 },
    { etiqueta: "Feb", valor: 40 },
    { etiqueta: "Mar", valor: 75 },
    { etiqueta: "Abr", valor: 55 },
    { etiqueta: "May", valor: 90 },
    { etiqueta: "Jun", valor: 60 },
  ]
  
  const datosContrataciones = [
    { etiqueta: "Ene", valor: 25 },
    { etiqueta: "Feb", valor: 15 },
    { etiqueta: "Mar", valor: 30 },
    { etiqueta: "Abr", valor: 20 },
    { etiqueta: "May", valor: 35 },
    { etiqueta: "Jun", valor: 22 },
  ]
  
  const datosHabilidades = [
    { etiqueta: "React", valor: 40 },
    { etiqueta: "Node.js", valor: 25 },
    { etiqueta: "Java", valor: 15 },
    { etiqueta: "Python", valor: 20 },
  ]

  return (
    <div className="flex-1 p-6 md:p-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <h1 className="text-2xl font-bold text-[#0a192f]">Reportes y Análisis</h1>
        <div className="flex items-center gap-2 mt-4 md:mt-0">
          <Select value={periodoSeleccionado} onValueChange={setPeriodoSeleccionado}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Seleccionar período" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="semana">Última semana</SelectItem>
              <SelectItem value="mes">Último mes</SelectItem>
              <SelectItem value="trimestre">Último trimestre</SelectItem>
              <SelectItem value="año">Último año</SelectItem>
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
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Postulaciones
            </CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">342</div>
            <p className="text-xs text-muted-foreground">
              +20.1% respecto al período anterior
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Contrataciones
            </CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">
              +12.5% respecto al período anterior
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Tasa de Conversión
            </CardTitle>
            <LineChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7.0%</div>
            <p className="text-xs text-muted-foreground">
              -2.3% respecto al período anterior
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Tiempo Promedio
            </CardTitle>
            <PieChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">18 días</div>
            <p className="text-xs text-muted-foreground">
              -3 días respecto al período anterior
            </p>
          </CardContent>
        </Card>
      </div>
      
      <Tabs defaultValue="general" className="space-y-4">
        <TabsList>
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="vacantes">Vacantes</TabsTrigger>
          <TabsTrigger value="candidatos">Candidatos</TabsTrigger>
          <TabsTrigger value="geografico">Geográfico</TabsTrigger>
        </TabsList>
        
        <TabsContent value="general" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Postulaciones por Mes</CardTitle>
                <CardDescription>
                  Número de postulaciones recibidas por mes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <GraficoBarras data={datosPostulaciones} />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Contrataciones por Mes</CardTitle>
                <CardDescription>
                  Número de contrataciones realizadas por mes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <GraficoBarras data={datosContrataciones} />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Habilidades más Demandadas</CardTitle>
                <CardDescription>
                  Distribución de habilidades más solicitadas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <GraficoCircular data={datosHabilidades} />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Tendencia de Postulaciones</CardTitle>
                <CardDescription>
                  Evolución de postulaciones en el tiempo
                </CardDescription>
              </CardHeader>
              <CardContent>
                <GraficoLinea data={datosPostulaciones} />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="vacantes" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Vacantes por Departamento</CardTitle>
                <CardDescription>
                  Distribución de vacantes por departamento
                </CardDescription>
              </CardHeader>
              <CardContent>
                <GraficoCircular 
                  data={[
                    { etiqueta: "Desarrollo", valor: 45 },
                    { etiqueta: "Diseño", valor: 20 },
                    { etiqueta: "Marketing", valor: 15 },
                    { etiqueta: "Ventas", valor: 20 },
                  ]} 
                />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Estado de Vacantes</CardTitle>
                <CardDescription>
                  Distribución de vacantes por estado
                </CardDescription>
              </CardHeader>
              <CardContent>
                <GraficoCircular 
                  data={[
                    { etiqueta: "Activas", valor: 60 },
                    { etiqueta: "En proceso", valor: 25 },
                    { etiqueta: "Cerradas", valor: 15 },
                  ]} 
                />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Vacantes más Populares</CardTitle>
                <CardDescription>
                  Vacantes con mayor número de postulaciones
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 pt-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Desarrollador Frontend</span>
                    <span className="text-sm font-medium">78 postulaciones</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-secondary">
                    <div className="h-2 rounded-full bg-[#38bdf8]" style={{ width: "100%" }}></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Desarrollador Backend</span>
                    <span className="text-sm font-medium">65 postulaciones</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-secondary">
                    <div className="h-2 rounded-full bg-[#38bdf8]" style={{ width: "83%" }}></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Diseñador UX/UI</span>
                    <span className="text-sm font-medium">54 postulaciones</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-secondary">
                    <div className="h-2 rounded-full bg-[#38bdf8]" style={{ width: "69%" }}></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">DevOps Engineer</span>
                    <span className="text-sm font-medium">42 postulaciones</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-secondary">
                    <div className="h-2 rounded-full bg-[#38bdf8]" style={{ width: "54%" }}></div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Tiempo Promedio de Contratación</CardTitle>
                <CardDescription>
                  Días promedio para cubrir una vacante por departamento
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 pt-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Desarrollo</span>
                    <span className="text-sm font-medium">22 días</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-secondary">
                    <div className="h-2 rounded-full bg-[#38bdf8]" style={{ width: "73%" }}></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Diseño</span>
                    <span className="text-sm font-medium">18 días</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-secondary">
                    <div className="h-2 rounded-full bg-[#38bdf8]" style={{ width: "60%" }}></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Marketing</span>
                    <span className="text-sm font-medium">15 días</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-secondary">
                    <div className="h-2 rounded-full bg-[#38bdf8]" style={{ width: "50%" }}></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Ventas</span>
                    <span className="text-sm font-medium">12 días</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-secondary">
                    <div className="h-2 rounded-full bg-[#38bdf8]" style={{ width: "40%" }}></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="candidatos" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Candidatos por Experiencia</CardTitle>
                <CardDescription>
                  Distribución de candidatos por años de experiencia
                </CardDescription>
              </CardHeader>
              <CardContent>
                <GraficoCircular 
                  data={[
                    { etiqueta: "0-2 años", valor: 30 },
                    { etiqueta: "3-5 años", valor: 40 },
                    { etiqueta: "6-10 años", valor: 20 },
                    { etiqueta: "10+ años", valor: 10 },
                  ]} 
                />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Candidatos por Nivel Educativo</CardTitle>
                <CardDescription>
                  Distribución de candidatos por nivel educativo
                </CardDescription>
              </CardHeader>
              <CardContent>
                <GraficoCircular 
                  data={[
                    { etiqueta: "Técnico", valor: 25 },
                    { etiqueta: "Universitario", valor: 45 },
                    { etiqueta: "Postgrado", valor: 20 },
                    { etiqueta: "Autodidacta", valor: 10 },
                  ]} 
                />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Fuentes de Candidatos</CardTitle>
                <CardDescription>
                  Origen de los candidatos
                </CardDescription>
              </CardHeader>
              <CardContent>
                <GraficoCircular 
                  data={[
                    { etiqueta: "LinkedIn", valor: 35 },
                    { etiqueta: "Sitio web", valor: 25 },
                    { etiqueta: "Referidos", valor: 20 },
                    { etiqueta: "Bolsas de trabajo", valor: 15 },
                    { etiqueta: "Otros", valor: 5 },
                  ]} 
                />
              </CardContent>
              <CardFooter>
                <div className="text-xs text-muted-foreground">
                  <div className="flex items-center">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#38bdf8] mr-1"></div>
                    <span>LinkedIn es la principal fuente de candidatos</span>
                  </div>
                </div>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Tasa de Aceptación de Ofertas</CardTitle>
                <CardDescription>
                  Porcentaje de ofertas aceptadas vs rechazadas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <GraficoCircular 
                  data={[
                    { etiqueta: "Aceptadas", valor: 85 },
                    { etiqueta: "Rechazadas", valor: 15 },
                  ]} 
                />
              </CardContent>
              <CardFooter>
                <div className="text-xs text-muted-foreground">
                  <div className="flex items-center">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#38bdf8] mr-1"></div>
                    <span>85% de las ofertas son aceptadas</span>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="geografico">
          <div className="grid grid-cols-1 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Distribución Geográfica de Candidatos</CardTitle>
                <CardDescription>
                  Ubicación de los candidatos por región
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6 pt-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Lima</span>
                      <span className="text-sm font-medium">65%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-secondary">
                      <div className="h-2 rounded-full bg-[#38bdf8]" style={{ width: "65%" }}></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Arequipa</span>
                      <span className="text-sm font-medium">12%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-secondary">
                      <div className="h-2 rounded-full bg-[#38bdf8]" style={{ width: "12%" }}></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Trujillo</span>
                      <span className="text-sm font-medium">8%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-secondary">
                      <div className="h-2 rounded-full bg-[#38bdf8]" style={{ width: "8%" }}></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Cusco</span>
                      <span className="text-sm font-medium">6%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-secondary">
                      <div className="h-2 rounded-full bg-[#38bdf8]" style={{ width: "6%" }}></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Otras regiones</span>
                      <span className="text-sm font-medium">9%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-secondary">
                      <div className="h-2 rounded-full bg-[#38bdf8]" style={{ width: "9%" }}></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Preferencia de Modalidad de Trabajo</CardTitle>
                <CardDescription>
                  Preferencias de candidatos por tipo de modalidad
                </CardDescription>
              </CardHeader>
              <CardContent>
                <GraficoCircular 
                  data={[
                    { etiqueta: "Remoto", valor: 45 },
                    { etiqueta: "Híbrido", valor: 35 },
                    { etiqueta: "Presencial", valor: 20 },
                  ]} 
                />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
