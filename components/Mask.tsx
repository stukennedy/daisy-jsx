import type { OptionalProps } from "daisy-jsx";
import { cn } from "daisy-jsx";

type MaskProps = OptionalProps & {
  shape: "squircle" | "heart" | "hexagon" | "hexagon-2" | "decagon" | "pentagon" | "diamond" | "square" | "circle" | "parallelogram" | "parallelogram-2" | "parallelogram-3" | "parallelogram-4" | "star" | "star-2" | "triangle" | "triangle-2" | "triangle-3" | "triangle-4" | "half-1" | "half-2";
  src: string;
}

export const Mask = ({ children, className, shape, src, ...props }: MaskProps) => (
  <img className={cn("mask", className, {
    'mask-squircle': shape === 'squircle',
    'mask-heart': shape === 'heart',
    'mask-hexagon': shape === 'hexagon',
    'mask-hexagon-2': shape === 'hexagon-2',
    'mask-decagon': shape === 'decagon',
    'mask-pentagon': shape === 'pentagon',
    'mask-diamond': shape === 'diamond',
    'mask-square': shape === 'square',
    'mask-circle': shape === 'circle',
    'mask-parallelogram': shape === 'parallelogram',
    'mask-parallelogram-2': shape === 'parallelogram-2',
    'mask-parallelogram-3': shape === 'parallelogram-3',
    'mask-parallelogram-4': shape === 'parallelogram-4',
    'mask-star': shape === 'star',
    'mask-star-2': shape === 'star-2',
    'mask-triangle': shape === 'triangle',
    'mask-triangle-2': shape === 'triangle-2',
    'mask-triangle-3': shape === 'triangle-3',  
    'mask-triangle-4': shape === 'triangle-4',
    'mask-half-1': shape === 'half-1',
    'mask-half-2': shape === 'half-2',
  })} src={src} {...props}>
    {children}
  </img>
)