// components/ClientTable.tsx
import { deleteClient } from "@/actions/clients";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import ClientDialog from "@/components/Clients/ClientDialog"
import DeleteButton from "./DeleteButton";

export default function ClientTable({ clients }: { clients: any[] }) {
    return (
        <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nombre</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Website</TableHead>
            <TableHead>Estado</TableHead>
            <TableHead>Tipo</TableHead>
            <TableHead>Acciones</TableHead>
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
                <DeleteButton clientId={client.id} clientName={client.name} onDelete={deleteClient} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  }