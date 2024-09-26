import { cn } from "daisy-jsx";
import type { Props } from "daisy-jsx";

export const Code = ({ className, children, ...props }: Props) => (
  <div className={cn("mockup-code", className)} {...props}>
    {children}
  </div>
)