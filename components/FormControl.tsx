import { cn } from "daisy-jsx";
import type { Props } from "daisy-jsx";

export const FormControl = ({ children, className, ...props }: Props) =>
  <label className={cn("form-control", className)} {...props}>
    {children}
  </label>