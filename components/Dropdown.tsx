import { cn } from "daisy-jsx";
import type { Props } from "daisy-jsx";

type DropdownProps = Props & {
  position?: 'end' | 'top' | 'bottom' | 'left' | 'right'
  hover?: boolean
  open?: boolean
}

export const Dropdown = ({ children, className, position, hover, open, ...props }: DropdownProps) =>
  <div className={cn("dropdown", className, {
    'dropdown-end': position === 'end',
    'dropdown-top': position === 'top',
    'dropdown-bottom': position === 'bottom',
    'dropdown-left': position === 'left',
    'dropdown-right': position === 'right',
    'dropdown-hover': hover,
    'dropdown-open': open,
  })} {...props}>
    {children}
  </div>

export const DropdownContent = ({ children, className }: Props) =>
  <div className={cn("dropdown-content", className)}>
      {children}
  </div>