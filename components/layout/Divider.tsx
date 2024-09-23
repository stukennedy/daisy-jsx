import { cn } from "../utils"
import type { FullColorTypes, OptionalProps } from "../types"

type DividerProps = OptionalProps & {
  color?: Exclude<FullColorTypes, "ghost">
  direction?: "vertical" | "horizontal"
  align?: "start" | "end"
}
export const Divider = ({ className, color, direction = "vertical", align, ...props }: DividerProps) => (
  <div className={cn("divider", className, {
    [`divider-${color}`]: color,
    [`divider-${direction}`]: direction,
    [`divider-${align}`]: align,
  })} {...props} />
)