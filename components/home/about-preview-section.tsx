import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import AnimatedSection from "@/components/animated-section"
import { CheckCircle } from "lucide-react"

export default function AboutPreviewSection() {
  return (
    <AnimatedSection className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Budujeme dôveru, tehlu po tehle</h2>{" "}
            {/* Translated */}
            <p className="text-muted-foreground text-lg mb-6">
              Už viac ako 15 rokov sa Skyline Domy venuje výstavbe vysokokvalitných a udržateľných domov. Náš záväzok k
              remeselnej zručnosti, inováciám a spokojnosti klientov nás odlišuje. {/* Translated */}
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-primary" />
                <span className="text-foreground">Transparentný proces a ceny</span> {/* Translated */}
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-primary" />
                <span className="text-foreground">Skúsení a certifikovaní profesionáli</span> {/* Translated */}
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-primary" />
                <span className="text-foreground">Záväzok k udržateľným postupom</span> {/* Translated */}
              </li>
            </ul>
            <Button asChild size="lg">
              <Link href="/o-nas">Zistite viac o nás</Link> {/* Translated */}
            </Button>
          </div>
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/placeholder.svg?width=600&height=400"
              alt="Stavebný tím pri plánovaní" // Translated
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
