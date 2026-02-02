import clsx from "clsx"

export function ConversationItem({
  title,
  active,
}: {
  title: string
  active?: boolean
}) {
  return (
    <li>
      <button
        className={clsx(
          "w-full truncate rounded-md px-3 py-2 text-sm text-left transition",
          active
            ? "bg-zinc-800"
            : "hover:bg-zinc-800 text-zinc-300"
        )}
      >
        {title}
      </button>
    </li>
  )
}
