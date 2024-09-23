import { cn } from "../utils"
import type { BasicProps, Props, SizeTypes } from "../types";

type RatingProps = Props & {
  size?: SizeTypes
  half?: boolean
  hidden?: boolean
}

export const Rating = ({ children, size, half, hidden, className, ...props }: RatingProps) =>
  <div className={cn("rating", className, {
    [`rating-${size}`]: size,
    'rating-half': half,
    'rating-hidden': hidden,
  })} {...props}>
    {children}
  </div>

type RatingItemProps =  BasicProps & {
  type?: 'star' | 'heart' | 'hidden'
  half?: boolean
  checked?: boolean
  name: string
}

export const RatingItem = ({ className, name, type = 'hidden', ...props }: RatingItemProps) =>
  <input type="radio" name={name} className={cn(className, {
    'rating-hidden': type === 'hidden',
    'mask mask-star-2': type === 'star',
    'mask mask-heart': type === 'heart'
  })} {...props} />

export const RatingItemHalf = ({ className, name, type, ...props }: RatingItemProps) => {
  return <>
    <input type="radio" name={name} className={cn('mask-half-1', className, {
      'mask mask-star-2': type === 'star',
      'mask mask-heart': type === 'heart',
    })} {...props} />
    <input type="radio" name={name} className={cn('mask-half-2', className, {
      'mask mask-star-2': type === 'star',
      'mask mask-heart': type === 'heart',
    })} {...props} />    
  </>
}
