import { cn } from "daisy-jsx";
import type { Props } from "daisy-jsx";

type CardProps = Props & {
  bordered?: boolean;
  full?: boolean;
  normal?: boolean;
  compact?: boolean;
  side?: boolean;
}

export const Card = ({ children, className, bordered, full, normal, compact, side, ...props }: CardProps) =>
  <div className={cn("card", className, {
    'card-bordered': bordered,
    'image-full': full,
    'card-normal': normal,
    'card-compact': compact,
    'card-side': side,
  })} {...props}>
    {children}
  </div>

export const CardBody = ({ children, className, ...props }: Props) =>
  <div className={cn("card-body", className)} {...props}>
    {children}
  </div>

export const CardActions = ({ children, className, ...props }: Props) =>
  <div className={cn("card-actions", className)} {...props}>
    {children}
  </div>

export const CardTitle = ({ children, className, ...props }: Props) =>
  <div className={cn("card-title", className)} {...props}>
    {children}
  </div>