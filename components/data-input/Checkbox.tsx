import type { ColorTypes, SizeTypes } from "../types"
import { cn } from "../utils"

type CheckboxProps = {
  color?: ColorTypes
  size?: SizeTypes
  className?: string
  checked?: boolean
}

export const Checkbox = ({ className, color, size, checked, ...props }: CheckboxProps) =>
  <input type="checkbox" className={cn("checkbox", className, {
    [`checkbox-${color}`]: color,
    [`checkbox-${size}`]: size,
  })} checked={checked} {...props} />
