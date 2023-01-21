import { useState, useRef } from "react";
import { useSelector } from "react-redux";

import { ProductsDataPattern } from "../../store/slices/apiDataSlice";
import { RootState } from "../../store/store";
import useGetApiData from "../../helpers/useGetApiData";
import * as Styled from "./ProductsTable.styled";
import ProductModal from "../ProductModal";
import productScheme from "../../helpers/ProductScheme";
import TablePagination from "../TablePagination";

const ProductsTable = () => {
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);

  const { products } = useSelector((state: RootState) => state.apiData);

  const chosenProductDataRef = useRef<ProductsDataPattern>(productScheme);

  useGetApiData();

  const handleOpenModal = (item: ProductsDataPattern) => {
    chosenProductDataRef.current = item;
    setIsProductModalOpen(true);
  };

  return (
    <Styled.ProductsTableContainer>
      <ProductModal
        isProductModalOpen={isProductModalOpen}
        setIsProductModalOpen={setIsProductModalOpen}
        chosenProductDataRef={chosenProductDataRef}
      />
      <Styled.Table>
        <Styled.TableHead>
          <Styled.TableHeadRow>
            <Styled.TableTitle>Colors from api</Styled.TableTitle>
          </Styled.TableHeadRow>
        </Styled.TableHead>
        <Styled.TableBody>
          <Styled.TitleRow>
            <Styled.TitleCell>Id</Styled.TitleCell>
            <Styled.TitleCell>Name</Styled.TitleCell>
            <Styled.TitleCell>Year</Styled.TitleCell>
          </Styled.TitleRow>
          {products &&
            products.map((item, index) => {
              return (
                <Styled.TableRow
                  onClick={() => handleOpenModal(item)}
                  key={index + item.name}
                  rowColor={item.color}
                >
                  <Styled.TableCell>{item.id}</Styled.TableCell>
                  <Styled.TableCell>{item.name}</Styled.TableCell>
                  <Styled.TableCell>{item.year}</Styled.TableCell>
                </Styled.TableRow>
              );
            })}
        </Styled.TableBody>
      </Styled.Table>
      <TablePagination />
    </Styled.ProductsTableContainer>
  );
};
export default ProductsTable;
