import { cn } from "./utils";
import type { FullColorTypes, Props, SizeTypes } from "./utils";

type ButtonProps = Props & {
  color?: FullColorTypes
  link?: boolean
  outline?: boolean
  active?: boolean
  disabled?: boolean
  glass?: boolean
  noAnimation?: boolean
  size?: SizeTypes
  wide?: boolean
  block?: boolean
  circle?: boolean
  square?: boolean
  href?: string
}

export const Button = ({
  children,
  className,
  color,
  link,
  outline,
  active,
  disabled,
  glass,
  noAnimation,
  size,
  wide,
  block,
  circle,
  square,
  href,
  ...props
}: ButtonProps) => {
  const classes=cn("btn", className, {
    'btn-neutral': color === 'neutral',
    'btn-primary': color === 'primary',
    'btn-secondary': color === 'secondary',
    'btn-accent': color === 'accent',
    'btn-ghost': color === 'ghost',
    'btn-info': color === 'info',
    'btn-success': color === 'success',
    'btn-warning': color === 'warning',
    'btn-error': color === 'error',
    'btn-link': link,
    'btn-outline': outline,
    'btn-active': active,
    'btn-disabled': disabled,
    'btn-glass': glass,
    'btn-no-animation': noAnimation,
    'btn-xs': size === 'xs',
    'btn-sm': size === 'sm',
    'btn-md': size === 'md',
    'btn-lg': size === 'lg',
    'btn-wide': wide,
    'btn-block': block,
    'btn-circle': circle,
    'btn-square': square,
    })
  return href 
    ? <a href={href} className={classes} {...props}>{children}</a> 
    : <button className={classes} {...props}>{children}</button>
}