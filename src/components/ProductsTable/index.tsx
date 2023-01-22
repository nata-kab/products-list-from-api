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
            <Styled.TableTitle cellWidth={10}>Id</Styled.TableTitle>
            <Styled.TableTitle cellWidth={45}>Name</Styled.TableTitle>
            <Styled.TableTitle cellWidth={45}>Year</Styled.TableTitle>
          </Styled.TableHeadRow>
        </Styled.TableHead>
        <Styled.TableBody>
          {products &&
            products.map((item, index) => {
              return (
                <Styled.TableRow
                  onClick={() => handleOpenModal(item)}
                  key={index + item.name}
                  rowColor={item.color}
                >
                  <Styled.TableCell cellWidth={10}>{item.id}</Styled.TableCell>
                  <Styled.TableCell cellWidth={45}>
                    {item.name}
                  </Styled.TableCell>
                  <Styled.TableCell cellWidth={45}>
                    {item.year}
                  </Styled.TableCell>
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
