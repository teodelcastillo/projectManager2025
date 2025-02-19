import { deleteProject } from "@/actions/projects";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../ui/card";
import ProjectDialog from "./ProjectDialog";
import { Project } from "@/app/models";

// components/ProjectCardView.tsx
export default function ProjectCardView({ Projects }: { Projects: Project[] }) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Projects.map((Project) => (
          <Card key={Project.id}>
            <CardHeader>
              <CardTitle>{Project.title}</CardTitle>
              <CardDescription>{Project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                <strong>Cliente</strong>{" "}
                {Project.client_id}
              </p>
              <div className="mt-2">
                <Badge variant={Project.status === "active" ? "default" : "secondary"}>{Project.status}</Badge>
                <Badge variant="outline" className="ml-2">
                  {Project.description}
                </Badge>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <ProjectDialog project={Project} />
              <form action={deleteProject.bind(null, Project.id)}>
                <Button variant="destructive" type="submit">
                  Eliminar
                </Button>
              </form>
            </CardFooter>
          </Card>
        ))}
      </div>
    )
  }