import Link from "next/link"
import { Button } from "@/components/ui/button"
import AnimatedSection from "./animated-section"

export default function ContactBanner() {
  return (
    <AnimatedSection className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ste pripravení postaviť svoj vysnívaný dom?</h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Porozprávajme sa o vašej vízii a o tom, ako ju môžeme priviesť k životu. Kontaktujte nás ešte dnes pre
          bezplatnú konzultáciu. {/* Translated */}
        </p>
        <Button asChild variant="secondary" size="lg">
          <Link href="/kontakt">Kontaktujte nás</Link> {/* Translated */}
        </Button>
      </div>
    </AnimatedSection>
  )
}
