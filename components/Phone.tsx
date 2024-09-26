import { cn } from "daisy-jsx";
import type { Props } from "daisy-jsx";

export const Phone = ({ className, children, ...props }: Props) => (
  <div className={cn("mockup-phone", className)} {...props}>
    <div className="camera" />
    <div className="display">
    {children}
    </div>
  </div>
)