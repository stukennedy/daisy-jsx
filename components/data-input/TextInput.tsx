import type { FullColorTypes, BasicProps, SizeTypes } from "../types"
import { cn } from "../utils"

type TextInputProps = BasicProps & {
  bordered?: boolean
  color?: FullColorTypes
  size?: SizeTypes
}

export const TextInput = ({ className, bordered, color, size, ...props }: TextInputProps) =>
  <input type="text" className={cn("input", className, {
    [`input-${color}`]: color,
    [`input-${size}`]: size,
    "input-bordered": bordered,
  })} {...props} />
