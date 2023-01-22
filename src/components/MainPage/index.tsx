import { FC } from "react";
import { useSelector } from "react-redux";
import FilterInput from "../FilterInput";
import ProductsTable from "../ProductsTable";
import useHandleProductRoute from "../../helpers/useHandleProductRoute";
import { RootState } from "../../store/store";
import * as Styled from "./MainPage.styled";
import { Alert } from "@mui/material";

const MainPage: FC = () => {
  const { apiErrorCode, apiResponseTextStatus } = useSelector(
    (state: RootState) => state.apiData
  );

  useHandleProductRoute();

  return (
    <Styled.MainPage>
      {apiErrorCode && (
        <Alert
          variant="filled"
          severity="error"
          sx={{
            borderRadius: 5,
            position: "absolute",
            top: "125px",
            alignSelf: "center",
          }}
        >
          Bad server response. {apiResponseTextStatus} Error code:
          {apiErrorCode}
        </Alert>
      )}
      <FilterInput />
      <ProductsTable />
    </Styled.MainPage>
  );
};

export default MainPage;
