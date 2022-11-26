import useIsSlideOutMenuOpenStore from "../../stores/isSlideOutMenuOpenStore/isSlideOutMenuOpenStore";
import { OverlayWrapper } from "./Overlay.styles";

const Overlay = () => {
  const { value: isSlideOutMenuOpen, setValue: setIsSlideOutMenuOpen } =
    useIsSlideOutMenuOpenStore();

  return (
    <OverlayWrapper
      isSlideOutMenuOpen={isSlideOutMenuOpen}
      onClick={() => {
        setIsSlideOutMenuOpen(false);
      }}
    />
  );
};

export default Overlay;
