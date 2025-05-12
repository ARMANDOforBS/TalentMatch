"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { BarChart, BarChart3, Briefcase, Calendar, Download, FileText, LineChart, PieChart, Search, Users } from "lucide-react"

// Componente para mostrar un gráfico de barras simple
const SimpleBarChart = ({ data, height = 200 }: { data: { label: string, value: number }[], height?: number }) => {
  const maxValue = Math.max(...data.map(item => item.value))
  
  return (
    <div className="w-full" style={{ height: `${height}px` }}>
      <div className="flex h-full items-end gap-2">
        {data.map((item, index) => {
          const percentage = (item.value / maxValue) * 100
          return (
            <div key={index} className="flex flex-col items-center flex-1">
              <div 
                className="w-full bg-[#38bdf8] rounded-t"
                style={{ height: `${percentage}%` }}
              ></div>
              <div className="mt-2 text-xs text-center">
                <div className="font-medium truncate">{item.label}</div>
                <div className="text-muted-foreground">{item.value}</div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

// Componente para mostrar un gráfico de líneas simple
const SimpleLineChart = ({ data, height = 200 }: { data: { label: string, value: number }[], height?: number }) => {
  const maxValue = Math.max(...data.map(item => item.value))
  const points = data.map((item, index) => {
    const x = (index / (data.length - 1)) * 100
    const y = 100 - (item.value / maxValue) * 100
    return { x, y, ...item }
  })
  
  // Generar la línea SVG
  const pathData = points.map((point, index) => {
    return index === 0 
      ? `M ${point.x} ${point.y}` 
      : `L ${point.x} ${point.y}`
  }).join(' ')
  
  return (
    <div className="w-full" style={{ height: `${height}px` }}>
      <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path 
          d={pathData} 
          fill="none" 
          stroke="#38bdf8" 
          strokeWidth="2"
        />
        {points.map((point, index) => (
          <circle 
            key={index} 
            cx={point.x} 
            cy={point.y} 
            r="1.5" 
            fill="#38bdf8" 
          />
        ))}
      </svg>
      <div className="flex justify-between mt-2">
        {data.map((item, index) => (
          <div key={index} className="text-xs text-center">
            <div className="text-muted-foreground">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

// Componente para mostrar un gráfico circular simple
const SimplePieChart = ({ data, size = 200 }: { data: { label: string, value: number, color: string }[], size?: number }) => {
  const total = data.reduce((sum, item) => sum + item.value, 0)
  let cumulativePercentage = 0
  
  return (
    <div className="flex flex-col items-center">
      <div style={{ width: `${size}px`, height: `${size}px` }} className="relative">
        <svg width="100%" height="100%" viewBox="0 0 100 100">
          {data.map((item, index) => {
            const percentage = (item.value / total) * 100
            const startAngle = (cumulativePercentage / 100) * 360
            const endAngle = ((cumulativePercentage + percentage) / 100) * 360
            
            // Calcular puntos del arco
            const startX = 50 + 40 * Math.cos((startAngle - 90) * (Math.PI / 180))
            const startY = 50 + 40 * Math.sin((startAngle - 90) * (Math.PI / 180))
            const endX = 50 + 40 * Math.cos((endAngle - 90) * (Math.PI / 180))
            const endY = 50 + 40 * Math.sin((endAngle - 90) * (Math.PI / 180))
            
            // Determinar si el arco es mayor que 180 grados
            const largeArcFlag = percentage > 50 ? 1 : 0
            
            // Actualizar el porcentaje acumulado
            cumulativePercentage += percentage
            
            return (
              <path
                key={index}
                d={`M 50 50 L ${startX} ${startY} A 40 40 0 ${largeArcFlag} 1 ${endX} ${endY} Z`}
                fill={item.color}
              />
            )
          })}
          <circle cx="50" cy="50" r="25" fill="white" />
        </svg>
      </div>
      <div className="flex flex-wrap justify-center gap-4 mt-4">
        {data.map((item, index) => (
          <div key={index} className="flex items-center">
            <div 
              className="w-3 h-3 mr-2 rounded-full" 
              style={{ backgroundColor: item.color }}
            ></div>
            <span className="text-sm">{item.label} ({Math.round((item.value / total) * 100)}%)</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function ReportesPage() {
  const [periodoSeleccionado, setPeriodoSeleccionado] = useState("mes")
  const [filtroCategoria, setFiltroCategoria] = useState("todos")
  
  // Datos de ejemplo para los gráficos
  const datosVacantes = [
    { label: "Ene", value: 12 },
    { label: "Feb", value: 19 },
    { label: "Mar", value: 15 },
    { label: "Abr", value: 22 },
    { label: "May", value: 28 },
    { label: "Jun", value: 25 }
  ]
  
  const datosPostulaciones = [
    { label: "Ene", value: 45 },
    { label: "Feb", value: 62 },
    { label: "Mar", value: 58 },
    { label: "Abr", value: 78 },
    { label: "May", value: 92 },
    { label: "Jun", value: 86 }
  ]
  
  const datosDistribucion = [
    { label: "Tecnología", value: 45, color: "#38bdf8" },
    { label: "Marketing", value: 25, color: "#22c55e" },
    { label: "Ventas", value: 15, color: "#f59e0b" },
    { label: "Administración", value: 10, color: "#8b5cf6" },
    { label: "Otros", value: 5, color: "#64748b" }
  ]
  
  const datosConversion = [
    { label: "Postulaciones", value: 100, color: "#38bdf8" },
    { label: "Entrevistas", value: 42, color: "#22c55e" },
    { label: "Ofertas", value: 18, color: "#f59e0b" },
    { label: "Contrataciones", value: 8, color: "#8b5cf6" }
  ]
  
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Reportes y Analíticas</h2>
        <div className="flex items-center space-x-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Exportar
          </Button>
          <Select value={periodoSeleccionado} onValueChange={setPeriodoSeleccionado}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Seleccionar periodo" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="semana">Última semana</SelectItem>
              <SelectItem value="mes">Último mes</SelectItem>
              <SelectItem value="trimestre">Último trimestre</SelectItem>
              <SelectItem value="anio">Último año</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Vacantes Activas
            </CardTitle>
            <Briefcase className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">28</div>
            <p className="text-xs text-muted-foreground">
              +6 desde el mes pasado
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Postulaciones
            </CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">245</div>
            <p className="text-xs text-muted-foreground">
              +18% desde el mes pasado
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Reclutadores Activos
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">
              +2 desde el mes pasado
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Tasa de Conversión
            </CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8.2%</div>
            <p className="text-xs text-muted-foreground">
              +0.5% desde el mes pasado
            </p>
          </CardContent>
        </Card>
      </div>
      
      <Tabs defaultValue="general" className="space-y-4">
        <TabsList>
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="vacantes">Vacantes</TabsTrigger>
          <TabsTrigger value="reclutadores">Reclutadores</TabsTrigger>
          <TabsTrigger value="conversion">Conversión</TabsTrigger>
        </TabsList>
        
        <TabsContent value="general" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Vacantes Publicadas</CardTitle>
                <CardDescription>
                  Tendencia de vacantes publicadas en los últimos 6 meses
                </CardDescription>
              </CardHeader>
              <CardContent>
                <SimpleBarChart data={datosVacantes} height={250} />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Postulaciones Recibidas</CardTitle>
                <CardDescription>
                  Tendencia de postulaciones recibidas en los últimos 6 meses
                </CardDescription>
              </CardHeader>
              <CardContent>
                <SimpleLineChart data={datosPostulaciones} height={250} />
              </CardContent>
            </Card>
            
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Distribución por Categoría</CardTitle>
                <CardDescription>
                  Distribución de vacantes por categoría
                </CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center">
                <SimplePieChart data={datosDistribucion} size={250} />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="vacantes" className="space-y-4">
          <Card>
            <CardHeader className="flex justify-between">
              <div>
                <CardTitle>Rendimiento de Vacantes</CardTitle>
                <CardDescription>
                  Análisis detallado del rendimiento de las vacantes
                </CardDescription>
              </div>
              <div className="flex items-center space-x-2">
                <div className="relative w-[250px]">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Buscar vacante..."
                    className="pl-8"
                  />
                </div>
                <Select defaultValue={filtroCategoria} onValueChange={setFiltroCategoria}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Categoría" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="todos">Todas las categorías</SelectItem>
                    <SelectItem value="tecnologia">Tecnología</SelectItem>
                    <SelectItem value="marketing">Marketing</SelectItem>
                    <SelectItem value="ventas">Ventas</SelectItem>
                    <SelectItem value="administracion">Administración</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <table className="w-full">
                  <thead>
                    <tr className="border-b bg-muted/50">
                      <th className="p-3 text-left font-medium">Vacante</th>
                      <th className="p-3 text-left font-medium">Categoría</th>
                      <th className="p-3 text-left font-medium">Postulaciones</th>
                      <th className="p-3 text-left font-medium">Entrevistas</th>
                      <th className="p-3 text-left font-medium">Tasa de Conversión</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-3">Desarrollador Frontend</td>
                      <td className="p-3">Tecnología</td>
                      <td className="p-3">48</td>
                      <td className="p-3">12</td>
                      <td className="p-3">25%</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3">Especialista en Marketing Digital</td>
                      <td className="p-3">Marketing</td>
                      <td className="p-3">35</td>
                      <td className="p-3">8</td>
                      <td className="p-3">22.9%</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3">Desarrollador Backend</td>
                      <td className="p-3">Tecnología</td>
                      <td className="p-3">42</td>
                      <td className="p-3">15</td>
                      <td className="p-3">35.7%</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3">Ejecutivo de Ventas</td>
                      <td className="p-3">Ventas</td>
                      <td className="p-3">28</td>
                      <td className="p-3">10</td>
                      <td className="p-3">35.7%</td>
                    </tr>
                    <tr>
                      <td className="p-3">Asistente Administrativo</td>
                      <td className="p-3">Administración</td>
                      <td className="p-3">32</td>
                      <td className="p-3">7</td>
                      <td className="p-3">21.9%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
            <CardFooter>
              <div className="text-xs text-muted-foreground">
                Mostrando 5 de 28 vacantes
              </div>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="reclutadores" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Rendimiento de Reclutadores</CardTitle>
              <CardDescription>
                Análisis del rendimiento de los reclutadores
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <table className="w-full">
                  <thead>
                    <tr className="border-b bg-muted/50">
                      <th className="p-3 text-left font-medium">Reclutador</th>
                      <th className="p-3 text-left font-medium">Vacantes Activas</th>
                      <th className="p-3 text-left font-medium">Entrevistas</th>
                      <th className="p-3 text-left font-medium">Contrataciones</th>
                      <th className="p-3 text-left font-medium">Tasa de Éxito</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-3">María Rodríguez</td>
                      <td className="p-3">8</td>
                      <td className="p-3">24</td>
                      <td className="p-3">5</td>
                      <td className="p-3">20.8%</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3">Carlos Mendoza</td>
                      <td className="p-3">6</td>
                      <td className="p-3">18</td>
                      <td className="p-3">3</td>
                      <td className="p-3">16.7%</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3">Lucía Fernández</td>
                      <td className="p-3">5</td>
                      <td className="p-3">15</td>
                      <td className="p-3">4</td>
                      <td className="p-3">26.7%</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3">Jorge Sánchez</td>
                      <td className="p-3">4</td>
                      <td className="p-3">12</td>
                      <td className="p-3">2</td>
                      <td className="p-3">16.7%</td>
                    </tr>
                    <tr>
                      <td className="p-3">Ana Torres</td>
                      <td className="p-3">5</td>
                      <td className="p-3">14</td>
                      <td className="p-3">3</td>
                      <td className="p-3">21.4%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="conversion" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Embudo de Conversión</CardTitle>
                <CardDescription>
                  Análisis del proceso de contratación
                </CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center">
                <SimplePieChart data={datosConversion} size={250} />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Tiempo Promedio de Contratación</CardTitle>
                <CardDescription>
                  Días promedio para completar cada etapa
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6 pt-4">
                  {[
                    { etapa: "Revisión de CV", dias: 3, porcentaje: 15 },
                    { etapa: "Primera Entrevista", dias: 5, porcentaje: 25 },
                    { etapa: "Prueba Técnica", dias: 7, porcentaje: 35 },
                    { etapa: "Entrevista Final", dias: 3, porcentaje: 15 },
                    { etapa: "Oferta y Negociación", dias: 2, porcentaje: 10 }
                  ].map((item) => (
                    <div key={item.etapa} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">{item.etapa}</span>
                        <span className="text-sm font-medium">{item.dias} días ({item.porcentaje}%)</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-secondary">
                        <div className="h-2 rounded-full bg-[#38bdf8]" style={{ width: `${item.porcentaje}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <div className="text-sm text-muted-foreground">
                  Tiempo total promedio: 20 días
                </div>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
