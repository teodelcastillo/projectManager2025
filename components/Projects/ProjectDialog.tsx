import { Project } from "@/app/models"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { useState } from "react"
import { Button } from "../ui/button"
import ProjectForm from "./ProjectForm"

export default function ProjectDialog({ project }: { project?: Project }) {
    const [isOpen, setIsOpen] = useState(false)
  
    return (
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button variant={project ? "outline" : "default"} className={project ? "mr-2" : ""}>
            {project ? "Editar" : "Nuevo Projecte"}
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{project ? "Edit Project" : "Add New Project"}</DialogTitle>
          </DialogHeader>
          <ProjectForm project={project} closeDialog={() => setIsOpen(false)} />
        </DialogContent>
      </Dialog>
    )
  }