import type { Props, SizeTypes } from "../types"
import { cn } from "../utils"

export const BottomNavigation = ({ className, children, ...props }: Props & { size?: SizeTypes }) => (
  <div className={cn("btm-nav", className)} {...props}>
    {children}
  </div>
)

type BottomNavItemProps = Props & {
  active?: boolean
  disabled?: boolean
}

export const BottomNavigationItem = ({ className, active, disabled, children, ...props }: BottomNavItemProps) => (
  <button className={cn(className, {
    "active": active,
    "disabled": disabled,
  })} {...props}>
    {children}
  </button>
)
