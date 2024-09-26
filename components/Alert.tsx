import { cn } from "daisy-jsx";
import type { Props } from "daisy-jsx";

type AlertProps = Props & {
  color?: "info" | "success" | "warning" | "error";
}

export const Alert = ({ children, className, color, ...props }: AlertProps) =>
  <div className={cn("alert", { 
    'alert-info': color === 'info',
    'alert-success': color === 'success',
    'alert-warning': color === 'warning',
    'alert-error': color === 'error',
  }, className)} {...props}>
    {children}
  </div>
