import type { BasicProps, FullColorTypes, SizeTypes } from "../types"
import { cn } from "../utils"

type TextAreaProps = BasicProps & {
  bordered?: boolean
  color?: FullColorTypes
  size?: SizeTypes
}

export const TextArea = ({ className, bordered, color, size, ...props }: TextAreaProps) =>
  <textarea className={cn("textarea", className, {
    [`textarea-${color}`]: color,
    [`textarea-${size}`]: size,
    "textarea-bordered": bordered,
  })} {...props} />