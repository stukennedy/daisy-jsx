import type { Props } from "../types"
import { cn } from "../utils"

type IndicatorProps = Props & {
  position?: "start" | "center" | "end"
  vertical?: "top" | "middle" | "bottom"
}

  export const Indicator = ({ children, className, ...props }: IndicatorProps) => (
  <div className={cn("indicator", className)} {...props}>
    {children}
  </div>
)

export const IndicatorItem = ({ children, className, position, vertical, ...props }: Props) => (
  <div className={cn("indicator-item", className, {
    [`indicator-${position}`]: position,
    [`indicator-${vertical}`]: vertical
  })} {...props}>
    {children}
  </div>
)