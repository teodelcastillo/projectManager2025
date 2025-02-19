// components/Projectsection.tsx
"use client";

import { getProjects } from "@/actions/projects";
import ProjectView from "@/components/Projects/ProjectView"

export default async function Projectsection() {
  const Projects = await getProjects()

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-5">Causas </h1>
      <ProjectView Projects={Projects} />
    </div>
  );
}