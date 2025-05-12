"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { MessageSquare, Search, Send, Trash2, Archive, Star, Filter, Plus, Clock, Mail, MailOpen } from "lucide-react"

// Datos de ejemplo para los mensajes
const mensajesEjemplo = [
  {
    id: 1,
    remitente: "Juan Pérez",
    asunto: "Consulta sobre vacante de Desarrollador Frontend",
    contenido: "Hola, me gustaría obtener más información sobre los requisitos para la vacante de Desarrollador Frontend. ¿Podrías proporcionarme detalles adicionales sobre las tecnologías requeridas y el proceso de selección?",
    fecha: "11/05/2025",
    hora: "10:30",
    leido: true,
    destacado: false,
    avatar: "JP"
  },
  {
    id: 2,
    remitente: "María Silva",
    asunto: "Entrevista programada - Diseñador UX/UI",
    contenido: "Estimado reclutador, confirmo mi asistencia a la entrevista programada para mañana a las 15:00 horas. Estaré preparado para presentar mi portafolio como solicitado. Saludos cordiales.",
    fecha: "11/05/2025",
    hora: "09:15",
    leido: false,
    destacado: true,
    avatar: "MS"
  },
  {
    id: 3,
    remitente: "Carlos Mendoza",
    asunto: "Seguimiento de postulación",
    contenido: "Buenas tardes, escribo para consultar sobre el estado de mi postulación para la posición de Analista de Datos enviada hace dos semanas. Agradecería cualquier actualización sobre el proceso. Quedo atento a sus comentarios.",
    fecha: "10/05/2025",
    hora: "16:45",
    leido: true,
    destacado: false,
    avatar: "CM"
  },
  {
    id: 4,
    remitente: "Ana Torres",
    asunto: "Documentación adicional",
    contenido: "Adjunto la documentación adicional solicitada para completar mi postulación. Incluyo certificados de cursos y referencias laborales como fue requerido. Por favor confirmar recepción. Gracias.",
    fecha: "09/05/2025",
    hora: "14:20",
    leido: true,
    destacado: false,
    avatar: "AT"
  },
  {
    id: 5,
    remitente: "Roberto Gómez",
    asunto: "Agradecimiento por feedback",
    contenido: "Quiero agradecer el detallado feedback proporcionado después de mi entrevista. Aunque no fui seleccionado, los comentarios son muy valiosos para mi desarrollo profesional. Espero tener la oportunidad de aplicar nuevamente en el futuro.",
    fecha: "08/05/2025",
    hora: "11:10",
    leido: false,
    destacado: true,
    avatar: "RG"
  }
]

