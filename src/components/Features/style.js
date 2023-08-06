import styled from "styled-components";
import { ReactComponent as conditioner } from "../../assets/icons/air-conditioner 1.svg";
import {ReactComponent as barbeque} from '../../assets/icons/barbecue 1.svg';
import {ReactComponent as dryer} from '../../assets/icons/dryer.svg';
import {ReactComponent as gym} from '../../assets/icons/dumbbell.svg';
import {ReactComponent as lawn} from '../../assets/icons/grass 1.svg';
import {ReactComponent as laundry} from '../../assets/icons/laundry.svg';
import {ReactComponent as microwave} from '../../assets/icons/microwave.svg';
import {ReactComponent as outdoor} from '../../assets/icons/outdoor-shower.svg';
import {ReactComponent as refrigerator} from '../../assets/icons/refrigerator.svg';
import {ReactComponent as sauna} from '../../assets/icons/sauna.svg';
import {ReactComponent as coaxial} from '../../assets/icons/coaxial.svg';
import {ReactComponent as swimming} from '../../assets/icons/swimmer.svg';
import {ReactComponent as washer} from '../../assets/icons/liquid-soap.svg';
import {ReactComponent as wifi} from '../../assets/icons/wifi.svg';
import {ReactComponent as blinds} from '../../assets/icons/blinds (1).svg';
import {ReactComponent as dinning} from '../../assets/icons/chair.svg';
const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  border-bottom: 2px solid #eee;
  padding: 48px 0;
  h3 {
    margin-bottom: 30px;
  }
`;
const DownloadWapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: ${({ location }) => (location ? "column" : "none")};
  gap: 15px;
  .address {
    width: 45px;
    height: 45px;
    padding:5px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: var(--bg-1, #f6f8f9);
  }
  div {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
  }
`;

const Icon = styled.div``;

Icon.Conditioner = styled(conditioner)`
  width: 25px;
  height: 25px;
  & path {
    fill: #696969;
  }
`;

Icon.Barbeque = styled(barbeque)`
  width: 25px;
  height: 25px;
  & path {
    fill: #696969;
  }
`;
Icon.Dryer = styled(dryer)`
  width: 25px;
  height: 25px;
  & path {
    fill: #696969;
  }
`;
Icon.Lawn = styled(lawn)`
  width: 25px;
  height: 25px;
  & path {
    fill: #696969;
  }
`;
Icon.Laundry = styled(laundry)`
  width: 25px;
  height: 25px;
  & path {
    fill: #696969;
  }
`;
Icon.Gym = styled(gym)`
  width: 25px;
  height: 25px;
  & path {
    fill: #696969;
  }
`;
Icon.Microwave = styled(microwave)`
  width: 25px;
  height: 25px;
  & path {
    fill: #696969;
  }
`;
Icon.Outdoor = styled(outdoor)`
  width: 25px;
  height: 25px;
  & path {
    fill: #696969;
  }
`;
Icon.Refrigerator = styled(refrigerator)`
  width: 25px;
  height: 25px;
  & path {
    fill: #696969;
  }
`;
Icon.Sauna = styled(sauna)`
  width: 25px;
  height: 25px;
  & path {
    fill: #696969;
  }
`;
Icon.Coaxial = styled(coaxial)`
  width: 25px;
  height: 25px;
  & path {
    fill: #696969;
  }
`;
Icon.Swimming = styled(swimming)`
  width: 25px;
  height: 25px;
  & path {
    fill: #696969;
  }
`;
Icon.Washer = styled(washer)`
  width: 25px;
  height: 25px;
  & path {
    fill: #696969;
  }
`;
Icon.Wifi = styled(wifi)`
  width: 25px;
  height: 25px;
  & path {
    fill: #696969;
  }
`;
Icon.Blinds = styled(blinds)`
  width: 25px;
  height: 25px;
  & path {
    fill: #696969;
  }
`;
Icon.Dinning = styled(dinning)`
  width: 25px;
  height: 25px;
  & path {
    fill: #696969;
  }
`;
export { Container, DownloadWapper, Icon };
