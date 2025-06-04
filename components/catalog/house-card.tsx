import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { House } from "@/lib/types"
import { ArrowRight, BedDouble, Bath, Square } from "lucide-react"

interface HouseCardProps {
  house: House
}

export default function HouseCard({ house }: HouseCardProps) {
  return (
    <Card className="overflow-hidden flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="p-0">
        <Link href={`/aktualna-ponuka/${house.slug}`} className="block relative aspect-[4/3]">
          <Image
            src={house.mainImage || "/placeholder.svg?width=400&height=300&query=house+exterior"}
            alt={house.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </Link>
      </CardHeader>
      <CardContent className="pt-6 flex-grow">
        <Link href={`/aktualna-ponuka/${house.slug}`}>
          <CardTitle className="text-xl lg:text-2xl font-semibold mb-2 hover:text-primary transition-colors">
            {house.name}
          </CardTitle>
        </Link>
        <p className="text-muted-foreground text-sm line-clamp-3 mb-3">{house.shortDescription}</p>
        <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground">
          {house.bedrooms && (
            <span className="flex items-center gap-1">
              <BedDouble className="h-4 w-4 text-primary" /> {house.bedrooms} Izby
            </span>
          )}
          {house.bathrooms && (
            <span className="flex items-center gap-1">
              <Bath className="h-4 w-4 text-primary" /> {house.bathrooms} Kúpeľne
            </span>
          )}
          {house.sqft && (
            <span className="flex items-center gap-1">
              <Square className="h-4 w-4 text-primary" /> {house.sqft} m²
            </span>
          )}
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild variant="default" className="w-full">
          <Link href={`/aktualna-ponuka/${house.slug}`}>
            Zobraziť detaily <ArrowRight className="h-4 w-4 ml-2" /> {/* Translated */}
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
