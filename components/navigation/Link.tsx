import type { FullColorTypes, Props } from "../types"
import { cn } from "../utils"

type LinkProps = Props & {
  color?: Exclude<FullColorTypes, "ghost">
  hover?: boolean
}

export const Link = ({ className, children, color, hover, ...props }: LinkProps) => (
  <a className={cn("link", className, {
    [`link-${color}`]: color,
    "link-hover": hover,
  })} {...props}>
    {children}
  </a>
)
