import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpDown, ChevronDown, Filter, MoreHorizontal, Plus, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Gestión de Vacantes - TalentMatch",
  description: "Administra tus vacantes en TalentMatch",
}

const vacancies = [
  {
    id: "VAC-001",
    title: "Desarrollador Frontend Senior",
    department: "Tecnología",
    location: "Lima",
    applicants: 24,
    status: "Activa",
    date: "12/04/2023",
  },
  {
    id: "VAC-002",
    title: "Ingeniero DevOps",
    department: "Infraestructura",
    location: "Remoto",
    applicants: 18,
    status: "Activa",
    date: "15/04/2023",
  },
  {
    id: "VAC-003",
    title: "Diseñador UX/UI",
    department: "Diseño",
    location: "Arequipa",
    applicants: 12,
    status: "Activa",
    date: "18/04/2023",
  },
  {
    id: "VAC-004",
    title: "Desarrollador Backend",
    department: "Tecnología",
    location: "Trujillo",
    applicants: 8,
    status: "Activa",
    date: "20/04/2023",
  },
  {
    id: "VAC-005",
    title: "Product Manager",
    department: "Producto",
    location: "Cusco",
    applicants: 15,
    status: "Pausada",
    date: "22/04/2023",
  },
  {
    id: "VAC-006",
    title: "Data Scientist",
    department: "Datos",
    location: "Remoto",
    applicants: 10,
    status: "Cerrada",
    date: "25/03/2023",
  },
]

export default function VacanciesPage() {
  return (
    <div className="flex flex-col space-y-6 p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Vacantes</h2>
        <Button asChild>
          <Link href="/reclutador/vacantes/crear">
            <Plus className="mr-2 h-4 w-4" />
            Crear Vacante
          </Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Gestión de Vacantes</CardTitle>
          <CardDescription>Administra todas tus vacantes desde un solo lugar</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between mb-4">
            <div className="flex w-full max-w-sm items-center space-x-2">
              <Input placeholder="Buscar vacantes..." className="w-[300px]" />
              <Button variant="outline" size="icon">
                <Search className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex items-center space-x-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">
                    <Filter className="mr-2 h-4 w-4" />
                    Filtrar
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Filtrar por</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Departamento</DropdownMenuItem>
                  <DropdownMenuItem>Ubicación</DropdownMenuItem>
                  <DropdownMenuItem>Estado</DropdownMenuItem>
                  <DropdownMenuItem>Fecha</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">ID</TableHead>
                  <TableHead>
                    <div className="flex items-center space-x-1">
                      <span>Título</span>
                      <ArrowUpDown className="h-3 w-3" />
                    </div>
                  </TableHead>
                  <TableHead>Departamento</TableHead>
                  <TableHead>Ubicación</TableHead>
                  <TableHead className="text-center">Candidatos</TableHead>
                  <TableHead className="text-center">Estado</TableHead>
                  <TableHead>
                    <div className="flex items-center space-x-1">
                      <span>Fecha</span>
                      <ArrowUpDown className="h-3 w-3" />
                    </div>
                  </TableHead>
                  <TableHead className="text-right">Acciones</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {vacancies.map((vacancy) => (
                  <TableRow key={vacancy.id}>
                    <TableCell className="font-medium">{vacancy.id}</TableCell>
                    <TableCell>{vacancy.title}</TableCell>
                    <TableCell>{vacancy.department}</TableCell>
                    <TableCell>{vacancy.location}</TableCell>
                    <TableCell className="text-center">{vacancy.applicants}</TableCell>
                    <TableCell className="text-center">
                      <Badge
                        variant={
                          vacancy.status === "Activa"
                            ? "default"
                            : vacancy.status === "Pausada"
                              ? "outline"
                              : "secondary"
                        }
                      >
                        {vacancy.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{vacancy.date}</TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Acciones</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>Ver detalles</DropdownMenuItem>
                          <DropdownMenuItem>Editar</DropdownMenuItem>
                          <DropdownMenuItem>Ver candidatos</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-red-600">Eliminar</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
