// src/components/MessageBubble.tsx
// import ReactMarkdown from "react-markdown";
import clsx from "clsx";
import type { UIDataTypes, UIMessage, UITools } from "ai";

export function MessageBubble({ message }: { message: UIMessage<unknown, UIDataTypes, UITools> }) {
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
        {message.parts.map((part, i) => {
            switch (part.type) {
              case 'text':
                return <div key={`${message.id}-${i}`}>{part.text}</div>;
            }
          })}
        {/*showCursor && <span className="inline-block animate-pulse">▍</span>*/}
      </div>
    </div>
  );
}
