import type { Props, SizeTypes } from "../types"
import { cn } from "../utils"

type MenuProps = Props & {
  toggle?: boolean
  dropdownToggle?: boolean
  dropdown?: boolean
  dropdownShow?: boolean
  size?: SizeTypes
  direction?: "vertical" | "horizontal"
}

export const Menu = ({ className, children, size, toggle, dropdown, dropdownShow, direction = "vertical", ...props }: MenuProps) => (
  <ul className={cn("menu", className, {
    "menu-xs": size === "xs",
    "menu-sm": size === "sm",
    "menu-md": size === "md",
    "menu-lg": size === "lg",
    "menu-dropdown-toggle": toggle,
    "menu-dropdown": dropdown,
    "menu-dropdown-show": dropdownShow,
    "menu-horizontal": direction === "horizontal",
    "menu-vertical": direction === "vertical",
  })} {...props}>
    {children}
  </ul>
)

export const MenuTitle = ({ className, children, ...props }: Props) => (
  <li className={cn("menu-title", className)} {...props}>
    {children}
  </li>
)

type ItemProps = Props & {
  disabled?: boolean
  active?: boolean
  focus?: boolean
  href?: string
}
export const MenuItem = ({ className, href, children, disabled, active, focus, ...props }: ItemProps) => (
  <li className={cn({
    "disabled": disabled,
    "active": active,
    "focus": focus,
  })} {...props}>
    <a href={href} className={className}>
      {children}
    </a>
  </li>
)