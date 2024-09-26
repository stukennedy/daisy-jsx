import { cn } from "daisy-jsx";
import type { FullColorTypes, OptionalProps } from "daisy-jsx";

type DividerProps = OptionalProps & {
  color?: Exclude<FullColorTypes, "ghost">
  direction?: "vertical" | "horizontal"
  align?: "start" | "end"
}
export const Divider = ({ className, color, direction = "vertical", align, ...props }: DividerProps) => (
  <div className={cn("divider", className, {
    'divider-primary': color === 'primary',
    'divider-secondary': color === 'secondary',
    'divider-accent': color === 'accent',
    'divider-info': color === 'info',
    'divider-success': color === 'success',
    'divider-warning': color === 'warning',
    'divider-error': color === 'error',
    'divider-neutral': color === 'neutral',
    'divider-vertical': direction === 'vertical',
    'divider-horizontal': direction === 'horizontal',
    'divider-start': align === 'start',
    'divider-end': align === 'end',
  })} {...props} />
)