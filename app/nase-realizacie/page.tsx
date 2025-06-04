import AnimatedSection from "@/components/animated-section"
import ProjectCard from "@/components/projects/project-card"
import { projects } from "@/lib/data"

export default function ProjectsPage() {
  return (
    <>
      <AnimatedSection className="bg-primary text-primary-foreground pb-16 pt-32 md:pt-48 md:pb-24">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Projects</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Discover the quality and craftsmanship in our completed homes. Each project tells a unique story of
            collaboration and vision.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          {projects.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <p className="text-center text-muted-foreground text-lg">
              No projects available at the moment. Please check back soon!
            </p>
          )}
        </div>
      </AnimatedSection>
    </>
  )
}
