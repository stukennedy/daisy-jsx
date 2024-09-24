import { cn } from "../utils"
import type { Props } from "../types"

export const Countdown = ({ children, className, ...props }: Props) =>
  <div className={cn("countdown", className)} {...props}>
    {children}
  </div>