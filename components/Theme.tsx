import { cn } from "daisy-jsx";
import type { BasicProps } from "daisy-jsx";

export const Theme = ({ className, value, ...props }: BasicProps & { value: string }) =>
  <input type="checkbox" value={value} className={cn("toggle theme-controller", className)} {...props} />