import { FC } from "react";
import { useSelector } from "react-redux";
import FilterInput from "../FilterInput";
import Pagination from "../Pagination";
import ProductsTable from "../ProductsTable";
import useHandleProductRoute from "../../helpers/useHandleProductRoute";
import { RootState } from "../../store/store";
import * as Styled from "./MainPage.styled";

const MainPage: FC = () => {
  const { apiErrorCode, apiResponseTextStatus } = useSelector(
    (state: RootState) => state.apiData
  );

  useHandleProductRoute();

  return (
    <Styled.MainPage>
      <Styled.InputContainer>
        <FilterInput />
        {apiErrorCode && (
          <Styled.ErrorMessage>
            Bad server response. {apiResponseTextStatus} Error code:
            {apiErrorCode}
          </Styled.ErrorMessage>
        )}
      </Styled.InputContainer>
      <ProductsTable />
      <Pagination />
    </Styled.MainPage>
  );
};

export default MainPage;
