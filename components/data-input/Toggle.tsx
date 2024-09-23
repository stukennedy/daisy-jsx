import type { BasicProps, ColorTypes, SizeTypes } from "../types"
import { cn } from "../utils"

type ToggleProps = BasicProps & {
  color?: ColorTypes
  size?: SizeTypes
}

export const Toggle = ({ className, color, size, ...props }: ToggleProps) =>
  <input type="checkbox" className={cn("toggle", className, {
    [`toggle-${color}`]: color,
    [`toggle-${size}`]: size,
  })} {...props} />