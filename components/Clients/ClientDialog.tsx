import { Client } from "@/actions/clients"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { useState } from "react"
import { Button } from "../ui/button"
import ClientForm from "./ClientForm"

export default function ClientDialog({ client }: { client?: Client }) {
    const [isOpen, setIsOpen] = useState(false)
  
    return (
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button variant={client ? "outline" : "default"} className={client ? "mr-2" : ""}>
            {client ? "Editar" : "Nuevo Cliente"}
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{client ? "Edit Client" : "Add New Client"}</DialogTitle>
          </DialogHeader>
          <ClientForm client={client} closeDialog={() => setIsOpen(false)} />
        </DialogContent>
      </Dialog>
    )
  }