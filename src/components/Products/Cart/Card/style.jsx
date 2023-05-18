import styled from "styled-components";

export const StyledCardCart = styled.li`
  width: 100%;
  display: flex;
  padding: 25px 18.45px;

  .divAlinhamento {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .divImgProduct {
    background: #e0e0e0;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
  }

  img {
    width: 70px;
    height: 70px;
  }

  .divDescriptionProduct {
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-left: 10px;
  }

  h2 {
    color: #333333;

    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
  }

  span {
    color: #828282;

    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    cursor: pointer;
  }

  button {
    color: #bdbdbd;

    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    padding-right: 10px;

    &:hover {
      color: #333333;

      text-decoration: underline;
    }
  }

  @media (min-width: 700px) {
    .divCart {
      position: absolute;
      margin-left: 25vw;
    }
  }
`;
