// src/components/MessageList.tsx
import type { Message } from "../types";
import { MessageBubble } from "./MessageBubble";
import { useAutoScroll } from "../hooks/useAutoScroll";

export function MessageList({ messages, isStreaming }: { messages: Message[], isStreaming: boolean }) {
  const bottomRef = useAutoScroll([messages]);

  const showCursor = isStreaming && messages[messages.length - 1]?.role === "assistant";

  return (
    <div className="flex-1 w-full overflow-y-auto">
        <div className="mx-auto max-w-3xl px-6 py-10 flex flex-col gap-8">
        {messages.map(m => (
            <MessageBubble key={m.id} message={m} showCursor={showCursor && m.id === messages[messages.length - 1]?.id} />
        ))}
        <div ref={bottomRef} />
        </div>
    </div>
  );
}
