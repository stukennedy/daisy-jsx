import { cn } from "daisy-jsx";
import type { Props } from "daisy-jsx";

export const Browser = ({ className, children, ...props }: Props) => (
  <div className={cn("mockup-browser", className)} {...props}>
    {children}
  </div>
)

export const BrowserToolbar = ({ className, children, ...props }: Props) => (
  <div className={cn("mockup-browser-toolbar", className)} {...props}>
    {children}
  </div>
)
