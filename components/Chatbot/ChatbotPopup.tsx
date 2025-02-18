"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import { Chatbot } from "./Chatbot"

export function ChatbotPopup() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-4 right-4">
      {isOpen ? (
        <div className="bg-background border rounded-lg shadow-lg">
          <Chatbot isPopup onClose={() => setIsOpen(false)} />
        </div>
      ) : (
        <Button onClick={() => setIsOpen(true)} size="icon" className="rounded-full h-12 w-12">
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}
    </div>
  )
}

