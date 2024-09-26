import { cn } from "./utils";
import type { BasicProps, ColorTypes, SizeTypes } from "./utils";

type Props = BasicProps & { size?: SizeTypes; color?: ColorTypes; defaultChecked?: boolean }
export const RangeSlider = ({ className, size, color, defaultChecked, ...props }: Props) =>
  <input type="range" className={cn("range", className, {
    'range-primary': color === 'primary',
    'range-secondary': color === 'secondary',
    'range-accent': color === 'accent',
    'range-info': color === 'info',
    'range-success': color === 'success',
    'range-warning': color === 'warning',
    'range-error': color === 'error',
    'range-xs': size === 'xs',
    'range-sm': size === 'sm',
    'range-md': size === 'md',
    'range-lg': size === 'lg',
  })} checked={defaultChecked} {...props} />

