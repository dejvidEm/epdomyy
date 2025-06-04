"use client"

import Image from "next/image"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface ImageGalleryProps {
  images: string[]
  altText: string
  mainImage?: string // Optional: if one image should be prioritized as the first large one
}

export default function ImageGallery({ images, altText, mainImage }: ImageGalleryProps) {
  const galleryImages = mainImage ? [mainImage, ...images.filter((img) => img !== mainImage)] : images
  const [currentIndex, setCurrentIndex] = useState(0)

  if (!galleryImages || galleryImages.length === 0) {
    return (
      <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
        <p>No images available.</p>
      </div>
    )
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1))
  }

  return (
    <div className="space-y-4">
      <div className="relative aspect-video w-full overflow-hidden rounded-lg shadow-lg">
        <Image
          src={galleryImages[currentIndex] || "/placeholder.svg"}
          alt={`${altText} - Image ${currentIndex + 1}`}
          fill
          className="object-cover transition-opacity duration-300"
          priority={currentIndex === 0} // Prioritize loading the first image
        />
        {galleryImages.length > 1 && (
          <>
            <Button
              variant="outline"
              size="icon"
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-background/50 hover:bg-background/80"
              onClick={handlePrev}
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-background/50 hover:bg-background/80"
              onClick={handleNext}
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </>
        )}
      </div>
      {galleryImages.length > 1 && (
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2">
          {galleryImages.map((src, index) => (
            <button
              key={src + index}
              onClick={() => setCurrentIndex(index)}
              className={cn(
                "relative aspect-square w-full overflow-hidden rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
                currentIndex === index ? "ring-2 ring-primary ring-offset-2" : "opacity-70 hover:opacity-100",
              )}
              aria-label={`View image ${index + 1}`}
            >
              <Image
                src={src || "/placeholder.svg"}
                alt={`${altText} - Thumbnail ${index + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
