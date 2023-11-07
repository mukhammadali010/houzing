import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  width: 100%;
  max-width: 1440px;
  padding:var(--paddding);

  @media (max-width:834px) {
    padding:var(--paddingMobile);
  }

  .carusel {
    width: 100%;
    .slick-track { 
      display:flex;
      gap:20px;
      width: 100%!important;
      padding:var(--padding);
      @media (max-width:834px) {
        padding:0;
      }
      padding:var(--padding);
    }
  }
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  margin-bottom: 32px;
`;

export { Container, Content };
