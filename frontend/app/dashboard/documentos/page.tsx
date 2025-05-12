"use client"

import { useState } from "react"
import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileText, Upload, Download, Trash2, File, FileIcon, PenLine } from "lucide-react"

interface Documento {
  id: number
  nombre: string
  tipo: string
  tamanio: string
  fechaSubida: string
  estado: "pendiente" | "aprobado" | "rechazado"
}

export default function PaginaDocumentos() {
  const [documentos, setDocumentos] = useState<Documento[]>([
    {
      id: 1,
      nombre: "Currículum Vitae.pdf",
      tipo: "PDF",
      tamanio: "1.2 MB",
      fechaSubida: "2025-05-01",
      estado: "aprobado"
    },
    {
      id: 2,
      nombre: "Carta de Presentación.docx",
      tipo: "DOCX",
      tamanio: "500 KB",
      fechaSubida: "2025-05-01",
      estado: "aprobado"
    },
    {
      id: 3,
      nombre: "Certificado de Inglés.pdf",
      tipo: "PDF",
      tamanio: "2.3 MB",
      fechaSubida: "2025-05-05",
      estado: "pendiente"
    },
    {
      id: 4,
      nombre: "Diploma Universitario.pdf",
      tipo: "PDF",
      tamanio: "3.5 MB",
      fechaSubida: "2025-05-10",
      estado: "pendiente"
    }
  ])

  const formatearFecha = (fechaStr: string) => {
    const fecha = new Date(fechaStr)
    return fecha.toLocaleDateString("es-ES", {
      day: "numeric",
      month: "long",
      year: "numeric"
    })
  }

  const getIconoDocumento = (tipo: string) => {
    switch (tipo.toLowerCase()) {
      case "pdf":
        return <FileText className="h-6 w-6 text-red-500" />
      case "docx":
        return <FileText className="h-6 w-6 text-blue-500" />
      case "xlsx":
        return <FileText className="h-6 w-6 text-green-500" />
      default:
        return <File className="h-6 w-6 text-gray-500" />
    }
  }

  const getEstadoColor = (estado: "pendiente" | "aprobado" | "rechazado") => {
    switch (estado) {
      case "pendiente":
        return "bg-yellow-100 text-yellow-800"
      case "aprobado":
        return "bg-green-100 text-green-800"
      case "rechazado":
        return "bg-red-100 text-red-800"
      default:
        return ""
    }
  }

  const eliminarDocumento = (id: number) => {
    setDocumentos(documentos.filter(doc => doc.id !== id))
  }

  return (
    <div className="flex min-h-screen bg-background">
      <DashboardSidebar />
      <div className="flex-1 p-6 md:p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-[#0a192f]">Mis Documentos</h1>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-[#0a192f] hover:bg-[#172a46]">
                <Upload className="mr-2 h-4 w-4" />
                Subir Documento
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Subir Nuevo Documento</DialogTitle>
                <DialogDescription>
                  Selecciona el archivo que deseas subir a tu perfil.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-2">
                <div className="grid w-full gap-1.5">
                  <Label htmlFor="documento">Documento</Label>
                  <Input id="documento" type="file" />
                </div>
                <div className="grid w-full gap-1.5">
                  <Label htmlFor="descripcion">Descripción (opcional)</Label>
                  <Input id="descripcion" placeholder="Añade una breve descripción del documento" />
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline">Cancelar</Button>
                <Button>Subir Documento</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        <Tabs defaultValue="todos">
          <TabsList className="mb-4">
            <TabsTrigger value="todos">Todos</TabsTrigger>
            <TabsTrigger value="cv">Currículum</TabsTrigger>
            <TabsTrigger value="certificados">Certificados</TabsTrigger>
            <TabsTrigger value="otros">Otros</TabsTrigger>
          </TabsList>
          
          <TabsContent value="todos" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {documentos.map(doc => (
              <Card key={doc.id} className="overflow-hidden">
                <CardHeader className="pb-2">
                  <div className="flex items-center space-x-3">
                    {getIconoDocumento(doc.tipo)}
                    <div>
                      <CardTitle className="text-base">{doc.nombre}</CardTitle>
                      <CardDescription>{doc.tipo} • {doc.tamanio}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">
                      Subido el {formatearFecha(doc.fechaSubida)}
                    </span>
                    <span className={`px-2 py-0.5 rounded-full text-xs ${getEstadoColor(doc.estado)}`}>
                      {doc.estado === "pendiente" ? "Pendiente" : 
                       doc.estado === "aprobado" ? "Aprobado" : "Rechazado"}
                    </span>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between pt-2">
                  <Button variant="ghost" size="sm">
                    <Download className="mr-2 h-4 w-4" />
                    Descargar
                  </Button>
                  <div className="flex space-x-1">
                    <Button variant="ghost" size="icon">
                      <PenLine className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="text-red-500 hover:text-red-600 hover:bg-red-50"
                      onClick={() => eliminarDocumento(doc.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="cv">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {documentos
                .filter(doc => doc.nombre.toLowerCase().includes("currículum") || doc.nombre.toLowerCase().includes("cv"))
                .map(doc => (
                  <Card key={doc.id} className="overflow-hidden">
                    <CardHeader className="pb-2">
                      <div className="flex items-center space-x-3">
                        {getIconoDocumento(doc.tipo)}
                        <div>
                          <CardTitle className="text-base">{doc.nombre}</CardTitle>
                          <CardDescription>{doc.tipo} • {doc.tamanio}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">
                          Subido el {formatearFecha(doc.fechaSubida)}
                        </span>
                        <span className={`px-2 py-0.5 rounded-full text-xs ${getEstadoColor(doc.estado)}`}>
                          {doc.estado === "pendiente" ? "Pendiente" : 
                           doc.estado === "aprobado" ? "Aprobado" : "Rechazado"}
                        </span>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between pt-2">
                      <Button variant="ghost" size="sm">
                        <Download className="mr-2 h-4 w-4" />
                        Descargar
                      </Button>
                      <div className="flex space-x-1">
                        <Button variant="ghost" size="icon">
                          <PenLine className="h-4 w-4" />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="text-red-500 hover:text-red-600 hover:bg-red-50"
                          onClick={() => eliminarDocumento(doc.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                ))}
            </div>
          </TabsContent>

          <TabsContent value="certificados">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {documentos
                .filter(doc => doc.nombre.toLowerCase().includes("certificado") || doc.nombre.toLowerCase().includes("diploma"))
                .map(doc => (
                  <Card key={doc.id} className="overflow-hidden">
                    <CardHeader className="pb-2">
                      <div className="flex items-center space-x-3">
                        {getIconoDocumento(doc.tipo)}
                        <div>
                          <CardTitle className="text-base">{doc.nombre}</CardTitle>
                          <CardDescription>{doc.tipo} • {doc.tamanio}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">
                          Subido el {formatearFecha(doc.fechaSubida)}
                        </span>
                        <span className={`px-2 py-0.5 rounded-full text-xs ${getEstadoColor(doc.estado)}`}>
                          {doc.estado === "pendiente" ? "Pendiente" : 
                           doc.estado === "aprobado" ? "Aprobado" : "Rechazado"}
                        </span>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between pt-2">
                      <Button variant="ghost" size="sm">
                        <Download className="mr-2 h-4 w-4" />
                        Descargar
                      </Button>
                      <div className="flex space-x-1">
                        <Button variant="ghost" size="icon">
                          <PenLine className="h-4 w-4" />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="text-red-500 hover:text-red-600 hover:bg-red-50"
                          onClick={() => eliminarDocumento(doc.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                ))}
            </div>
          </TabsContent>

          <TabsContent value="otros">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {documentos
                .filter(doc => 
                  !doc.nombre.toLowerCase().includes("currículum") && 
                  !doc.nombre.toLowerCase().includes("cv") &&
                  !doc.nombre.toLowerCase().includes("certificado") && 
                  !doc.nombre.toLowerCase().includes("diploma")
                )
                .map(doc => (
                  <Card key={doc.id} className="overflow-hidden">
                    <CardHeader className="pb-2">
                      <div className="flex items-center space-x-3">
                        {getIconoDocumento(doc.tipo)}
                        <div>
                          <CardTitle className="text-base">{doc.nombre}</CardTitle>
                          <CardDescription>{doc.tipo} • {doc.tamanio}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">
                          Subido el {formatearFecha(doc.fechaSubida)}
                        </span>
                        <span className={`px-2 py-0.5 rounded-full text-xs ${getEstadoColor(doc.estado)}`}>
                          {doc.estado === "pendiente" ? "Pendiente" : 
                           doc.estado === "aprobado" ? "Aprobado" : "Rechazado"}
                        </span>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between pt-2">
                      <Button variant="ghost" size="sm">
                        <Download className="mr-2 h-4 w-4" />
                        Descargar
                      </Button>
                      <div className="flex space-x-1">
                        <Button variant="ghost" size="icon">
                          <PenLine className="h-4 w-4" />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="text-red-500 hover:text-red-600 hover:bg-red-50"
                          onClick={() => eliminarDocumento(doc.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
