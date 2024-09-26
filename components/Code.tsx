import { cn } from "./utils";
import type { Props } from "./utils";

export const Code = ({ className, children, ...props }: Props) => (
  <div className={cn("mockup-code", className)} {...props}>
    {children}
  </div>
)