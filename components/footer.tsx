import Link from "next/link"
import { MountainIcon, FacebookIcon, InstagramIcon, LinkedinIcon } from "lucide-react" // Assuming MountainIcon is a placeholder for your logo

export default function Footer() {
  return (
    <footer className="bg-muted text-muted-foreground">
      <div className="container mx-auto px-4 md:px-6 py-12 grid md:grid-cols-3 gap-8">
        <div>
          <Link href="/" className="flex items-center gap-2 mb-4">
            <MountainIcon className="h-7 w-7 text-primary" /> {/* Or your actual logo icon */}
            <span className="font-bold text-xl text-foreground">Skyline Domy</span> {/* Translated */}
          </Link>
          <p className="text-sm">
            Staviame vaše sny, jeden dom po druhom. Kvalitná výstavba a inovatívny dizajn od roku 2005.{" "}
            {/* Translated */}
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-foreground mb-3">Rýchle odkazy</h4> {/* Translated */}
          <nav className="grid gap-2 text-sm">
            <Link href="/o-nas" className="hover:text-primary">
              O Nás
            </Link>
            <Link href="/aktualna-ponuka" className="hover:text-primary">
              Aktuálna ponuka domov
            </Link>
            <Link href="/nase-realizacie" className="hover:text-primary">
              Naše realizácie
            </Link>
            <Link href="/kontakt" className="hover:text-primary">
              Kontakt
            </Link>
            <Link href="/ochrana-sukromia" className="hover:text-primary">
              Ochrana súkromia
            </Link>
          </nav>
        </div>
        <div>
          <h4 className="font-semibold text-foreground mb-3">Spojte sa s nami</h4> {/* Translated */}
          <div className="flex gap-4 mb-4">
            <Link href="#" aria-label="Facebook" className="hover:text-primary">
              <FacebookIcon className="h-6 w-6" />
            </Link>
            <Link href="#" aria-label="Instagram" className="hover:text-primary">
              <InstagramIcon className="h-6 w-6" />
            </Link>
            <Link href="#" aria-label="LinkedIn" className="hover:text-primary">
              <LinkedinIcon className="h-6 w-6" />
            </Link>
          </div>
          <p className="text-sm">Stavebná ulica 123, Mesto Stavieb, SK 54321</p> {/* Translated */}
          <p className="text-sm">Email: info@skylinedomy.sk</p> {/* Translated */}
          <p className="text-sm">Telefón: (012) 345-6789</p> {/* Translated */}
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container mx-auto px-4 md:px-6 py-6 text-center text-sm">
          &copy; {new Date().getFullYear()} Skyline Domy. Všetky práva vyhradené. {/* Translated */}
        </div>
      </div>
    </footer>
  )
}
