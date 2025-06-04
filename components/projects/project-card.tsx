import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { Project } from "@/lib/types"
import { ArrowRight, MapPin, CalendarDays } from "lucide-react"

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="p-0">
        <Link href={`/nase-realizacie/${project.slug}`} className="block relative aspect-[4/3]">
          <Image
            src={project.mainImage || "/placeholder.svg?width=400&height=300&query=project+exterior"}
            alt={project.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </Link>
      </CardHeader>
      <CardContent className="pt-6 flex-grow">
        <Link href={`/nase-realizacie/${project.slug}`}>
          <CardTitle className="text-xl lg:text-2xl font-semibold mb-2 hover:text-primary transition-colors">
            {project.name}
          </CardTitle>
        </Link>
        <p className="text-muted-foreground text-sm line-clamp-3 mb-3">{project.shortDescription}</p>
        <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground">
          {project.location && (
            <span className="flex items-center gap-1">
              <MapPin className="h-4 w-4 text-primary" /> {project.location}
            </span>
          )}
          {project.yearCompleted && (
            <span className="flex items-center gap-1">
              <CalendarDays className="h-4 w-4 text-primary" /> Dokončené: {project.yearCompleted} {/* Translated */}
            </span>
          )}
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild variant="default" className="w-full">
          <Link href={`/nase-realizacie/${project.slug}`}>
            <span className="flex items-center justify-center">
              Zobraziť projekt <ArrowRight className="h-4 w-4 ml-2" />
            </span>
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
