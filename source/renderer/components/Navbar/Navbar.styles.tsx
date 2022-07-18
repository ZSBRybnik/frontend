import styled from "@emotion/styled";
import { motion } from "framer-motion";

const StyledNavbar = styled(motion.nav)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 5px;
  height: 50px;
  width: 100%;
  background-color: ${({ theme: { accent } }) => accent};
`;

export default StyledNavbar;
