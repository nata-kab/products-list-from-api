import styled from "@emotion/styled";
import { darken } from "@mui/material";

type RowColor = {
  rowColor: string;
};
type CellProperties = {
  cellWidth: number;
};

export const ProductsTableContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Table = styled.table`
  width: 90%;
  max-width: 700px;
  margin: 30px 0;
  border-collapse: collapse;
  border-radius: 5px;
  overflow: hidden;
`;

export const TableRow = styled.tr<RowColor>`
  background-color: ${({ rowColor }) => rowColor};
  cursor: pointer;

  :hover {
    background-color: ${({ rowColor }) => darken(rowColor, 0.2)};
  }
`;

export const TableCell = styled.td<CellProperties>`
  width: ${({ cellWidth }) => `${cellWidth}%`};
  border: none;
  padding: 15px 10px;
  text-align: center;
`;
export const TableHead = styled.thead``;
export const TableBody = styled.tbody`
  flex-direction: column;
`;

export const TableTitle = styled.th<CellProperties>`
  color: dimgray;
  width: ${({ cellWidth }) => `${cellWidth}%`};
  padding: 15px 10px;
  background-color: #d4d4d4;
  text-align: center;
`;

export const TableHeadRow = styled.tr``;
