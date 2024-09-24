import type { FullColorTypes, BasicProps, SizeTypes } from "../types"
import { cn } from "../utils"

type TextInputProps = BasicProps & {
  bordered?: boolean
  color?: FullColorTypes
  size?: SizeTypes
}

export const TextInput = ({ className, bordered, color, size, ...props }: TextInputProps) =>
  <input type="text" className={cn("input", className, {
    'input-xs': size === 'xs',
    'input-sm': size === 'sm',
    'input-md': size === 'md',
    'input-lg': size === 'lg',
    'input-neutral': color === 'neutral',
    'input-primary': color === 'primary',
    'input-secondary': color === 'secondary',
    'input-accent': color === 'accent',
    'input-info': color === 'info',
    'input-success': color === 'success',
    'input-warning': color === 'warning',
    'input-error': color === 'error',
    "input-bordered": bordered,
  })} {...props} />
