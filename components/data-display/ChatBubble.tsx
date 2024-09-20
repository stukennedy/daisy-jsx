import { cn } from "../utils"
import type { ColorTypes, Props } from "../types";

export const Chat = ({ children, className, align, ...props }: Props & { align: 'start' | 'end' }) =>
  <div className={cn("chat", className, {
    [`chat-${align}`]: align,
  })} {...props}>{children}</div>

export const ChatImage = ({ children, className, ...props }: Props) =>
  <div className={cn("chat-image", className)} {...props}>{children}</div>

export const ChatHeader = ({ children, className, ...props }: Props) =>
  <div className={cn("chat-header", className)} {...props}>{children}</div>

export const ChatFooter = ({ children, className, ...props }: Props) =>
  <div className={cn("chat-footer", className)} {...props}>{children}</div>

export const ChatBubble = ({ children, className, color, ...props }: Props & { color: ColorTypes }) => (
  <div className={cn("chat-bubble", className, {
    [`chat-bubble-${color}`]: color,
  })} {...props}>
      {children}
    </div>
  )