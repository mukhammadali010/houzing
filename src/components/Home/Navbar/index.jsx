import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Button from "../../../Generics/Button";
import { navbar } from "../../../utils/navbar";
import { Container, Links, Logo, Nav, Wrapper } from "./style";
const Navbar = () => {
  const login = useNavigate();
  const navigate = useNavigate();
  return (
    <Container>
      <Wrapper>
        <Nav>
          <Nav.Column logo onClick={()=> navigate('/home')}>
            <Logo  /> <h3>Houzing</h3>
          </Nav.Column>
          <Nav.Column menu>
            {
              navbar.map(({path , title , isHidden} , index)=>{
                return !isHidden && (
                  <Links key={index} className={({isActive})=> isActive && 'active'} to={path} >
                    {title}
                  </Links>
                )
              })
            }
          </Nav.Column>
          <Nav.Column button>
            <Button onclick={()=> login('/login')} type={'third'} width={'120'} height={'44'} gap={'10'}>Login</Button>
          </Nav.Column>
        </Nav>
      </Wrapper>
      <Outlet />
    </Container>
  );
};

export default Navbar;
