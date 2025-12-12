import Link from "next/link"
import { Beer } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto py-12 px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Beer className="h-6 w-6 text-accent" />
              <span className="text-lg font-bold">BierWissen</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Ihr informativer Ratgeber für deutsche Bierkultur und Brautradition.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  Startseite
                </Link>
              </li>
              <li>
                <Link href="/katalog" className="text-muted-foreground hover:text-foreground transition-colors">
                  Katalog
                </Link>
              </li>
              <li>
                <Link href="/uber-uns" className="text-muted-foreground hover:text-foreground transition-colors">
                  Über uns
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="text-muted-foreground hover:text-foreground transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Rechtliches</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/datenschutz" className="text-muted-foreground hover:text-foreground transition-colors">
                  Datenschutzerklärung
                </Link>
              </li>
              <li>
                <Link
                  href="/cookie-richtlinie"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Cookie-Richtlinie
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Verantwortungsvoller Genuss</h3>
            <p className="text-xs text-muted-foreground">
              Bitte genießen Sie alkoholische Getränke verantwortungsvoll. Diese Website richtet sich ausschließlich an
              Personen über 18 Jahre.
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} BierWissen. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  )
}
