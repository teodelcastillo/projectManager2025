import { Client } from "@/actions/clients"
import { Dialog, DialogTrigger, DialogContent, DialogTitle } from "@radix-ui/react-dialog"
import { useState } from "react"
import { Button } from "../ui/button"
import { DialogHeader } from "../ui/dialog"
import ClientForm from "./ClientForm"

export default function ClientDialog({ client }: { client?: Client }) {
    const [isOpen, setIsOpen] = useState(false)
  
    return (
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button variant={client ? "outline" : "default"} className={client ? "mr-2" : "mb-5"}>
            {client ? "Edit" : "Add New Client"}
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{client ? "Editar Cliente" : "Nuevo Cliente"}</DialogTitle>
          </DialogHeader>
          <ClientForm client={client} closeDialog={() => setIsOpen(false)} />
        </DialogContent>
      </Dialog>
    )
  }