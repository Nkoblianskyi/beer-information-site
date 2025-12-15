"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ContactSuccessDialog } from "@/components/contact-success-dialog"
import { Mail, MessageSquare, Send } from "lucide-react"

export default function KontaktPage() {
  const [showSuccess, setShowSuccess] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setShowSuccess(true)
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }))
  }

  return (
    <>
      <div className="container py-12 px-4 md:px-6 lg:px-8 md:py-16">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 space-y-4 text-center">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Kontakt</h1>
            <p className="text-lg text-muted-foreground">
              Haben Sie Fragen oder Anregungen? Wir freuen uns auf Ihre Nachricht!
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 mb-12">
            <Card>
              <CardHeader>
                <Mail className="h-8 w-8 text-accent mb-2" />
                <CardTitle>E-Mail</CardTitle>
                <CardDescription>Schreiben Sie uns direkt eine E-Mail</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">info@bierwissen.com</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <MessageSquare className="h-8 w-8 text-accent mb-2" />
                <CardTitle>Antwortzeit</CardTitle>
                <CardDescription>Wir melden uns schnellstmöglich zurück</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Innerhalb von 24-48 Stunden</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Kontaktformular</CardTitle>
              <CardDescription>
                Füllen Sie das folgende Formular aus und wir werden uns bei Ihnen melden
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input id="name" placeholder="Ihr Name" value={formData.name} onChange={handleChange} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">E-Mail *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="ihre.email@beispiel.de"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Betreff *</Label>
                  <Input
                    id="subject"
                    placeholder="Worum geht es?"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Nachricht *</Label>
                  <Textarea
                    id="message"
                    placeholder="Ihre Nachricht an uns..."
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full sm:w-auto">
                  <Send className="mr-2 h-4 w-4" />
                  Nachricht senden
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      <ContactSuccessDialog open={showSuccess} onOpenChange={setShowSuccess} />
    </>
  )
}
