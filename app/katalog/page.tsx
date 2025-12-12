import Link from "next/link"
import { beers } from "@/lib/beer-data"

export const metadata = {
  title: "Bierkatalog - BierWissen",
  description:
    "Durchstöbern Sie unseren umfassenden Katalog deutscher Biere mit detaillierten Informationen zu jeder Sorte.",
}

export default function KatalogPage() {
  return (
    <div className="container py-12 px-4 md:px-6 lg:px-8 md:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 space-y-4">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Bierkatalog</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Entdecken Sie unsere umfangreiche Sammlung deutscher Biere. Jedes Bier wird mit detaillierten Informationen
            zu Geschmack, Herkunft und Brauart präsentiert.
          </p>
          <p className="text-sm text-muted-foreground">Insgesamt {beers.length} Biere in unserer Datenbank</p>
        </div>

        <div className="space-y-6">
          {beers.map((beer) => (
            <Link key={beer.id} href={`/bier/${beer.id}`} className="group block">
              <div className="relative overflow-hidden rounded-xl border bg-card transition-all hover:shadow-xl hover:border-primary/50">
                <div className="flex flex-col md:flex-row">
                  {/* Image Section */}
                  <div className="relative w-full md:w-64 h-64 md:h-auto overflow-hidden bg-gradient-to-br from-amber-900/20 to-amber-700/20 flex-shrink-0">
                    <img
                      src={beer.image || `/placeholder.svg?height=300&width=300&query=${encodeURIComponent(beer.name)}`}
                      alt={beer.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                    {/* Alcohol badge on image */}
                    <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1.5 rounded-full text-sm font-bold shadow-lg">
                      {beer.alcoholContent}% Vol.
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="flex flex-1 flex-col justify-between p-6 lg:p-8">
                    <div className="flex-1">
                      {/* Header */}
                      <div className="mb-4">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary border border-primary/20">
                            {beer.type}
                          </span>
                          <span className="text-sm text-muted-foreground font-medium">{beer.origin}</span>
                        </div>
                        <h2 className="text-2xl lg:text-3xl font-bold mb-3 group-hover:text-primary transition-colors">
                          {beer.name}
                        </h2>
                        <p className="text-muted-foreground leading-relaxed line-clamp-2">{beer.description}</p>
                      </div>

                      {/* Info Grid */}
                      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-5">
                        <div className="space-y-1">
                          <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide">IBU</div>
                          <div className="text-lg font-bold">{beer.ibu}</div>
                        </div>
                        <div className="space-y-1">
                          <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Farbe</div>
                          <div className="flex items-center gap-2">
                            <div
                              className="h-5 w-5 rounded-full border-2 border-background shadow-sm"
                              style={{
                                backgroundColor:
                                  beer.color.includes("Dunkelbraun") || beer.color.includes("Tiefbraun")
                                    ? "#3d2817"
                                    : beer.color.includes("Goldgelb") || beer.color.includes("Hellgelb")
                                      ? "#f4c430"
                                      : beer.color.includes("Bernstein")
                                        ? "#ff8c00"
                                        : beer.color.includes("Kupfer")
                                          ? "#b87333"
                                          : beer.color.includes("schwarz")
                                            ? "#1a0f0a"
                                            : "#8b4513",
                              }}
                            />
                            <span className="text-sm font-medium">{beer.color.split(" ")[0]}</span>
                          </div>
                        </div>
                        <div className="space-y-1">
                          <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                            Temperatur
                          </div>
                          <div className="text-lg font-bold">{beer.servingTemperature}</div>
                        </div>
                        <div className="space-y-1">
                          <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Glas</div>
                          <div className="text-sm font-medium">{beer.glassType}</div>
                        </div>
                      </div>

                      {/* Taste Notes */}
                      <div className="space-y-2">
                        <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                          Geschmacksnoten
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {beer.taste.slice(0, 5).map((note, i) => (
                            <span
                              key={i}
                              className="inline-flex items-center rounded-md bg-accent/50 px-2.5 py-1 text-xs font-medium text-accent-foreground"
                            >
                              {note}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Action */}
                    <div className="flex items-center justify-end pt-6 mt-4 border-t">
                      <div className="flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                        Mehr erfahren
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
