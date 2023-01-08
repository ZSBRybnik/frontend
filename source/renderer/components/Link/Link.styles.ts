import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Link } from "react-router-dom";

const linkStyles = css`
  text-decoration: none;
  color: #111;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
`;

export const LinkContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background: #eee;
  border: 1px solid #ddd;
  padding: 7.5px;
  cursor: pointer;
  width: 100%;
  &:hover {
    background: #ddd;
  }
`;

export const LinkWrapperExternal = styled.a`
  ${linkStyles}
`;

export const LinkWrapperInternal = styled(Link)`
  ${linkStyles}
`;

export const LinkHeader = styled.h3`
  margin-bottom: 10px;
`;
