// components/ClientTable.tsx
import { deleteClient } from "@/actions/clients";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import ClientDialog from "@/components/Clients/ClientDialog"
import { Button } from "../ui/button";

export default function ClientTable({ clients }: { clients: any[] }) {
    return (
        <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Website</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {clients.map((client) => (
            <TableRow key={client.id}>
              <TableCell>{client.name}</TableCell>
              <TableCell>{client.contact_email}</TableCell>
              <TableCell>{client.website}</TableCell>
              <TableCell>{client.status}</TableCell>
              <TableCell>{client.client_type}</TableCell>
              <TableCell>
                <ClientDialog client={client} />
                <form action={deleteClient.bind(null, client.id)} className="inline">
                  <Button variant="destructive" type="submit">
                    Delete
                  </Button>
                </form>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  }