import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import AnimatedSection from "@/components/animated-section"
import type { House, Project } from "@/lib/types"
import { ArrowRight } from "lucide-react"

interface FeaturedItemsProps {
  title: string
  items: (House | Project)[]
  viewAllLink: string
  itemType: "aktualna-ponuka" | "nase-realizacie" // Updated itemType for Slovak routes
}

export default function FeaturedItemsSection({ title, items, viewAllLink, itemType }: FeaturedItemsProps) {
  return (
    <AnimatedSection className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">{title}</h2>
          <Button asChild variant="outline">
            <Link href={viewAllLink} className="flex items-center gap-2">
              Zobraziť všetko <ArrowRight className="h-4 w-4" /> {/* Translated */}
            </Link>
          </Button>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {items.slice(0, 3).map((item) => (
            <Card key={item.id} className="overflow-hidden flex flex-col">
              <CardHeader className="p-0">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={item.mainImage || "/placeholder.svg?width=400&height=300&query=house+exterior"}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </CardHeader>
              <CardContent className="pt-6 flex-grow">
                <CardTitle className="text-xl font-semibold mb-2">{item.name}</CardTitle>
                <p className="text-muted-foreground text-sm line-clamp-3">{item.shortDescription}</p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="link" className="p-0 h-auto text-primary">
                  <Link href={`/${itemType}/${item.slug}`}>
                    Zistiť viac <ArrowRight className="h-4 w-4 ml-1" /> {/* Translated */}
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
