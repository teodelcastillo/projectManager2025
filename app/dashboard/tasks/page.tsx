import { TaskList } from "@/components/TaskList"

export default function TasksPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Tasks</h1>
      <TaskList />
    </div>
  )
}

