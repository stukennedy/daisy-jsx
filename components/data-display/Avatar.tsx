import { cn } from "../utils"
import type { Props } from "../types";

type AvatarProps = Props & {
  online?: boolean
  offline?: boolean
  placeholder?: boolean
}

export const Avatar = ({ children, className, online, offline, placeholder, ...props }: AvatarProps) =>
  <div className={cn("avatar", className, {
    'online': online,
    'offline': offline,
    'placeholder': placeholder
  })} {...props}>
    {children}
  </div>

export const AvatarGroup = ({ children, className }: Props) =>
  <div className={cn("avatar-group -space-x-6 rtl:space-x-reverse", className)}>
    {children}
  </div>