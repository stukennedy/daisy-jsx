import type { OptionalProps } from "../types"
import { cn } from "../utils"

type MaskProps = OptionalProps & {
  shape: "squircle" | "heart" | "hexagon" | "hexagon-2" | "decagon" | "pentagon" | "diamond" | "square" | "circle" | "parallelogram" | "parallelogram-2" | "parallelogram-3" | "parallelogram-4" | "star" | "star-2" | "triangle" | "triangle-2" | "triangle-3" | "triangle-4" | "half-1" | "half-2";
  src: string;
}

export const Mask = ({ children, className, shape, src, ...props }: MaskProps) => (
  <img className={cn("mask", className, {[`mask-${shape}`]: shape})} src={src} {...props}>
    {children}
  </img>
)