"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export default function ScrollToTop() {
  const pathname = usePathname()

  useEffect(() => {
    // Check if window is defined (ensures it runs only in the browser)
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0)
    }
  }, [pathname]) // Re-run effect when pathname changes

  return null // This component doesn't render anything
}
