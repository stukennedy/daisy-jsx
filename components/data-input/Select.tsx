import type { FullColorTypes, Props, SizeTypes } from "../types"
import { cn } from "../utils"

type SelectProps = Props & {
  bordered?: boolean
  color?: FullColorTypes;
  size?: SizeTypes
}

export const Select = ({ children, size, color, bordered, className, ...props }: SelectProps) =>
  <select className={cn("select", className, {
    'select-xs': size === 'xs',
    'select-sm': size === 'sm',
    'select-md': size === 'md',
    'select-lg': size === 'lg',
    'select-primary': color === 'primary',
    'select-secondary': color === 'secondary',
    'select-accent': color === 'accent',
    'select-info': color === 'info',
    'select-success': color === 'success',
    'select-warning': color === 'warning',
    'select-error': color === 'error',
    'select-bordered': bordered,
  })} {...props}>
    {children}
  </select>

type OptionProps = Props & {
  disabled?: boolean
  selected?: boolean
}
export const Option = ({ children, value, ...props }: OptionProps) =>
  <option value={value} {...props}>{children}</option>