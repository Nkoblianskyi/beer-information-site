import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Droplets,
  Wheat,
  ThermometerSun,
  FlaskConical,
  Timer,
  Snowflake,
  Beer,
  Sparkles,
  ArrowRight,
  AlertCircle,
} from "lucide-react"

export default function BrauverfahrenPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-br from-background via-muted/30 to-background">
        <div className="container relative z-10 py-20 px-4 md:px-6 lg:px-8 md:py-24">
          <div className="mx-auto max-w-4xl text-center space-y-6">
            <Badge variant="secondary" className="px-4 py-1.5 text-sm">
              Traditionelle Braukunst
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-balance">
              Wie wird Bier gebraut?
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-pretty">
              Entdecken Sie die faszinierenden Schritte der deutschen Braukunst – von der Auswahl der Rohstoffe bis zum
              fertigen Bier im Glas.
            </p>
          </div>
        </div>
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_50%_60%,oklch(0.72_0.08_55/0.1),transparent)]" />
      </section>

      {/* Introduction */}
      <section className="py-16 md:py-20">
        <div className="container px-4 md:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-2xl md:text-3xl">Die Kunst des Bierbrauens</CardTitle>
                <CardDescription className="text-base">
                  Ein Prozess, der Präzision, Geduld und Leidenschaft erfordert
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Das Brauen von Bier ist eine jahrhundertealte Tradition, die in Deutschland zur Perfektion entwickelt
                  wurde. Jeder Schritt im Brauprozess trägt zum einzigartigen Geschmack und Charakter des fertigen
                  Bieres bei.
                </p>
                <p>
                  Nach dem deutschen Reinheitsgebot werden ausschließlich vier natürliche Zutaten verwendet: Malz,
                  Hopfen, Wasser und Hefe. Die Kunst liegt darin, diese einfachen Zutaten durch präzise gesteuerte
                  Prozesse in ein komplexes und aromatisches Getränk zu verwandeln.
                </p>
                <p>
                  Der gesamte Brauprozess dauert mehrere Wochen und erfordert konstante Temperaturkontrolle, sorgfältige
                  Überwachung und jahrelange Erfahrung des Braumeisters.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Brewing Steps */}
      <section className="border-t border-border bg-muted/20 py-16 md:py-20">
        <div className="container px-4 md:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Die 8 Schritte des Brauprozesses</h2>
              <p className="mt-4 text-lg text-muted-foreground">Von der Malzherstellung bis zur fertigen Flasche</p>
            </div>

            <div className="space-y-8">
              {/* Step 1 */}
              <Card className="overflow-hidden">
                <div className="grid gap-6 md:grid-cols-[auto_1fr]">
                  <div className="flex items-center justify-center bg-accent/10 p-8 md:p-10">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-accent text-accent-foreground text-3xl font-bold">
                      1
                    </div>
                  </div>
                  <div className="p-6 md:p-8">
                    <div className="mb-4 flex items-center gap-3">
                      <Wheat className="h-8 w-8 text-accent" />
                      <CardTitle className="text-2xl">Mälzen</CardTitle>
                    </div>
                    <CardContent className="p-0 space-y-3">
                      <p className="text-muted-foreground leading-relaxed">
                        Beim Mälzen wird Getreide (meist Gerste) zum Keimen gebracht und anschließend getrocknet. Dieser
                        Prozess aktiviert Enzyme, die später die Stärke in vergärbaren Zucker umwandeln. Je nach
                        Trocknungsgrad entstehen helle oder dunkle Malze, die dem Bier Farbe und Geschmack verleihen.
                      </p>
                      <div className="flex items-center gap-2 text-sm text-accent">
                        <Timer className="h-4 w-4" />
                        <span>Dauer: 7-10 Tage</span>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>

              {/* Step 2 */}
              <Card className="overflow-hidden">
                <div className="grid gap-6 md:grid-cols-[auto_1fr]">
                  <div className="flex items-center justify-center bg-accent/10 p-8 md:p-10">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-accent text-accent-foreground text-3xl font-bold">
                      2
                    </div>
                  </div>
                  <div className="p-6 md:p-8">
                    <div className="mb-4 flex items-center gap-3">
                      <Droplets className="h-8 w-8 text-accent" />
                      <CardTitle className="text-2xl">Schroten und Maischen</CardTitle>
                    </div>
                    <CardContent className="p-0 space-y-3">
                      <p className="text-muted-foreground leading-relaxed">
                        Das Malz wird grob geschrotet und mit heißem Brauwasser vermischt. Bei dieser Maische werden die
                        Enzyme aktiviert, die die Stärke aus dem Malz in vergärbare Zucker umwandeln. Durch präzise
                        Temperaturführung (45-78°C) entstehen unterschiedliche Zuckerarten, die später den Charakter des
                        Bieres bestimmen.
                      </p>
                      <div className="flex items-center gap-2 text-sm text-accent">
                        <Timer className="h-4 w-4" />
                        <span>Dauer: 2-3 Stunden</span>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>

              {/* Step 3 */}
              <Card className="overflow-hidden">
                <div className="grid gap-6 md:grid-cols-[auto_1fr]">
                  <div className="flex items-center justify-center bg-accent/10 p-8 md:p-10">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-accent text-accent-foreground text-3xl font-bold">
                      3
                    </div>
                  </div>
                  <div className="p-6 md:p-8">
                    <div className="mb-4 flex items-center gap-3">
                      <FlaskConical className="h-8 w-8 text-accent" />
                      <CardTitle className="text-2xl">Läutern</CardTitle>
                    </div>
                    <CardContent className="p-0 space-y-3">
                      <p className="text-muted-foreground leading-relaxed">
                        Die festen Bestandteile (Treber) werden von der Flüssigkeit (Würze) getrennt. Der Treber wird
                        mit heißem Wasser nachgespült, um alle wertvollen Extrakte zu gewinnen. Die klare, süße Würze
                        ist nun reich an vergärbaren Zuckern und bereit für den nächsten Schritt.
                      </p>
                      <div className="flex items-center gap-2 text-sm text-accent">
                        <Timer className="h-4 w-4" />
                        <span>Dauer: 2-4 Stunden</span>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>

              {/* Step 4 */}
              <Card className="overflow-hidden">
                <div className="grid gap-6 md:grid-cols-[auto_1fr]">
                  <div className="flex items-center justify-center bg-accent/10 p-8 md:p-10">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-accent text-accent-foreground text-3xl font-bold">
                      4
                    </div>
                  </div>
                  <div className="p-6 md:p-8">
                    <div className="mb-4 flex items-center gap-3">
                      <ThermometerSun className="h-8 w-8 text-accent" />
                      <CardTitle className="text-2xl">Würze kochen und Hopfen</CardTitle>
                    </div>
                    <CardContent className="p-0 space-y-3">
                      <p className="text-muted-foreground leading-relaxed">
                        Die Würze wird für 60-90 Minuten gekocht. Während des Kochens wird Hopfen zugegeben – früh für
                        Bittere, spät für Aroma. Das Kochen sterilisiert die Würze, konzentriert die Stammwürze, treibt
                        unerwünschte Aromastoffe aus und löst die Bitterstoffe aus dem Hopfen.
                      </p>
                      <div className="flex items-center gap-2 text-sm text-accent">
                        <Timer className="h-4 w-4" />
                        <span>Dauer: 60-90 Minuten</span>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>

              {/* Step 5 */}
              <Card className="overflow-hidden">
                <div className="grid gap-6 md:grid-cols-[auto_1fr]">
                  <div className="flex items-center justify-center bg-accent/10 p-8 md:p-10">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-accent text-accent-foreground text-3xl font-bold">
                      5
                    </div>
                  </div>
                  <div className="p-6 md:p-8">
                    <div className="mb-4 flex items-center gap-3">
                      <Snowflake className="h-8 w-8 text-accent" />
                      <CardTitle className="text-2xl">Kühlen und Belüften</CardTitle>
                    </div>
                    <CardContent className="p-0 space-y-3">
                      <p className="text-muted-foreground leading-relaxed">
                        Die heiße Würze muss schnell auf Gärtemperatur (8-20°C je nach Biertyp) heruntergekühlt werden.
                        Gleichzeitig wird die Würze mit Sauerstoff angereichert, den die Hefe für ihre Vermehrungsphase
                        benötigt. Schnelles Kühlen verhindert Infektionen und sorgt für einen klaren Geschmack.
                      </p>
                      <div className="flex items-center gap-2 text-sm text-accent">
                        <Timer className="h-4 w-4" />
                        <span>Dauer: 30-60 Minuten</span>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>

              {/* Step 6 */}
              <Card className="overflow-hidden">
                <div className="grid gap-6 md:grid-cols-[auto_1fr]">
                  <div className="flex items-center justify-center bg-accent/10 p-8 md:p-10">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-accent text-accent-foreground text-3xl font-bold">
                      6
                    </div>
                  </div>
                  <div className="p-6 md:p-8">
                    <div className="mb-4 flex items-center gap-3">
                      <Beer className="h-8 w-8 text-accent" />
                      <CardTitle className="text-2xl">Hauptgärung</CardTitle>
                    </div>
                    <CardContent className="p-0 space-y-3">
                      <p className="text-muted-foreground leading-relaxed">
                        Die Hefe wird zugegeben und verwandelt den Zucker in Alkohol und Kohlensäure. Bei obergärigen
                        Bieren (z.B. Weizen) geschieht dies bei 15-20°C, bei untergärigen (z.B. Pils) bei 8-12°C. Die
                        Hefe produziert neben Alkohol auch wichtige Aromastoffe, die den Charakter des Bieres prägen.
                      </p>
                      <div className="flex items-center gap-2 text-sm text-accent">
                        <Timer className="h-4 w-4" />
                        <span>Dauer: 5-10 Tage</span>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>

              {/* Step 7 */}
              <Card className="overflow-hidden">
                <div className="grid gap-6 md:grid-cols-[auto_1fr]">
                  <div className="flex items-center justify-center bg-accent/10 p-8 md:p-10">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-accent text-accent-foreground text-3xl font-bold">
                      7
                    </div>
                  </div>
                  <div className="p-6 md:p-8">
                    <div className="mb-4 flex items-center gap-3">
                      <Timer className="h-8 w-8 text-accent" />
                      <CardTitle className="text-2xl">Reifung und Lagerung</CardTitle>
                    </div>
                    <CardContent className="p-0 space-y-3">
                      <p className="text-muted-foreground leading-relaxed">
                        Das Jungbier reift bei niedrigen Temperaturen (0-2°C) nach. Dabei setzen sich Trübstoffe und
                        Hefezellen ab, das Bier wird klar, und unerwünschte Aromastoffe werden abgebaut. Während der
                        Reifung harmonisieren sich die Geschmackskomponenten zu einem runden Gesamtbild.
                      </p>
                      <div className="flex items-center gap-2 text-sm text-accent">
                        <Timer className="h-4 w-4" />
                        <span>Dauer: 3-8 Wochen (je nach Sorte)</span>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>

              {/* Step 8 */}
              <Card className="overflow-hidden">
                <div className="grid gap-6 md:grid-cols-[auto_1fr]">
                  <div className="flex items-center justify-center bg-accent/10 p-8 md:p-10">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-accent text-accent-foreground text-3xl font-bold">
                      8
                    </div>
                  </div>
                  <div className="p-6 md:p-8">
                    <div className="mb-4 flex items-center gap-3">
                      <Sparkles className="h-8 w-8 text-accent" />
                      <CardTitle className="text-2xl">Filtration und Abfüllung</CardTitle>
                    </div>
                    <CardContent className="p-0 space-y-3">
                      <p className="text-muted-foreground leading-relaxed">
                        Das gereifte Bier wird gefiltert, um letzte Trübstoffe zu entfernen, oder als naturtrübes Bier
                        belassen. Anschließend wird es in Flaschen, Fässer oder Dosen abgefüllt. Bei der Abfüllung wird
                        besonders auf hygienische Bedingungen geachtet, um die Haltbarkeit und Qualität zu
                        gewährleisten.
                      </p>
                      <div className="flex items-center gap-2 text-sm text-accent">
                        <Timer className="h-4 w-4" />
                        <span>Dauer: 1-2 Tage</span>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Fun Facts Section */}
      <section className="border-t border-border py-16 md:py-20">
        <div className="container px-4 md:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Wissenswertes über Bierbrauen</h2>
              <p className="mt-4 text-lg text-muted-foreground">Interessante Fakten aus der Brauwelt</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-accent" />
                    Reinheitsgebot seit 1516
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Das bayerische Reinheitsgebot ist die älteste noch heute gültige lebensmittelrechtliche Vorschrift
                    der Welt. Es garantiert höchste Qualität und natürliche Inhaltsstoffe.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Beer className="h-5 w-5 text-accent" />
                    Über 40 Bierstile
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    In Deutschland werden über 40 verschiedene Bierstile gebraut – von hellem Pils über dunkles
                    Schwarzbier bis zu fruchtigen Weizenbieren.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ThermometerSun className="h-5 w-5 text-accent" />
                    Präzise Temperaturkontrolle
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Bereits Temperaturunterschiede von 1-2°C können den Geschmack des Bieres erheblich beeinflussen.
                    Moderne Brauereien nutzen computergesteuerte Systeme für präzise Kontrolle.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Droplets className="h-5 w-5 text-accent" />
                    Wasser ist entscheidend
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Bier besteht zu über 90% aus Wasser. Die Mineralzusammensetzung des Brauwassers prägt maßgeblich den
                    Charakter des Bieres und macht regionale Unterschiede aus.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Age Restriction Section */}
      <section className="border-t border-border bg-accent/5 py-16 md:py-20">
        <div className="container px-4 md:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <Card className="border-2 border-accent">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-accent/10">
                  <AlertCircle className="h-10 w-10 text-accent" />
                </div>
                <CardTitle className="text-2xl md:text-3xl">Wichtiger Hinweis zum Jugendschutz</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-center">
                <div className="space-y-4">
                  <Badge variant="secondary" className="text-xl px-6 py-3">
                    Ab 18 Jahren
                  </Badge>
                  <p className="text-lg font-semibold text-foreground">
                    Der Konsum von alkoholischen Getränken ist in Deutschland erst ab 18 Jahren erlaubt.
                  </p>
                  <div className="space-y-3 text-muted-foreground leading-relaxed">
                    <p>
                      Gemäß dem deutschen Jugendschutzgesetz dürfen Bier, Wein und Sekt erst ab 16 Jahren unter Aufsicht
                      von Erziehungsberechtigten und Spirituosen sowie spirituosenhaltige Getränke erst ab 18 Jahren
                      konsumiert werden.
                    </p>
                    <p>
                      Diese Website dient ausschließlich zu Informationszwecken über die deutsche Bierkultur und
                      Braukunst. Wir befürworten verantwortungsvollen Umgang mit alkoholischen Getränken.
                    </p>
                  </div>
                </div>
                <div className="pt-4 border-t">
                  <p className="text-sm text-muted-foreground">
                    Weitere Informationen zum Jugendschutz finden Sie auf den Seiten der Bundeszentrale für
                    gesundheitliche Aufklärung (BZgA).
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border py-16 md:py-20">
        <div className="container px-4 md:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center space-y-8">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Entdecken Sie unsere Biervielfalt</h2>
            <p className="text-lg text-muted-foreground">
              Nachdem Sie nun den Brauprozess kennengelernt haben, erkunden Sie unseren Katalog und erfahren Sie mehr
              über die verschiedenen Biersorten.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" asChild>
                <Link href="/katalog">
                  Zum Bierkatalog <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/uber-uns">Über uns</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
