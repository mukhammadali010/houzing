import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  /* padding: var(--padding); */
  display: flex;
  align-items: center;
  justify-content: center;
  max-width:410px;
  @media (max-width:834px) {
  padding: var(--paddingMobile);
  }
`;
const Content = styled.div`
  /* width: 100%; */
  background: #ffffff;
  padding: 24px 30px;
  margin: 64px auto;
  border: 1px solid #e6e9ec;
  box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
  border-radius: 3px;
  h3 {
    margin-bottom: 44px;
  }
  .label {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color: #0d263b;
  }
`;

const Check = styled.input`
  width: 18px;
  height: 18px;
  background: #ffffff;
  border: 2px solid #e6e9ec;
`;

const Forgot = styled.a`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-decoration-line: underline;
  color: #0061df;
  cursor: pointer;
`;
const Remember = styled.p`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #696969;
`;
const WrapperForgot = styled.div`
  width: 100%;
  margin: 30px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const CheckBlok = styled.div`
  gap: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export {
  Container,
  Content,
  Check,
  Forgot,
  Remember,
  WrapperForgot,
  CheckBlok,
};
