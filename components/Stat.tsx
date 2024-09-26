import { cn } from "./utils";
import type { BasicProps } from "./utils";

type StatProps = BasicProps & {
  direction?: "horizontal" | "vertical"
}

export const Stats = ({ children, direction = "horizontal", className, ...props }: StatProps) =>
  <div className={cn("stats", {
    'stats-horizontal': direction === 'horizontal',
    'stats-vertical': direction === 'vertical',
  }, className)} {...props}>
    {children}
  </div>

export const Stat = ({ children, className, ...props }: StatProps) =>
  <div className={cn("stat", className)} {...props}>
    {children}
  </div>

export const StatTitle = ({ children, className, ...props }: StatProps) =>
  <div className={cn("stat-title", className)} {...props}>
    {children}
  </div>

export const StatValue = ({ children, className, ...props }: StatProps) =>
  <div className={cn("stat-value", className)} {...props}>
    {children}
  </div>

export const StatDesc = ({ children, className, ...props }: StatProps) =>
  <div className={cn("stat-desc", className)} {...props}>
    {children}
  </div>

export const StatFigure = ({ children, className, ...props }: StatProps) =>
  <div className={cn("stat-figure", className)} {...props}>
    {children}
  </div>
