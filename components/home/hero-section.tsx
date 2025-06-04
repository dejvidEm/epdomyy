"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import { motion } from "framer-motion"

export default function HeroSection() {
  const scrollIndicatorText = "Posunúť nižšie • Posunúť nižšie • " // Translated

  return (
    <section className="relative flex items-center justify-center min-h-screen text-white overflow-hidden">
      <Image
        src="/images/hero-background.jpg"
        alt="Moderná budova exteriér s preskleným balkónom a dreveným obkladom" // Translated
        fill
        priority
        className="object-cover z-0"
      />
      <div className="absolute inset-0 bg-background/60 z-10" />
      <div className="relative z-20 container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center h-full">
        <div className="md:w-1/2 lg:w-3/5 space-y-6 md:space-y-8 text-center md:text-left py-16 md:py-0">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-foreground"
          >
            <span className="font-sans font-bold block">Rozširujeme</span> {/* Translated */}
            <span className="font-serif italic block">Obzory</span> {/* Translated */}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl text-foreground/80 max-w-md mx-auto md:mx-0"
          >
            Tvoríme mestské majstrovské diela, redefinujeme panorámy miest plynulým začlenením moderných nehnuteľností
            do ikonických, dynamických panorám. {/* Translated */}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full px-10 py-3 text-base font-medium transition-all duration-300"
            >
              <Link href="/aktualna-ponuka">Nájsť dom</Link> {/* Translated */}
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="absolute right-4 md:right-10 lg:right-16 bottom-10 hidden md:block"
        >
          <div className="relative w-24 h-24">
            <svg viewBox="0 0 100 100" className="w-full h-full animate-spin-slow fill-current text-foreground/80">
              <path id="circlePathHero" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
              <text dy="5">
                <textPath href="#circlePathHero" startOffset="0%" className="text-xs tracking-wider uppercase">
                  {scrollIndicatorText}
                </textPath>
              </text>
            </svg>
            <ArrowDown className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 text-foreground/80" />
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 md:hidden flex flex-col items-center space-y-1 text-foreground/80"
      >
        <span className="text-xs uppercase tracking-wider">Posunúť nižšie</span> {/* Translated */}
        <ArrowDown className="w-5 h-5 animate-bounce" />
      </motion.div>
    </section>
  )
}
