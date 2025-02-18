"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"

type Project = {
  id: number
  client_id: number
  contact_id: number
  user_id: number
  description: string
  status: string
  project_type_id: number
}

export function ProjectList() {
  const [projects, setProjects] = useState<Project[]>([])
  const [newProject, setNewProject] = useState<Partial<Project>>({})
  const [projectTypes, setProjectTypes] = useState<{ id: number; name: string }[]>([])
  const supabase = createClientComponentClient()

  useEffect(() => {
    fetchProjects()
    fetchProjectTypes()
  }, [])

  async function fetchProjects() {
    const { data, error } = await supabase.from("projects").select("*")
    if (error) console.error("Error fetching projects:", error)
    else setProjects(data || [])
  }

  async function fetchProjectTypes() {
    const { data, error } = await supabase.from("project_types").select("*")
    if (error) console.error("Error fetching project types:", error)
    else setProjectTypes(data || [])
  }

  async function addProject() {
    const { data, error } = await supabase.from("projects").insert([newProject]).select()
    if (error) console.error("Error adding project:", error)
    else {
      setProjects([...projects, data[0]])
      setNewProject({})
    }
  }

  return (
    <div>
      <div className="mb-4 space-y-2">
        <Input
          placeholder="Description"
          value={newProject.description || ""}
          onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
        />
        <Input
          placeholder="Client ID"
          type="number"
          value={newProject.client_id || ""}
          onChange={(e) => setNewProject({ ...newProject, client_id: Number.parseInt(e.target.value) })}
        />
        <select
          className="w-full p-2 border rounded"
          value={newProject.project_type_id || ""}
          onChange={(e) => setNewProject({ ...newProject, project_type_id: Number.parseInt(e.target.value) })}
        >
          <option value="">Select Project Type</option>
          {projectTypes.map((type) => (
            <option key={type.id} value={type.id}>
              {type.name}
            </option>
          ))}
        </select>
        <Button onClick={addProject}>Add Project</Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Client ID</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Project Type</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {projects.map((project) => (
            <TableRow key={project.id}>
              <TableCell>{project.id}</TableCell>
              <TableCell>{project.description}</TableCell>
              <TableCell>{project.client_id}</TableCell>
              <TableCell>{project.status}</TableCell>
              <TableCell>
                {projectTypes.find((type) => type.id === project.project_type_id)?.name || "Unknown"}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

