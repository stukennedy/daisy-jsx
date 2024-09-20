import { cn } from "../utils"
import type { ColorTypes, Props, SizeTypes } from "../types";

type ButtonProps = Props & {
  color?: ColorTypes
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
    [`btn-${color}`]: color,
    'btn-link': link,
    'btn-outline': outline,
    'btn-active': active,
    'btn-disabled': disabled,
    'btn-glass': glass,
    'btn-no-animation': noAnimation,
    [`btn-${size}`]: size,
    'btn-wide': wide,
    'btn-block': block,
    'btn-circle': circle,
    'btn-square': square,
    })
  return href 
    ? <a href={href} className={classes} {...props}>{children}</a> 
    : <button className={classes} {...props}>{children}</button>
}