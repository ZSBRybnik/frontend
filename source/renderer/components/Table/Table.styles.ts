import styled from "@emotion/styled";

export const TableOuterWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
  margin: 0 auto;
`;

export const TableWrapper = styled.table`
  border: 1px solid #ddd;
  border-collapse: collapse;
  width: 100%;
  td,
  th {
    border: 1px solid #ddd;
    padding: 15px;
    text-align: center;
  }
`;
