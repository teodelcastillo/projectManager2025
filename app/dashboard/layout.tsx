"use client"

import type React from "react"
import { Header } from "@/components/Interface/header"
import { ChatbotPopup } from "@/components/Chatbot/ChatbotPopup"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/Interface/app-sidebar"
import SearchBar from "@/components/Interface/SearchBar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background">
      <SidebarProvider>
        <AppSidebar />
        <main className="min-h-[calc(100vh-4rem)] w-full justify-center">
        <div className="min-w-screen">
          <div className="container min-h-90 mx-auto flex w-full justify-between space-x-4 border-b">
            <SidebarTrigger className="my-auto"/>
            <SearchBar />
            <Header />
          </div>
          {children}
        <ChatbotPopup />
      </div>
        </main>
      </SidebarProvider>
    </div>
  )
}

