import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Dashboard() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="space-x-4">
        <Button asChild>
          <Link href="/dashboard/tasks">Tasks</Link>
        </Button>
        <Button asChild>
          <Link href="/dashboard/clients">Clients</Link>
        </Button>
        <Button asChild>
          <Link href="/dashboard/projects">Projects</Link>
        </Button>
      </div>
    </div>
  )
}

