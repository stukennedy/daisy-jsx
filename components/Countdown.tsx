import { cn } from "daisy-jsx";
import type { Props } from "daisy-jsx";

export const Countdown = ({ children, className, ...props }: Props) =>
  <div className={cn("countdown", className)} {...props}>
    {children}
  </div>