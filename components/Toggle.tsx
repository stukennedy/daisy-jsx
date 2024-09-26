import type { BasicProps, ColorTypes, SizeTypes } from "./utils";
import { cn } from "./utils";

type ToggleProps = BasicProps & {
  color?: ColorTypes
  size?: SizeTypes
}

export const Toggle = ({ className, color, size, ...props }: ToggleProps) =>
  <input type="checkbox" className={cn("toggle", className, {
    'toggle-xs': size === 'xs',
    'toggle-sm': size === 'sm',
    'toggle-md': size === 'md',
    'toggle-lg': size === 'lg',
    'toggle-primary': color === 'primary',
    'toggle-secondary': color === 'secondary',
    'toggle-accent': color === 'accent',
    'toggle-info': color === 'info',
    'toggle-success': color === 'success',
    'toggle-warning': color === 'warning',
    'toggle-error': color === 'error',
  })} {...props} />