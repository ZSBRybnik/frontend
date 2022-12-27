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

export type LinkPropertiesExternalWithInternalUnion =
  | LinkPropertiesExternal
  | LinkPropertiesInternal;

export type LinkPropertiesWithBox = LinkPropertiesExternalWithInternalUnion & {
  box: true;
  title: string;
  toDownload?: boolean;
  icon?: string;
};

export type LinkPropertiesWithoutBox =
  LinkPropertiesExternalWithInternalUnion & {
    box?: false;
    title?: never;
    toDownload?: never;
    icon?: never;
  };

type LinkProperties = PropsWithChildren<{
  insecure?: boolean;
}> &
  (LinkPropertiesWithBox | LinkPropertiesWithoutBox);

export default LinkProperties;
