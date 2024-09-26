import { cn } from "daisy-jsx";
import type { Props } from "daisy-jsx";

type ToastProps = Props & {
  horizontal?: "start" | "center" | "end";
  vertical?: "top" | "middle" | "bottom";
}

export const Toast = ({ className, horizontal, vertical, ...props }: ToastProps) =>
  <div className={cn("toast", className, {
    'toast-start': horizontal === 'start',
    'toast-center': horizontal === 'center',
    'toast-end': horizontal === 'end',
    'toast-top': vertical === 'top',
    'toast-middle': vertical === 'middle',
    'toast-bottom': vertical === 'bottom',
  })} {...props} />