// src/hooks/useChat.ts
import { useState } from "react"
import type { Message } from "../types"
import { mockStream } from "../mock/stream"

export function useChat() {
  const [messages, setMessages] = useState<Message[]>([])
  const [isStreaming, setIsStreaming] = useState(false)

  function sendMessage(input: string) {
    const userMessage: Message = {
      id: crypto.randomUUID(),
      role: "user",
      content: input,
    }

    const assistantMessage: Message = {
      id: crypto.randomUUID(),
      role: "assistant",
      content: "",
    }

    setMessages(prev => [...prev, userMessage, assistantMessage])
    setIsStreaming(true)

    mockStream(
      "This is a streamed assistant response. It appears token by token, just like ChatGPT.",
      chunk => {
        setMessages(prev =>
          prev.map(m =>
            m.id === assistantMessage.id
              ? { ...m, content: m.content + chunk }
              : m
          )
        )
      },
      () => setIsStreaming(false)
    )
  }

  return { messages, sendMessage, isStreaming }
}
