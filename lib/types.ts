export interface NavItem {
  label: string
  href: string
}

export interface House {
  id: string
  slug: string // Keep slugs in a URL-friendly format, can be Slovak if desired
  name: string // Slovak name
  shortDescription: string // Slovak
  longDescription: string // Slovak
  mainImage: string
  images: string[]
  features: string[] // Slovak
  sqft?: number
  bedrooms?: number
  bathrooms?: number
  priceRange?: string // Slovak
}

export interface Project {
  id: string
  slug: string // Keep slugs in a URL-friendly format
  name: string // Slovak name
  shortDescription: string // Slovak
  longDescription: string // Slovak
  mainImage: string
  images: string[]
  location: string // Slovak
  yearCompleted: number
  clientTestimonial?: string // Slovak
  category?: string // Slovak
}
