import styled from "styled-components";


const Container = styled.div`
  position: relative;
  width: 100%;
  @media (max-width: 375px) {
    height: 100%;
  }
`;

const HouseImage = styled.img`
  width: 100%;
  height: 100%;
  @media (max-width: 375px) {
    height: 100%;
  }
`;
const Gr = styled.div`
  opacity: 0.7;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65));
  width: 100%;
  height:100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
`;

const Content = styled.div`
  z-index:11;
  position: absolute;
  left: 50%;
  top: 10%;
  transform: translate(-50%, 50%);
  color: white;
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
  .temporary {
    margin-bottom: 30px;
    @media (max-width: 375px) {
      font-size: 28px;
    }
  }
  .pool {
    width: 566px;
    text-align:center;
    margin-bottom:48px;
    @media (max-width: 834px) {
      font-size: 36px;
      font-weight: 600;
    }
    @media (max-width: 375px) {
      font-size: 28px;
    }
  }
  .textHome {
    @media (max-width: 375px) {
      font-size: 14px;
    }
  }
`;
export { Container, HouseImage, Gr, Content };
