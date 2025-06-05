"use client"

import { useEffect, useState, useCallback } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const reviews = [
  {
    id: 1,
    name: "Martin Novák",
    avatar: "/placeholder.svg?height=80&width=80",
    rating: 5,
    review:
      "Dôveryhodná firma, celé jednanie bolo rýchle a profesionálne",
    location: "Bratislava",
    car: "dom APOLI",
  },
  {
    id: 2,
    name: "Zuzana Kováčová",
    avatar: "/placeholder.svg?height=80&width=80",
    rating: 5,
    review:
      "Ako zaneprázdnená profesionálka som ocenila, že spoločnosť vyriešila všetky papierovačky za mňa",
    location: "Košice",
    car: "dom ELI",
  },
  // ... ďalšie recenzie
]

export function ReviewCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const [isPaused, setIsPaused] = useState(false)

  const nextSlide = useCallback(() => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % reviews.length)
  }, [])

  const prevSlide = useCallback(() => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length)
  }, [])

  const goToSlide = useCallback((index: number) => {
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
  }, [currentIndex])

  useEffect(() => {
    if (!autoplay || isPaused) return
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [autoplay, isPaused, nextSlide])

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 200 : -200,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 200 : -200,
      opacity: 0,
    }),
  }

  return (
    <div className="relative mx-auto max-w-4xl py-12 sm:py-20 px-4">
      <div
        className="relative overflow-hidden glass-card p-8 rounded-md"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <Quote className="absolute top-6 left-6 text-primary/20 w-12 h-12" />

        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="flex flex-col items-center gap-8 md:flex-row"
            aria-live="polite"
          >
            <div className="flex shrink-0 flex-col items-center">
              <div className="relative mb-4 h-24 w-24 overflow-hidden rounded-full border-2 border-primary">
                <Image
                  src={reviews[currentIndex].avatar}
                  alt={reviews[currentIndex].name}
                  fill
                  className="object-cover"
                  sizes="96px"
                />
              </div>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${i < reviews[currentIndex].rating ? "fill-primary text-primary" : "text-zinc-600"}`}
                  />
                ))}
              </div>
            </div>

            <div className="flex flex-col text-center md:text-left">
              <p className="mb-6 text-xl italic text-zinc-300">"{reviews[currentIndex].review}"</p>
              <div>
                <p className="font-semibold text-primary text-lg">{reviews[currentIndex].name}</p>
                <p className="text-sm text-zinc-400">
                  {reviews[currentIndex].car} • {reviews[currentIndex].location}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Ovládacie prvky */}
        <div className="flex gap-2 mt-6 justify-center md:absolute md:bottom-8 md:right-8">
          <Button
            size="icon"
            variant="outline"
            className="h-10 w-10 rounded-full border-zinc-700 bg-black/30 hover:bg-black/50"
            onClick={prevSlide}
            aria-label="Predošlá recenzia"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            size="icon"
            variant="outline"
            className="h-10 w-10 rounded-full border-zinc-700 bg-black/30 hover:bg-black/50"
            onClick={nextSlide}
            aria-label="Ďalšia recenzia"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <div className="mt-8 flex justify-center gap-2" role="tablist" aria-label="Navigácia recenzií">
        {reviews.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-8 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-primary" : "bg-zinc-700"}`}
            onClick={() => goToSlide(index)}
            aria-label={`Recenzia ${index + 1}`}
            aria-selected={index === currentIndex}
            role="tab"
          />
        ))}
      </div>
    </div>
  )
}