import { cn } from "../utils"
import type { Props } from "../types"

export const Phone = ({ className, children, ...props }: Props) => (
  <div className={cn("mockup-phone", className)} {...props}>
    <div className="camera" />
    <div className="display">
    {children}
    </div>
  </div>
)