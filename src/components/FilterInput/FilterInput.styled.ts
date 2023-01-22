import styled from "@emotion/styled";

type InputProps = {
  status: string;
};

export const Input = styled.input<InputProps>`
  line-height: 28px;
  width: 200px;
  padding: 10px;
  margin: 20px auto;
  background: #ffffff;
  border: 3px solid #3457d5;
  border-radius: 15px;
  box-shadow: 2px 2px 30px 0px rgba(0, 0, 0, 0.1);
  &::placeholder {
    color: #696969;
  }
  &:focus {
    border: 3px solid #bebebe;
  }
  &:hover {
    border-color: #696969;
  }
`;
