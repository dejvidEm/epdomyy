"use client"

import Link from "next/link"
import { Orbit, ChevronDown, MenuIcon, XIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { projects } from "@/lib/data" // Import projects for the dropdown

interface NavItemDef {
  label: string
  href?: string
  isDropdown?: boolean
  subItems?: { label: string; href: string }[]
}

const navItemsBase: Omit<NavItemDef, "subItems">[] = [
  { label: "Domov", href: "/" }, // Added Domov (Home)
  { label: "O Nás", href: "/o-nas" },
  { label: "Aktuálna ponuka domov", href: "/aktualna-ponuka" },
  { label: "Naše realizácie", href: "/nase-realizacie", isDropdown: true },
]

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  const dynamicNavItems: NavItemDef[] = navItemsBase.map((item) => {
    if (item.label === "Naše realizácie" && item.isDropdown) {
      return {
        ...item,
        subItems: [
          { label: "Všetky realizácie", href: "/nase-realizacie" }, // Link to the main listing page
          ...projects.map((project) => ({
            label: project.name,
            href: `/nase-realizacie/${project.slug}`,
          })),
        ],
      }
    }
    return item
  })

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const NavLinkClasses = (href?: string) =>
    cn(
      "text-sm font-medium transition-colors hover:text-primary",
      href && pathname === href ? "text-primary" : "text-foreground/70",
    )

  return (
    <header
      className={cn("fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ease-in-out", "pt-4 md:pt-6 px-4")}
    >
      <div
        className={cn(
          "container mx-auto flex h-16 items-center justify-between rounded-md px-4 md:px-6 shadow-lg transition-all duration-300 ease-in-out",
          isScrolled || isMobileMenuOpen
            ? "bg-background/70 backdrop-blur-lg border border-border/50"
            : "bg-background/30 backdrop-blur-md",
        )}
      >
        <Link href="/" className="flex items-center gap-2 text-foreground" onClick={() => setIsMobileMenuOpen(false)}>
          <Orbit className="h-7 w-7 text-primary" />
          <span className="text-2xl font-semibold"><span className="font-bold">EP</span>Domy</span> {/* Translated */}
        </Link>

        <nav className="hidden md:flex gap-4 items-center">
          {" "}
          {/* Reduced gap for more items */}
          {dynamicNavItems.map((item) =>
            item.isDropdown ? (
              <DropdownMenu key={item.label}>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className={cn(
                      NavLinkClasses(item.href), // Main link can also be active
                      "flex items-center gap-1 px-3 py-2 hover:bg-foreground/5",
                      // Check if any subItem is active for the main dropdown trigger
                      item.subItems?.some((sub) => pathname.startsWith(sub.href)) && !pathname.endsWith(item.href!)
                        ? "text-primary"
                        : "",
                    )}
                  >
                    {item.label}
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="border-border/70">
                  {item.subItems?.map((subItem) => (
                    <DropdownMenuItem key={subItem.label} asChild className="focus:bg-foreground/10">
                      <Link
                        href={subItem.href}
                        className={cn(
                          "hover:!text-primary focus:!text-primary w-full text-left",
                          pathname === subItem.href ? "text-primary font-medium" : "text-foreground/90",
                        )}
                      >
                        {subItem.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link key={item.label} href={item.href!} className={NavLinkClasses(item.href)}>
                {item.label}
              </Link>
            ),
          )}
          <Button
            asChild
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6 py-2 text-sm font-medium"
          >
            <Link href="/kontakt">Kontaktujte nás</Link> {/* Translated */}
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-foreground hover:bg-foreground/5">
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Prepnúť navigáciu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs border-l-border/70">
              <div className="flex justify-between items-center mb-8 p-4 border-b border-border/70">
                <Link
                  href="/"
                  className="flex items-center gap-2 text-foreground"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Orbit className="h-7 w-7 text-primary" />
                  <span className="text-xl font-semibold">Skyline Domy</span>
                </Link>
                <SheetClose asChild>
                  <Button variant="ghost" size="icon" className="text-foreground hover:bg-foreground/10">
                    <XIcon className="h-6 w-6" />
                  </Button>
                </SheetClose>
              </div>
              <nav className="grid gap-2 px-4">
                {dynamicNavItems.map((item) =>
                  item.isDropdown ? (
                    <div key={item.label} className="grid gap-1">
                      <SheetClose asChild>
                        <Link
                          href={item.href!} // Link to the main listing page
                          className={cn(
                            NavLinkClasses(item.href),
                            "block px-2 py-2 rounded-md hover:bg-foreground/5 text-base font-medium",
                          )}
                        >
                          {item.label}
                        </Link>
                      </SheetClose>
                      {item.subItems?.slice(1).map(
                        (
                          subItem, // Skip the "Všetky realizácie" link as it's covered by the main one
                        ) => (
                          <SheetClose asChild key={subItem.label}>
                            <Link
                              href={subItem.href}
                              className={cn(
                                NavLinkClasses(subItem.href),
                                "block pl-6 pr-2 py-2 rounded-md hover:bg-foreground/5 text-base",
                              )}
                            >
                              {subItem.label}
                            </Link>
                          </SheetClose>
                        ),
                      )}
                    </div>
                  ) : (
                    <SheetClose asChild key={item.label}>
                      <Link
                        href={item.href!}
                        className={cn(
                          NavLinkClasses(item.href),
                          "block px-2 py-2 rounded-md hover:bg-foreground/5 text-base",
                        )}
                      >
                        {item.label}
                      </Link>
                    </SheetClose>
                  ),
                )}
                <SheetClose asChild>
                  <Button
                    asChild
                    className="w-full mt-6 bg-primary text-primary-foreground hover:bg-primary/90 rounded-full"
                  >
                    <Link href="/kontakt">Kontaktujte nás</Link>
                  </Button>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
