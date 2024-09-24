import { cn } from "../utils";
import type { OptionalProps } from "../types";

export const Skeleton = ({ size, className, ...props }: OptionalProps) =>
  <div className={cn("skeleton", className)} {...props} />