import { cn } from "../utils";
import type { Props } from "../types";

type AlertProps = Props & {
  color?: "info" | "success" | "warning" | "error";
}

export const Alert = ({ children, className, color, ...props }: AlertProps) =>
  <div className={cn("alert", { [`alert-${color}`]: color }, className)} {...props}>
    {children}
  </div>
