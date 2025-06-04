import HeroSection from "@/components/home/hero-section"
import AboutPreviewSection from "@/components/home/about-preview-section"
import FeaturedItemsSection from "@/components/home/featured-items-section"
import { houses, projects } from "@/lib/data"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutPreviewSection />
      <FeaturedItemsSection
        title="Odporúčané návrhy domov" // Translated
        items={houses}
        viewAllLink="/aktualna-ponuka"
        itemType="aktualna-ponuka"
      />
      <FeaturedItemsSection
        title="Naše nedávne realizácie" // Translated
        items={projects}
        viewAllLink="/nase-realizacie"
        itemType="nase-realizacie"
      />
    </>
  )
}
