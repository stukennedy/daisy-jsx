import { cn } from "../utils"
import type { Props } from "../types";

type SwapProps = Props & {
  type?: 'active' | 'rotate' | 'flip'
}


export const Swap = ({ children, className, ...props }: SwapProps) =>
  <label className={cn("swap", {
    'swap-active': props.type === 'active',
    'swap-rotate': props.type === 'rotate',
    'swap-flip': props.type === 'flip',
  }, className)} {...props}>
    <input type="checkbox" />
    {children}
  </label>

export const SwapOn = ({ children, className, ...props }: Props) =>
  <div className={cn("swap-on", className)} {...props}>
    {children}
  </div>

export const SwapOff = ({ children, className, ...props }: Props) =>
  <div className={cn("swap-off", className)} {...props}>
    {children}
  </div>

export const SwapIndeterminate = ({ children, className, ...props }: Props) =>
  <div className={cn("swap-indeterminate", className)} {...props}>
    {children}
  </div>