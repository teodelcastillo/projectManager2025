"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"

type Task = {
  id: number
  project_id: number
  creator_id: number
  responsible_id: number
  sub_responsible_id: number | null
  description: string
  status: string
  deadline: string
}

export function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [newTask, setNewTask] = useState<Partial<Task>>({})
  const supabase = createClientComponentClient()

  useEffect(() => {
    fetchTasks()
  }, [])

  async function fetchTasks() {
    const { data, error } = await supabase.from("tasks").select("*")
    if (error) console.error("Error fetching tasks:", error)
    else setTasks(data || [])
  }

  async function addTask() {
    const { data, error } = await supabase.from("tasks").insert([newTask]).select()
    if (error) console.error("Error adding task:", error)
    else {
      setTasks([...tasks, data[0]])
      setNewTask({})
    }
  }

  return (
    <div>
      <div className="mb-4 space-y-2">
        <Input
          placeholder="Description"
          value={newTask.description || ""}
          onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
        />
        <Input
          placeholder="Project ID"
          type="number"
          value={newTask.project_id || ""}
          onChange={(e) => setNewTask({ ...newTask, project_id: Number.parseInt(e.target.value) })}
        />
        <Input
          placeholder="Responsible ID"
          type="number"
          value={newTask.responsible_id || ""}
          onChange={(e) => setNewTask({ ...newTask, responsible_id: Number.parseInt(e.target.value) })}
        />
        <Input
          placeholder="Deadline (YYYY-MM-DD)"
          type="date"
          value={newTask.deadline || ""}
          onChange={(e) => setNewTask({ ...newTask, deadline: e.target.value })}
        />
        <Button onClick={addTask}>Add Task</Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Project ID</TableHead>
            <TableHead>Responsible ID</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Deadline</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tasks.map((task) => (
            <TableRow key={task.id}>
              <TableCell>{task.id}</TableCell>
              <TableCell>{task.description}</TableCell>
              <TableCell>{task.project_id}</TableCell>
              <TableCell>{task.responsible_id}</TableCell>
              <TableCell>{task.status}</TableCell>
              <TableCell>{task.deadline}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

