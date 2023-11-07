import styled from "styled-components";
import { ReactComponent as finance } from "../../assets/icons/finance.svg";
import { ReactComponent as see } from "../../assets/icons/see.svg";
import { ReactComponent as trusted } from "../../assets/icons/trusted.svg";
import { ReactComponent as wide } from "../../assets/icons/wide.svg";

const Container = styled.div`
  width: 100%;
  background-color: var(--colorChoose);
  margin-top: 48px;
  padding: 48px 130px;
  @media (max-width: 375px) {
    padding:48px 0;
    height: 100%;
   
  }
`;

const Content = styled.div`
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;

  
  .temporary {
    margin-bottom: 30px;
    @media (max-width: 375px) {
      font-size: 28px;
      
    }
  }
  @media (max-width:375px) {
    .textCard{
        width:300px;
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
  flex-wrap:wrap;
  width: 100%;
  gap: 20px;
  margin-top:40px;
 
  `;
Content.Blok = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 243px;
  height: 250px;
  h3{
    margin-top:24px;
  }
  @media (max-width: 375px) {
    font-size: 14px;
  }
  .textCard1 {
    font-family: "Montserrat";
    display: flex;
    gap: 2px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: #696969;
    text-align:center;
  }
`;

const Icons = styled.div``;
Icons.Beds = styled(finance)`
  & path {
    fill: var(--colorIcons);
  }
`;
Icons.Baths = styled(see)`
  & path {
    fill: var(--colorIcons);
  }
`;
Icons.Car = styled(trusted)`
  & path {
    fill: var(--colorIcons);
  }
`;
Icons.Sq = styled(wide)`
  & path {
    fill: var(--colorIcons);
  }
`;
export { Container, Content, Wrapper, Icons };
