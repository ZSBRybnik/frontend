import type { FunctionComponent } from "react";
import { Link as LinkBase } from "react-router-dom";
import type LinkProperties from "~renderer/components/Link/Link.types";
import type {
  LinkPropertiesExternal,
  LinkPropertiesInternal,
} from "~renderer/components/Link/Link.types";

const Link: FunctionComponent<LinkProperties> = ({
  external,
  children,
  href,
  rel,
  insecure,
  ...rest
}: LinkProperties): JSX.Element => {
  const relWithSpace: string = `${rel} `;
  const fixedRel: string = `${rel ? relWithSpace : ""}${
    !insecure || "noopener norefferer"
  }`;
  return external ? (
    <a
      {...(rest as Omit<LinkPropertiesExternal, "rel" | "children">)}
      rel={fixedRel}
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
