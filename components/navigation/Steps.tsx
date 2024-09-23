import type { ColorTypes, Props } from "../types"
import { cn } from "../utils"

type StepsProps = Props & {
  direction?: "vertical" | "horizontal"
}

export const Steps = ({ className, children, direction = "horizontal", ...props }: StepsProps) => (
  <div className={cn("steps", className, {
    [`steps-${direction}`]: direction,
  })} {...props}>
    {children}
  </div>
)

type StepProps = Props & {
  color?: ColorTypes
}
export const Step = ({ className, children, color, ...props }: StepProps) => (
  <div className={cn("step", className, {
    [`step-${color}`]: color,
  })} {...props}>
    {children}
  </div>
)