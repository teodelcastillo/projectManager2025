import { deleteClient } from "@/actions/clients";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../ui/card";
import ClientDialog from "./ClientDialog";
import { Client } from "@/actions/clients";

// components/ClientCardView.tsx
export default function ClientCardView({ clients }: { clients: Client[] }) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {clients.map((client) => (
          <Card key={client.id}>
            <CardHeader>
              <CardTitle>{client.name}</CardTitle>
              <CardDescription>{client.contact_email}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                <strong>Website:</strong>{" "}
                <a
                  href={client.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  {client.website}
                </a>
              </p>
              <div className="mt-2">
                <Badge variant={client.status === "active" ? "default" : "secondary"}>{client.status}</Badge>
                <Badge variant="outline" className="ml-2">
                  {client.client_type}
                </Badge>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <ClientDialog client={client} />
              <form action={deleteClient.bind(null, client.id)}>
                <Button variant="destructive" type="submit">
                  Delete
                </Button>
              </form>
            </CardFooter>
          </Card>
        ))}
      </div>
    )
  }