import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 1440px;
  display: flex;
  flex-direction: column;
  .wrap {
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: repeat(auto-fit, minmax(310px, 1fr));
    grid-gap: 20px;
    width: 100%;
    max-width: 1440px;
    padding: var(--padding);
    @media (max-width: 1366px) {
      padding: 5px 130px;
    }
    @media (max-width: 375px) {
      padding: 5px 20px;
      margin-top: 429px;
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
