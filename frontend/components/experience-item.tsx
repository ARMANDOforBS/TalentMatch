import { Button } from "@/components/ui/button"
import { Edit2, Trash2, Briefcase } from "lucide-react"

interface ExperienceItemProps {
  experience: {
    id: number
    position: string
    company: string
    location: string
    startDate: string
    endDate: string
    description: string
  }
}

export function ExperienceItem({ experience }: ExperienceItemProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-3">
          <div className="rounded-full bg-[#38bdf8]/10 p-2 text-[#38bdf8]">
            <Briefcase className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-medium text-[#0a192f]">{experience.position}</h3>
            <p className="text-sm text-muted-foreground">
              {experience.company} • {experience.location}
            </p>
            <p className="text-sm text-muted-foreground">
              {experience.startDate} - {experience.endDate}
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
      <p className="text-sm text-muted-foreground">{experience.description}</p>
    </div>
  )
}
