import { cn } from "../utils"
import type { Props } from "../types"

type ArtboardProps = Props & {
  demo?: boolean
  size?: 1 | 2 | 3 | 4 | 5 | 6
  horizontal?: boolean
}

export const Artboard = ({ className, children, demo, size, horizontal, ...props }: ArtboardProps) => (
  <div className={cn("artboard", className, {
    "artboard-demo": demo,
    [`phone-${size}`]: size,
    "artboard-horizontal": horizontal,
  })} {...props}>
    {children}
  </div>
)