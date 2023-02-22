import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as logoImg } from "../../assets/icons/logo.svg";
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
  @media (max-width: 1150px) {  
    padding: 5px 80px;
  }

  @media (max-width: 1080px) {
    padding: 5px 50px;
  }
  @media (max-width: 1024px) {
    padding: 5px 30px;
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
  color: ${({ isActive }) => isActive && "red"};
`;

export { Container, Nav, Wrapper, Logo, Links };
