import type { Props } from "./utils";
import { cn } from "./utils";

type IndicatorProps = Props & {
  horizontal?: "start" | "center" | "end"
  vertical?: "top" | "middle" | "bottom"
}

  export const Indicator = ({ children, className, ...props }: IndicatorProps) => (
  <div className={cn("indicator", className)} {...props}>
    {children}
  </div>
)

export const IndicatorItem = ({ children, className, horizontal, vertical, ...props }: Props) => (
  <div className={cn("indicator-item", className, {
    'indicator-start': horizontal === 'start',
    'indicator-center': horizontal === 'center',
    'indicator-end': horizontal === 'end',
    'indicator-top': vertical === 'top',
    'indicator-middle': vertical === 'middle',
    'indicator-bottom': vertical === 'bottom',
  })} {...props}>
    {children}
  </div>
)