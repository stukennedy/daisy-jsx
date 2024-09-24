import { cn } from "../utils"
import type { BasicProps, ColorTypes, SizeTypes } from "../types";

type Props = BasicProps & { size?: SizeTypes; color?: ColorTypes; defaultChecked?: boolean }
export const Radio = ({ className, size, color, defaultChecked, ...props }: Props) =>
  <input type="radio" className={cn("radio", className, {
    'radio-primary': color === 'primary',
    'radio-secondary': color === 'secondary',
    'radio-accent': color === 'accent',
    'radio-info': color === 'info',
    'radio-success': color === 'success',
    'radio-warning': color === 'warning',
    'radio-error': color === 'error',
    'radio-xs': size === 'xs',
    'radio-sm': size === 'sm',
    'radio-md': size === 'md',
    'radio-lg': size === 'lg',
  })} checked={defaultChecked} {...props} />

