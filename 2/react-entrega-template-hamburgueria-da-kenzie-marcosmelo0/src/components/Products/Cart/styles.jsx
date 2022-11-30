import styled from "styled-components";

export const HeaderCart = styled.div`
  background: #27ae60;
  color: #ffffff;

  font-weight: 700;
  font-size: 18px;
  line-height: 24px;

  display: flex;
  align-items: center;
  padding-left: 6%;
  height: 65px;
  width: 90vw;
  border-radius: 5px 5px 0px 0px;
  margin-left: 5%;

  @media (min-width: 700px) {
    position: relative;
    width: 100%;
    max-width: 365px;
    margin: 20px 0 0;
  }
`;

export const StyledCartUl = styled.ul`
  background: #f5f5f5;
  border-radius: 0px 0px 5px 5px;
  width: 90vw;
  margin-left: 5%;
  padding-bottom: 5%;
  margin-bottom: 5%;

  hr {
    width: 90%;
    margin-left: 5%;
    border: 2px solid #e0e0e0;
  }

  button {
    width: 90%;
    margin: 0 5%;
  }

  @media (min-width: 700px) {
    max-width: 365px;
    width: 100%;
    margin: 0;
}
`;

export const StyledEmptyCart = styled.section`
  .cardProduct {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #f5f5f5;
    border-radius: 0px 0px 5px 5px;
    min-height: 158px;
    width: 95vw;

    @media (min-width: 700px) {
      width: 100%;
      max-width: 365px;
    }
  }

  .cardProduct h2 {
    color: #333333;

    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
  }

  .cardProduct span {
    color: #828282;

    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
  }

  @media (min-width: 700px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 365px;
  }
`;
