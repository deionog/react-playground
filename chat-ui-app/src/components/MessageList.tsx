// src/components/MessageList.tsx
import type { UIDataTypes, UIMessage, UITools } from "ai";
import { MessageBubble } from "./MessageBubble";
//import { useAutoScroll } from "../hooks/useAutoScroll";

export function MessageList({ messages }: {
  messages: UIMessage<unknown, UIDataTypes, UITools>[],
}) {
  //const bottomRef = useAutoScroll(messages);
  // const showCursor = isStreaming && messages[messages.length - 1]?.role === "assistant";

  return (
    <div className="flex-1 w-full overflow-y-auto">
        <div className="mx-auto max-w-3xl px-6 py-10 flex flex-col gap-8">
        {messages.map(m => (
            <MessageBubble key={m.id} message={m} />
        ))}
        {/*<div ref={bottomRef} />*/}
        </div>
    </div>
  );
}
