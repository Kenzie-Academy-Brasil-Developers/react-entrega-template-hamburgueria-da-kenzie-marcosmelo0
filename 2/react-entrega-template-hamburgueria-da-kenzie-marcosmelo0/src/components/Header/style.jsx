import styled from "styled-components";

export const HeaderStyled = styled.header`
  background: #f5f5f5;
  height: 80px;
  padding-top: 25px;

  .divImg {
    display: flex;
    margin: 0 5%;
    justify-content: space-between;

    div {
      display: flex;
      position: relative;
      justify-content: space-between;
      gap: 20px;
    }

    span {
      display: flex;
      align-items: center;
      justify-content: center;

      position: absolute;
      top: -15px;
      right: 0;
      left: 18px;

      padding: 3px 11px;
      border-radius: 50%;

      font-weight: 900;
      font-size: 14px;

      background: #27ae60;
      color: #ffffff;
    }
  }

  .divSearch {
    position: relative;
    display: flex;
    bottom: 40px;
    width: 90%;
    margin: 0 5%;
  }

  .divSearch input {
    background: #ffffff;

    position: relative;
    width: 100%;
  }

  .divSearch img {
    position: absolute;
    right: 10px;
    top: 10px;
  }

  form {
    width: 100%;
  }

  @media (min-width: 700px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0 0 115px;
    margin: 0;
    gap: 50px;

    .divImg {
      width: 158px;
      height: 36.83px;
    }

    .divSearch {
      width: 100%;
      max-width: 365px;
    }
  }
`;

export const HeaderStyled2 = styled.header`
  margin: 2.4775rem 1.1875rem 2.1875rem 1.125rem;

  @media (min-width: 700px) {
    position: absolute;
    width: 45%;
    left: 52vw;
    margin-top: 10vh;
  }

  .header {
    width: 100%;
  }

  .elementHeader {
    display: none;

    @media (min-width: 700px) {
      display: inline;
    }
  }
`;
