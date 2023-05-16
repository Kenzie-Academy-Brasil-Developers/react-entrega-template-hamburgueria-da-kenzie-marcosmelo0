import styled from "styled-components";

export const ContainerProducts = styled.section`
  margin: 0 5%;

  strong {
    color: #828282;
    font-weight: 700;
    font-size: 26px;
    line-height: 34px;
  }

  h2 {
    color: #333333;

    margin-top: 30px;

    font-weight: 700;
    font-size: 26px;
    line-height: 34px;
  }
`;

export const StyledUl = styled.ul`
  display: flex;
  overflow-x: auto;
  gap: 20px;

  @media (min-width: 700px) {
    display: flex;
    margin: 0 5vw;
    flex-wrap: wrap;
  }
`;

export const StyledLi = styled.li`
  display: flex;
  flex-direction: column;

  min-width: 230px;
  gap: 14px;
  margin: 15px 0 20px;

  background: #ffffff;
  border: 2px solid #e0e0e0;
  border-radius: 5px;

  &:hover {
    scale: 1.05;
  }

  div {
    background: #f5f5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 150px;
    margin-bottom: 5px;
  }

  img {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  span {
    color: #828282;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
  }

  h3 {
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    color: #333333;
  }

  h3,
  span {
    padding-left: 5%;
  }

  button {
    margin-left: 5%;
    margin-bottom: 23px;
  }

  .priceProduct {
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    color: #27ae60;
  }
`;
