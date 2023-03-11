import styled from "styled-components";

const Container = styled.div`

  display: grid;
  grid-template-rows: auto;
  grid-template-columns: repeat(auto-fit, minmax(310px, 1fr));
  grid-gap: 20px;
  width: 100%;
  max-width:1440px;
  padding: var(--padding);
  @media (max-width: 1366px) {
    padding: 5px 130px;
  }
  @media (max-width: 375px) {
    padding: 5px 20px;
    margin-top: 429px;
  }
`;

export { Container };
