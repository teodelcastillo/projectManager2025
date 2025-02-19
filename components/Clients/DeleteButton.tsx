import { Button } from "@/components/ui/button";

interface DeleteButtonProps {
    clientId: number; // Cambiar de string a number
    clientName: string;
    onDelete: (id: number) => Promise<void>; // Mantener el tipo correcto de la función
  }
  
  export default function DeleteButton({ clientId, clientName, onDelete }: DeleteButtonProps) {
    const handleDelete = async (event: React.FormEvent) => {
      event.preventDefault(); // Evita la recarga del formulario
  
      const isConfirmed = window.confirm(`¿Está seguro que desea eliminar a ${clientName.toUpperCase()} del sistema?`);
      if (isConfirmed) {
        await onDelete(clientId); // Llamar la función correctamente
      }
    };
  
    return (
      <form onSubmit={handleDelete} className="inline">
        <Button variant="destructive" type="submit">
          Delete
        </Button>
      </form>
    );
  }
  