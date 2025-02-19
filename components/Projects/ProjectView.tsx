// components/ProjectView.tsx
import { useState, useEffect } from "react";
import ProjectTable from "././ProjectTable";
import ProjectCardView from "./ProjectCardView";
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group";
import { List, LayoutGrid } from "lucide-react";
import ProjectDialog from "./ProjectDialog";
import { Project } from "@/app/models";

export default function ProjectView({ Projects }: { Projects: Project[] }) {
  const [view, setView] = useState<"table" | "card">("table");

  // Load view from localStorage on mount
  useEffect(() => {
    const storedView = localStorage.getItem("view");
    if (storedView === "table" || storedView === "card") {
      setView(storedView);
    }
  }, []);

  return (
    <>
      <div className="flex justify-between items-center mb-5">
        <ProjectDialog />
        <ToggleGroup
          type="single"
          value={view}
          onValueChange={(value) => {
            if (!value) return; // Avoid setting undefined
            setView(value as "table" | "card");
            localStorage.setItem("view", value as "table" | "card");
          }}
        >
          <ToggleGroupItem value="table" aria-label="Table view">
            <List className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="card" aria-label="Card view">
            <LayoutGrid className="h-4 w-4" />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
      {view === "table" ? (
        <ProjectTable Projects={Projects} />
      ) : (
        <ProjectCardView Projects={Projects} />
      )}
    </>
  );
}
