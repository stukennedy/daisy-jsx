import { cn } from "../utils"

type CheckboxProps = {
  color?: string
  size?: string
  className?: string
  defaultChecked?: boolean
}

export const Checkbox = ({ className, color, size, defaultChecked, ...props }: CheckboxProps) =>
  <input type="checkbox" className={cn("checkbox", className, {
    [`checkbox-${color}`]: color,
    [`checkbox-${size}`]: size,
  })} checked={defaultChecked} {...props} />
