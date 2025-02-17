import type React from "react"
import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { ChatbotPopup } from "@/components/ChatbotPopup"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <div className="pl-64">
        <Header />
        <main className="min-h-[calc(100vh-4rem)]">{children}</main>
        <ChatbotPopup />
      </div>
    </div>
  )
}

