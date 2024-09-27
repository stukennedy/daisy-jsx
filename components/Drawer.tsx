import { cn } from "daisy-jsx";
import type { Props } from "daisy-jsx";

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
      <label for={id} className={cn("drawer-trigger", labelClassName)}>
        {label}
      </label>
    </div>
    <div className={cn("drawer-side", className)} {...props}>
      <label for={id} aria-label="close sidebar" className="drawer-overlay"></label>
      {children}
    </div>
  </div>
)