/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import {
  AnchorHTMLAttributes,
  DetailedHTMLProps as DetailedHTMLProperties,
  FunctionComponent,
  useMemo,
} from "react";
import target, {
  TargetType,
} from "~frontend/source/shared/constants/target/target";
import ExtendedWindow from "~frontend/source/shared/types/extendedWindow/extendedWindow";

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
  onClick,
  href,
  ...rest
}: ExternalLinkProperties): JSX.Element => {
  const fixedRelation: string = useMemo((): string => {
    const propertiesRelation: string = ` ${rel}`;
    return `${insecure ? "" : "noopener noreferrer"}${
      rel ? propertiesRelation : ""
    }`;
  }, [rel]);
  return (
    <a
      rel={fixedRelation || undefined}
      onClick={(
        event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
      ): void => {
        if (target === TargetType.Desktop && href) {
          event.preventDefault();
          (window as ExtendedWindow).api?.openExternalLink({ url: href });
        }
        onClick && onClick(event);
      }}
      href={href}
      {...rest}
    >
      {children}
    </a>
  );
};

export default ExternalLink;
