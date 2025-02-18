"use client"

import { Chatbot } from "@/components/Chatbot/Chatbot"

export default function ChatbotPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Chatbot</h1>
      <div className="h-[600px] border rounded-lg shadow-lg">
        <Chatbot />
      </div>
    </div>
  )
}

