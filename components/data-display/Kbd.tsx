// kbd	Component	Do show a keyboard key or a shortcut key
// kbd-lg	Responsive	Large size
// kbd-md	Responsive	Medium size (default)
// kbd-sm	Responsive	Small size
// kbd-xs	Responsive	Extra small size

import { cn } from "../utils"
import type { BasicProps, SizeTypes } from "../types"

type KbdProps = BasicProps & {
  size?: SizeTypes
}

export const Kbd = ({ size = "md", className, ...props }: KbdProps) =>
  <kbd className={cn("kbd", `kbd-${size}`, className)} {...props} />

