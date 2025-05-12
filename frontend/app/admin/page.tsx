"use client";

import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart3, Briefcase, Building, FileText, Users } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

export default function AdminDashboard() {
  const { usuario } = useAuth();
  const [stats, setStats] = useState({
    vacantes: 0,
    candidatos: 0,
    postulaciones: 0,
    contrataciones: 0,
  });

  // Obtener una etiqueta amigable para el rol
  const getRolDisplay = () => {
    if (!usuario || !usuario.rol) return "Usuario";
    
    switch (usuario.rol) {
      case "ROLE_RECLUTADOR":
        return "Reclutador";
      case "ROLE_CANDIDATO":
        return "Candidato";
      case "ROLE_ADMINISTRADOR":
        return "Administrador";
      default:
        return usuario.rol;
    }
  };

  // En un caso real, aquí cargaríamos los datos del backend
  useEffect(() => {
    // Log para debugging
    console.log("Usuario en AdminDashboard:", usuario);
    console.log("Rol del usuario:", usuario?.rol);
    
    // Simular carga de datos
    setStats({
      vacantes: 15,
      candidatos: 124,
      postulaciones: 67,
      contrataciones: 8,
    });
  }, [usuario]);

  return (
    <div className="flex flex-col gap-8 p-8 pt-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Panel de Control</h1>
        <p className="text-muted-foreground">
          Bienvenido, {usuario?.nombre || "Usuario"}. 
          <span className="ml-1 text-sm text-muted-foreground">({getRolDisplay()})</span>
          <br />
          Gestiona tus procesos de reclutamiento desde aquí.
        </p>
        </div>

      {/* Tarjetas de estadísticas */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Vacantes Activas</CardTitle>
            <Briefcase className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
            <div className="text-2xl font-bold">{stats.vacantes}</div>
            <p className="text-xs text-muted-foreground">
              +2 en el último mes
            </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Candidatos</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
            <div className="text-2xl font-bold">{stats.candidatos}</div>
            <p className="text-xs text-muted-foreground">
              +12 en la última semana
            </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Postulaciones</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
            <div className="text-2xl font-bold">{stats.postulaciones}</div>
            <p className="text-xs text-muted-foreground">
              +8 nuevas postulaciones
            </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Contrataciones</CardTitle>
            <Building className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
            <div className="text-2xl font-bold">{stats.contrataciones}</div>
            <p className="text-xs text-muted-foreground">
              +3 este trimestre
            </p>
                </CardContent>
              </Card>
            </div>

      {/* Tabs para diferentes secciones */}
      <Tabs defaultValue="vacantes" className="space-y-4">
        <TabsList>
          <TabsTrigger value="vacantes">Vacantes</TabsTrigger>
          <TabsTrigger value="candidatos">Candidatos</TabsTrigger>
          <TabsTrigger value="entrevistas">Entrevistas</TabsTrigger>
          <TabsTrigger value="reportes">Reportes</TabsTrigger>
        </TabsList>
        <TabsContent value="vacantes" className="space-y-4">
          <Card>
                <CardHeader>
              <CardTitle>Vacantes Activas</CardTitle>
              <CardDescription>
                Gestiona tus vacantes publicadas y crea nuevas oportunidades.
              </CardDescription>
                </CardHeader>
            <CardContent className="space-y-4">
              {/* Listado de vacantes */}
              <div className="grid gap-4">
                <div className="flex items-center justify-between rounded-lg border p-4">
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">Desarrollador Frontend Senior</p>
                    <p className="text-sm text-muted-foreground">18 postulaciones • Publicada hace 2 días</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">Ver</Button>
                    <Button variant="outline" size="sm">Editar</Button>
                  </div>
                </div>
                <div className="flex items-center justify-between rounded-lg border p-4">
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">Ingeniero DevOps</p>
                    <p className="text-sm text-muted-foreground">7 postulaciones • Publicada hace 5 días</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">Ver</Button>
                    <Button variant="outline" size="sm">Editar</Button>
                  </div>
                </div>
                <div className="flex items-center justify-between rounded-lg border p-4">
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">UX/UI Designer</p>
                    <p className="text-sm text-muted-foreground">12 postulaciones • Publicada hace 1 semana</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">Ver</Button>
                    <Button variant="outline" size="sm">Editar</Button>
                  </div>
                </div>
              </div>
              <Button>Crear nueva vacante</Button>
                </CardContent>
              </Card>
        </TabsContent>
        <TabsContent value="candidatos">
          <Card>
                <CardHeader>
              <CardTitle>Candidatos</CardTitle>
              <CardDescription>Gestiona los perfiles de candidatos y su progreso.</CardDescription>
                </CardHeader>
            <CardContent>
              <p>El contenido de la sección de candidatos se mostrará aquí.</p>
                </CardContent>
              </Card>
          </TabsContent>
        <TabsContent value="entrevistas">
            <Card>
              <CardHeader>
              <CardTitle>Entrevistas</CardTitle>
              <CardDescription>Programa y gestiona entrevistas con candidatos.</CardDescription>
              </CardHeader>
            <CardContent>
              <p>El contenido de la sección de entrevistas se mostrará aquí.</p>
              </CardContent>
            </Card>
          </TabsContent>
        <TabsContent value="reportes">
            <Card>
              <CardHeader>
              <CardTitle>Reportes y Analíticas</CardTitle>
              <CardDescription>Consulta estadísticas y reportes sobre tus procesos de reclutamiento.</CardDescription>
              </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center py-6">
                <BarChart3 className="h-16 w-16 text-muted-foreground" />
              </div>
              <p className="text-center text-muted-foreground">
                Los reportes detallados estarán disponibles próximamente.
              </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
  );
}
