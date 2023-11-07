import styled from "styled-components";
import { ReactComponent as email } from "../../assets/icons/email.svg";
import { ReactComponent as map } from "../../assets/icons/map.svg";
import { ReactComponent as phone } from "../../assets/icons/phone.svg";
import { ReactComponent as facebook } from "../../assets/icons/facebook.svg";
import { ReactComponent as instagram } from "../../assets/icons/instagram.svg";
import { ReactComponent as twiter } from "../../assets/icons/twiter.svg";
import { ReactComponent as linkedin } from "../../assets/icons/linkedin.svg";
import { ReactComponent as logoImg } from "../../assets/icons/logo.svg";

const Container = styled.div`
  width: 100%;
  background-color: var(--colorPrimary);
  padding: 48px 130px 20px;
  height: 100vh;
  @media (max-width: 834px) {
  padding:var(--padding);
  height: 100%;
  display: center;
  align-items: center;
  justify-content: center;
  padding:30px;
  gap:50px;
  }
  @media (max-width: 375px) {
    padding: 5px 16px;
  }
  
  
  
  .textCard1 {
    font-family: "Montserrat";
    display: flex;
    flex-wrap:wrap;
    overflow:hidden;
    text-overflow:ellipsis;
    gap: 2px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: #fff;
  }
  .discover{
    margin-top:20px;
  }
`;
const FooterLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  @media (max-width: 375px) {
    display: block;
    .textCard1{
      text-align:center;
    }
  }
  .title{
    color:#fff;
  }
  div{
    display: flex;
    align-items: center;
    justify-content: center;
    gap:30px; 
    margin-top:30px;
  }

`
const Content = styled.div`
  color: white;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  @media (max-width: 375px) {
    
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
  align-items: baseline;
  justify-content: space-between;
  flex-wrap:wrap;
  width: 100%;

/*     
@media (max-width: 834px) {
    display:grid;
    grid-template-columns:auto  auto;
    justify-content:center;
    align-items:center;
    gap:40px;
    margin:0 auto;

  }

  @media (max-width: 375px) {
    display:block;
    height:100%;
   
  } */
  
 
`;
Content.Blok = styled.div`
    display: flex;
  flex-direction: column;
 
  /* :not(:first-child){
    margin-left:40px;
  } */
  width: 243px;
  height: 250px;
  h3 {
    font-size: 16px;
    color: #fff;
  }

 


`;
const Devider = styled.div`
margin-top:60px;
width:100%;
background: rgba(255, 255, 255, 0.15);
padding:1px;
`

Content.Footer = styled.div`
  display:flex;
  align-items: center;
  justify-content: start;
  gap: 20px;
  margin: 10px 0;
  span{
    border-radius:3px;
    padding: 12px;
    cursor: pointer;
  }
  span:hover {
    background: rgba(1,1,1,.1);
  }
`;

const Icons = styled.div``;
Icons.Maps = styled(map)`
  & path {
    fill: #fff;
  }
  width: 18px;
`;
Icons.Phone = styled(phone)`
  & path {
    fill: #fff;
  }
  width: 18px;
`;
Icons.Email = styled(email)`
  & path {
    fill: #fff;
  }
  width: 18px;
`;
Icons.Facebook = styled(facebook)`
  & path {
    fill: #fff;
  }
  width: 18px;
  gap: 67px;
`;
Icons.Instagram = styled(instagram)`
  & path {
    fill: #fff;
  }
  width: 18px;
  gap: 67px;
`;
Icons.Twitter = styled(twiter)`
  & path {
    fill: #fff;
  }
  width: 18px;
  gap: 67px;
`;
Icons.Linkedin = styled(linkedin)`
  & path {
    fill: #fff;
  }
  width: 18px;
  gap: 67px;
`;

const Logo = styled(logoImg)`
  width: 30px;
  & path {
    fill: #fff;
  }
`;
export { Container, Content, Wrapper, Icons , Devider ,FooterLogo ,Logo};
