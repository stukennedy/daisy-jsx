import type { Props } from "daisy-jsx";
import { cn } from "daisy-jsx";

export const Stack = ({ children, className, ...props }: Props) => (
  <div className={cn("stack", className)} {...props}>
    {children}
  </div>
)
