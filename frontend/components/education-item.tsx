import { Button } from "@/components/ui/button"
import { Edit2, Trash2, GraduationCap } from "lucide-react"

interface EducationItemProps {
  education: {
    id: number
    degree: string
    institution: string
    location: string
    startDate: string
    endDate: string
    description: string
  }
}

export function EducationItem({ education }: EducationItemProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-3">
          <div className="rounded-full bg-[#38bdf8]/10 p-2 text-[#38bdf8]">
            <GraduationCap className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-medium text-[#0a192f]">{education.degree}</h3>
            <p className="text-sm text-muted-foreground">
              {education.institution} • {education.location}
            </p>
            <p className="text-sm text-muted-foreground">
              {education.startDate} - {education.endDate}
            </p>
          </div>
        </div>
        <div className="flex gap-1">
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Edit2 className="h-4 w-4" />
            <span className="sr-only">Editar</span>
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8 text-red-500">
            <Trash2 className="h-4 w-4" />
            <span className="sr-only">Eliminar</span>
          </Button>
        </div>
      </div>
      <p className="text-sm text-muted-foreground">{education.description}</p>
    </div>
  )
}
