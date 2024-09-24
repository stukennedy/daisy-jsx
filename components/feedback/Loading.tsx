import { cn } from "../utils";
import type { OptionalProps, SizeTypes } from "../types";

type LoadingProps = OptionalProps & {
  type: "spinner" | "dots" | "ring" | "ball" | "bars" | "infinity";
  size?: SizeTypes;
}

export const Loading = ({ children, className, type, size, ...props }: LoadingProps) =>
  <div className={cn("loading", { 
    [`loading-${type}`]: type, 
    [`loading-${size}`]: size }, className)} {...props}>
    {children}
  </div>  