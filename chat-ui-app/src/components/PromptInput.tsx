// src/components/PromptInput.tsx
import { useState } from "react";

export function PromptInput({ onSend, disabled,}: {
  onSend: (v: string) => void
  disabled: boolean
}) {
  const [value, setValue] = useState("")

  function handleSubmit() {
    if (!value.trim()) return;
    onSend(value);
    setValue("");
  }

  return (
    <div className="w-full border-t border-zinc-800 bg-zinc-950">
        <div className="mx-auto max-w-3xl px-6 py-4">
            <div className="relative flex items-end gap-2 rounded-xl border border-zinc-700 bg-zinc-900 px-3 py-2">
                <textarea
                    className="flex-1 resize-none bg-transparent text-[15px] leading-relaxed text-zinc-100 placeholder:text-zinc-500 focus:outline-none"
                    rows={1}
                    placeholder="Send a message..."
                    value={value}
                    disabled={disabled}
                    onChange={e => setValue(e.target.value)}
                    onKeyDown={e => {
                    if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault()
                        handleSubmit()
                    }
                    }}
                />

                <button className="mb-1 rounded-md bg-white px-3 py-1.5 text-sm font-medium text-black hover:bg-zinc-200">
                    Send
                </button>
            </div>
            <p className="mt-2 text-xs text-zinc-500">
                ChatterBox can make mistakes. Consider checking important information.
            </p>
        </div>
    </div>
  )
}
