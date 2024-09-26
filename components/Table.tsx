import { cn } from "daisy-jsx";
import type { BasicProps, SizeTypes } from "daisy-jsx";

type TableProps = BasicProps & {
  zebra?: boolean
  pinRows?: boolean
  pinCols?: boolean
  size?: SizeTypes
} 

export const Table = ({ children, zebra, size, pinRows, pinCols, className, ...props }: TableProps) =>
  <div className={cn("table", {
    'table-zebra': zebra,
    'table-xs': size === 'xs',
    'table-sm': size === 'sm',
    'table-md': size === 'md',
    'table-lg': size === 'lg',
    "table-pin-rows": pinRows,    
    "table-pin-cols": pinCols,
  }, className)} {...props}>
    {children}
  </div>