import styled from "styled-components";

const Container = styled.div`
position: relative;
padding-top:70px;
  margin-top: 96px;
  width: 100%;
  max-width: 1440px;
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: repeat(auto-fit, minmax(310px, 1fr));
  grid-gap: 20px;
  width: 100%;
  max-width: 1440px;
  padding: 16px ${({ padding }) => (padding ? `${padding}px` : "130px")};
  .carusel {
    margin-top:90px;
  
    gap: 10px;
    width: 100%;
    padding-left: 10px;
  }
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction:column;
  width: 100%;
  position: absolute;
  top:10px;
`

export { Container  ,Content};
