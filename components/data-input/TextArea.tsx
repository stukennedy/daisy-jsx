import type { BasicProps, FullColorTypes, SizeTypes } from "../types"
import { cn } from "../utils"

type TextAreaProps = BasicProps & {
  bordered?: boolean
  color?: FullColorTypes
  size?: SizeTypes
}

export const TextArea = ({ className, bordered, color, size, ...props }: TextAreaProps) =>
  <textarea className={cn("textarea", className, {
    'textarea-xs': size === 'xs',
    'textarea-sm': size === 'sm',
    'textarea-md': size === 'md',
    'textarea-lg': size === 'lg',
    'textarea-primary': color === 'primary',
    'textarea-secondary': color === 'secondary',
    'textarea-accent': color === 'accent',
    'textarea-info': color === 'info',
    'textarea-success': color === 'success',
    'textarea-warning': color === 'warning',
    'textarea-error': color === 'error',
    "textarea-bordered": bordered,
  })} {...props} />