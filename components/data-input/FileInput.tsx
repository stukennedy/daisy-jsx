import type { FullColorTypes, SizeTypes } from "../types"
import { cn } from "../utils"

type FileInputProps = {
  color?: FullColorTypes
  size?: SizeTypes
  bordered?: boolean
  className?: string
}

export const FileInput = ({ className, color, size, bordered, ...props }: FileInputProps) =>
  <input type="file" className={cn("file-input", className, {
    [`checkbox-${color}`]: color,
    [`checkbox-${size}`]: size,
    "file-input-bordered": bordered,
  })} {...props} />
