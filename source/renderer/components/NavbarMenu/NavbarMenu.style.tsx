import styled from "@emotion/styled";
import { motion } from "framer-motion";

const StyledNavbarMenu = styled(motion.div)`
  position: absolute;
  left: 0;
  top: 50px;
  padding: 10px;
  height: calc(100% - 50px);
  width: 300px;
  @media (max-width: 768px) {
    top: 0;
  }
  background-color: ${({ theme: { accent } }) => accent};
`;

export default StyledNavbarMenu;
