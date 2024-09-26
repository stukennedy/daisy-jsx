import { cn } from "./utils";
import type { Props } from "./utils";

type CarouselProps = Props & {
  position?: 'start' | 'center' | 'end';
  vertical?: boolean;
}

export const Carousel = ({ children, className, position = 'start', vertical, ...props }: CarouselProps) =>
  <div className={cn("carousel", className, {
    'carousel-start': position === 'start',
    'carousel-center': position === 'center',
    'carousel-end': position === 'end',
    'carousel-vertical': vertical,
  })} {...props}>
    {children}
  </div>

export const CarouselItem = ({ children, className, ...props }: Props) =>
  <div className={cn("carousel-item", className)} {...props}>
    {children}
  </div>