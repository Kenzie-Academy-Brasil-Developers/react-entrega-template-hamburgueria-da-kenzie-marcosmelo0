import styled from "styled-components";

export const MainContainer = styled.main`
  dialog::backdrop {
    background-color: rgb(0 0 0 / 0.5);
  }

  dialog {
    border: none;
    display: flex;
    top: 10vh;
    flex-direction: column;
    box-shadow: rgb(0 0 0 / 0.5);

    section {
      margin: 0;
      padding: 0;
    }
  }

  .sectionCart {
    @media (min-width: 700px) {
      width: 40vw;
    }
  }

  @media (min-width: 700px) {
    display: flex;
  }
`;

export const ContainerApp = styled.section`
  width: 100%;
`;
