import { cn } from "../utils"
import type { FullColorTypes, Props, SizeTypes } from "../types";

type BadgeProps = Props & {
  color?: FullColorTypes;
  size?: SizeTypes;
  outline?: boolean;
  ghost?: boolean;
}

export const Badge = ({ children, className, color, size, outline, ghost, ...props }: BadgeProps) =>
  <div className={cn("badge", className, {
    'badge-ghost': color === 'ghost',
    'badge-neutral': color === 'neutral',
    'badge-primary': color === 'primary',
    'badge-secondary': color === 'secondary',
    'badge-accent': color === 'accent',
    'badge-info': color === 'info',
    'badge-success': color === 'success',
    'badge-warning': color === 'warning',
    'badge-error': color === 'error',
    'badge-outline': outline,
    'badge-xs': size === 'xs',
    'badge-sm': size === 'sm',
    'badge-md': size === 'md',
    'badge-lg': size === 'lg',
  })} {...props}>
    {children}
  </div>
