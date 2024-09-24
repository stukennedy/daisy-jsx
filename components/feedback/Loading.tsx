import { cn } from "../utils";
import type { OptionalProps, SizeTypes } from "../types";

type LoadingProps = OptionalProps & {
  type: "spinner" | "dots" | "ring" | "ball" | "bars" | "infinity";
  size?: SizeTypes;
}

export const Loading = ({ children, className, type, size, ...props }: LoadingProps) =>
  <div className={cn("loading", { 
    'loading-spinner': type === 'spinner',
    'loading-dots': type === 'dots',
    'loading-ring': type === 'ring',
    'loading-ball': type === 'ball',
    'loading-bars': type === 'bars',
    'loading-infinity': type === 'infinity',
    'loading-xs': size === 'xs',
    'loading-sm': size === 'sm',
    'loading-md': size === 'md',
    'loading-lg': size === 'lg',
  }, className)} {...props}>
    {children}
  </div>  