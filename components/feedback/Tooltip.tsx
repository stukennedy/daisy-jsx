import { cn } from "../utils"
import type { ColorTypes, Props } from "../types"

type TooltipProps = Props & {
  text: string
  open?: boolean
  position?: "top" | "bottom" | "left" | "right"
  color?: ColorTypes
}

export const Tooltip = ({ className, children, text, open, position, color, ...props }: TooltipProps) => (
  <div className={cn("tooltip", className, {
    "tooltip-open": open,
    [`tooltip-${position}`]: position,
    [`tooltip-${color}`]: color,
  })} data-tip={text} {...props}>
    {children}
  </div>
)
