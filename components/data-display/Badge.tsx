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
    [`badge-${color}`]: color,
    'badge-outline': outline,
    [`badge-${size}`]: size,
  })} {...props}>
    {children}
  </div>
