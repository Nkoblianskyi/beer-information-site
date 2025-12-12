"use client"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { CheckCircle } from "lucide-react"

interface ContactSuccessDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ContactSuccessDialog({ open, onOpenChange }: ContactSuccessDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex justify-center mb-4">
            <CheckCircle className="h-16 w-16 text-accent" />
          </div>
          <DialogTitle className="text-center text-2xl">Nachricht gesendet!</DialogTitle>
          <DialogDescription className="text-center text-base pt-2">
            Vielen Dank für Ihre Nachricht. Wir werden uns so schnell wie möglich bei Ihnen melden.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
