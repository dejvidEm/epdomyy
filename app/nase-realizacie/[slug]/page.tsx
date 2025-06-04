import { getProjectBySlug, projects } from "@/lib/data"
import { notFound } from "next/navigation"
import AnimatedSection from "@/components/animated-section"
import ImageGallery from "@/components/ui/image-gallery"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { MapPin, CalendarDays, MessageSquare } from "lucide-react"

interface ProjectDetailPageProps {
  params: { slug: string }
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    notFound()
  }

  return (
    <>
      <AnimatedSection className="bg-muted py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">{project.name}</h1>
          {project.category && (
            <p className="text-sm text-primary font-semibold uppercase tracking-wider mb-2">{project.category}</p>
          )}
          <p className="text-lg text-muted-foreground">{project.shortDescription}</p>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-3 gap-8 md:gap-12">
          <div className="lg:col-span-2">
            <ImageGallery images={project.images} altText={project.name} mainImage={project.mainImage} />
          </div>
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
            <div className="space-y-3 text-muted-foreground mb-6">
              {project.location && (
                <p className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" /> Location: {project.location}
                </p>
              )}
              {project.yearCompleted && (
                <p className="flex items-center gap-2">
                  <CalendarDays className="h-5 w-5 text-primary" /> Completed: {project.yearCompleted}
                </p>
              )}
            </div>

            {project.clientTestimonial && (
              <div className="mt-6 p-4 border-l-4 border-primary bg-primary/10 rounded-r-md">
                <MessageSquare className="h-6 w-6 text-primary mb-2" />
                <p className="italic text-muted-foreground">"{project.clientTestimonial}"</p>
                <p className="text-sm font-semibold mt-2">- Satisfied Client</p>
              </div>
            )}

            <Button asChild size="lg" className="w-full mt-8">
              <Link href="/contact">Start Your Project With Us</Link>
            </Button>
          </div>
        </div>
        <div className="container mx-auto px-4 md:px-6 mt-12">
          <h2 className="text-2xl font-semibold mb-4">Project Description</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p>{project.longDescription}</p>
          </div>
        </div>
      </AnimatedSection>
    </>
  )
}
