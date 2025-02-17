"use client"

import { ProjectList } from "@/components/ProjectList"

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Projects</h1>
      <ProjectList />
    </div>
  )
}

