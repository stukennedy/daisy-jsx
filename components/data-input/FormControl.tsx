import { cn } from "../utils"
import type { Props } from "../types";

export const FormControl = ({ children, className, ...props }: Props) =>
  <div className={cn("form-control", className)} {...props}>
    {children}
  </div>