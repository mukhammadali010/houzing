import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: 100%;
  max-width:1440px;
  padding: 96px 130px;
  /* @media (max-width: 1366px) {
    padding: 5px 130px;
  }
  @media (max-width: 375px) {
    padding: 5px 20px;
    margin-top: 429px;
  } */

  .carusel{
   gap:10px;
   margin:0 auto;
   width:100%;
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
