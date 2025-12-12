"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setShowBanner(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setShowBanner(false)
  }

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined")
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
      <Card className="mx-auto max-w-4xl border-2 shadow-lg">
        <CardContent className="flex flex-col gap-4 p-6 md:flex-row md:items-center md:justify-between">
          <div className="flex-1 space-y-2">
            <h3 className="text-lg font-semibold">Cookie-Einstellungen</h3>
            <p className="text-sm text-muted-foreground">
              Wir verwenden Cookies, um Ihre Erfahrung auf unserer Website zu verbessern. Durch die weitere Nutzung
              dieser Website stimmen Sie unserer{" "}
              <Link href="/cookie-richtlinie" className="underline hover:text-foreground">
                Cookie-Richtlinie
              </Link>{" "}
              und{" "}
              <Link href="/datenschutz" className="underline hover:text-foreground">
                Datenschutzerklärung
              </Link>{" "}
              zu.
            </p>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row">
            <Button onClick={declineCookies} variant="outline" size="sm">
              Ablehnen
            </Button>
            <Button onClick={acceptCookies} size="sm">
              Akzeptieren
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
