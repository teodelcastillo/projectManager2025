"use client"

import type React from "react"
import { Header } from "@/components/header"
import { ChatbotPopup } from "@/components/ChatbotPopup"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

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
          <div className="container mx-auto flex w-full justify-between ">
            <SidebarTrigger className="my-auto"/>
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

