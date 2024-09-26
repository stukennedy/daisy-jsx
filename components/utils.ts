import type { ReactNode } from "hono/jsx";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type BasicProps = {
  className?: string;
  [key: string]: any;
};

export type Child = ReactNode | Promise<string>;
export type Children = Child | Array<Child>;

export type Props = {
  children: Children;
} & BasicProps;

export type OptionalProps = {
  children?: Children;
} & BasicProps;

export type ColorTypes =
  | "primary"
  | "secondary"
  | "accent"
  | "info"
  | "success"
  | "warning"
  | "error";

export type FullColorTypes = ColorTypes | "neutral" | "ghost";

export type SizeTypes = "lg" | "md" | "sm" | "xs";
