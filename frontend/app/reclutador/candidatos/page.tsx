import type { Metadata } from "next"
import { ArrowUpDown, ChevronDown, Filter, MoreHorizontal, Search, Star } from "lucide-react"

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
  title: "Evaluación de Candidatos - TalentMatch",
  description: "Evalúa candidatos para tus vacantes en TalentMatch",
}

const candidates = [
  {
    id: "CAN-001",
    name: "Carlos Mendoza",
    role: "Desarrollador Frontend Senior",
    vacancy: "VAC-001",
    match: 95,
    status: "Entrevista",
    date: "15/04/2023",
  },
  {
    id: "CAN-002",
    name: "Ana Gutiérrez",
    role: "Diseñadora UX/UI",
    vacancy: "VAC-003",
    match: 92,
    status: "Evaluación",
    date: "16/04/2023",
  },
  {
    id: "CAN-003",
    name: "Roberto Sánchez",
    role: "Ingeniero DevOps",
    vacancy: "VAC-002",
    match: 88,
    status: "Aplicado",
    date: "17/04/2023",
  },
  {
    id: "CAN-004",
    name: "Laura Jiménez",
    role: "Desarrolladora Backend",
    vacancy: "VAC-004",
    match: 85,
    status: "Aplicado",
    date: "18/04/2023",
  },
  {
    id: "CAN-005",
    name: "Miguel Torres",
    role: "Product Manager",
    vacancy: "VAC-005",
    match: 82,
    status: "Rechazado",
    date: "12/04/2023",
  },
  {
    id: "CAN-006",
    name: "Sofía Ramírez",
    role: "Data Scientist",
    vacancy: "VAC-006",
    match: 78,
    status: "Contratado",
    date: "10/04/2023",
  },
]

export default function CandidatesPage() {
  return (
    <div className="flex flex-col space-y-6 p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Candidatos</h2>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Evaluación de Candidatos</CardTitle>
          <CardDescription>Gestiona y evalúa a los candidatos para tus vacantes</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between mb-4">
            <div className="flex w-full max-w-sm items-center space-x-2">
              <Input placeholder="Buscar candidatos..." className="w-[300px]" />
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
                  <DropdownMenuItem>Vacante</DropdownMenuItem>
                  <DropdownMenuItem>Compatibilidad</DropdownMenuItem>
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
                      <span>Nombre</span>
                      <ArrowUpDown className="h-3 w-3" />
                    </div>
                  </TableHead>
                  <TableHead>Puesto</TableHead>
                  <TableHead>Vacante</TableHead>
                  <TableHead className="text-center">
                    <div className="flex items-center justify-center space-x-1">
                      <span>Match</span>
                      <ArrowUpDown className="h-3 w-3" />
                    </div>
                  </TableHead>
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
                {candidates.map((candidate) => (
                  <TableRow key={candidate.id}>
                    <TableCell className="font-medium">{candidate.id}</TableCell>
                    <TableCell>{candidate.name}</TableCell>
                    <TableCell>{candidate.role}</TableCell>
                    <TableCell>{candidate.vacancy}</TableCell>
                    <TableCell className="text-center">
                      <div className="flex items-center justify-center">
                        <span
                          className={`font-medium ${
                            candidate.match >= 90
                              ? "text-green-600"
                              : candidate.match >= 80
                                ? "text-amber-600"
                                : "text-gray-600"
                          }`}
                        >
                          {candidate.match}%
                        </span>
                        {candidate.match >= 90 && <Star className="ml-1 h-3 w-3 fill-amber-400 text-amber-400" />}
                      </div>
                    </TableCell>
                    <TableCell className="text-center">
                      <Badge
                        variant={
                          candidate.status === "Contratado"
                            ? "default"
                            : candidate.status === "Entrevista"
                              ? "secondary"
                              : candidate.status === "Evaluación"
                                ? "outline"
                                : candidate.status === "Rechazado"
                                  ? "destructive"
                                  : "secondary"
                        }
                      >
                        {candidate.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{candidate.date}</TableCell>
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
                          <DropdownMenuItem>Ver perfil</DropdownMenuItem>
                          <DropdownMenuItem>Ver CV</DropdownMenuItem>
                          <DropdownMenuItem>Programar entrevista</DropdownMenuItem>
                          <DropdownMenuItem>Enviar prueba técnica</DropdownMenuItem>
                          <DropdownMenuItem>Enviar mensaje</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>Cambiar estado</DropdownMenuItem>
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
