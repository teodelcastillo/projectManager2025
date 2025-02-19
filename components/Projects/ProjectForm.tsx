import { useState } from "react"
import { Project } from "@/app/models"
import { updateProject, addProject } from "@/actions/projects"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "../ui/select"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Label } from "../ui/label"

export default function ProjectForm({ project, closeDialog }: { project?: Project; closeDialog: () => void }) {
  const [title, setTitle] = useState(project?.title || "")
  const [description, setDescription] = useState(project?.description || "")
  const [status, setStatus] = useState(project?.status || "ongoing")
  const [clientId, setClientId] = useState(project?.client_id || "")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const formData = { title, description, status, client_id: clientId } as Project
    if (project) {
      await updateProject({ ...formData, id: project.id })
    } else {
      await addProject(formData)
    }
    closeDialog()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="title">Project title</Label>
        <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      </div>
      <div>
        <Label htmlFor="description">Description</Label>
        <Input id="description" value={description} onChange={(e) => setDescription(e.target.value)} required />
      </div>
      <div>
        <Label htmlFor="status">Status</Label>
        <Select value={status} onValueChange={(value: "ongoing" | "completed") => setStatus(value)}>
          <SelectTrigger>
            <SelectValue placeholder="Select status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="ongoing">Ongoing</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="clientId">Client ID</Label>
        <Input id="clientId" value={clientId} onChange={(e) => setClientId(e.target.value)} required />
      </div>
      <Button type="submit">{project ? "Update" : "Add"} Project</Button>
    </form>
  )
}
