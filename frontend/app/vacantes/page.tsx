import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"
import { JobCard } from "@/components/job-card"
import { Search, Filter } from "lucide-react"

export default function VacantesPage() {
  // Datos de ejemplo para vacantes
  const jobs = [
    {
      id: 1,
      title: "Desarrollador Frontend Senior",
      department: "Tecnología",
      location: "Ciudad de México",
      type: "Tiempo completo",
      postedDate: "2025-05-01",
    },
    {
      id: 2,
      title: "UX/UI Designer",
      department: "Diseño",
      location: "Remoto",
      type: "Tiempo completo",
      postedDate: "2025-05-03",
    },
    {
      id: 3,
      title: "DevOps Engineer",
      department: "Infraestructura",
      location: "Guadalajara",
      type: "Tiempo completo",
      postedDate: "2025-05-05",
    },
    {
      id: 4,
      title: "Product Manager",
      department: "Producto",
      location: "Ciudad de México",
      type: "Tiempo completo",
      postedDate: "2025-05-02",
    },
    {
      id: 5,
      title: "Backend Developer",
      department: "Tecnología",
      location: "Monterrey",
      type: "Tiempo completo",
      postedDate: "2025-05-04",
    },
    {
      id: 6,
      title: "Data Scientist",
      department: "Datos",
      location: "Remoto",
      type: "Tiempo completo",
      postedDate: "2025-05-06",
    },
    {
      id: 7,
      title: "QA Automation Engineer",
      department: "Calidad",
      location: "Ciudad de México",
      type: "Tiempo completo",
      postedDate: "2025-05-07",
    },
    {
      id: 8,
      title: "Technical Writer",
      department: "Documentación",
      location: "Remoto",
      type: "Medio tiempo",
      postedDate: "2025-05-08",
    },
    {
      id: 9,
      title: "Mobile Developer",
      department: "Tecnología",
      location: "Guadalajara",
      type: "Tiempo completo",
      postedDate: "2025-05-09",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-16 items-center">
          <MainNav />
        </div>
      </header>
      <main className="flex-1 py-12">
        <div className="container px-4 md:px-6">
          <div className="mb-8 space-y-4">
            <h1 className="text-3xl font-bold text-[#0a192f]">Vacantes disponibles</h1>
            <p className="text-muted-foreground">Explora las oportunidades profesionales que Vertex tiene para ti</p>
          </div>

          {/* Filtros y búsqueda */}
          <div className="mb-8 space-y-4 rounded-lg border bg-background p-4 md:p-6">
            <div className="flex items-center">
              <h2 className="text-lg font-medium text-[#0a192f]">Filtros</h2>
              <Button variant="ghost" size="sm" className="ml-auto text-[#38bdf8]">
                Limpiar filtros
              </Button>
            </div>
            <div className="grid gap-4 md:grid-cols-4">
              <div className="space-y-2">
                <Label htmlFor="search">Búsqueda</Label>
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input id="search" placeholder="Buscar por título o habilidades" className="pl-8" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="department">Departamento</Label>
                <Select>
                  <SelectTrigger id="department">
                    <SelectValue placeholder="Todos los departamentos" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todos los departamentos</SelectItem>
                    <SelectItem value="tech">Tecnología</SelectItem>
                    <SelectItem value="design">Diseño</SelectItem>
                    <SelectItem value="product">Producto</SelectItem>
                    <SelectItem value="data">Datos</SelectItem>
                    <SelectItem value="marketing">Marketing</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Ubicación</Label>
                <Select>
                  <SelectTrigger id="location">
                    <SelectValue placeholder="Todas las ubicaciones" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todas las ubicaciones</SelectItem>
                    <SelectItem value="cdmx">Ciudad de México</SelectItem>
                    <SelectItem value="gdl">Guadalajara</SelectItem>
                    <SelectItem value="mty">Monterrey</SelectItem>
                    <SelectItem value="remote">Remoto</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="type">Tipo de empleo</Label>
                <Select>
                  <SelectTrigger id="type">
                    <SelectValue placeholder="Todos los tipos" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todos los tipos</SelectItem>
                    <SelectItem value="full-time">Tiempo completo</SelectItem>
                    <SelectItem value="part-time">Medio tiempo</SelectItem>
                    <SelectItem value="contract">Contrato</SelectItem>
                    <SelectItem value="internship">Prácticas</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <Button className="w-full sm:w-auto bg-[#38bdf8] hover:bg-[#0ea5e9] text-[#0a192f]">
              <Filter className="mr-2 h-4 w-4" />
              Aplicar filtros
            </Button>
          </div>

          {/* Listado de vacantes */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {jobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>

          {/* Paginación */}
          <div className="mt-8 flex justify-center">
            <nav className="flex space-x-2" aria-label="Pagination">
              <Button variant="outline" size="icon" disabled>
                <span className="sr-only">Página anterior</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </Button>
              <Button variant="outline" size="sm" className="bg-[#38bdf8] text-white hover:bg-[#0ea5e9]">
                1
              </Button>
              <Button variant="outline" size="sm">
                2
              </Button>
              <Button variant="outline" size="sm">
                3
              </Button>
              <Button variant="outline" size="icon">
                <span className="sr-only">Página siguiente</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </Button>
            </nav>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
