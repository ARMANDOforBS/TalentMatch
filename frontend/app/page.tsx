import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"
import { JobCard } from "@/components/job-card"
import { BrainCircuit, Users, Briefcase, ArrowRight } from "lucide-react"

export default function Home() {
  // Datos de ejemplo para vacantes destacadas
  const featuredJobs = [
    {
      id: 1,
      title: "Frontend Senior",
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
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-16 items-center">
          <MainNav />
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-[#0a192f] to-[#112240]">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
              <div className="flex flex-col justify-center space-y-4 text-white">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Encuentra el talento perfecto con inteligencia artificial
                  </h1>
                  <p className="max-w-[600px] text-gray-300 md:text-xl">
                    TalentMatch conecta a los mejores candidatos con las necesidades de Vertex mediante un sistema
                    inteligente de evaluación y recomendación.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/registro">
                    <Button size="lg" className="bg-[#38bdf8] hover:bg-[#0ea5e9] text-[#0a192f]">
                      Regístrate como candidato
                    </Button>
                  </Link>
                  <Link href="/login">
                  <Button size="lg" variant="outline" className="text-sky-400 border-sky-400 bg-sky-400/10 hover:bg-sky-400/20 hover:text-white hover:border-white transition duration-300">
                      Iniciar sesión
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  width={500}
                  height={400}
                  alt="TalentMatch Platform"
                  className="rounded-lg object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Sobre Vertex Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#0a192f]">
                  Sobre Vertex
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  En Vertex, creemos que el talento humano es el motor de la innovación. Somos una empresa líder en
                  tecnología comprometida con la excelencia y el desarrollo profesional de nuestro equipo.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4 rounded-lg border bg-background p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#38bdf8]/10 text-[#38bdf8]">
                  <Users className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-[#0a192f]">Cultura de innovación</h3>
                  <p className="text-muted-foreground">
                    Fomentamos un ambiente donde las ideas florecen y la creatividad impulsa nuestro crecimiento.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4 rounded-lg border bg-background p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#38bdf8]/10 text-[#38bdf8]">
                  <Briefcase className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-[#0a192f]">Desarrollo profesional</h3>
                  <p className="text-muted-foreground">
                    Ofrecemos oportunidades de crecimiento y aprendizaje continuo para todos nuestros colaboradores.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4 rounded-lg border bg-background p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#38bdf8]/10 text-[#38bdf8]">
                  <BrainCircuit className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-[#0a192f]">Tecnología de vanguardia</h3>
                  <p className="text-muted-foreground">
                    Trabajamos con las herramientas y metodologías más avanzadas para mantenernos a la vanguardia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* IA en Reclutamiento Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f8fafc]">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-[#38bdf8]/10 px-3 py-1 text-sm text-[#38bdf8]">
                  Innovación en RRHH
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-[#0a192f]">
                  Reclutamiento potenciado por inteligencia artificial
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed">
                  Nuestra plataforma utiliza algoritmos avanzados de IA para analizar perfiles, evaluar competencias y
                  conectar el talento ideal con las necesidades específicas de cada posición.
                </p>
                <ul className="grid gap-3">
                  <li className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#38bdf8] text-white">
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
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span>Matching inteligente entre candidatos y vacantes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#38bdf8] text-white">
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
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span>Evaluación objetiva de habilidades técnicas y blandas</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#38bdf8] text-white">
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
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span>Reducción de sesgos en el proceso de selección</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#38bdf8] text-white">
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
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span>Feedback personalizado para candidatos</span>
                  </li>
                </ul>
              </div>
              <div className="flex justify-center">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  width={500}
                  height={400}
                  alt="AI Recruitment"
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Vacantes Destacadas Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#0a192f]">
                  Vacantes destacadas
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Descubre las oportunidades profesionales que Vertex tiene para ti.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              {featuredJobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
            <div className="flex justify-center">
              <Link href="/vacantes">
                <Button
                  variant="outline"
                  className="gap-1 text-[#0a192f] border-[#0a192f] hover:bg-[#0a192f] hover:text-white"
                >
                  Ver todas las vacantes
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#0a192f] text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Forma parte de nuestro equipo
                </h2>
                <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  En Vertex buscamos personas talentosas y apasionadas que quieran crecer profesionalmente con nosotros.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/registro">
                  <Button size="lg" className="bg-[#38bdf8] hover:bg-[#0ea5e9] text-[#0a192f]">
                    Crea tu perfil ahora
                  </Button>
                </Link>
                <Link href="/vacantes">
                <Button size="lg" variant="outline" className="text-sky-400 border-sky-400 bg-sky-400/10 hover:bg-sky-400/20 hover:text-white hover:border-white transition duration-300">
                    Explorar vacantes
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
