import { cn } from "../utils"
import type { BasicProps, SizeTypes } from "../types"

type TableProps = BasicProps & {
  zebra?: boolean
  pinRows?: boolean
  pinCols?: boolean
  size?: SizeTypes
} 

export const Table = ({ children, zebra, size, pinRows, pinCols, className, ...props }: TableProps) =>
  <div className={cn("table", {
    "table-zebra": zebra,
    [`table-${size}`]: size,
    "table-pin-rows": pinRows,    
    "table-pin-cols": pinCols,
  }, className)} {...props}>
    {children}
  </div>