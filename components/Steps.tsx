import type { ColorTypes, Props } from "daisy-jsx";
import { cn } from "daisy-jsx";

type StepsProps = Props & {
  direction?: "vertical" | "horizontal"
}

export const Steps = ({ className, children, direction = "horizontal", ...props }: StepsProps) => (
  <div className={cn("steps", className, {
    "steps-vertical": direction === "vertical",
    "steps-horizontal": direction === "horizontal",
  })} {...props}>
    {children}
  </div>
)

type StepProps = Props & {
  color?: ColorTypes
}
export const Step = ({ className, children, color, ...props }: StepProps) => (
  <div className={cn("step", className, {
    "step-primary": color === "primary",
    "step-secondary": color === "secondary",
    "step-accent": color === "accent",
    "step-info": color === "info",
    "step-success": color === "success",
    "step-warning": color === "warning",
    "step-error": color === "error",
  })} {...props}>
    {children}
  </div>
)