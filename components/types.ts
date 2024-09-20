import type { ReactNode } from "hono/jsx";
import type { HtmlEscapedString } from "hono/utils/html";

export type BasicProps = {
  className?: string;
  [key: string]: any;
};

export type Props = {
  children:
    | ReactNode
    | Promise<HtmlEscapedString>
    | Array<ReactNode | Promise<HtmlEscapedString>>;
} & BasicProps;

export type ColorTypes =
  | "neutral"
  | "primary"
  | "secondary"
  | "accent"
  | "info"
  | "success"
  | "warning"
  | "error"
  | "ghost";

export type SizeTypes = "lg" | "md" | "sm" | "xs";
