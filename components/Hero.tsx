import type { OptionalProps, Props } from "daisy-jsx";
import { cn } from "daisy-jsx";

type HeroProps = Props & {
  overlay?: boolean
}

export const Hero = ({ children, className, overlay, ...props }: HeroProps) => (
  <div className={cn("hero", className)} {...props}>
    {children}
  </div>
)

export const HeroContent = ({ children, className, ...props }: Props) => (
  <div className={cn("hero-content", className)} {...props}>
    {children}
  </div>
)

export const HeroOverlay = ({ children, className, ...props }: OptionalProps) => (
  <div className={cn("hero-overlay", className)} {...props}>
    {children}
  </div>
)