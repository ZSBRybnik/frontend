import styled from "@emotion/styled";
import { motion } from "framer-motion";

const SlideOutMenuWrapper = styled(motion.nav)`
  height: calc(100vh - 50px);
  width: 100vw;
  background: #e05415;
  position: fixed;
  z-index: 1;
  top: 0;
  user-select: none;
  @media all and (min-width: 768px) {
    width: 350px;
    height: 100vh;
  }
`;

export default SlideOutMenuWrapper;
