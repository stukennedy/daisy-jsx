import { cn } from "./utils";
import type { BasicProps, ColorTypes } from "./utils";

type ProgressProps = BasicProps & {
  value?: number;
  max?: number;
  color?: ColorTypes;
}

export const Progress = ({ value, max, color, className, ...props }: ProgressProps) =>
  <progress className={cn("progress", { 
    'progress-primary': color === 'primary',
    'progress-secondary': color === 'secondary',
    'progress-accent': color === 'accent',
    'progress-info': color === 'info',
    'progress-success': color === 'success',
    'progress-warning': color === 'warning',
    'progress-error': color === 'error',
  }, className)} value={value} max={max} {...props} />