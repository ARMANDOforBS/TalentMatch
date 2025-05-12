import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Briefcase, MapPin, Calendar } from "lucide-react"

interface JobProps {
  job: {
    id: number
    title: string
    department: string
    location: string
    type: string
    postedDate: string
  }
}

export function JobCard({ job }: JobProps) {
  // Función para formatear la fecha
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "long", day: "numeric" }
    return new Date(dateString).toLocaleDateString("es-ES", options)
  }

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg font-bold text-[#0a192f]">{job.title}</CardTitle>
          <Badge variant="outline" className="bg-[#38bdf8]/10 text-[#38bdf8] hover:bg-[#38bdf8]/20 border-[#38bdf8]/20">
            {job.type}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="space-y-2 text-sm text-muted-foreground">
          <div className="flex items-center">
            <Briefcase className="mr-2 h-4 w-4" />
            <span>{job.department}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="mr-2 h-4 w-4" />
            <span>{job.location}</span>
          </div>
          <div className="flex items-center">
            <Calendar className="mr-2 h-4 w-4" />
            <span>Publicado: {formatDate(job.postedDate)}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-2">
        <Link href={`/vacantes/${job.id}`} className="w-full">
          <Button
            variant="outline"
            className="w-full text-[#0a192f] border-[#0a192f] hover:bg-[#0a192f] hover:text-white"
          >
            Ver detalles
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
