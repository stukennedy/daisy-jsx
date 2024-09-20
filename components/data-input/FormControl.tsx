import { cn } from "../utils"
import type { Props } from "../types";

export const FormControl = ({ children, className, ...props }: Props) =>
  <label className={cn("form-control", className)} {...props}>
    {children}
  </label>