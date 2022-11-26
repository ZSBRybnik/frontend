import useDeviceBreakpointsStore from "../../stores/deviceBreakpointsStore/deviceBreakpointsStore";
import useIsSlideOutMenuOpenStore from "../../stores/isSlideOutMenuOpenStore/isSlideOutMenuOpenStore";
import SlideOutMenuWrapper from "./SlideOutMenu.styles";

const SlideOutMenu = () => {
  const { value: isSlideOutMenuOpen } = useIsSlideOutMenuOpenStore();
  const { isMobile } = useDeviceBreakpointsStore();
  return (
    <SlideOutMenuWrapper
      animate={{
        left: isSlideOutMenuOpen ? "0" : isMobile ? "-100vw" : "-350px",
      }}
      initial={{ left: isMobile ? "-100vw" : "-350px" }}
      transition={{
        type: "Spring",
        stiffness: 250,
        duration: 1,
        damping: 50,
        mass: 0.5,
      }}
    >
      123
    </SlideOutMenuWrapper>
  );
};

export default SlideOutMenu;
