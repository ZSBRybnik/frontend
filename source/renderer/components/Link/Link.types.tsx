import type {
  AnchorHTMLAttributes,
  DetailedHTMLProps,
  PropsWithChildren,
  ComponentProps,
} from "react";
import Link from "next/link";

type NextLinkProperties = ComponentProps<typeof Link>;

export type LinkPropertiesInternalBase = NextLinkProperties &
  DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;

export type LinkPropertiesInternal = LinkPropertiesInternalBase & {
  external?: boolean;
};

export type LinkPropertiesExternalBase = DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;

export type LinkPropertiesExternal = LinkPropertiesExternalBase & {
  external: true;
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
