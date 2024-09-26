import { cn } from "./utils";
import type { OptionalProps } from "./utils";

export const Label = ({ children, className, text, alt, ...props }: OptionalProps & { text: string, alt?: string }) =>
  <label className={cn("label cursor-pointer", className)} {...props}>
    <span className="label-text">{text}</span>
    {alt && <span className="label-text-alt">{alt}</span>}
    {children}
  </label>