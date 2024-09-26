import { cn } from "daisy-jsx";
import type { Props } from "daisy-jsx";

export const Modal = ({ children, className, ...props }: Props) =>
  <dialog className={cn("modal", className)} {...props}>
    {children}
  </dialog>

export const ModalBox = ({ children, className, ...props }: Props) =>
  <div className={cn("modal-box", className)} {...props}>
    {children}
  </div>