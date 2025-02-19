import { createClient } from "@supabase/supabase-js"
import { Client } from "@/app/models"

// Configure Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
const supabase = createClient(supabaseUrl, supabaseAnonKey)


// Fetch all clients
export async function getClients(): Promise<Client[]> {
  const { data, error } = await supabase.from("clients").select("*")
  if (error) throw new Error(error.message)
  return data
}

// Add a new client
export async function addClient(client: Omit<Client, "id">): Promise<Client> {
  const { data, error } = await supabase.from("clients").insert([client]).select().single()
  if (error) throw new Error(error.message)
  return data
}

// Update an existing client
export async function updateClient(client: Client): Promise<Client> {
  const { data, error } = await supabase.from("clients").update(client).eq("id", client.id).select().single()
  if (error) throw new Error(error.message)
  return data
}

// Delete a client by ID
export async function deleteClient(id: number): Promise<void> {
  const { error } = await supabase.from("clients").delete().eq("id", id)
  if (error) throw new Error(error.message)
}
