import { cn } from "../utils";
import type { BasicProps, ColorTypes } from "../types";

type ProgressProps = BasicProps & {
  value?: number;
  max?: number;
  color?: ColorTypes;
}

export const Progress = ({ value, max, color, className, ...props }: ProgressProps) =>
  <progress className={cn("progress", { [`progress-${color}`]: color }, className)} value={value} max={max} {...props} />