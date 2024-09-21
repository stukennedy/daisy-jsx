import type { ReactNode } from "react";
import type { ReactNode as HonoReactNode } from "hono/jsx";

export type BasicProps = {
  className?: string;
  [key: string]: any;
};

type Children =
  | ReactNode
  | HonoReactNode
  | Promise<string>
  | Array<ReactNode | HonoReactNode | Promise<string>>;

export type Props = {
  children: Children;
} & BasicProps;

export type OptionalProps = {
  children?: Children;
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
