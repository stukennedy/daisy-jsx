import { cn } from "daisy-jsx";
import type { ColorTypes, Props } from "daisy-jsx";

type TooltipProps = Props & {
  text: string
  open?: boolean
  position?: "top" | "bottom" | "left" | "right"
  color?: ColorTypes
}

export const Tooltip = ({ className, children, text, open, position, color, ...props }: TooltipProps) => (
  <div className={cn("tooltip", className, {
    "tooltip-open": open,
    'tooltip-top': position === 'top',
    'tooltip-bottom': position === 'bottom',
    'tooltip-left': position === 'left',
    'tooltip-right': position === 'right',
    'tooltip-primary': color === 'primary',
    'tooltip-secondary': color === 'secondary',
    'tooltip-accent': color === 'accent',
    'tooltip-info': color === 'info',
    'tooltip-success': color === 'success',
    'tooltip-warning': color === 'warning',
    'tooltip-error': color === 'error',
  })} data-tip={text} {...props}>
    {children}
  </div>
)
