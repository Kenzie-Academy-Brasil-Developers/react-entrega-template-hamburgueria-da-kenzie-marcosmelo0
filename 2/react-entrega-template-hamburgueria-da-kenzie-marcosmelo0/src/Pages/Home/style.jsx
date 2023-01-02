import styled from "styled-components";

export const MainContainer = styled.main`

  dialog {
    position: absolute;
    border: none;
    display: flex;
    top: 10vh;
    flex-direction: column;

    section {
      margin: 0;
      padding: 0;
      
    }
    
  }
  
  .divCart {
    @media (min-width: 700px) {
      margin-right: 5%;
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
