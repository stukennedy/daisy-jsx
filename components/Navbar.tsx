import type { Props } from "daisy-jsx";
import { cn } from "daisy-jsx";

export const Navbar = ({ className, children, ...props }: Props) => (
  <div className={cn("navbar", className)} {...props}>
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
