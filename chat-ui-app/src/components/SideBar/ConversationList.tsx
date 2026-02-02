import { ConversationItem } from "./ConversationItem"

const conversations = [
  "Explain React hooks",
  "Next.js vs Vite",
  "Design a chat UI",
  "Tailwind spacing tips",
]

export function ConversationList() {
  return (
    <nav className="flex-1 overflow-y-auto px-2">
      <ul className="flex flex-col gap-1">
        {conversations.map((title, i) => (
          <ConversationItem key={i} title={title} active={i === 0} />
        ))}
      </ul>
    </nav>
  )
}
