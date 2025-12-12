import { Card, CardContent } from "@/components/ui/card"
import { Beer, BookOpen, Award, Heart } from "lucide-react"

export const metadata = {
  title: "Über uns - BierWissen",
  description:
    "Erfahren Sie mehr über BierWissen und unsere Mission, die deutsche Bierkultur zu bewahren und zu fördern.",
}

export default function UberUnsPage() {
  return (
    <div className="container py-12 px-4 md:px-6 lg:px-8 md:py-16">
      <div className="mx-auto max-w-4xl space-y-12">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Über BierWissen</h1>
          <p className="text-xl text-muted-foreground">
            Ihre zuverlässige Quelle für Informationen über deutsche Bierkultur
          </p>
        </div>

        <div className="prose prose-gray dark:prose-invert max-w-none">
          <p className="text-lg leading-relaxed text-muted-foreground">
            BierWissen ist ein umfassendes Informationsportal, das sich der Erhaltung und Förderung der deutschen
            Bierkultur widmet. Wir bieten detaillierte Einblicke in die Vielfalt deutscher Biersorten, traditionelle
            Brauverfahren und die reiche Geschichte der deutschen Braukunst.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardContent className="flex items-start gap-4 p-6">
              <Beer className="h-8 w-8 text-accent shrink-0 mt-1" />
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Unsere Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Wir möchten die Faszination der deutschen Bierkultur einem breiten Publikum zugänglich machen und das
                  Wissen über traditionelle und moderne Brauverfahren bewahren.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex items-start gap-4 p-6">
              <BookOpen className="h-8 w-8 text-accent shrink-0 mt-1" />
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Bildung & Information</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Wir stellen umfassende Informationen über Biersorten, Alkoholgehalt, Geschmacksprofile und
                  Brautraditionen bereit – wissenschaftlich fundiert und leicht verständlich.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex items-start gap-4 p-6">
              <Award className="h-8 w-8 text-accent shrink-0 mt-1" />
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Qualität & Tradition</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Deutschland verfügt über eine der ältesten und reichhaltigsten Bierkulturen der Welt. Wir würdigen
                  diese Tradition und stellen sicher, dass dieses Wissen erhalten bleibt.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex items-start gap-4 p-6">
              <Heart className="h-8 w-8 text-accent shrink-0 mt-1" />
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Verantwortung</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Wir fördern den verantwortungsvollen Umgang mit alkoholischen Getränken und richten uns ausschließlich
                  an volljährige Personen ab 18 Jahren.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="border-2 bg-muted/30">
          <CardContent className="p-8 space-y-4">
            <h2 className="text-2xl font-bold">Deutsche Brautradition</h2>
            <p className="text-muted-foreground leading-relaxed">
              Die deutsche Bierkultur ist geprägt von Jahrhunderten an Erfahrung und Handwerkskunst. Seit dem berühmten
              Reinheitsgebot von 1516 steht deutsches Bier für höchste Qualität und natürliche Zutaten. Mit über 1.500
              Brauereien und mehr als 5.000 verschiedenen Biersorten ist Deutschland ein wahres Paradies für
              Bierliebhaber.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Von leichten Pilsner über fruchtige Weizenbiere bis hin zu kraftvollen Bockbieren – die Vielfalt ist
              beeindruckend. Jede Region Deutschlands hat ihre eigenen Spezialitäten und Brautraditionen entwickelt, die
              bis heute gepflegt und weitergegeben werden.
            </p>
          </CardContent>
        </Card>

        <div className="rounded-lg border-2 border-accent/20 bg-accent/5 p-8 text-center">
          <p className="text-lg font-semibold mb-2">Verantwortungsvoller Genuss</p>
          <p className="text-muted-foreground">
            Diese Website richtet sich ausschließlich an Personen über 18 Jahre. Bitte genießen Sie alkoholische
            Getränke verantwortungsvoll und in Maßen.
          </p>
        </div>
      </div>
    </div>
  )
}
