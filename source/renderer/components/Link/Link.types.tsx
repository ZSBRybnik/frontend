import type {
  AnchorHTMLAttributes,
  DetailedHTMLProps,
  PropsWithChildren,
  RefAttributes,
} from "react";
import type { LinkProps } from "react-router-dom";

export type LinkPropertiesInternalBase = LinkProps &
  RefAttributes<HTMLAnchorElement>;

export type LinkPropertiesInternal = Omit<
  LinkPropertiesInternalBase,
  "href"
> & {
  external?: boolean;
  href: string;
};

export type LinkPropertiesExternalBase = DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;

export type LinkPropertiesExternal = Omit<LinkPropertiesExternalBase, "to"> & {
  external: true;
  href: LinkPropertiesInternal["href"];
};

type LinkProperties = PropsWithChildren<{
  insecure?: boolean;
}> &
  (LinkPropertiesExternal | LinkPropertiesInternal);

export default LinkProperties;
