import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as logoImg } from "../../assets/icons/logo.svg";
import { ReactComponent as menu } from "../../assets/icons/nav.svg";
import { ReactComponent as user } from "../../assets/icons/user.svg";
import { ReactComponent as instagram } from "../../assets/icons/instagram.svg";
import { ReactComponent as linkedin } from "../../assets/icons/linkedin.svg";
import { ReactComponent as facebook } from "../../assets/icons/facebook.svg";
import { ReactComponent as twiter } from "../../assets/icons/twiter.svg";
const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: var(--colorPrimary);
  padding: var(--padding);
  color: #fff;
  @media (max-width: 1920px) {
    padding: 5px 370px;
  }
  @media (max-width: 1150px) {
    padding: 5px 80px;
  }

  @media (max-width: 1440px) {
    padding: 5px 130px;
  }
  @media (max-width: 1080px) {
    padding: 5px 50px;
  }
  @media (max-width: 1024px) {
    padding: 5px 30px;
  }
  @media (max-width: 375px) {
    padding: 5px 16px;
  }
`;
const Nav = styled.div`
  width: 100%;
  max-width: 1440px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
Nav.Column = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 10px;
  gap: ${({ menu }) => menu && "64px"};
  cursor: ${({ logo }) => logo && "pointer"};
  justify-content: ${({ menu }) => menu && "center"};
  justify-content: ${({ button }) => button && "flex-end"};
  @media (max-width: 834px) {
    justify-content: ${({ menu }) => menu && "center"};
    gap: 10px;
    cursor: pointer;
  }
  .title {
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 11px;
  }
  .active {
    color: gray;
  }
`;
const Logo = styled(logoImg)`
  width: 30px;
  & path {
    fill: #fff;
  }
`;
const Links = styled(NavLink)`
  text-decoration: none;
  color: #fff;
  @media (max-width: 834px) {
    color: var(--colorPrimary);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 40px;
  }
  color: ${({ isActive }) => isActive && "red"};
`;

const Menu = styled(menu)`
`;
const User = styled(user)`
  & path {
    fill: #fff;
  }
  cursor: pointer;
`;
const Icons = styled.div``;
Icons.Facebook = styled(facebook)`
  & path {
    fill: var(--colorPrimary);
  }
`;
Icons.Instagram = styled(instagram)`
  & path {
    fill: var(--colorPrimary);
  }
`;
Icons.Linkedin = styled(linkedin)`
  & path {
    fill: var(--colorPrimary);
  }
`;
Icons.Twiter = styled(twiter)`
  & path {
    fill: var(--colorPrimary);
  }
`;

const Menues = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
Menues.Items = styled.div``;
export { Container, Nav, Wrapper, Logo, Links, Menu, User, Icons, Menues };
