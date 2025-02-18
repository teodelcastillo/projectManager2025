"use client"

import { useState } from "react"
import { ChatMessage } from "./ChatMessage"
import { ChatInput } from "./ChatInput"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

type Message = {
  content: string
  isUser: boolean
}

type ChatbotProps = {
  isPopup?: boolean
  onClose?: () => void
}

export function Chatbot({ isPopup = false, onClose }: ChatbotProps) {
  const [messages, setMessages] = useState<Message[]>([
    { content: "Hello! How can I assist you today?", isUser: false },
  ])

  const handleSendMessage = (message: string) => {
    setMessages([...messages, { content: message, isUser: true }])
    // Here you would typically send the message to an AI service and get a response
    // For now, we'll just echo the message back
    setTimeout(() => {
      setMessages((prevMessages) => [...prevMessages, { content: `You said: ${message}`, isUser: false }])
    }, 1000)
  }

  return (
    <div className={`flex flex-col ${isPopup ? "h-[500px] w-[350px]" : "h-full"}`}>
      <div className="flex justify-between items-center p-4 bg-primary text-primary-foreground">
        <h2 className="text-xl font-bold">Chatbot</h2>
        {isPopup && (
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>
      <div className="flex-grow overflow-y-auto p-4">
        {messages.map((message, index) => (
          <ChatMessage key={index} content={message.content} isUser={message.isUser} />
        ))}
      </div>
      <div className="p-4 border-t">
        <ChatInput onSendMessage={handleSendMessage} />
      </div>
    </div>
  )
}

