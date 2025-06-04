import AnimatedSection from "@/components/animated-section"
import HouseCard from "@/components/catalog/house-card"
import { houses } from "@/lib/data"

export default function CatalogPage() {
  return (
    <>
      <AnimatedSection className="bg-primary text-primary-foreground pb-16 pt-32 md:pt-48 md:pb-24">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our House Catalog</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Explore our diverse range of thoughtfully designed homes, ready to be customized to your lifestyle.
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
