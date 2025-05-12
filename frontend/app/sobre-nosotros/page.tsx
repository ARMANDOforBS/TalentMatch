import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"
import { BriefcaseIcon, UsersIcon, HeartIcon, BrainCircuitIcon } from "lucide-react"

export default function SobreNosotros() {
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
            <div className="flex flex-col items-center justify-center space-y-4 text-center text-white">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Sobre Nosotros
                </h1>
                <p className="max-w-[700px] text-gray-300 md:text-xl">
                  Conoce más sobre Vertex y nuestra misión de conectar el mejor talento con empresas innovadoras mediante tecnología avanzada.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Nuestra Historia Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#0a192f]">
                    Nuestra Historia
                  </h2>
                  <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
                    Desde nuestra fundación en 2020, Vertex ha revolucionado el proceso de reclutamiento y selección 
                    en el sector tecnológico. Nacimos con la visión de resolver uno de los mayores desafíos que enfrentan 
                    las empresas: encontrar talento especializado que realmente se adapte a sus necesidades técnicas y culturales.
                  </p>
                  <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
                    A través de nuestra innovadora plataforma TalentMatch, combinamos inteligencia artificial y algoritmos avanzados 
                    para ofrecer una solución integral que no solo evalúa competencias técnicas, sino también habilidades blandas y 
                    compatibilidad cultural.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  width={500}
                  height={400}
                  alt="Historia de Vertex"
                  className="rounded-lg object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Nuestros Valores Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#0a192f]">
                  Nuestros Valores
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Los principios que guían nuestra cultura y decisiones.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0a192f]">
                  <BriefcaseIcon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">Excelencia</h3>
                <p className="text-sm text-muted-foreground">
                  Buscamos la máxima calidad en cada aspecto de nuestro trabajo.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0a192f]">
                  <UsersIcon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">Colaboración</h3>
                <p className="text-sm text-muted-foreground">
                  Creemos en el poder del trabajo en equipo y las alianzas estratégicas.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0a192f]">
                  <HeartIcon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">Empatía</h3>
                <p className="text-sm text-muted-foreground">
                  Ponemos a las personas en el centro de cada decisión que tomamos.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0a192f]">
                  <BrainCircuitIcon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">Innovación</h3>
                <p className="text-sm text-muted-foreground">
                  Constantemente buscamos nuevas formas de mejorar y evolucionar.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Explora Más Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#0a192f]">
                  Explora Más Sobre Nosotros
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Conoce en profundidad lo que nos hace diferentes.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2">
              <Link href="/sobre-nosotros/nuestra-cultura">
                <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm transition-all hover:shadow-md">
                  <h3 className="text-2xl font-bold text-[#0a192f]">Nuestra Cultura</h3>
                  <p className="text-center text-muted-foreground">
                    Descubre los valores y prácticas que definen nuestra identidad como empresa.
                  </p>
                  <Button variant="outline" className="gap-1 text-[#0a192f] border-[#0a192f] hover:bg-[#0a192f] hover:text-white">
                    Conocer más
                  </Button>
                </div>
              </Link>
              <Link href="/sobre-nosotros/beneficios">
                <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm transition-all hover:shadow-md">
                  <h3 className="text-2xl font-bold text-[#0a192f]">Beneficios</h3>
                  <p className="text-center text-muted-foreground">
                    Explora las ventajas de formar parte de nuestro equipo y trabajar con nosotros.
                  </p>
                  <Button variant="outline" className="gap-1 text-[#0a192f] border-[#0a192f] hover:bg-[#0a192f] hover:text-white">
                    Conocer más
                  </Button>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
