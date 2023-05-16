import styled from "styled-components";

export const InputSearch = styled.input`
  background: #ffffff;
  border: 2px solid #e0e0e0;

  padding: 0px 10px 0px 15px;
  border-radius: 8px;
  width: 100%;
  height: 60px;

  &::placeholder {
    color: #e0e0e0;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
  }

  &:focus {
    outline-color: #333333;
  }

  @media (min-width: 700px) {
    width: 50%;
  }
`;
