import AnimatedSection from "@/components/animated-section"
import HouseCard from "@/components/catalog/house-card"
import { houses } from "@/lib/data"

export default function CatalogPage() {
  return (
    <>
      <AnimatedSection className="relative text-primary-foreground pb-16 pt-32 md:pt-48 md:pb-24 overflow-hidden">
        {/* Pozadie – fotka */}
        <div className="absolute inset-0 z-0">
          <img
            src="/banner.jpg" // ← uprav podľa reálnej cesty
            alt="Pozadie katalógu domov"
            className="w-full h-full object-cover"
          />
          {/* Zatemnenie */}
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>

        {/* Obsah */}
        <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Náš aktuálny katalóg domov</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Preskúmajte našu rozmanitú ponuku premyslene navrhnutých domov, pripravených na prispôsobenie vášmu životnému štýlu.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          {houses.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {houses.map((house) => (
                <HouseCard key={house.id} house={house} />
              ))}
            </div>
          ) : (
            <p className="text-center text-muted-foreground text-lg">
              No house designs available at the moment. Please check back soon!
            </p>
          )}
        </div>
      </AnimatedSection>
    </>
  )
}
