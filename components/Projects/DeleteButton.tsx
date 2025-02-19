import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogFooter, DialogTitle } from "@/components/ui/dialog";

interface DeleteButtonProps {
  projectId: number;
  projectTitle: string;
  onDelete: (id: number) => Promise<void>;
}

export default function DeleteButton({ projectId, projectTitle, onDelete }: DeleteButtonProps) {
  const [open, setOpen] = useState(false);

  const handleDelete = async () => {
    await onDelete(projectId);
    setOpen(false);
  };

  return (
    <>
      <Button variant="destructive" onClick={() => setOpen(true)}>
        Delete
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>¿Está seguro que quiere eliminar a {projectTitle.toUpperCase()} del sistema?</DialogTitle>
          </DialogHeader>
          <p className="text-gray-600">Esta acción no se puede deshacer.</p>
          <DialogFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancelar
            </Button>
            <Button variant="destructive" onClick={handleDelete}>
              Eliminar
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
