export const metadata = {
  title: "Cookie-Richtlinie - BierWissen",
  description: "Cookie-Richtlinie von BierWissen - Informationen über die Verwendung von Cookies auf unserer Website.",
}

export default function CookieRichtliniePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto py-12 px-4 md:px-6 lg:px-8 md:py-16">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 border-b border-border pb-6">
            <h1 className="text-4xl font-bold tracking-tight mb-3">Cookie-Richtlinie</h1>
            <p className="text-lg text-muted-foreground">
              Diese Cookie-Richtlinie erklärt, was Cookies sind und wie wir sie verwenden. Sie sollten diese Richtlinie
              lesen, um zu verstehen, welche Art von Cookies wir verwenden, welche Informationen wir mit Cookies sammeln
              und wie diese Informationen verwendet werden.
            </p>
          </div>

          <div className="space-y-8">
            <section className="bg-card border border-border rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">Was sind Cookies?</h2>
              <p className="text-muted-foreground">
                Cookies sind kleine Textdateien, die verwendet werden, um kleine Informationen zu speichern. Sie werden
                auf Ihrem Gerät gespeichert, wenn die Website in Ihrem Browser geladen wird. Diese Cookies helfen uns,
                die Website ordnungsgemäß funktionieren zu lassen, sie sicherer zu machen, eine bessere
                Benutzererfahrung zu bieten und zu verstehen, wie die Website funktioniert.
              </p>
            </section>

            <section className="bg-card border border-border rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">Wie verwenden wir Cookies?</h2>
              <p className="text-muted-foreground">
                Wie die meisten Online-Dienste verwendet unsere Website First-Party- und Third-Party-Cookies für
                verschiedene Zwecke. Unsere Website verwendet hauptsächlich notwendige Cookies, die für das
                ordnungsgemäße Funktionieren der Website erforderlich sind.
              </p>
            </section>

            <section className="bg-card border border-border rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">Welche Arten von Cookies verwenden wir?</h2>

              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium mb-3">Notwendige Cookies</h3>
                  <p className="text-muted-foreground mb-4">
                    Diese Cookies sind für das ordnungsgemäße Funktionieren der Website unerlässlich. Ohne diese Cookies
                    würde die Website nicht richtig funktionieren. Wir verwenden notwendige Cookies ausschließlich, um
                    Ihre Cookie-Präferenzen zu speichern.
                  </p>

                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse bg-muted/30 rounded-lg overflow-hidden">
                      <thead className="bg-muted">
                        <tr>
                          <th className="text-left p-3 font-medium">Cookie-Name</th>
                          <th className="text-left p-3 font-medium">Zweck</th>
                          <th className="text-left p-3 font-medium">Dauer</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-t border-border">
                          <td className="p-3 font-mono text-sm">cookie-consent</td>
                          <td className="p-3 text-muted-foreground">Speichert Ihre Cookie-Einwilligungspräferenz</td>
                          <td className="p-3 text-muted-foreground">1 Jahr</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-card border border-border rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">Wie kann ich Cookies kontrollieren?</h2>
              <p className="text-muted-foreground mb-3">
                Sie können Ihre Cookie-Präferenzen verwalten, indem Sie auf den Button "Cookie-Einstellungen" im
                Cookie-Banner klicken, der beim ersten Besuch der Website erscheint.
              </p>
              <p className="text-muted-foreground mb-3">
                Darüber hinaus bieten verschiedene Browser unterschiedliche Methoden zum Blockieren und Löschen von
                Cookies, die von Websites verwendet werden. Sie können die Einstellungen Ihres Browsers ändern, um
                Cookies zu blockieren oder zu löschen. Weitere Informationen zur Verwaltung und Löschung von Cookies
                finden Sie unter:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>
                  <span className="font-medium">Chrome:</span> https://support.google.com/chrome/answer/95647
                </li>
                <li>
                  <span className="font-medium">Firefox:</span> https://support.mozilla.org/de/kb/cookies-loeschen
                </li>
                <li>
                  <span className="font-medium">Safari:</span>{" "}
                  https://support.apple.com/de-de/guide/safari/sfri11471/mac
                </li>
                <li>
                  <span className="font-medium">Edge:</span> https://support.microsoft.com/de-de/microsoft-edge
                </li>
              </ul>
            </section>

            <section className="bg-card border border-border rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">Weitere Informationen</h2>
              <p className="text-muted-foreground mb-3">
                Wenn Sie weitere Fragen zu unserer Verwendung von Cookies haben, können Sie uns gerne kontaktieren:
              </p>
              <div className="bg-muted/50 rounded p-4 text-sm">
                <p>E-Mail: datenschutz@bierwissen.com</p>
                <p>Telefon: +49 (0) 89 152422684</p>
              </div>
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
