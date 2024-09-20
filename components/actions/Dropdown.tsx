import { cn } from "../utils"
import type { Props } from "../types";

type DropdownProps = Props & {
  position?: 'end' | 'top' | 'bottom' | 'left' | 'right'
  hover?: boolean
  open?: boolean
}

export const Dropdown = ({ children, className, position, hover, open, ...props }: DropdownProps) =>
  <div className={cn("dropdown", className, {
    [`dropdown-${position}`]: position,
    'dropdown-hover': hover,
    'dropdown-open': open,
  })} {...props}>
    {children}
  </div>

export const DropdownContent = ({ children, className }: Props) =>
  <div className={cn("dropdown-content", className)}>
      {children}
  </div>