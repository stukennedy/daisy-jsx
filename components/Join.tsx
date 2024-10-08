import type { Props } from "daisy-jsx";
import { cn } from "daisy-jsx";

type JoinProps = Props & {
  direction?: "vertical" | "horizontal"
}
export const Join = ({ className, children, direction = "horizontal", ...props }: JoinProps) => (
  <div className={cn("join", className, {
    "join-vertical": direction === "vertical",
    "join-horizontal": direction === "horizontal",
  })} {...props}>
    {children}
  </div>
)

export const JoinItem = ({ className, children, ...props }: Props) => (
  <div className={cn("join-item", className)} {...props}>
    {children}
  </div>
)