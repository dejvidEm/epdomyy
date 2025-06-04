import { getHouseBySlug, houses } from "@/lib/data"
import { notFound } from "next/navigation"
import AnimatedSection from "@/components/animated-section"
import ImageGallery from "@/components/ui/image-gallery"
import Link from "next/link"
import { BedDouble, Bath, Square, CheckCircle, Tag } from "lucide-react"

interface HouseDetailPageProps {
  params: { slug: string }
}

// For static generation
export async function generateStaticParams() {
  return houses.map((house) => ({
    slug: house.slug,
  }))
}

export default async function HouseDetailPage({ params }: HouseDetailPageProps) {
  const house = await getHouseBySlug(params.slug)

  if (!house) {
    notFound()
  }

  return (
    <>
      <AnimatedSection className="bg-muted pb-12 pt-12 md:pt-48 md:pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">{house.name}</h1>
          <p className="text-lg text-muted-foreground">{house.shortDescription}</p>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-3 gap-8 md:gap-12">
          <div className="lg:col-span-2">
            <ImageGallery images={house.images} altText={house.name} mainImage={house.mainImage} />
          </div>
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-semibold mb-4">House Details</h2>
            <div className="space-y-3 text-muted-foreground mb-6">
              {house.sqft && (
                <p className="flex items-center gap-2">
                  <Square className="h-5 w-5 text-primary" /> {house.sqft} sqft
                </p>
              )}
              {house.bedrooms && (
                <p className="flex items-center gap-2">
                  <BedDouble className="h-5 w-5 text-primary" /> {house.bedrooms} Bedrooms
                </p>
              )}
              {house.bathrooms && (
                <p className="flex items-center gap-2">
                  <Bath className="h-5 w-5 text-primary" /> {house.bathrooms} Bathrooms
                </p>
              )}
              {house.priceRange && (
                <p className="flex items-center gap-2">
                  <Tag className="h-5 w-5 text-primary" /> Price Range: {house.priceRange}
                </p>
              )}
            </div>

            <h3 className="text-xl font-semibold mb-3">Key Features</h3>
            <ul className="space-y-2 mb-6">
              {house.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button className="w-full">
              <Link href="/contact">Inquire About This Design</Link>
            </button>
          </div>
        </div>
        <div className="container mx-auto px-4 md:px-6 mt-12">
          <h2 className="text-2xl font-semibold mb-4">Description</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p>{house.longDescription}</p>
          </div>
        </div>
      </AnimatedSection>
    </>
  )
}
