export const metadata = {
  title: "Datenschutzerklärung - BierWissen",
  description: "Datenschutzerklärung von BierWissen - Informationen zum Umgang mit personenbezogenen Daten.",
}

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto py-12 px-4 md:px-6 lg:px-8 md:py-16">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 border-b border-border pb-6">
            <h1 className="text-4xl font-bold tracking-tight mb-3">Datenschutzerklärung</h1>
            <p className="text-lg text-muted-foreground">
              Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir verarbeiten Ihre Daten daher
              ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, TKG 2003).
            </p>
          </div>

          <div className="space-y-8">
            <section className="bg-card border border-border rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">1. Verantwortliche Stelle</h2>
              <p className="text-muted-foreground mb-3">
                Verantwortlich für die Datenverarbeitung auf dieser Website ist:
              </p>
              <div className="bg-muted/50 rounded p-4 text-sm">
                <p className="font-medium">BierWissen</p>
                <p>Musterstraße 123</p>
                <p>80331 München</p>
                <p>Deutschland</p>
                <p className="mt-2">E-Mail: datenschutz@bierwissen.com</p>
              </div>
            </section>

            <section className="bg-card border border-border rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">2. Erhebung und Speicherung personenbezogener Daten</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-3">2.1 Beim Besuch der Website</h3>
                  <p className="text-muted-foreground mb-3">
                    Beim Aufrufen unserer Website werden durch den auf Ihrem Endgerät zum Einsatz kommenden Browser
                    automatisch Informationen an den Server unserer Website gesendet. Diese Informationen werden
                    temporär in einem sogenannten Logfile gespeichert. Folgende Informationen werden dabei ohne Ihr
                    Zutun erfasst und bis zur automatisierten Löschung gespeichert:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                    <li>IP-Adresse des anfragenden Rechners</li>
                    <li>Datum und Uhrzeit des Zugriffs</li>
                    <li>Name und URL der abgerufenen Datei</li>
                    <li>Website, von der aus der Zugriff erfolgt (Referrer-URL)</li>
                    <li>Verwendeter Browser und ggf. das Betriebssystem Ihres Rechners</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-3">2.2 Bei Nutzung unseres Kontaktformulars</h3>
                  <p className="text-muted-foreground">
                    Bei Fragen jeglicher Art bieten wir Ihnen die Möglichkeit, mit uns über ein auf der Website
                    bereitgestelltes Formular Kontakt aufzunehmen. Dabei ist die Angabe einer gültigen E-Mail-Adresse
                    erforderlich, damit wir wissen, von wem die Anfrage stammt und um diese beantworten zu können.
                    Weitere Angaben können freiwillig getätigt werden.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-card border border-border rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">3. Verwendung von Cookies</h2>
              <p className="text-muted-foreground mb-3">
                Unsere Website verwendet Cookies. Cookies sind kleine Textdateien, die im Internetbrowser bzw. vom
                Internetbrowser auf dem Computersystem eines Nutzers gespeichert werden. Wir verwenden Cookies
                ausschließlich, um Ihre Zustimmung zu Cookie-Einstellungen zu speichern.
              </p>
              <p className="text-muted-foreground">
                Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und
                einzeln über deren Annahme entscheiden oder die Annahme von Cookies für bestimmte Fälle oder generell
                ausschließen können.
              </p>
            </section>

            <section className="bg-card border border-border rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">4. Ihre Rechte</h2>
              <p className="text-muted-foreground">
                Ihnen stehen grundsätzlich die Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung,
                Datenübertragbarkeit, Widerruf und Widerspruch zu. Wenn Sie glauben, dass die Verarbeitung Ihrer Daten
                gegen das Datenschutzrecht verstößt oder Ihre datenschutzrechtlichen Ansprüche sonst in einer Weise
                verletzt worden sind, können Sie sich bei der Aufsichtsbehörde beschweren.
              </p>
            </section>

            <section className="bg-card border border-border rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">5. Kontakt</h2>
              <p className="text-muted-foreground mb-3">Sie erreichen uns unter folgenden Kontaktdaten:</p>
              <div className="bg-muted/50 rounded p-4 text-sm">
                <p>E-Mail: datenschutz@bierwissen.com</p>
                <p>Telefon: +49 (0) 89 152422684</p>
              </div>
            </section>

            <section className="bg-card border border-border rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">6. Aktualität und Änderung dieser Datenschutzerklärung</h2>
              <p className="text-muted-foreground">
                Diese Datenschutzerklärung ist aktuell gültig und hat den Stand Dezember 2025. Durch die
                Weiterentwicklung unserer Website oder aufgrund geänderter gesetzlicher beziehungsweise behördlicher
                Vorgaben kann es notwendig werden, diese Datenschutzerklärung zu ändern.
              </p>
            </section>
          </div>

          <div className="mt-12 pt-6 border-t border-border text-center">
            <p className="text-sm text-muted-foreground">Stand: Dezember 2025</p>
          </div>
        </div>
      </div>
    </div>
  )
}
