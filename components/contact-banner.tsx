import Link from "next/link"
import AnimatedSection from "./animated-section"
import { Button } from "@/components/ui/button"

export default function ContactBanner() {
  return (
    <AnimatedSection className="relative overflow-hidden text-primary-foreground">
      {/* Video pozadie */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/banner.mp4" type="video/mp4" />
        Váš prehliadač nepodporuje HTML5 video.
      </video>

      {/* Obsah nad videom */}
      <div className="relative z-10 bg-black/20 backdrop-blur-[2px]">
        <div className="container mx-auto px-4 md:px-6 py-12 md:py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ste pripravení postaviť svoj vysnívaný dom?</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Porozprávajme sa o vašej vízii a o tom, ako ju môžeme priviesť k životu. Kontaktujte nás ešte dnes pre
            bezplatnú konzultáciu.
          </p>
          <Button asChild variant="secondary" size="lg">
            <Link href="/kontakt"><span>Kontaktujte nás</span></Link>
          </Button>
        </div>
      </div>
    </AnimatedSection>
  )
}