import { FC } from "react";
import * as Styled from "./PageNotFound.styled";

const PageNotFound: FC = () => {
  return (
    <Styled.PageNotFound>
      <Styled.ErrorMessage>Page not found. Error 404</Styled.ErrorMessage>
    </Styled.PageNotFound>
  );
};

export default PageNotFound;
