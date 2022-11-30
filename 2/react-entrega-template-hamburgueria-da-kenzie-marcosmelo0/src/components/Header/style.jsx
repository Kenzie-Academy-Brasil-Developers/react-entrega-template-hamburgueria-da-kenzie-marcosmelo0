import styled from "styled-components";

export const HeaderStyled = styled.header`
  background: #f5f5f5;
  height: 129px;
  padding-top: 14.28px;

  img {
    display: flex;
    margin: 0 auto 13.9px;
  }
  .divSearch {
    position: relative;
    display: flex;
    justify-content: center;
    width: 90%;
    margin: 0 5%;
  }

  .divSearch input {
    background: #ffffff;

    position: relative;
    width: 100%;
  }

  .divSearch button {
    position: absolute;
    right: 10px;
    top: 10px;
  }

  form {
    width: 100%;

    @media (min-width: 700px) {
    }
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
