import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  background-color: var(--colorChoose);
  margin-top: 48px;
  padding: 48px 130px;
  @media (max-width: 375px) {
    height: 100%;
  }
  .textCard1 {
    font-family: "Montserrat";
    display: flex;
    text-align: center;
    gap: 2px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: #696969;
    text-align: center;
  }

`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  @media (max-width: 375px) {
    position: absolute;
    top: 40px;
    transform: translate(-50%, 5%);
  }
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content:center;
  width: 100%;
  gap: 10px;
  margin-top: 40px;
  margin: 20px;
  padding:20px;
`;
Content.Blok = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 243px;
  height: 250px;
  h3 {
    margin-top: 24px;
  }
  @media (max-width: 375px) {
    font-size: 14px;
  }

  .test {
    line-height: 3px;
  }
`;
Content.Text = styled.div`
  width: 340px;
  height: 197px;
  /* Color / 5 */
  background: #ffffff;
  /* Box - Shadow */
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px 48px;
  cursor: pointer;
`;
Content.Avatar = styled.img`
  width: 42px;
  height: 42px;
  margin-top: -20px;
  border-radius: 50%;
  box-shadow: 0px 0px 10px rgba(13, 38, 59, 0.2);
`;
export { Container, Content, Wrapper };
