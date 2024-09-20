import { cn } from "../utils"
import type { Props } from "../types";

export const Label = ({ children, className, text, ...props }: Props & { text: string }) =>
  <label className={cn("label cursor-pointer", className)} {...props}>
    <span className="label-text">{text}</span>
    {children}
  </label>