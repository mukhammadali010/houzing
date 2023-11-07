import styled from "styled-components";

const Wrapper = styled.div`
.textpro{
  h3{
    font-size:28px;
  }
}

`
const Container = styled.div`

  display: grid;
  grid-template-rows: auto;
  grid-template-columns: repeat(auto-fit, minmax(310px, 1fr));
  grid-gap: 20px;
  width: 100%;
  max-width:1440px;
  padding: var(--padding);

  @media (max-width:834px) {
    padding: var(--paddingMobile);
  }
  @media (max-width: 375px) {
    padding: 5px 20px;
    margin-top: 280px;
   
  }
`;

export { Container , Wrapper };
