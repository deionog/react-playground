// src/components/ChatLayout.tsx
import { MessageList } from "./MessageList"
import { PromptInput } from "./PromptInput"
import { useChat } from "../hooks/useChat"
import { ChatHeader } from "./ChatHeader"
import { Sidebar } from "./SideBar/SideBar"

export function ChatLayout() {
  const { messages, sendMessage, isStreaming } = useChat()

  return (
    <div className="flex h-screen bg-zinc-950 text-white">
      {/*<div className="hidden md:block w-65" />*/}
        <Sidebar />
      <main className="flex flex-col flex-1">
        <ChatHeader />
        <MessageList messages={messages} isStreaming={isStreaming} />
        <PromptInput onSend={sendMessage} disabled={isStreaming} />
      </main>
      {/* Right gutter */}
      <div className="hidden lg:block w-15" />
    </div>
  )
}
