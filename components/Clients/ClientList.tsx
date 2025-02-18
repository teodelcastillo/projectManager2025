"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"

type Client = {
  id: number
  name: string
  contact_email: string
  website: string
  status: string
  client_type: "company" | "individual"
}

export function ClientList() {
  const [clients, setClients] = useState<Client[]>([])
  const [newClient, setNewClient] = useState<Partial<Client>>({})
  const supabase = createClientComponentClient()

  useEffect(() => {
    fetchClients()
  }, [])

  async function fetchClients() {
    const { data, error } = await supabase.from("clients").select("*")
    if (error) console.error("Error fetching clients:", error)
    else setClients(data || [])
  }

  async function addClient() {
    const { data, error } = await supabase.from("clients").insert([newClient]).select()
    if (error) console.error("Error adding client:", error)
    else {
      setClients([...clients, data[0]])
      setNewClient({})
    }
  }

  return (
    <div>
      <div className="mb-4 space-y-2">
        <Input
          placeholder="Name"
          value={newClient.name || ""}
          onChange={(e) => setNewClient({ ...newClient, name: e.target.value })}
        />
        <Input
          placeholder="Email"
          value={newClient.contact_email || ""}
          onChange={(e) => setNewClient({ ...newClient, contact_email: e.target.value })}
        />
        <Input
          placeholder="Website"
          value={newClient.website || ""}
          onChange={(e) => setNewClient({ ...newClient, website: e.target.value })}
        />
        <select
          className="w-full p-2 border rounded"
          value={newClient.client_type || ""}
          onChange={(e) => setNewClient({ ...newClient, client_type: e.target.value as "company" | "individual" })}
        >
          <option value="">Select Type</option>
          <option value="company">Company</option>
          <option value="individual">Individual</option>
        </select>
        <Button onClick={addClient}>Add Client</Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Website</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {clients.map((client) => (
            <TableRow key={client.id}>
              <TableCell>{client.name}</TableCell>
              <TableCell>{client.contact_email}</TableCell>
              <TableCell>{client.website}</TableCell>
              <TableCell>{client.client_type}</TableCell>
              <TableCell>{client.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

