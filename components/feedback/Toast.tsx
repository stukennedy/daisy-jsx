import { cn } from "../utils";
import type { Props } from "../types";

type ToastProps = Props & {
  horizontal?: "start" | "center" | "end";
  vertical?: "top" | "middle" | "bottom";
}

export const Toast = ({ className, horizontal, vertical, ...props }: ToastProps) =>
  <div className={cn("toast", className, {
    [`toast-${horizontal}`]: horizontal,
    [`toast-${vertical}`]: vertical,
  })} {...props} />