import { cn } from "../utils"
import type { BasicProps, ColorTypes, SizeTypes } from "../types";

type Props = BasicProps & { size?: SizeTypes; color?: ColorTypes; defaultChecked?: boolean }
export const Radio = ({ className, size, color, defaultChecked, ...props }: Props) =>
  <input type="radio" className={cn("radio", className, {
    [`radio-${size}`]: size,
    [`radio-${color}`]: color,
  })} checked={defaultChecked} {...props} />

