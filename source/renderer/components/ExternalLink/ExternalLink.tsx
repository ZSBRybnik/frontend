import {
  AnchorHTMLAttributes,
  DetailedHTMLProps as DetailedHTMLProperties,
  FunctionComponent,
  useMemo,
} from "react";

export type ExternalLinkProperties = DetailedHTMLProperties<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
> & {
  insecure?: boolean;
};

const ExternalLink: FunctionComponent<ExternalLinkProperties> = ({
  children,
  rel,
  insecure,
  ...rest
}: ExternalLinkProperties): JSX.Element => {
  const fixedRelation: string = useMemo((): string => {
    const propertiesRelation: string = ` ${rel}`;
    return `${insecure ? "" : "noopener noreferrer"}${
      rel ? propertiesRelation : ""
    }`;
  }, [rel]);
  return (
    <a rel={fixedRelation || undefined} {...rest}>
      {children}
    </a>
  );
};

export default ExternalLink;
