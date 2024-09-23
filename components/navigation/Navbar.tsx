import type { Props } from "../types"
import { cn } from "../utils"

export const Navbar = ({ className, children, position, ...props }: Props) => (
  <div className={cn("navbar", className, {
    [`navbar-${position}`]: position,
  })} {...props}>
    {children}
  </div>
)

export const NavbarStart = ({ className, children, ...props }: Props) => (
  <div className={cn("navbar-start", className)} {...props}>
    {children}
  </div>
)

export const NavbarCenter = ({ className, children, ...props }: Props) => (
  <div className={cn("navbar-center", className)} {...props}>
    {children}
  </div>
)

export const NavbarEnd = ({ className, children, ...props }: Props) => (
  <div className={cn("navbar-end", className)} {...props}>
    {children}
  </div>
)
