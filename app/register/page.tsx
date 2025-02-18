import { SignUpForm } from "@/components/Auth/SignUpForm"

export default function RegisterPage() {
  return (
    <div className="container mx-auto px-4 py-8 flex justify-center items-center min-h-screen">
      <SignUpForm className="w-full max-w-md" />
    </div>
  )
}

