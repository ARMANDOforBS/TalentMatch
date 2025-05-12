import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Edit2, Trash2 } from "lucide-react"

interface SkillItemProps {
  skill: {
    id: number
    name: string
    level: number
  }
}

export function SkillItem({ skill }: SkillItemProps) {
  return (
    <div className="rounded-lg border p-3">
      <div className="flex items-center justify-between">
        <h3 className="font-medium text-[#0a192f]">{skill.name}</h3>
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
      <div className="mt-2">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Nivel</span>
          <span className="font-medium">{skill.level}%</span>
        </div>
        <Progress value={skill.level} className="mt-1 h-2" />
      </div>
    </div>
  )
}
