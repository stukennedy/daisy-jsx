import { cn } from "../utils"

type CheckboxProps = {
  color?: string
  size?: string
  className?: string
}

export const Checkbox = ({ className, color, size, ...props }: CheckboxProps) =>
  <input type="checkbox" className={cn("checkbox", className, {
    [`checkbox-${color}`]: color,
    [`checkbox-${size}`]: size,
  })} {...props} />
