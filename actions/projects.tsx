import { createClient } from "@supabase/supabase-js"
import { Project } from "@/app/models"

// Configure Supabase Project
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
const supabase = createClient(supabaseUrl, supabaseAnonKey)


// Fetch all Projects
export async function getProjects(): Promise<Project[]> {
  const { data, error } = await supabase.from("projects").select("*")
  if (error) throw new Error(error.message)
  return data
}

// Add a new Project
export async function addProject(Project: Omit<Project, "id">): Promise<Project> {
  const { data, error } = await supabase.from("projects").insert([Project]).select().single()
  if (error) throw new Error(error.message)
  return data
}

// Update an existing Project
export async function updateProject(Project: Project): Promise<Project> {
  const { data, error } = await supabase.from("projects").update(Project).eq("id", Project.id).select().single()
  if (error) throw new Error(error.message)
  return data
}

// Delete a Project by ID
export async function deleteProject(id: number): Promise<void> {
  const { error } = await supabase.from("projects").delete().eq("id", id)
  if (error) throw new Error(error.message)
}
