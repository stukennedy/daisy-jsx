import { cn } from "daisy-jsx";
import type { Props } from "daisy-jsx";

export const Window = ({ className, children, ...props }: Props) => (
  <div className={cn("mockup-window", className)} {...props}>
    {children}
  </div>
)