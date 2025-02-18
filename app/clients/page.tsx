// components/ClientSection.tsx
"use client";

import { getClients } from "@/actions/clients";
import ClientView from "@/components/Clients/ClientView"

export default async function ClientSection() {
  const clients = await getClients()

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-5">Clientes</h1>
      <ClientView clients={clients} />
    </div>
  );
}