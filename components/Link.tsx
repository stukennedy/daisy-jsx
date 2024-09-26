import type { FullColorTypes, Props } from "daisy-jsx";
import { cn } from "daisy-jsx";

type LinkProps = Props & {
  color?: Exclude<FullColorTypes, "ghost">
  hover?: boolean
}

export const Link = ({ className, children, color, hover, ...props }: LinkProps) => (
  <a className={cn("link", className, {
    'link-primary': color === 'primary',
    'link-secondary': color === 'secondary',
    'link-accent': color === 'accent',
    'link-neutral': color === 'neutral',
    'link-info': color === 'info',
    'link-success': color === 'success',
    'link-warning': color === 'warning',
    'link-error': color === 'error',
    "link-hover": hover,
  })} {...props}>
    {children}
  </a>
)
