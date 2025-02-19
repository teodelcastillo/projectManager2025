import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Client } from "@/app/models"
import { getClients, addClient } from "@/actions/clients"

export function ClientList() {
  const [clients, setClients] = useState<Client[]>([])
  const [newClient, setNewClient] = useState<Partial<Client>>({
    name: "",
    contact_email: "",
    website: "",
    client_type: "company",
  })

  useEffect(() => {
    async function fetchClients() {
      const data = await getClients()
      setClients(data)
    }
    fetchClients()
  }, [])

  const handleAddClient = async () => {
    if (!newClient.name || !newClient.contact_email) return
    const addedClient = await addClient(newClient as Client)
    setClients((prev) => [...prev, addedClient]) // Update list after adding
    setNewClient({ name: "", contact_email: "", website: "", client_type: "company" }) // Reset form
  }

  return (
    <div>
      <div className="mb-4 space-y-2">
        <Input
          placeholder="Name"
          value={newClient.name}
          onChange={(e) => setNewClient({ ...newClient, name: e.target.value })}
        />
        <Input
          placeholder="Email"
          type="email"
          value={newClient.contact_email}
          onChange={(e) => setNewClient({ ...newClient, contact_email: e.target.value })}
        />
        <Input
          placeholder="Website"
          type="url"
          value={newClient.website}
          onChange={(e) => setNewClient({ ...newClient, website: e.target.value })}
        />
        <select
          className="w-full p-2 border rounded"
          value={newClient.client_type}
          onChange={(e) => setNewClient({ ...newClient, client_type: e.target.value as "company" | "individual" })}
        >
          <option value="company">Company</option>
          <option value="individual">Individual</option>
        </select>
        <Button onClick={handleAddClient}>Add Client</Button>
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
          {clients.length > 0 ? (
            clients.map((client) => (
              <TableRow key={client.id}>
                <TableCell>{client.name}</TableCell>
                <TableCell>{client.contact_email}</TableCell>
                <TableCell>{client.website}</TableCell>
                <TableCell>{client.client_type}</TableCell>
                <TableCell>{client.status}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={5} className="text-center">
                No clients found
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  )
}
