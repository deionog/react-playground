// src/hooks/useAutoScroll.ts
import { useEffect, useRef } from "react"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useAutoScroll(deps: any[]) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" })
  }, deps)

  return ref
}
