import type { Props, SizeTypes } from "daisy-jsx";
import { cn } from "daisy-jsx";

type TabsProps = Props & {
  boxed?: boolean
  bordered?: boolean
  lifted?: boolean   
  size?: SizeTypes   
}
export const Tabs = ({ className, children, boxed, bordered, size, lifted, ...props }: TabsProps) => (
  <div role="tablist" className={cn("tabs", className, {
    "tabs-boxed": boxed,
    "tabs-bordered": bordered,
    "tabs-lifted": lifted,
    "tabs-lg": size === "lg",
    "tabs-md": size === "md",
    "tabs-sm": size === "sm",
    "tabs-xs": size === "xs",
  })} {...props}>
    {children}
  </div>
  )

type TabEmptyProps = Props & {
  active?: boolean
  disabled?: boolean
}
export const TabEmpty = ({ className, children, active, disabled, ...props }: TabEmptyProps) => (
  <a role="tab" className={cn("tab", className, {
    "tab-active": active,
    "tab-disabled": disabled,
  })} {...props}>
    {children}
  </a>
)

type TabProps = Props & {
  name: string
  title: string
  checked?: boolean
  active?: boolean
  disabled?: boolean
}
export const Tab = ({ className, children, name, checked, active, disabled, title, ...props }: TabProps) => (
  <>
    <input type="radio" name={name} role="tab" className={cn("tab", className, {
      "tab-active": active,
      "tab-disabled": disabled,
    })} aria-label={title} checked={checked} />
    <div className={cn("tab-content", className)} {...props}>
      {children}
    </div>
  </>

)