// components/ProjectTable.tsx
import { deleteProject } from "@/actions/projects";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import ProjectDialog from "@/components/Projects/ProjectDialog"
import DeleteButton from "../Projects/DeleteButton";

export default function ProjectTable({ Projects }: { Projects: any[] }) {
    return (
        <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Titulo</TableHead>
            <TableHead>Cliente</TableHead>
            <TableHead>Responsable</TableHead>
            <TableHead>Descripcion</TableHead>
            <TableHead>Tipo</TableHead>
            <TableHead>Estado</TableHead>
            <TableHead>Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Projects.map((Project) => (
            <TableRow key={Project.id}>
              <TableCell>{Project.title}</TableCell>
              <TableCell>{Project.client}</TableCell>
              <TableCell>{Project.user}</TableCell>
              <TableCell>{Project.description}</TableCell>
              <TableCell>{Project.project_type}</TableCell>
              <TableCell>{Project.status}</TableCell>
              <TableCell>
                <ProjectDialog project={Project} />
                <DeleteButton projectId={Project.id} projectTitle={Project.title} onDelete={deleteProject} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  }