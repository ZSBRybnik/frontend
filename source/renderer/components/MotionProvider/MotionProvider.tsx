import { MotionConfig } from "framer-motion";
import { FunctionComponent, PropsWithChildren } from "react";
import { useBattery } from "react-use";

type MotionProviderProperties = PropsWithChildren;

const MotionProvider: FunctionComponent<MotionProviderProperties> = ({
  children,
}: MotionProviderProperties): JSX.Element => {
  const {
    isSupported,
    fetched,
    charging,
    level,
  }: {
    isSupported: boolean;
    fetched: boolean;
    charging: boolean;
    level: number;
  } = useBattery() as {
    isSupported: boolean;
    fetched: boolean;
    charging: boolean;
    level: number;
  };

  return (
    <MotionConfig
      reducedMotion={
        isSupported && fetched && !charging && level <= 0.25 ? "never" : "user"
      }
    >
      {children}
    </MotionConfig>
  );
};

export default MotionProvider;
