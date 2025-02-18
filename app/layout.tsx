import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/Interface/theme-provider";
import { Header } from "@/components/Interface/header";
import { ChatbotPopup } from "@/components/Chatbot/ChatbotPopup";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/Interface/app-sidebar";
import SearchBar from "@/components/Interface/SearchBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portal general - del Castillo & Asociados",
  description: "Gestión de clientes, proyectos y tareas",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
           <div className="min-h-screen bg-background">
              <SidebarProvider>
                <AppSidebar />
                <main className="min-h-[calc(100vh-4rem)] w-full justify-center">
                  <div className="min-w-screen">
                    <div className="container min-h-90 mx-auto flex w-full justify-between space-x-4 border-b">
                      <SidebarTrigger className="my-auto" />
                      <SearchBar />
                      <Header />
                    </div>
                    {children}
                    <ChatbotPopup />
                  </div>
                </main>
              </SidebarProvider>
            </div>
        </ThemeProvider>
      </body>
    </html>
  );
}