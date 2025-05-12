import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"
import { 
  Phone, 
  Mail, 
  MapPin, 
  HelpCircle,
  Send
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { 
  Card,
  CardContent
} from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function Contacto() {
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
                  Contáctanos
                </h1>
                <p className="max-w-[700px] text-gray-300 md:text-xl">
                  Estamos aquí para responder a tus preguntas y ayudarte a encontrar la solución perfecta para tus necesidades.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container max-w-5xl mx-auto px-4 md:px-8 lg:px-10">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#0a192f]">
                Contáctanos
              </h2>
              <p className="mt-3 max-w-2xl mx-auto text-muted-foreground md:text-lg">
                Estamos aquí para responder cualquier consulta que tengas. Completa el formulario y te responderemos a la brevedad.
              </p>
            </div>
            
            <div className="grid gap-10 lg:grid-cols-3 lg:gap-12">
              {/* Información de contacto */}
              <div className="lg:col-span-1">
                <div className="bg-[#f8fafc] rounded-xl p-6 shadow-sm h-full">
                  <h3 className="text-xl font-bold mb-6 text-[#0a192f]">Información de Contacto</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#e0f2fe]">
                        <Phone className="h-5 w-5 text-[#0284c7]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#0a192f]">Llámanos</h4>
                        <p className="mt-1 text-muted-foreground">+51 (01) 123-4567</p>
                        <p className="text-sm text-muted-foreground">Lunes a Viernes, 9:00 - 18:00</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#e0f2fe]">
                        <Mail className="h-5 w-5 text-[#0284c7]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#0a192f]">Escríbenos</h4>
                        <p className="mt-1 text-muted-foreground">info@talentmatch.com</p>
                        <p className="text-sm text-muted-foreground">Respondemos en 24-48 horas</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#e0f2fe]">
                        <MapPin className="h-5 w-5 text-[#0284c7]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#0a192f]">Visítanos</h4>
                        <p className="mt-1 text-muted-foreground">Av. Javier Prado Este 2815</p>
                        <p className="text-sm text-muted-foreground">San Borja, Lima, Perú</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Formulario de contacto */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold mb-6 text-[#0a192f]">Envíanos un mensaje</h3>
                  
                  <form className="space-y-6">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">
                          Nombre
                        </label>
                        <Input
                          id="nombre"
                          placeholder="Ingresa tu nombre"
                          className="w-full focus:ring-[#38bdf8] focus:border-[#38bdf8]"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="apellido" className="block text-sm font-medium text-gray-700 mb-1">
                          Apellido
                        </label>
                        <Input
                          id="apellido"
                          placeholder="Ingresa tu apellido"
                          className="w-full focus:ring-[#38bdf8] focus:border-[#38bdf8]"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label htmlFor="correo" className="block text-sm font-medium text-gray-700 mb-1">
                          Correo Electrónico
                        </label>
                        <Input
                          id="correo"
                          type="email"
                          placeholder="tu@correo.com"
                          className="w-full focus:ring-[#38bdf8] focus:border-[#38bdf8]"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-1">
                          Teléfono (opcional)
                        </label>
                        <Input
                          id="telefono"
                          type="tel"
                          placeholder="+51 999 888 777"
                          className="w-full focus:ring-[#38bdf8] focus:border-[#38bdf8]"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="asunto" className="block text-sm font-medium text-gray-700 mb-1">
                        Asunto
                      </label>
                      <Input
                        id="asunto"
                        placeholder="¿Sobre qué nos quieres contactar?"
                        className="w-full focus:ring-[#38bdf8] focus:border-[#38bdf8]"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-1">
                        Mensaje
                      </label>
                      <Textarea
                        id="mensaje"
                        placeholder="Escribe tu mensaje aquí..."
                        className="min-h-[150px] w-full focus:ring-[#38bdf8] focus:border-[#38bdf8]"
                        required
                      />
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <input 
                        type="checkbox" 
                        id="politicaPrivacidad" 
                        className="h-4 w-4 text-[#38bdf8] focus:ring-[#38bdf8] border-gray-300 rounded"
                        required
                      />
                      <label htmlFor="politicaPrivacidad" className="text-sm text-gray-600">
                        Acepto la <Link href="#" className="text-[#0a192f] hover:text-[#38bdf8] underline">política de privacidad</Link>
                      </label>
                    </div>
                    
                    <div>
                      <Button 
                        type="submit" 
                        className="w-full bg-gradient-to-r from-[#0a192f] to-[#112240] hover:from-[#0a192f] hover:to-[#1e3a8a] text-white py-3 px-4 rounded-md shadow-sm"
                      >
                        <Send className="mr-2 h-4 w-4" /> Enviar Mensaje
                      </Button>
                      <p className="mt-3 text-xs text-center text-gray-500">
                        Nos pondremos en contacto contigo lo antes posible
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
          <div className="container max-w-5xl mx-auto px-4 md:px-8 lg:px-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#0a192f]">
                  Preguntas Frecuentes
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Respuestas a algunas de las preguntas más comunes.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl py-10">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-lg font-semibold text-[#0a192f]">
                    <div className="flex items-center">
                      <HelpCircle className="mr-2 h-5 w-5 text-[#38bdf8]" />
                      ¿Cómo funciona el proceso de selección?
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Nuestro proceso de selección combina evaluación de habilidades técnicas, entrevistas personalizadas y análisis 
                    de compatibilidad cultural usando inteligencia artificial. Todo está diseñado para encontrar la mejor coincidencia 
                    entre candidatos y empresas, minimizando los tiempos de espera y maximizando la satisfacción de ambas partes.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-lg font-semibold text-[#0a192f]">
                    <div className="flex items-center">
                      <HelpCircle className="mr-2 h-5 w-5 text-[#38bdf8]" />
                      ¿Cuánto tiempo toma el proceso de reclutamiento?
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    El tiempo varía según la posición y requisitos específicos, pero generalmente nuestro proceso completo 
                    toma entre 2 y 4 semanas desde la publicación de la vacante hasta la oferta final. Nuestro sistema de IA 
                    agiliza significativamente los procesos de filtrado inicial y evaluación de competencias.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-lg font-semibold text-[#0a192f]">
                    <div className="flex items-center">
                      <HelpCircle className="mr-2 h-5 w-5 text-[#38bdf8]" />
                      ¿TalentMatch opera en otros países?
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Actualmente operamos en Perú, Colombia, México y Chile, con planes de expansión a otros países 
                    de América Latina en los próximos años. Nuestro equipo está conformado por profesionales de diversas 
                    nacionalidades, lo que nos permite entender mejor las particularidades de cada mercado laboral.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-lg font-semibold text-[#0a192f]">
                    <div className="flex items-center">
                      <HelpCircle className="mr-2 h-5 w-5 text-[#38bdf8]" />
                      ¿Qué hace diferente a TalentMatch?
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Nuestra diferencia radica en el uso de inteligencia artificial para evaluar habilidades técnicas y blandas, 
                    además de considerar factores culturales para garantizar una coincidencia óptima entre candidatos y empresas. 
                    A diferencia de otras plataformas, no solo conectamos perfiles con vacantes, sino que creamos relaciones laborales 
                    duraderas y satisfactorias.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-lg font-semibold text-[#0a192f]">
                    <div className="flex items-center">
                      <HelpCircle className="mr-2 h-5 w-5 text-[#38bdf8]" />
                      ¿Qué tipo de empresas trabajan con TalentMatch?
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Trabajamos con empresas de todos los tamaños, desde startups emergentes hasta grandes corporaciones multinacionales. 
                    Nuestros servicios se adaptan a las necesidades específicas de cada cliente, ofreciendo soluciones personalizadas 
                    que optimizan sus procesos de reclutamiento y selección.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <div className="flex justify-center mt-8">
                <Link href="/preguntas-frecuentes">
                  <Button variant="outline" className="gap-1 text-[#0a192f] border-[#0a192f] hover:bg-[#0a192f] hover:text-white">
                    Ver todas las preguntas frecuentes
                  </Button>
                </Link>
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
                  ¿Listo para empezar?
                </h2>
                <p className="max-w-[700px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Crea tu perfil hoy y conecta con las mejores oportunidades laborales.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/registro">
                  <Button size="lg" className="bg-[#38bdf8] hover:bg-[#0ea5e9] text-[#0a192f]">
                    Regístrate como candidato
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
