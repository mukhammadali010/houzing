import styled from "styled-components";

const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction:column;
  position: relative;
  width: 100%;
  max-width:1440px;
  padding: 96px 130px;
  .carusel{
   margin:0 auto;
   width:100%;
   .slick-track{
    width: 100% !important;
   }
  }
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction:column;
  width: 100%;
  margin-bottom:32px;
`

export { Container , Content};
