import { cn } from "daisy-jsx";
import type { OptionalProps } from "daisy-jsx";

export const Skeleton = ({ size, className, ...props }: OptionalProps) =>
  <div className={cn("skeleton", className)} {...props} />