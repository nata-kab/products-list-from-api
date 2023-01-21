import styled from "@emotion/styled";

type RowColor = {
  rowColor: string;
};

export const ProductsTableContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Table = styled.table`
  width: 80%;
  margin: 20px 0;
`;

export const TableRow = styled.table<RowColor>`
  display: flex;
  flex-direction: row;
  background-color: ${({ rowColor }) => rowColor};
  width: 100%;
  :hover {
    cursor: pointer;
  }
`;

export const TitleRow = styled.tr`
  display: flex;
  flex-direction: row;
  background-color: aliceblue;
  width: 100%;
`;

export const TitleCell = styled.td`
  display: flex;
  flex-direction: row;
  width: 33%;
  border: 1px solid;
  padding: 10px;
  font-weight: bold;
  font-size: calc(5px + 2vh);
`;
export const TableCell = styled.td`
  display: flex;
  width: 33%;
  border: 1px solid;
  padding: 10px;
  font-size: calc(5px + 1.5vh);
`;
export const TableHead = styled.thead`
  display: flex;
`;
export const TableBody = styled.tbody``;

export const TableTitle = styled.th`
  color: gray;
`;

export const TableHeadRow = styled.tr`
  display: flex;
  align-items: center;
  justify-content: center;
`;
