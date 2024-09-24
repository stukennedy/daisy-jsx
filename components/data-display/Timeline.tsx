import { cn } from "../utils"
import type { BasicProps } from "../types"

type TimelineProps = BasicProps & {
  compact?: boolean
  snapIcon?: boolean
  direction?: "vertical" | "horizontal"
}

export const Timeline = ({ children, compact, snapIcon, direction, className, ...props }: TimelineProps) =>
  <ul className={cn("timeline", {
    "timeline-compact": compact,
    "timeline-snap-icon": snapIcon,
    [`timeline-${direction}`]: direction,
  }, className)} {...props}>
    {children}
  </ul>

export const TimelineItem = ({ children, className, ...props }: BasicProps) =>
  <li className={className} {...props}>
    {children}
  </li>

export const TimelineStart = ({ children, className, box, ...props }: BasicProps & { box?: boolean }) =>
  <div className={cn("timeline-start", { "timeline-box": box }, className)} {...props}>
    {children}
  </div>

export const TimelineMiddle = ({ children, className, ...props }: BasicProps) =>
  <div className={cn("timeline-middle", className)} {...props}>
    {children}
  </div>

export const TimelineEnd = ({ children, className, box, ...props }: BasicProps & { box?: boolean }) =>
  <div className={cn("timeline-end", { "timeline-box": box }, className)} {...props}>
    {children}
  </div>
