import type { FunctionComponent } from "react";
import { useMemo } from "react";
import LinkBase from "next/link";
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
        {...(rest as Omit<LinkPropertiesExternal, "rel" | "children">)}
        rel={fixedRel}
      >
        {BoxChildrenComponent}
      </LinkWrapperExternal>
    ) : (
      <LinkWrapperInternal
        {...(rest as Omit<LinkPropertiesInternal, "rel" | "children">)}
        rel={fixedRel}
      >
        {BoxChildrenComponent}
      </LinkWrapperInternal>
    )
  ) : external ? (
    <a
      {...(rest as Omit<LinkPropertiesExternal, "rel" | "children">)}
      rel={fixedRel}
    >
      {children}
    </a>
  ) : (
    <LinkBase
      {...(rest as Omit<LinkPropertiesInternal, "rel" | "children">)}
      rel={fixedRel}
    >
      {children}
    </LinkBase>
  );
};

export default Link;
