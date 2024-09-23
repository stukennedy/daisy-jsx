import type { Props } from "../types"
import { cn } from "../utils"

export const Stack = ({ children, className, ...props }: Props) => (
  <div className={cn("stack", className)} {...props}>
    {children}
  </div>
)
