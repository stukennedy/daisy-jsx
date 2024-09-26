import { cn } from "./utils";
import type { BasicProps, SizeTypes } from "./utils";

type KbdProps = BasicProps & {
  size?: SizeTypes
}

export const Kbd = ({ size = "md", className, ...props }: KbdProps) =>
  <kbd className={cn("kbd", {
    'kbd-lg': size === 'lg',
    'kbd-md': size === 'md',
    'kbd-sm': size === 'sm',
    'kbd-xs': size === 'xs',
  }, className)} {...props} />

