import type { Props } from "./utils";
import { cn } from "./utils";

export const Stack = ({ children, className, ...props }: Props) => (
  <div className={cn("stack", className)} {...props}>
    {children}
  </div>
)
