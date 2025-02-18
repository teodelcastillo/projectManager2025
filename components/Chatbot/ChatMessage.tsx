import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

type ChatMessageProps = {
  content: string
  isUser: boolean
}

export function ChatMessage({ content, isUser }: ChatMessageProps) {
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-4`}>
      <div className={`flex ${isUser ? "flex-row-reverse" : "flex-row"} items-end`}>
        <Avatar className="w-8 h-8">
          <AvatarImage src={isUser ? "/user-avatar.png" : "/bot-avatar.png"} />
          <AvatarFallback>{isUser ? "U" : "B"}</AvatarFallback>
        </Avatar>
        <div className={`mx-2 py-3 px-4 rounded-lg ${isUser ? "bg-primary text-primary-foreground" : "bg-secondary"}`}>
          {content}
        </div>
      </div>
    </div>
  )
}

