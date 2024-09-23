import type { FullColorTypes, Props, SizeTypes } from "../types"
import { cn } from "../utils"

type SelectProps = Props & {
  bordered?: boolean
  color?: FullColorTypes;
  size?: SizeTypes
}

export const Select = ({ children, size, color, bordered, className, ...props }: SelectProps) =>
  <select className={cn("select", className, {
    [`select-${size}`]: size,
    [`select-${color}`]: color,
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