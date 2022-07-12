import type { FunctionComponent } from "react";
import { useSpring } from "react-spring";
import {
  AnimatedLoader,
  LoaderWrapper,
  StyledLoader,
} from "~renderer/components/Loader/Loader.styles";

const Loader: FunctionComponent = (): JSX.Element => {
  const animatedLoader = useSpring({
    from: {
      width: "0%",
      transform: "translateX(0%)",
    },
    to: [
      {
        width: "100%",
        transform: "translateX(0%)",
      },
      {
        width: "100%",
        transform: "translateX(100%)",
      },
    ],
    config: { mass: 1, tension: 100 },
    loop: true,
  });

  return (
    <StyledLoader>
      <LoaderWrapper>
        <AnimatedLoader style={animatedLoader} />
      </LoaderWrapper>
    </StyledLoader>
  );
};

export default Loader;
