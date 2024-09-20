import { cn } from "../utils"

type FileInputProps = {
  color?: string
  size?: string
  bordered?: boolean
  className?: string
}

export const FileInput = ({ className, color, size, bordered, ...props }: FileInputProps) =>
  <input type="file" className={cn("file-input", className, {
    [`checkbox-${color}`]: color,
    [`checkbox-${size}`]: size,
    "file-input-bordered": bordered,
  })} {...props} />
