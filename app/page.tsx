import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">del Castillo & Asociados</h1>
      <div className="space-x-4">
        <Button asChild>
          <Link href="/login">Iniciá sesión</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/register">Registrarse</Link>
        </Button>
      </div>
    </div>
  )
}

