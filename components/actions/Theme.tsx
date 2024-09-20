import { cn } from "../utils"
import type { BasicProps } from "../types";

export const Theme = ({ className, value, ...props }: BasicProps & { value: string }) =>
  <input type="checkbox" value={value} className={cn("toggle theme-controller", className)} {...props} />