import { cn } from "daisy-jsx";
import type { Props } from "daisy-jsx";

type ArtboardProps = Props & {
  demo?: boolean
  size?: 1 | 2 | 3 | 4 | 5 | 6
  horizontal?: boolean
}

export const Artboard = ({ className, children, demo, size, horizontal, ...props }: ArtboardProps) => (
  <div className={cn("artboard", className, {
    "artboard-demo": demo,
    'phone-1': size === 1,
    'phone-2': size === 2,
    'phone-3': size === 3,
    'phone-4': size === 4,
    'phone-5': size === 5,
    'phone-6': size === 6,
    "artboard-horizontal": horizontal,
  })} {...props}>
    {children}
  </div>
)