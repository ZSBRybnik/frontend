import styled from "@emotion/styled";

export const PostWrapper = styled.div`
  cursor: pointer;
  height: 150px;
  width: 100%;
  display: flex;
  margin-bottom: 15px;
  color: #111;
  background: #eee;
  &:hover {
    background: #ddd;
  }
  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const PostTextWrapper = styled.div`
  margin-left: 15px;
  width: calc(100% - 160px);
  height: 150px;
  display: flex;
  align-items: center;
  text-overflow: ellipsis;
  margin: 0 15px;
  display: flex;
  flex-direction: column;
`;

export const PostImage = styled.img`
  height: 150px;
  display: block;
  width: 150px;
  object-fit: cover;
`;

export const PostTitle = styled.div`
  margin-top: 5px;
  line-height: 5.6vw;
  font-size: 5.6vw;
  height: 150px;
  width: 100%;
  font-weight: 700;
  white-space: wrap;
  overflow: hidden;
  text-overflow: ellipsis;
  @media all and (min-width: 768px) {
    margin-top: 0;
    height: 75px;
    line-height: 75px;
    font-size: 32px;
    white-space: nowrap;
  }
`;
export const PostBrief = styled.div`
  display: none;
  height: 75px;
  width: 100%;
  font-size: 3.5vw;
  overflow: hidden;
  text-overflow: ellipsis;
  @media all and (min-width: 768px) {
    display: block;
    font-size: 16px;
  }
`;