export default function MensajesPage() {
  const [mensajes, setMensajes] = useState(mensajesEjemplo)
  const [mensajeSeleccionado, setMensajeSeleccionado] = useState<number | null>(null)
  const [busqueda, setBusqueda] = useState("")
  const [respuesta, setRespuesta] = useState("")
  
  // Filtrar mensajes según la búsqueda
  const mensajesFiltrados = mensajes.filter(mensaje => 
    mensaje.remitente.toLowerCase().includes(busqueda.toLowerCase()) ||
    mensaje.asunto.toLowerCase().includes(busqueda.toLowerCase()) ||
    mensaje.contenido.toLowerCase().includes(busqueda.toLowerCase())
  )
  
  // Obtener el mensaje seleccionado
  const mensajeActual = mensajes.find(m => m.id === mensajeSeleccionado)
  
  // Marcar mensaje como leído
  const marcarComoLeido = (id: number) => {
    setMensajes(mensajes.map(mensaje => 
      mensaje.id === id ? { ...mensaje, leido: true } : mensaje
    ))
    setMensajeSeleccionado(id)
  }
  
  // Marcar mensaje como destacado
  const toggleDestacado = (id: number) => {
    setMensajes(mensajes.map(mensaje => 
      mensaje.id === id ? { ...mensaje, destacado: !mensaje.destacado } : mensaje
    ))
  }
  
  // Eliminar mensaje
  const eliminarMensaje = (id: number) => {
    setMensajes(mensajes.filter(mensaje => mensaje.id !== id))
    if (mensajeSeleccionado === id) {
      setMensajeSeleccionado(null)
    }
  }
  
  // Enviar respuesta
  const enviarRespuesta = () => {
    if (respuesta.trim() === "") return
    
    // Aquí iría la lógica para enviar la respuesta al servidor
    console.log(`Respuesta enviada a mensaje ${mensajeSeleccionado}: ${respuesta}`)
    
    // Limpiar el campo de respuesta
    setRespuesta("")
  }
  
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Mensajes</h2>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Nuevo Mensaje
        </Button>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Mensajes Nuevos
            </CardTitle>
            <MailOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mensajes.filter(m => !m.leido).length}</div>
            <p className="text-xs text-muted-foreground">
              {mensajes.filter(m => !m.leido).length > 0 ? "Tienes mensajes sin leer" : "No hay mensajes sin leer"}
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Mensajes Totales
            </CardTitle>
            <Mail className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mensajes.length}</div>
            <p className="text-xs text-muted-foreground">
              En tu bandeja de entrada
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Mensajes Destacados
            </CardTitle>
            <Star className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mensajes.filter(m => m.destacado).length}</div>
            <p className="text-xs text-muted-foreground">
              Marcados como importantes
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Tiempo de Respuesta
            </CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.5h</div>
            <p className="text-xs text-muted-foreground">
              Tiempo promedio de respuesta
            </p>
          </CardContent>
        </Card>
      </div>
      
      <Tabs defaultValue="bandeja" className="space-y-4">
        <TabsList>
          <TabsTrigger value="bandeja">Bandeja de Entrada</TabsTrigger>
          <TabsTrigger value="destacados">Destacados</TabsTrigger>
          <TabsTrigger value="enviados">Enviados</TabsTrigger>
          <TabsTrigger value="archivados">Archivados</TabsTrigger>
        </TabsList>
        
        <TabsContent value="bandeja" className="space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="md:w-1/3 space-y-4">
              <div className="flex items-center space-x-2">
                <div className="relative flex-1">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Buscar mensajes..."
                    className="pl-8"
                    value={busqueda}
                    onChange={(e) => setBusqueda(e.target.value)}
                  />
                </div>
                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                </Button>
              </div>
              
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="max-h-[600px] overflow-y-auto">
                    {mensajesFiltrados.length > 0 ? (
                      mensajesFiltrados.map((mensaje) => (
                        <div 
                          key={mensaje.id} 
                          className={`flex items-start space-x-3 p-3 cursor-pointer hover:bg-accent ${mensajeSeleccionado === mensaje.id ? 'bg-accent' : ''} ${!mensaje.leido ? 'font-semibold' : ''}`}
                          onClick={() => marcarComoLeido(mensaje.id)}
                        >
                          <Avatar className="h-9 w-9">
                            <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${mensaje.avatar}`} alt={mensaje.remitente} />
                            <AvatarFallback>{mensaje.avatar}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1 space-y-1 overflow-hidden">
                            <div className="flex items-center justify-between">
                              <p className="text-sm font-medium leading-none truncate">{mensaje.remitente}</p>
                              <div className="flex items-center space-x-1">
                                {mensaje.destacado && <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />}
                                <span className="text-xs text-muted-foreground">{mensaje.fecha}</span>
                              </div>
                            </div>
                            <p className="text-sm truncate">{mensaje.asunto}</p>
                            <p className="text-xs text-muted-foreground truncate">{mensaje.contenido.substring(0, 60)}...</p>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="flex items-center justify-center h-40">
                        <p className="text-muted-foreground">No se encontraron mensajes</p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="md:w-2/3">
              {mensajeActual ? (
                <Card className="h-full flex flex-col">
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>{mensajeActual.asunto}</CardTitle>
                        <CardDescription className="flex items-center mt-1">
                          <Avatar className="h-6 w-6 mr-2">
                            <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${mensajeActual.avatar}`} alt={mensajeActual.remitente} />
                            <AvatarFallback>{mensajeActual.avatar}</AvatarFallback>
                          </Avatar>
                          <span>{mensajeActual.remitente}</span>
                          <span className="mx-2">•</span>
                          <span>{mensajeActual.fecha} {mensajeActual.hora}</span>
                        </CardDescription>
                      </div>
                      <div className="flex space-x-2">
                        <Button 
                          variant="ghost" 
                          size="icon"
                          onClick={() => toggleDestacado(mensajeActual.id)}
                        >
                          <Star className={`h-4 w-4 ${mensajeActual.destacado ? 'fill-yellow-400 text-yellow-400' : ''}`} />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Archive className="h-4 w-4" />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="text-red-500"
                          onClick={() => eliminarMensaje(mensajeActual.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1 overflow-auto">
                    <div className="space-y-4">
                      <div className="p-4 rounded-lg bg-accent">
                        <p className="text-sm whitespace-pre-line">{mensajeActual.contenido}</p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="border-t pt-4">
                    <div className="flex flex-col w-full space-y-2">
                      <Textarea 
                        placeholder="Escribe tu respuesta aquí..."
                        className="min-h-[100px]"
                        value={respuesta}
                        onChange={(e) => setRespuesta(e.target.value)}
                      />
                      <div className="flex justify-end">
                        <Button onClick={enviarRespuesta}>
                          <Send className="mr-2 h-4 w-4" />
                          Enviar Respuesta
                        </Button>
                      </div>
                    </div>
                  </CardFooter>
                </Card>
              ) : (
                <Card className="h-full flex items-center justify-center">
                  <CardContent className="text-center p-8">
                    <MessageSquare className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                    <h3 className="text-lg font-medium mb-2">No hay mensaje seleccionado</h3>
                    <p className="text-sm text-muted-foreground">Selecciona un mensaje de la bandeja de entrada para verlo aquí</p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="destacados" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Mensajes Destacados</CardTitle>
              <CardDescription>
                Mensajes que has marcado como importantes
              </CardDescription>
            </CardHeader>
            <CardContent>
              {mensajes.filter(m => m.destacado).length > 0 ? (
                <div className="space-y-4">
                  {mensajes.filter(m => m.destacado).map(mensaje => (
                    <div key={mensaje.id} className="flex items-center space-x-3 p-3 border rounded-md">
                      <Avatar className="h-9 w-9">
                        <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${mensaje.avatar}`} alt={mensaje.remitente} />
                        <AvatarFallback>{mensaje.avatar}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <p className="font-medium">{mensaje.remitente}</p>
                          <p className="text-xs text-muted-foreground">{mensaje.fecha}</p>
                        </div>
                        <p className="text-sm">{mensaje.asunto}</p>
                      </div>
                      <Button variant="ghost" size="icon" onClick={() => marcarComoLeido(mensaje.id)}>
                        <MessageSquare className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex items-center justify-center h-40">
                  <p className="text-muted-foreground">No hay mensajes destacados</p>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="enviados" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Mensajes Enviados</CardTitle>
              <CardDescription>
                Mensajes que has enviado recientemente
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center h-40">
                <p className="text-muted-foreground">No hay mensajes enviados recientes</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="archivados" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Mensajes Archivados</CardTitle>
              <CardDescription>
                Mensajes que has archivado para referencia futura
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center h-40">
                <p className="text-muted-foreground">No hay mensajes archivados</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
