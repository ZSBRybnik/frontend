import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const CollapseTopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ddd;
  padding: 5px;
`;

export const CollapseWrapper = styled.div``;

export const CollapseContent = styled(motion.div)`
  overflow-y: hidden;
  display: flex;
  border: 1px solid #ddd;
  border-top: none;
  //padding: 5px;
`;
