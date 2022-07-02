import { Link as LinkBase } from "react-router-dom";
import LinkProperties, {
  LinkPropertiesExternal,
  LinkPropertiesInternal,
} from "~renderer/components/Link/Link.types";

const Link = ({
  external,
  children,
  href,
  rel,
  insecure,
  ...rest
}: LinkProperties) => {
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
