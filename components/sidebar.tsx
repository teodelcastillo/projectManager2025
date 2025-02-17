import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: "📊" },
  { name: "Clients", href: "/dashboard/clients", icon: "👥" },
  { name: "Projects", href: "/dashboard/projects", icon: "📁" },
  { name: "Tasks", href: "/dashboard/tasks", icon: "✓" },
  { name: "Users", href: "/dashboard/users", icon: "👤" },
  { name: "Chatbot", href: "/dashboard/chatbot", icon: "💬" },
  { name: "Settings", href: "/dashboard/settings", icon: "⚙️" },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="fixed inset-y-0 left-0 w-64 bg-card border-r">
      <div className="flex h-16 items-center px-6 border-b">
        <Link href="/dashboard" className="flex items-center space-x-2">
          <span className="text-2xl">⚖️</span>
          <span className="font-semibold text-xl">LawFirm</span>
        </Link>
      </div>
      <nav className="flex flex-col gap-1 p-4">
        {navigation.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={cn(
              "flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
              pathname === item.href
                ? "bg-primary text-primary-foreground"
                : "hover:bg-muted text-muted-foreground hover:text-foreground",
            )}
          >
            <span className="text-xl">{item.icon}</span>
            <span>{item.name}</span>
          </Link>
        ))}
      </nav>
    </div>
  )
}

