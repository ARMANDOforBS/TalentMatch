import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"
import { 
  Lightbulb, 
  Users, 
  Target, 
  Heart,
  Brain,
  GraduationCap
} from "lucide-react"

export default function NuestraCultura() {
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
                  Nuestra Cultura
                </h1>
                <p className="max-w-[700px] text-gray-300 md:text-xl">
                  Conoce los valores y principios que definen la forma en que trabajamos y nos relacionamos.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Filosofía Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container max-w-5xl mx-auto px-4 md:px-8 lg:px-10">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  width={500}
                  height={400}
                  alt="Filosofía de trabajo"
                  className="rounded-lg object-cover"
                  priority
                />
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#0a192f]">
                    Nuestra Filosofía
                  </h2>
                  <div className="max-w-prose">
                    <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed mb-2">
                      En Vertex, creemos firmemente que la tecnología debe potenciar el talento humano, nunca reemplazarlo. 
                      Nuestra cultura se basa en un equilibrio entre la innovación tecnológica y el factor humano, reconociendo 
                      que ambos son esenciales para el éxito.
                    </p>
                    <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
                      Fomentamos un ambiente donde la creatividad, la colaboración y el crecimiento personal son prioridades. 
                      Creemos que cuando las personas se sienten valoradas y pueden desarrollar todo su potencial, tanto ellas 
                      como la organización prosperan.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pilares Culturales Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
          <div className="container max-w-5xl mx-auto px-4 md:px-8 lg:px-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#0a192f]">
                  Pilares de Nuestra Cultura
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Los elementos fundamentales que sostienen nuestra forma de trabajar.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0a192f]">
                  <Lightbulb className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">Innovación Constante</h3>
                <p className="text-sm text-muted-foreground">
                  Exploramos continuamente nuevas ideas y soluciones creativas para superar los desafíos.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0a192f]">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">Trabajo en Equipo</h3>
                <p className="text-sm text-muted-foreground">
                  Creemos que las mejores soluciones surgen de la colaboración y las diferentes perspectivas.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0a192f]">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">Orientación a Resultados</h3>
                <p className="text-sm text-muted-foreground">
                  Nos enfocamos en lograr objetivos concretos y medibles, buscando la excelencia en cada etapa.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0a192f]">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">Cuidado por las Personas</h3>
                <p className="text-sm text-muted-foreground">
                  Ponemos el bienestar de nuestro equipo y clientes en el centro de nuestras decisiones.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0a192f]">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">Mentalidad de Crecimiento</h3>
                <p className="text-sm text-muted-foreground">
                  Abrazamos los desafíos como oportunidades para aprender y mejorar constantemente.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0a192f]">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">Aprendizaje Continuo</h3>
                <p className="text-sm text-muted-foreground">
                  Fomentamos la curiosidad y proporcionamos oportunidades para el desarrollo profesional.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Ambiente de Trabajo Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container max-w-5xl mx-auto px-4 md:px-8 lg:px-10">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#0a192f]">
                    Nuestro Ambiente de Trabajo
                  </h2>
                  <div className="max-w-prose">
                    <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed mb-4">
                      Creamos un entorno que fomenta la creatividad, la colaboración y el bienestar. Nuestras oficinas 
                      están diseñadas para maximizar la productividad y el confort, con espacios colaborativos, zonas 
                      de descanso y la flexibilidad que nuestro equipo necesita.
                    </p>
                    <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
                      También valoramos la flexibilidad y el equilibrio entre la vida personal y profesional. 
                      Ofrecemos opciones de trabajo remoto y horarios flexibles para que cada persona pueda 
                      trabajar en las condiciones que mejor se adapten a sus necesidades.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  width={500}
                  height={400}
                  alt="Ambiente de trabajo"
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#0a192f] text-white">
          <div className="container max-w-5xl mx-auto px-4 md:px-8 lg:px-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  ¿Te gustaría formar parte de nuestra cultura?
                </h2>
                <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explora nuestras vacantes y únete a un equipo apasionado por la tecnología y la innovación.
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
