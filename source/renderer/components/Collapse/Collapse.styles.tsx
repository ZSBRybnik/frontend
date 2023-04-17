import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

type CollapseTopWrapperProperties = {
  isOpen: boolean;
};

export const CollapseTopWrapper = styled.div<CollapseTopWrapperProperties>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ddd;
  ${({ isOpen }) => {
    return (
      isOpen &&
      css`
        border-bottom: none;
      `
    );
  }}
  padding: 5px;
`;

export const CollapseWrapper = styled.div``;

type CollapseContentProperties = {
  isOpen: boolean;
};

export const CollapseContent = styled(motion.div)<CollapseContentProperties>`
  overflow-y: hidden;
  display: flex;
  ${({ isOpen }) => {
    return (
      isOpen &&
      css`
        border: 1px solid #ddd;
      `
    );
  }}//padding: 5px;
`;
