import type { FunctionComponent } from "react";
import { useMemo } from "react";
import { Link as LinkBase } from "react-router-dom";
import type LinkProperties from "~frontend/source/renderer/components/Link/Link.types";
import type {
  LinkPropertiesExternal,
  LinkPropertiesInternal,
} from "~frontend/source/renderer/components/Link/Link.types";
import {
  LinkContentWrapper,
  LinkHeader,
  LinkWrapperExternal,
  LinkWrapperInternal,
} from "./Link.styles";
import Icon from "@mdi/react";
import { mdiDownload, mdiShare } from "@mdi/js";

const Link: FunctionComponent<LinkProperties> = ({
  external,
  children,
  href,
  rel = "noopener noreferrer",
  insecure,
  box,
  title,
  toDownload,
  icon,
  ...rest
}: LinkProperties): JSX.Element => {
  const fixedRel: string = `${!insecure ? rel : ""}`.trim();
  const BoxChildrenComponent = useMemo(() => {
    const defaultIcon: string = toDownload ? mdiDownload : mdiShare;
    return (
      <LinkContentWrapper>
        <LinkHeader>{title}</LinkHeader>
        <div>
          <Icon path={icon || defaultIcon} size={1.6} color={"#111"} />
        </div>
      </LinkContentWrapper>
    );
  }, [toDownload, icon, title]);
  return box ? (
    external ? (
      <LinkWrapperExternal
        {...(rest as Omit<LinkPropertiesExternal, "rel" | "children" | "href">)}
        rel={fixedRel}
        href={href}
      >
        {BoxChildrenComponent}
      </LinkWrapperExternal>
    ) : (
      <LinkWrapperInternal
        {...(rest as Omit<LinkPropertiesInternal, "rel" | "to" | "children">)}
        rel={fixedRel}
        to={href}
      >
        {BoxChildrenComponent}
      </LinkWrapperInternal>
    )
  ) : external ? (
    <a
      {...(rest as Omit<LinkPropertiesExternal, "rel" | "children">)}
      rel={fixedRel}
      href={href}
    >
      {children}
    </a>
  ) : (
    <LinkBase
      {...(rest as Omit<LinkPropertiesInternal, "rel" | "to" | "children">)}
      rel={fixedRel}
      to={href}
    >
      {children}
    </LinkBase>
  );
};

export default Link;
