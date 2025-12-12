import { notFound } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Thermometer, Wine, Palette, ChefHat, GlassWater } from "lucide-react"
import { getBeerById, beers } from "@/lib/beer-data"

export async function generateStaticParams() {
  return beers.map((beer) => ({
    id: beer.id,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const beer = getBeerById(id)

  if (!beer) {
    return {
      title: "Bier nicht gefunden - BierWissen",
    }
  }

  return {
    title: `${beer.name} - ${beer.type} - BierWissen`,
    description: beer.description,
  }
}

export default async function BeerDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const beer = getBeerById(id)

  if (!beer) {
    notFound()
  }

  return (
    <div className="container py-12 px-4 md:px-6 lg:px-8 md:py-16">
      <div className="mx-auto max-w-5xl">
        <Button variant="ghost" asChild className="mb-8">
          <Link href="/katalog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Zurück zum Katalog
          </Link>
        </Button>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Image Section */}
          <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-muted">
            <img src={beer.image || "/placeholder.svg"} alt={beer.name} className="h-full w-full object-cover" />
            <div className="absolute right-4 top-4">
              <Badge className="bg-accent text-accent-foreground text-lg px-4 py-2">{beer.alcoholContent}% Vol.</Badge>
            </div>
          </div>

          {/* Details Section */}
          <div className="space-y-6">
            <div>
              <Badge variant="outline" className="mb-4">
                {beer.type}
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight mb-2">{beer.name}</h1>
              <p className="text-xl text-muted-foreground">{beer.origin}</p>
            </div>

            <p className="text-lg leading-relaxed text-muted-foreground">{beer.description}</p>

            <div className="grid gap-4 sm:grid-cols-2">
              <Card>
                <CardContent className="flex items-start gap-3 p-4">
                  <Wine className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p className="text-sm font-semibold">Alkoholgehalt</p>
                    <p className="text-2xl font-bold text-accent">{beer.alcoholContent}% Vol.</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-start gap-3 p-4">
                  <Thermometer className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p className="text-sm font-semibold">IBU (Bittere)</p>
                    <p className="text-2xl font-bold text-accent">{beer.ibu}</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardContent className="space-y-4 p-6">
                <div className="flex items-start gap-3">
                  <Palette className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold mb-1">Farbe</p>
                    <p className="text-muted-foreground">{beer.color}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ChefHat className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold mb-1">Geschmacksprofil</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {beer.taste.map((flavor) => (
                        <Badge key={flavor} variant="secondary">
                          {flavor}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <GlassWater className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold mb-1">Serviertemperatur</p>
                    <p className="text-muted-foreground">{beer.servingTemperature}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Wine className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold mb-1">Empfohlenes Glas</p>
                    <p className="text-muted-foreground">{beer.glassType}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <ChefHat className="h-5 w-5 text-accent" />
                  Zutaten
                </h3>
                <ul className="grid grid-cols-2 gap-2">
                  {beer.ingredients.map((ingredient) => (
                    <li key={ingredient} className="text-sm text-muted-foreground flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      {ingredient}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
