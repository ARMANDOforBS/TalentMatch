import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { SkillItem } from "@/components/skill-item"
import { ExperienceItem } from "@/components/experience-item"
import { EducationItem } from "@/components/education-item"
import { CertificationItem } from "@/components/certification-item"
import { LanguageItem } from "@/components/language-item"
import { Upload, Plus, Save, Trash2 } from "lucide-react"

export default function PerfilPage() {
  // Datos de ejemplo para el perfil
  const profileCompleteness = 75
  const skills = [
    { id: 1, name: "React", level: 90 },
    { id: 2, name: "TypeScript", level: 85 },
    { id: 3, name: "Node.js", level: 80 },
    { id: 4, name: "Next.js", level: 75 },
    { id: 5, name: "CSS/Tailwind", level: 85 },
    { id: 6, name: "UI/UX Design", level: 70 },
  ]

  const experiences = [
    {
      id: 1,
      position: "Frontend Developer",
      company: "TechCorp",
      location: "Ciudad de México",
      startDate: "Enero 2023",
      endDate: "Presente",
      description:
        "Desarrollo de aplicaciones web utilizando React, TypeScript y Next.js. Implementación de interfaces de usuario responsivas y accesibles.",
    },
    {
      id: 2,
      position: "UI Developer",
      company: "DesignStudio",
      location: "Remoto",
      startDate: "Marzo 2021",
      endDate: "Diciembre 2022",
      description:
        "Diseño y desarrollo de interfaces de usuario para aplicaciones web y móviles. Colaboración con equipos de diseño y desarrollo.",
    },
  ]

  const education = [
    {
      id: 1,
      degree: "Ingeniería en Sistemas Computacionales",
      institution: "Universidad Nacional Autónoma de México",
      location: "Ciudad de México",
      startDate: "2016",
      endDate: "2020",
      description: "Especialización en desarrollo de software y sistemas web.",
    },
  ]

  const certifications = [
    {
      id: 1,
      name: "AWS Certified Developer",
      issuer: "Amazon Web Services",
      date: "2022",
      expiration: "2025",
    },
    {
      id: 2,
      name: "Professional Scrum Master I",
      issuer: "Scrum.org",
      date: "2021",
      expiration: "No expira",
    },
  ]

  const languages = [
    { id: 1, name: "Español", level: "Nativo" },
    { id: 2, name: "Inglés", level: "Avanzado (C1)" },
    { id: 3, name: "Francés", level: "Básico (A2)" },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-[#0a192f]">Mi Perfil</h1>
          <p className="text-muted-foreground">
            Gestiona tu información profesional y mejora tus oportunidades de empleo
          </p>
        </div>
        <Button className="bg-[#38bdf8] hover:bg-[#0ea5e9] text-[#0a192f]">
          <Save className="mr-2 h-4 w-4" />
          Guardar cambios
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-[300px_1fr]">
        {/* Sidebar */}
        <div className="space-y-6">
          {/* Profile card */}
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-4">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src="/placeholder.svg?height=96&width=96" alt="@usuario" />
                    <AvatarFallback className="text-lg">JP</AvatarFallback>
                  </Avatar>
                  <Button
                    size="icon"
                    variant="outline"
                    className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full border-2 border-background bg-white"
                  >
                    <Upload className="h-4 w-4" />
                    <span className="sr-only">Cambiar foto</span>
                  </Button>
                </div>
                <h2 className="text-xl font-bold">Juan Pérez</h2>
                <p className="text-sm text-muted-foreground">Desarrollador Frontend</p>
                <div className="mt-2 flex flex-wrap justify-center gap-2">
                  <Badge variant="outline" className="bg-[#38bdf8]/10 text-[#38bdf8] border-[#38bdf8]/20">
                    React
                  </Badge>
                  <Badge variant="outline" className="bg-[#38bdf8]/10 text-[#38bdf8] border-[#38bdf8]/20">
                    TypeScript
                  </Badge>
                  <Badge variant="outline" className="bg-[#38bdf8]/10 text-[#38bdf8] border-[#38bdf8]/20">
                    Next.js
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Profile completeness */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Completitud del perfil</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">{profileCompleteness}% completo</span>
                <span className="text-xs text-muted-foreground">18/24 campos</span>
              </div>
              <Progress value={profileCompleteness} className="mt-2 h-2" />
              <ul className="mt-4 space-y-2 text-sm">
                <li className="flex items-center text-muted-foreground">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-4 w-4 text-green-500"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Información personal
                </li>
                <li className="flex items-center text-muted-foreground">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-4 w-4 text-green-500"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Experiencia laboral
                </li>
                <li className="flex items-center text-muted-foreground">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-4 w-4 text-green-500"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Educación
                </li>
                <li className="flex items-center text-muted-foreground">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-4 w-4 text-yellow-500"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                  </svg>
                  Portafolio (pendiente)
                </li>
                <li className="flex items-center text-muted-foreground">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-4 w-4 text-yellow-500"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                  </svg>
                  Referencias (pendiente)
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* CV Upload */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Curriculum Vitae</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center justify-center space-y-2 rounded-lg border-2 border-dashed p-4">
                <div className="rounded-full bg-[#38bdf8]/10 p-2 text-[#38bdf8]">
                  <Upload className="h-5 w-5" />
                </div>
                <div className="text-center">
                  <p className="text-sm font-medium">Arrastra tu CV o haz clic para subir</p>
                  <p className="text-xs text-muted-foreground">PDF, DOCX (MAX. 5MB)</p>
                </div>
                <Button variant="outline" size="sm" className="mt-2">
                  Seleccionar archivo
                </Button>
              </div>
              <div className="mt-4 flex items-center justify-between rounded-lg border p-2 text-sm">
                <span className="font-medium">CV_JuanPerez_2025.pdf</span>
                <Button variant="ghost" size="icon" className="h-8 w-8 text-red-500">
                  <Trash2 className="h-4 w-4" />
                  <span className="sr-only">Eliminar</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main content */}
        <div className="space-y-6">
          <Tabs defaultValue="personal">
            <TabsList className="grid w-full grid-cols-6">
              <TabsTrigger value="personal">Personal</TabsTrigger>
              <TabsTrigger value="experience">Experiencia</TabsTrigger>
              <TabsTrigger value="education">Educación</TabsTrigger>
              <TabsTrigger value="skills">Habilidades</TabsTrigger>
              <TabsTrigger value="certifications">Certificaciones</TabsTrigger>
              <TabsTrigger value="languages">Idiomas</TabsTrigger>
            </TabsList>

            {/* Personal Information Tab */}
            <TabsContent value="personal" className="space-y-4 pt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Información personal</CardTitle>
                  <CardDescription>Actualiza tus datos personales y de contacto</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">Nombre</Label>
                      <Input id="first-name" defaultValue="Juan" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Apellido</Label>
                      <Input id="last-name" defaultValue="Pérez" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Correo electrónico</Label>
                    <Input id="email" type="email" defaultValue="juan.perez@ejemplo.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Teléfono</Label>
                    <Input id="phone" type="tel" defaultValue="+52 55 1234 5678" />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="location">Ubicación</Label>
                      <Input id="location" defaultValue="Ciudad de México, México" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="website">Sitio web / Portfolio</Label>
                      <Input id="website" type="url" defaultValue="https://juanperez.dev" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="headline">Título profesional</Label>
                    <Input id="headline" defaultValue="Desarrollador Frontend Senior" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bio">Biografía profesional</Label>
                    <Textarea
                      id="bio"
                      rows={4}
                      defaultValue="Desarrollador Frontend con más de 5 años de experiencia en la creación de interfaces de usuario modernas y responsivas. Especializado en React, TypeScript y Next.js."
                    />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="linkedin">LinkedIn</Label>
                      <Input id="linkedin" defaultValue="https://linkedin.com/in/juanperez" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="github">GitHub</Label>
                      <Input id="github" defaultValue="https://github.com/juanperez" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Experience Tab */}
            <TabsContent value="experience" className="space-y-4 pt-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>Experiencia laboral</CardTitle>
                    <CardDescription>Añade tu historial laboral y experiencia profesional</CardDescription>
                  </div>
                  <Button className="bg-[#38bdf8] hover:bg-[#0ea5e9] text-[#0a192f]">
                    <Plus className="mr-2 h-4 w-4" />
                    Añadir experiencia
                  </Button>
                </CardHeader>
                <CardContent className="space-y-6">
                  {experiences.map((experience, index) => (
                    <div key={experience.id}>
                      <ExperienceItem experience={experience} />
                      {index < experiences.length - 1 && <Separator className="my-6" />}
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            {/* Education Tab */}
            <TabsContent value="education" className="space-y-4 pt-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>Educación</CardTitle>
                    <CardDescription>Añade tu formación académica</CardDescription>
                  </div>
                  <Button className="bg-[#38bdf8] hover:bg-[#0ea5e9] text-[#0a192f]">
                    <Plus className="mr-2 h-4 w-4" />
                    Añadir educación
                  </Button>
                </CardHeader>
                <CardContent className="space-y-6">
                  {education.map((edu, index) => (
                    <div key={edu.id}>
                      <EducationItem education={edu} />
                      {index < education.length - 1 && <Separator className="my-6" />}
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            {/* Skills Tab */}
            <TabsContent value="skills" className="space-y-4 pt-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>Habilidades técnicas</CardTitle>
                    <CardDescription>Añade tus habilidades y nivel de competencia</CardDescription>
                  </div>
                  <Button className="bg-[#38bdf8] hover:bg-[#0ea5e9] text-[#0a192f]">
                    <Plus className="mr-2 h-4 w-4" />
                    Añadir habilidad
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {skills.map((skill) => (
                      <SkillItem key={skill.id} skill={skill} />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Certifications Tab */}
            <TabsContent value="certifications" className="space-y-4 pt-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>Certificaciones</CardTitle>
                    <CardDescription>Añade tus certificaciones profesionales</CardDescription>
                  </div>
                  <Button className="bg-[#38bdf8] hover:bg-[#0ea5e9] text-[#0a192f]">
                    <Plus className="mr-2 h-4 w-4" />
                    Añadir certificación
                  </Button>
                </CardHeader>
                <CardContent className="space-y-6">
                  {certifications.map((certification, index) => (
                    <div key={certification.id}>
                      <CertificationItem certification={certification} />
                      {index < certifications.length - 1 && <Separator className="my-6" />}
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            {/* Languages Tab */}
            <TabsContent value="languages" className="space-y-4 pt-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>Idiomas</CardTitle>
                    <CardDescription>Añade los idiomas que dominas y tu nivel</CardDescription>
                  </div>
                  <Button className="bg-[#38bdf8] hover:bg-[#0ea5e9] text-[#0a192f]">
                    <Plus className="mr-2 h-4 w-4" />
                    Añadir idioma
                  </Button>
                </CardHeader>
                <CardContent className="space-y-6">
                  {languages.map((language, index) => (
                    <div key={language.id}>
                      <LanguageItem language={language} />
                      {index < languages.length - 1 && <Separator className="my-6" />}
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
