import {
  StyledLoader,
  AnimatedLoader,
} from "~renderer/components/Loader/Loader.styles";
import { useSpring } from "react-spring";

const Loader = (): JSX.Element => {
  const animatedLoader = useSpring({
    from: {
      transform: "rotate(0deg)",
    },
    to: {
      transform: "rotate(360deg)",
    },
    config: { mass: 3, tension: 100 },
    loop: true,
  });

  return (
    <StyledLoader>
      <AnimatedLoader style={animatedLoader}>
        <h1>AYOOOOO</h1>
      </AnimatedLoader>
    </StyledLoader>
  );
};

export default Loader;
