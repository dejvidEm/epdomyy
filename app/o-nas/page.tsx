import Image from "next/image"
import AnimatedSection from "@/components/animated-section"
import { Users, Target, Eye, Award } from "lucide-react"

export default function AboutUsPage() {
  return (
    <>
      <AnimatedSection className="bg-primary text-primary-foreground pb-16 pt-32 md:pt-48 md:pb-24">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About TurnKey Homes</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Building excellence with passion, precision, and a personal touch for over 15 years.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-muted-foreground mb-4">
              Founded in 2005, TurnKey Homes started with a simple mission: to make the dream of owning a beautifully
              crafted, high-quality home accessible and stress-free. We understood that building a home is one of life's
              most significant investments, and we wanted to create a process that was transparent, collaborative, and
              enjoyable for our clients.
            </p>
            <p className="text-muted-foreground">
              Over the years, we've grown into a trusted name in the construction industry, known for our innovative
              designs, sustainable building practices, and unwavering commitment to customer satisfaction. Our team of
              architects, designers, and builders work in synergy to bring your vision to life.
            </p>
          </div>
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/placeholder.svg?width=600&height=400"
              alt="Blueprint on construction site"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Award className="h-10 w-10 text-primary mb-4" />,
                title: "Quality Craftsmanship",
                description: "We use the finest materials and meticulous techniques to ensure lasting value.",
              },
              {
                icon: <Users className="h-10 w-10 text-primary mb-4" />,
                title: "Client-Centric Approach",
                description: "Your needs and vision are at the heart of everything we do.",
              },
              {
                icon: <Target className="h-10 w-10 text-primary mb-4" />,
                title: "Integrity & Transparency",
                description: "Honest communication and clear processes build trust.",
              },
              {
                icon: <Eye className="h-10 w-10 text-primary mb-4" />,
                title: "Innovation & Sustainability",
                description: "We embrace modern solutions for efficient and eco-friendly homes.",
              },
            ].map((value) => (
              <div key={value.title} className="text-center p-6 bg-background rounded-lg shadow">
                {value.icon}
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </>
  )
}
