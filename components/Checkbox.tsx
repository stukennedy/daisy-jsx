import type { ColorTypes, SizeTypes } from "daisy-jsx";
import { cn } from "daisy-jsx";

type CheckboxProps = {
  color?: ColorTypes
  size?: SizeTypes
  className?: string
  checked?: boolean
}

export const Checkbox = ({ className, color, size, checked, ...props }: CheckboxProps) =>
  <input type="checkbox" className={cn("checkbox", {
    'checkbox-primary': color === 'primary',
    'checkbox-secondary': color === 'secondary',
    'checkbox-accent': color === 'accent',
    'checkbox-info': color === 'info',
    'checkbox-success': color === 'success',
    'checkbox-warning': color === 'warning',
    'checkbox-error': color === 'error',
    'checkbox-xs': size === 'xs',
    'checkbox-sm': size === 'sm',
    'checkbox-md': size === 'md',
    'checkbox-lg': size === 'lg',
  }, className)} checked={checked} {...props} />
