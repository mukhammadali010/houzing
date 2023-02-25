import styled from "styled-components";

import { ReactComponent as house } from "../../assets/icons/houses.svg";
import { ReactComponent as setting } from "../../assets/icons/setting.svg";
import { ReactComponent as search } from "../../assets/icons/search.svg";

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 20px;
  border: 1px solid #eee;
  margin: 10px auto;
  padding: var(--padding);
  @media (max-width: 1920px) {
    padding: 5px 240px;
  }
  @media (max-width: 1440px) {
    padding: 5px 130px;
  }

  @media (max-width: 1150px) {  
    padding: 5px 80px;
  }

  @media (max-width: 1080px) {
    padding: 5px 50px;
  }
  @media (max-width: 1024px) {
    padding: 5px 30px;
  }
  @media (max-width: 375px) {
    position: absolute;
    top:400px;
    z-index:10;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction:column;
    width: 343px;
    height:fit-content;
    border-radius:3px;
    .dropdown{
      border: 1px solid yellow;
    }
  }
  .inputWrapper {
    position: relative;
    display: flex;
    align-items: center;
  }
  
  .buttonWrapper{
    display: flex;
    gap:24px;
    padding:24px;
  }
`;
const Icons = styled.div``;
Icons.House = styled(house)`
  position: absolute;
  @media (max-width: 1920px) {
    left: 260px;
  }
  @media (max-width: 1440px) {
    left: 160px;
  }
  @media (max-width: 1366px) {
    left: 150px;
  }
  @media (max-width: 1150px) {  
    left: 100px;
    
  }

  @media (max-width: 1080px) {
    left: 70px;
  }
  @media (max-width: 1024px) {
    left:50px;  
  }
  @media (max-width: 375px) {
    top:55px;
    left:50px;  
  }
`;
Icons.Setting = styled(setting)`
  position: absolute;
  left: 20px;
`;
Icons.Search = styled(search)``;

export { Container, Icons };
