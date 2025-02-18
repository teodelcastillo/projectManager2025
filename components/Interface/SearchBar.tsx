import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

const SearchBar = () => {
  return (
    <div className="flex flex-1 my-auto">
    <div className="w-full">
      <div className="relative">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input type="search" placeholder="Search..." className="w-full bg-background pl-8 " />
      </div>
    </div>
  </div>
  )
}

export default SearchBar