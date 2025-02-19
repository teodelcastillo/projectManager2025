import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { getProjects, addProject } from "@/actions/projects"
import { Project } from "@/app/models"

export function ProjectList() {
  const [projects, setProjects] = useState<Project[]>([])
  const [newProject, setNewProject] = useState<Partial<Project>>({
    description: "",
    status: "Pending",
  })

  useEffect(() => {
    async function loadProjects() {
      const data = await getProjects()
      setProjects(data)
    }
    loadProjects()
  }, [])

  async function handleAddProject() {
    if (!newProject.description) return // Prevent empty descriptions

    try {
      const addedProject = await addProject(newProject as Project)
      if (addedProject) {
        setProjects((prev) => [...prev, addedProject])
        setNewProject({ description: "", status: "Pending" }) // Reset form
      }
    } catch (error) {
      console.error("Failed to add project:", error)
    }
  }

  return (
    <div>
      <div className="mb-4 space-y-2">
        <Input
          placeholder="Description"
          value={newProject.description}
          onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
        />
        <Input
          placeholder="Status"
          value={newProject.status}
          onChange={(e) => setNewProject({ ...newProject, status: e.target.value })}
        />
        <Button onClick={handleAddProject}>Add Project</Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {projects.length > 0 ? (
            projects.map((project) => (
              <TableRow key={project.id}>
                <TableCell>{project.id}</TableCell>
                <TableCell>{project.description}</TableCell>
                <TableCell>{project.status}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={3} className="text-center">
                No projects found
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  )
}
