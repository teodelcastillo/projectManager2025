import { Client, updateClient, addClient } from "@/actions/clients";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@radix-ui/react-select";
import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export default function ClientForm({ client, closeDialog }: { client?: Client; closeDialog: () => void }) {
    const [name, setName] = useState(client?.name || "")
    const [email, setEmail] = useState(client?.contact_email || "")
    const [website, setWebsite] = useState(client?.website || "")
    const [status, setStatus] = useState(client?.status || "active")
    const [clientType, setClientType] = useState(client?.client_type || "company")
  
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault()
      const formData = { name, contact_email: email, website, status, client_type: clientType } as Client
      if (client) {
        await updateClient({ ...formData, id: client.id })
      } else {
        await addClient(formData)
      }
      closeDialog()
    }
  
    return (
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input id="name" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <Label htmlFor="website">Website</Label>
          <Input id="website" type="url" value={website} onChange={(e) => setWebsite(e.target.value)} required />
        </div>
        <div>
          <Label htmlFor="status">Status</Label>
          <Select value={status} onValueChange={(value: "active" | "inactive") => setStatus(value)}>
          <SelectTrigger>
              <SelectValue placeholder="Select status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="inactive">Inactive</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="clientType">Client Type</Label>
          <Select value={clientType} onValueChange={(value: "company" | "individual") => setClientType(value)}>
          <SelectTrigger>
              <SelectValue placeholder="Select client type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="individual">Individual</SelectItem>
              <SelectItem value="company">Company</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button type="submit">{client ? "Update" : "Add"} Client</Button>
      </form>
    )
  }