import { cn } from "../utils"
import type { Props } from "../types"

export const Window = ({ className, children, ...props }: Props) => (
  <div className={cn("mockup-window", className)} {...props}>
    {children}
  </div>
)