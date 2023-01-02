import styled from "styled-components";

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;

  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  color: #333333;

  gap: 18px;
  margin: 0 18px 0 13px;
  padding: 21px 18px;

  background: #ffffff;

  border: 2px solid #f5f5f5;
  box-shadow: 0px 0px 30px -20px rgba(0, 0, 0, 0.25);
  border-radius: 5px;

  h2 {
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
  }

  span {
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;

    text-align: center;

    color: #999999;
  }

  label {
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;

    color: #999999;
  }

  @media (min-width: 700px) {
    width: 50%;
    margin-top: 25vh;
    margin-right: 10px;
  }

  .divRegister {
    display: flex;
    justify-content: space-between;

    color: #828282;

    font-weight: 500;
    font-size: 14px;
    line-height: 22px;
  }

  a{
    text-decoration: underline;
  }
`;

export const InputStyled = styled.input`
  padding: 0px 15px;
  height: 60px;

  background: #f5f5f5;
  border: 2px solid #f5f5f5;
  border-radius: 8px;

  &:focus {
    background: #ffffff;
    outline-color: #333333;
  }
`;
