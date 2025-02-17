"use client"

import { ClientList } from "@/components/ClientList"

export default function ClientsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Clients</h1>
      <ClientList />
    </div>
  )
}

