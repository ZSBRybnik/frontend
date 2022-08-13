import { PropsWithChildren } from "react";
import { TableOuterWrapper, TableWrapper } from "./Table.styles";

type TableProperties = PropsWithChildren;

const Table = (props: TableProperties) => {
  return (
    <TableOuterWrapper>
      <TableWrapper>
        <tbody {...props} />
      </TableWrapper>
    </TableOuterWrapper>
  );
};

export default Table;
