import { cn } from "../utils"
import type { ColorTypes, Props } from "../types";

export const Chat = ({ children, className, align, ...props }: Props & { align: 'start' | 'end' }) =>
  <div className={cn("chat", className, {
    'chat-start': align === 'start',
    'chat-end': align === 'end',
  })} {...props}>{children}</div>

export const ChatImage = ({ children, className, ...props }: Props) =>
  <div className={cn("chat-image", className)} {...props}>{children}</div>

export const ChatHeader = ({ children, className, ...props }: Props) =>
  <div className={cn("chat-header", className)} {...props}>{children}</div>

export const ChatFooter = ({ children, className, ...props }: Props) =>
  <div className={cn("chat-footer", className)} {...props}>{children}</div>

export const ChatBubble = ({ children, className, color, ...props }: Props & { color: ColorTypes }) => (
  <div className={cn("chat-bubble", className, {
    'chat-bubble-primary': color === 'primary',
    'chat-bubble-secondary': color === 'secondary',
    'chat-bubble-accent': color === 'accent',
    'chat-bubble-info': color === 'info',
    'chat-bubble-success': color === 'success',
    'chat-bubble-warning': color === 'warning',
    'chat-bubble-error': color === 'error',
  })} {...props}>
      {children}
    </div>
  )