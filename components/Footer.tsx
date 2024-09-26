import type { Props } from "./utils";
import { cn } from "./utils";

type FooterProps = Props & {
  center?: boolean
}

export const Footer = ({ children, className, center, ...props }: FooterProps) => (
  <footer className={cn("footer", className, {
    "footer-center": center
  })} {...props}>
    {children}
  </footer>
)

export const FooterSection = ({ children, className, title, ...props }: Props) => (
  <nav className={className} {...props}>
    <h6 className="footer-title">{title}</h6>
    {children}
  </nav>
)