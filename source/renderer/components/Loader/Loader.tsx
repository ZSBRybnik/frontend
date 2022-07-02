import { useSpring } from "react-spring";
import {
  AnimatedLoader,
  StyledLoader,
} from "~renderer/components/Loader/Loader.styles";

const Loader = (): JSX.Element => {
  const animatedLoader = useSpring({
    from: {
      transform: "rotate(0deg)",
    },
    to: {
      transform: "rotate(360deg)",
    },
    config: { mass: 5, tension: 300 },
    loop: true,
  });

  return (
    <StyledLoader>
      {/* <StyledLogo src="https://zsbrybnik.pl/wp-content/uploads/2017/09/logo_zsb_small.png" /> */}
      <AnimatedLoader style={animatedLoader} />
    </StyledLoader>
  );
};

export default Loader;
