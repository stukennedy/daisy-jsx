import { cn } from "../utils"
import type { BasicProps, ColorTypes, SizeTypes } from "../types";

type Props = BasicProps & { size?: SizeTypes; color?: ColorTypes; defaultChecked?: boolean }
export const RangeSlider = ({ className, size, color, defaultChecked, ...props }: Props) =>
  <input type="range" className={cn("range", className, {
    [`range-${size}`]: size,
    [`range-${color}`]: color,
  })} checked={defaultChecked} {...props} />

