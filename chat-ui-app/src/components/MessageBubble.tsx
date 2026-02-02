// src/components/MessageBubble.tsx
import ReactMarkdown from "react-markdown";
import type { Message } from "../types";
import clsx from "clsx";

export function MessageBubble({ message, showCursor }: { message: Message, showCursor?: boolean }) {
  const isUser = message.role === "user";

  return (
    <div
      className={clsx(
        "flex w-full",
        isUser ? "justify-end" : "justify-start"
      )}
    >
        <div
        className={clsx(
          "max-w-[75%] whitespace-pre-wrap leading-relaxed text-[15px]",
          isUser
            ? "rounded-xl bg-zinc-800 px-4 py-2"
            : "text-zinc-100"
        )}
      >
        <ReactMarkdown>
            {message.content}
        </ReactMarkdown>
        {showCursor && <span className="inline-block animate-pulse">▍</span>}
      </div>
    </div>
  );
}
