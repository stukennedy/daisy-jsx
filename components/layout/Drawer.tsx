import { cn } from "../utils"
import type { Props } from "../types"

type DrawerProps = Props & {
  id: string
  open?: boolean
  end?: boolean
  label?: string
  labelClassName?: string
}

export const Drawer = ({ children, className, end, id, open, label, labelClassName, ...props }: DrawerProps) => (
  <div className={cn("drawer", className, {
    "drawer-end": end,
    "drawer-open": open
  })} {...props}>
    <input id={id} type="checkbox" className="drawer-toggle" />
    <div className="drawer-content">
      <label htmlFor={id} className={cn("drawer-trigger", labelClassName)}>
        {label}
      </label>
    </div>
    <div className={cn("drawer-side", className)} {...props}>
      <label htmlFor={id} aria-label="close sidebar" className="drawer-overlay"></label>
      {children}
    </div>
  </div>
)