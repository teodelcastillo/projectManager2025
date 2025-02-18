// components/ClientView.tsx
import { useState } from "react";
import ClientTable from "./ClientTable";
import ClientCardView from "./ClientCardView";
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group";
import { List, LayoutGrid } from "lucide-react";
import ClientDialog from "./ClientDialog"
import { Client } from "@/actions/clients";

export default function ClientView({ clients }: { clients: Client[] }) {
    const [view, setView] = useState<"table" | "card">("table")
  
    return (
      <>
        <div className="flex justify-between items-center mb-5">
          <ClientDialog />
          <ToggleGroup type="single" value={view} onValueChange={(value) => setView(value as "table" | "card")}>
            <ToggleGroupItem value="table" aria-label="Table view">
              <List className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="card" aria-label="Card view">
              <LayoutGrid className="h-4 w-4" />
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
        {view === "table" ? <ClientTable clients={clients} /> : <ClientCardView clients={clients} />}
      </>
    )
  }