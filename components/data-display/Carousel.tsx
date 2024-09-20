import { cn } from "../utils"
import type { Props } from "../types";

type Position = 'start' | 'center' | 'end'

export const Carousel = ({ children, className, position = 'start', vertical, ...props }: Props & { position?: Position }) =>
  <div className={cn("carousel", className, {
    [`carousel-${position}`]: position,
    'carousel-vertical': vertical,
  })} {...props}>
    {children}
  </div>

export const CarouselItem = ({ children, className, ...props }: Props) =>
  <div className={cn("carousel-item", className)} {...props}>
    {children}
  </div>