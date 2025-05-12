"use client"

import { useEffect, useState } from "react"
import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { MessageSquare, Search, Send } from "lucide-react"

interface Mensaje {
  id: number
  remitente: string
  avatar: string
  contenido: string
  fecha: string
  leido: boolean
}

export default function PaginaMensajes() {
  const [mensajes, setMensajes] = useState<Mensaje[]>([
    {
      id: 1,
      remitente: "Ana García",
      avatar: "/avatars/ana.png",
      contenido: "Buenas tardes, hemos revisado tu perfil y nos gustaría coordinar una entrevista para la posición de desarrollador frontend.",
      fecha: "2025-05-10T10:30:00",
      leido: true
    },
    {
      id: 2,
      remitente: "Carlos Martínez",
      avatar: "/avatars/carlos.png",
      contenido: "Hola, te contacto por la vacante de UX Designer. Tu portafolio nos ha impresionado y quisiéramos conocer más sobre tu experiencia.",
      fecha: "2025-05-09T14:15:00",
      leido: false
    },
    {
      id: 3,
      remitente: "Mariana López",
      avatar: "/avatars/mariana.png",
      contenido: "Queremos informarte que has pasado a la siguiente fase del proceso de selección para el puesto de Analista de Datos.",
      fecha: "2025-05-08T09:45:00",
      leido: false
    }
  ])

  const [mensajeSeleccionado, setMensajeSeleccionado] = useState<Mensaje | null>(null)
  const [nuevoMensaje, setNuevoMensaje] = useState("")

  const formatearFecha = (fechaStr: string) => {
    const fecha = new Date(fechaStr)
    return fecha.toLocaleDateString("es-ES", {
      day: "numeric",
      month: "long",
      hour: "2-digit",
      minute: "2-digit"
    })
  }

  const seleccionarMensaje = (mensaje: Mensaje) => {
    if (!mensaje.leido) {
      const mensajesActualizados = mensajes.map(m => 
        m.id === mensaje.id ? { ...m, leido: true } : m
      )
      setMensajes(mensajesActualizados)
    }
    setMensajeSeleccionado(mensaje)
  }

  const enviarMensaje = () => {
    if (nuevoMensaje.trim() === "" || !mensajeSeleccionado) return
    
    // Aquí se implementaría la lógica para enviar el mensaje al backend
    console.log("Enviando mensaje a:", mensajeSeleccionado.remitente)
    console.log("Contenido:", nuevoMensaje)
    
    setNuevoMensaje("")
  }

  return (
    <div className="flex min-h-screen bg-background">
      <DashboardSidebar />
      <div className="flex-1 p-6 md:p-8">
        <h1 className="text-2xl font-bold text-[#0a192f] mb-6">Mensajes</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle>Conversaciones</CardTitle>
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input 
                      type="search" 
                      placeholder="Buscar..." 
                      className="pl-8 w-[160px]" 
                    />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {mensajes.map((mensaje) => (
                    <div 
                      key={mensaje.id}
                      onClick={() => seleccionarMensaje(mensaje)}
                      className={`p-3 rounded-lg cursor-pointer flex items-start gap-3 transition-colors 
                        ${mensajeSeleccionado?.id === mensaje.id 
                          ? 'bg-[#38bdf8]/10 text-[#0a192f]' 
                          : mensaje.leido 
                            ? 'hover:bg-muted' 
                            : 'bg-[#38bdf8]/5 hover:bg-[#38bdf8]/10 font-medium'}
                      `}
                    >
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={mensaje.avatar} alt={mensaje.remitente} />
                        <AvatarFallback>{mensaje.remitente.substring(0, 2)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 overflow-hidden">
                        <div className="flex justify-between items-center">
                          <p className="font-medium">{mensaje.remitente}</p>
                          <p className="text-xs text-muted-foreground">
                            {formatearFecha(mensaje.fecha).split(',')[0]}
                          </p>
                        </div>
                        <p className="text-sm text-muted-foreground truncate">
                          {mensaje.contenido}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="lg:col-span-2">
            {mensajeSeleccionado ? (
              <Card className="h-full flex flex-col">
                <CardHeader className="border-b pb-3">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={mensajeSeleccionado.avatar} alt={mensajeSeleccionado.remitente} />
                      <AvatarFallback>{mensajeSeleccionado.remitente.substring(0, 2)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle>{mensajeSeleccionado.remitente}</CardTitle>
                      <CardDescription>
                        {formatearFecha(mensajeSeleccionado.fecha)}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 py-6">
                  <div className="space-y-4">
                    <div className="bg-muted p-4 rounded-lg max-w-[80%]">
                      <p>{mensajeSeleccionado.contenido}</p>
                    </div>
                  </div>
                </CardContent>
                <div className="border-t p-4">
                  <div className="flex items-center gap-2">
                    <Input 
                      placeholder="Escribe tu mensaje..." 
                      className="flex-1"
                      value={nuevoMensaje}
                      onChange={(e) => setNuevoMensaje(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && enviarMensaje()}
                    />
                    <Button onClick={enviarMensaje} size="icon">
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ) : (
              <Card className="h-full flex flex-col items-center justify-center text-center p-10">
                <MessageSquare className="h-12 w-12 text-muted-foreground mb-4" />
                <CardTitle className="text-xl mb-2">No hay mensajes seleccionados</CardTitle>
                <CardDescription>
                  Selecciona una conversación para ver los mensajes o iniciar una nueva.
                </CardDescription>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
