import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Award,
  BookOpen,
  Droplets,
  Beer,
  Wheat,
  GlassWater,
  ThermometerSun,
  AlertCircle,
} from "lucide-react"
import { getStrongestBeer, beers } from "@/lib/beer-data"

export default function HomePage() {
  const strongestBeer = getStrongestBeer()
  const featuredBeers = beers.slice(0, 6)

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-br from-background via-muted/30 to-background">
        <div className="container relative z-10 py-20 px-4 md:px-6 lg:px-8 md:py-32">
          <div className="mx-auto max-w-4xl text-center space-y-8">
            <Badge variant="secondary" className="px-4 py-1.5 text-sm">
              Deutsche Braukunst seit Jahrhunderten
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-balance">
              Entdecken Sie die Welt des deutschen Bieres
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-pretty md:text-xl">
              Tauchen Sie ein in die faszinierende Vielfalt deutscher Bierkultur. Von traditionellen Weizenbieren bis zu
              kraftvollen Bockbieren – erfahren Sie alles über Geschmack, Tradition und Braukunst.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" asChild>
                <Link href="/katalog">
                  Zum Bierkatalog <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/uber-uns">Mehr erfahren</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_50%_60%,oklch(0.72_0.08_55/0.1),transparent)]" />
      </section>

      {/* Strongest Beer Section */}
      <section className="border-b border-border bg-accent/5 py-16 md:py-24">
        <div className="container px-4 md:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 text-center">
              <Award className="mx-auto mb-4 h-12 w-12 text-accent" />
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Der Stärkste in unserer Sammlung</h2>
              <p className="mt-4 text-lg text-muted-foreground">Mit dem höchsten Alkoholgehalt</p>
            </div>

            <Card className="overflow-hidden border-2">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="relative aspect-[3/4] overflow-hidden bg-muted md:aspect-auto">
                  <img
                    src={strongestBeer.image || "/placeholder.svg"}
                    alt={strongestBeer.name}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute right-4 top-4">
                    <Badge className="bg-accent text-accent-foreground text-lg px-4 py-2">
                      {strongestBeer.alcoholContent}% Vol.
                    </Badge>
                  </div>
                </div>

                <div className="flex flex-col justify-center p-8">
                  <CardHeader className="p-0 pb-6">
                    <Badge variant="outline" className="w-fit mb-4">
                      {strongestBeer.type}
                    </Badge>
                    <CardTitle className="text-3xl">{strongestBeer.name}</CardTitle>
                    <CardDescription className="text-base">{strongestBeer.origin}</CardDescription>
                  </CardHeader>

                  <CardContent className="p-0 space-y-6">
                    <p className="text-muted-foreground leading-relaxed">{strongestBeer.description}</p>

                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <Droplets className="mt-0.5 h-5 w-5 text-accent shrink-0" />
                        <div>
                          <p className="font-semibold text-sm">Serviertemperatur</p>
                          <p className="text-sm text-muted-foreground">{strongestBeer.servingTemperature}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <BookOpen className="mt-0.5 h-5 w-5 text-accent shrink-0" />
                        <div>
                          <p className="font-semibold text-sm">Geschmacksprofil</p>
                          <p className="text-sm text-muted-foreground">{strongestBeer.taste.join(", ")}</p>
                        </div>
                      </div>
                    </div>

                    <Button asChild className="w-full sm:w-auto">
                      <Link href={`/bier/${strongestBeer.id}`}>
                        Mehr Details <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Beers Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Beliebte Biersorten</h2>
            <p className="mt-4 text-lg text-muted-foreground">Eine Auswahl klassischer deutscher Biere</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredBeers.map((beer) => (
              <Card key={beer.id} className="group overflow-hidden transition-all hover:shadow-lg">
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={beer.image || "/placeholder.svg"}
                    alt={beer.name}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  />
                  <Badge className="absolute right-4 top-4 bg-background/90 text-foreground">
                    {beer.alcoholContent}% Vol.
                  </Badge>
                </div>
                <CardHeader>
                  <Badge variant="outline" className="w-fit mb-2">
                    {beer.type}
                  </Badge>
                  <CardTitle className="text-xl">{beer.name}</CardTitle>
                  <CardDescription>{beer.origin}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-sm text-muted-foreground line-clamp-3">{beer.description}</p>
                  <Button variant="outline" asChild className="w-full bg-transparent">
                    <Link href={`/bier/${beer.id}`}>
                      Details ansehen <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" asChild>
              <Link href="/katalog">
                Alle Biere entdecken <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* New Info Section about German Beer Types */}
      <section className="border-t border-border py-16 md:py-24">
        <div className="container px-4 md:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Vielfalt der deutschen Biersorten</h2>
              <p className="mt-4 text-lg text-muted-foreground">Entdecken Sie die wichtigsten Bierstile Deutschlands</p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="text-center space-y-4">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                  <Wheat className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold">Weizenbier</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Obergäriges Bier aus Weizenmalz mit charakteristischen Aromen von Banane und Nelke. Ein bayerischer
                  Klassiker mit erfrischendem Geschmack.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                  <Beer className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold">Pils</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Das beliebteste Bier Deutschlands. Untergärig gebraut mit ausgeprägter Hopfenbittere und goldgelber
                  Farbe. Klar, herb und erfrischend.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                  <GlassWater className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold">Helles</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Mildes, untergäriges Vollbier aus München. Malzbetont mit dezenter Hopfennote. Perfekt für gesellige
                  Runden im Biergarten.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                  <ThermometerSun className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold">Bockbier</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Kräftiges Starkbier mit höherem Alkoholgehalt. Vollmundig und malzig-süß. Traditionell zur Fastenzeit
                  und in der kalten Jahreszeit genossen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Info Section about German Beer Purity Law */}
      <section className="border-t border-border bg-muted/30 py-16 md:py-24">
        <div className="container px-4 md:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <div className="space-y-6">
                <Badge variant="secondary" className="w-fit">
                  Seit 1516
                </Badge>
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Das Deutsche Reinheitsgebot</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Das deutsche Reinheitsgebot von 1516 ist die älteste noch heute gültige lebensmittelrechtliche
                    Vorschrift der Welt. Es legt fest, dass Bier nur aus vier natürlichen Zutaten gebraut werden darf.
                  </p>
                  <p>
                    Diese strenge Regelung hat die hohe Qualität und den einzigartigen Charakter des deutschen Bieres
                    über Jahrhunderte hinweg bewahrt und macht es weltweit zu einem Symbol für Braukunst und Tradition.
                  </p>
                </div>
                <Button asChild>
                  <Link href="/uber-uns">
                    Mehr über die Geschichte <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <div className="space-y-6">
                <Card className="border-2">
                  <CardHeader>
                    <CardTitle>Die vier erlaubten Zutaten</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                        <Wheat className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Malz</h4>
                        <p className="text-sm text-muted-foreground">
                          Gekeimtes und getrocknetes Getreide, meist Gerste
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                        <Droplets className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Hopfen</h4>
                        <p className="text-sm text-muted-foreground">Für Bitterkeit, Aroma und Haltbarkeit</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                        <GlassWater className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Wasser</h4>
                        <p className="text-sm text-muted-foreground">Reines Brauwasser in höchster Qualität</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                        <Beer className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Hefe</h4>
                        <p className="text-sm text-muted-foreground">Für die Gärung und Umwandlung des Zuckers</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="border-t border-border bg-muted/30 py-16 md:py-24">
        <div className="container px-4 md:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center space-y-8">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Deutsche Brautradition</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Deutschland verfügt über eine der reichsten Bierkulturen der Welt. Mit über 1.500 Brauereien und
              unzähligen Biersorten ist die deutsche Braukunst ein wichtiger Teil des kulturellen Erbes. Von den
              strengen Vorgaben des Reinheitsgebots bis hin zu modernen Craft-Beer-Interpretationen – deutsches Bier
              steht für Qualität, Tradition und Handwerkskunst.
            </p>
            <Button size="lg" variant="outline" asChild>
              <Link href="/uber-uns">Mehr über uns erfahren</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Age Restriction Notice Section */}
      <section className="border-t border-border bg-accent/5 py-12 md:py-16">
        <div className="container px-4 md:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <Card className="border-2 border-accent/50">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                  <AlertCircle className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-xl md:text-2xl">Verantwortungsvoller Genuss</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <Badge variant="secondary" className="text-lg px-5 py-2">
                  Ab 18 Jahren
                </Badge>
                <p className="text-muted-foreground leading-relaxed">
                  Der Konsum alkoholischer Getränke ist in Deutschland gesetzlich geregelt. Bier und Wein dürfen ab 16
                  Jahren unter Aufsicht, Spirituosen ab 18 Jahren konsumiert werden. Diese Website dient ausschließlich
                  zu Informationszwecken über deutsche Bierkultur.
                </p>
                <p className="text-sm text-muted-foreground">
                  Bitte konsumieren Sie Alkohol verantwortungsvoll und beachten Sie die gesetzlichen Bestimmungen des
                  Jugendschutzgesetzes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
