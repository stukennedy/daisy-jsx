import type { Props } from "../types"
import { cn } from "../utils"

export const Breadcrumbs = ({ className, children, ...props }: Props) => (
  <div className={cn("breadcrumbs", className)} {...props}>
    <ul>
      {children}
    </ul>
  </div>
)

export const BreadcrumbItem = ({ className, href, children, ...props }: Props & { href?: string }) => (
  href 
    ? <li className={className} {...props}><a href={href}>{children}</a></li>
    : <li className={className} {...props}>{children}</li>
)