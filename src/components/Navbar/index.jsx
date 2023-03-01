import React, { useState } from "react";
import { Button as ButtonA, Drawer } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
import Button from "../../Generics/Button";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { navbar } from "../../utils/navbar";
import Filter from "../Filter";
import { Container, Icons, Links, Logo, Menu, Nav, User, Wrapper } from "./style";

const Navbar = () => {
  // Drawer settings
  const [open, setOpen] = useState(false);
  const [placement] = useState("left");
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  

  // Drawer settings end

  const login = useNavigate();
  const navigate = useNavigate();

  const isPageWide = useMediaQuery("(max-width: 834px)");
  return (
    <Container>
      <Wrapper>
        <Nav>
          <Nav.Column logo >
            {!isPageWide ? (
              <div onClick={() => navigate("/home")} className="title">
                <Logo /> <h3 className="title">Houzing</h3>
              </div>
            ) : (
              <ButtonA type="secondary" onClick={showDrawer}>
                <Menu />
              </ButtonA>
            )}
          </Nav.Column>
          {!isPageWide ? (
            <Nav.Column menu>
              {navbar.map(({ path, title, isHidden }, index) => {
                return (
                  !isHidden && (
                    <Links
                      key={index}
                      className={({ isActive }) => isActive && "active"}
                      to={path}
                    >
                      {title}
                    </Links>
                  )
                );
              })}
            </Nav.Column>
          ) : (
            <Nav.Column menu onClick={() => navigate("/home")}>
              <Logo /> <h3 className="title">Houzing</h3>
            </Nav.Column>
          )}
          <Nav.Column button>
            {!isPageWide ? (
              <Button
                onclick={() => login("/login")}
                type={"third"}
                width={"120"}
                height={"44"}
                gap={"10"}
              >
                Login
              </Button>
            ) : (
              <User onClick={()=> navigate('/contact')}/>
            )}
          </Nav.Column>
        </Nav>
      </Wrapper>
      <Filter />
      <Outlet />
      {/* Drawer start */}
      <Drawer
        title='Houzing'
        placement={placement}
        closable={false}
        onClose={onClose}
        open={open}
        key={placement}
        >
        <div className="drawer__wrapper">
          {navbar.map(({ path, title, isHidden }, index) => {
            return (
              !isHidden && (
                <Links
                  key={index}
                  className={({ isActive }) => isActive && "active"}
                  to={path}
                >
                  {title}
                </Links>
              )
            );
          })}
            <Icons className="drawer__icons">
              <span><Icons.Facebook /></span>
              <span><Icons.Instagram /></span>
              <span><Icons.Linkedin /></span>
              <span><Icons.Twiter /></span>
            </Icons>
          </div>
      </Drawer>
      {/* Drawer end */}

    </Container>
  );
};

export default Navbar;
 