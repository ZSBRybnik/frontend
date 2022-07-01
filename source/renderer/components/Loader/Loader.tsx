import {
  StyledLoader,
  AnimatedLoader,
  StyledLogo,
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
    config: { mass: 5, tension: 100 },
    loop: true,
  });

  return (
    <StyledLoader>
      <StyledLogo src="./images/logo_light.webp" />
      <AnimatedLoader style={animatedLoader} />
    </StyledLoader>
  );
};

export default Loader;
