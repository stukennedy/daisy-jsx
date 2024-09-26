import type { FullColorTypes, SizeTypes } from "./utils";
import { cn } from "./utils";

type FileInputProps = {
  color?: FullColorTypes
  size?: SizeTypes
  bordered?: boolean
  className?: string
}

export const FileInput = ({ className, color, size, bordered, ...props }: FileInputProps) =>
  <input type="file" className={cn("file-input", className, {
    'file-input-neutral': color === 'neutral',
    'file-input-ghost': color === 'ghost',
    'file-input-primary': color === 'primary',
    'file-input-secondary': color === 'secondary',
    'file-input-accent': color === 'accent',
    'file-input-info': color === 'info',
    'file-input-success': color === 'success',
    'file-input-warning': color === 'warning',
    'file-input-error': color === 'error',
    'file-input-xs': size === 'xs',
    'file-input-sm': size === 'sm',
    'file-input-md': size === 'md',
    'file-input-lg': size === 'lg',
    "file-input-bordered": bordered,
  })} {...props} />
