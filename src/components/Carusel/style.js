import styled from "styled-components";
import { ReactComponent as arrow } from "../../assets/icons/arrow.svg";
import { ReactComponent as beds } from "../../assets/icons/bed.svg";
import { ReactComponent as baths } from "../../assets/icons/bath.svg";
import { ReactComponent as car } from "../../assets/icons/car.svg";
import { ReactComponent as sq } from "../../assets/icons/resize.svg";

const Container = styled.div`
  position: relative;
  width: 100%;
  @media (max-width: 375px) {
    height: 100%;
  }
`;

const Arrow = styled(arrow)`
  width: 45px;
  height: 45px;
  padding: 15px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: ${({ left }) => left && "32px"};
  right: ${({ right }) => right && "32px"};
  transform: rotate(${({ left }) => left && "90deg"});
  transform: rotate(${({ right }) => right && "-90deg"});
  z-index: 100;
  font-size: 20px;
  cursor: pointer;
  @media (max-width: 375px) {
    width: 35px;
    height: 35px;
    padding: 15px;
    position: absolute;
    top: 30%;
    left: ${({ left }) => left && "10px"};
    right: ${({ right }) => right && "10px"};
  }
  &:active {
    transform: scale(0.97);
    transform: rotate(${({ left }) => (left ? "90deg" : "-90deg")});
    opacity: 0.5;
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
  opacity: 0.3;
  background: rgba(0, 0, 0, 0.65);
  width: 100%;
  height: 571px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
`;

const Content = styled.div`
  z-index: 6;
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
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;
Content.Blok = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 24px 0;
  gap: 10px;
  @media (max-width: 375px) {
    font-size: 14px;
  }
`;

const Icons = styled.div``;

Icons.Beds = styled(beds)`
  & path {
    fill: #fff;
  }
`;
Icons.Baths = styled(baths)`
  & path {
    fill: #fff;
  }
`;
Icons.Car = styled(car)`
  & path {
    fill: #fff;
  }
`;
Icons.Sq = styled(sq)`
  & path {
    fill: #fff;
  }
`;
export { Container, Arrow, HouseImage, Gr, Content, Wrapper, Icons };
