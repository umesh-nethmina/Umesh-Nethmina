import * as React from "react"
import { cn } from "@/lib/utils"

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-3xl border border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)] shadow-sm backdrop-blur-xl",
      className,
    )}
    {...props}
  />
))
Card.displayName = "Card"

export { Card }
