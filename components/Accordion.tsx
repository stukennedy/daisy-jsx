import { cn } from "./utils";
import type { Props } from "./utils";

type AccordionProps = Props & {
  name: string,
  arrow?: boolean
  close?: boolean
  open?: boolean
  defaultOpen?: boolean
  plus?: boolean
}

export const AccordionTitle = ({ children, className }: Props) =>
  <div className={cn("collapse-title", className)}>
    {children}
  </div>

export const AccordionContent = ({ children, className }: Props) =>
  <div className={cn("collapse-content", className)}>
    {children}
  </div>

export const Accordion = ({ children, className, name, arrow, close, open, defaultOpen, plus, ...props }: AccordionProps) =>
  <div className={cn("collapse", className, {
    'collapse-arrow': arrow,
    'collapse-close': close,
    'collapse-open': open,
    'collapse-plus': plus,
  })} {...props}>
    <input type="radio" name={name} defaultChecked={defaultOpen} />
    {children}
  </div>