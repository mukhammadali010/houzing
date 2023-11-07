import React, { useState } from "react";
import { Button as ButtonA, Drawer, Dropdown } from "antd";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Button from "../../Generics/Button";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { navbar } from "../../utils/navbar";
import Filter from "../Filter";
import {
  Container,
  Icons,
  Links,
  Logo,
  Menu,
  Nav,
  Wrapper,
  Menues,
  User,
} from "./style";
import Footer from "../Footer";

const Navbar = () => {
  const token = localStorage.getItem("token");
  const search = useLocation()

  const profile = ({
    target: {
      dataset: { name },
    },
  }) => {
    if (name === "logout") {
      localStorage.removeItem("token");
      navigate("/register");
    } else if (name === "properties") {
      navigate(`${name}`);
    } else if (name === "favourite") {
      navigate(`${name}`);
    } else if (name === "profile") {
      navigate(`${name}`);
    }
  };
  const items = [
    {
      key: "1",
      label: (
        <div>
          <Menues>
            <Menues.Items data-name="profile" onClick={profile}>
              My Profile
            </Menues.Items>
            <Menues.Items data-name="properties" onClick={profile}>
              My Properties
            </Menues.Items>
            <Menues.Items data-name="favourite" onClick={profile}>
              My Favourites
            </Menues.Items>
            <Menues.Items data-name="logout" onClick={profile}>
              Log out
            </Menues.Items>
          </Menues>
        </div>
      ),
    },
  ];
  const [opens, setOpens] = useState();

  const onOpenChange = () => {
    setOpens(!opens);
  };

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
  const navigate = useNavigate();

  const isPageWide = useMediaQuery("(max-width: 834px)");

  const handleRoute = ()=>{
    if(search.pathname.includes('register') || search.pathname.includes('profile') || search.pathname.includes('favourite')){
      return null
    }
    else if(search.pathname.includes('home') || !search.pathname.includes('properties/')){
      return <Filter/>
    }
  }
  return (
    <Container>
      <Wrapper>
        <Nav>
          <Nav.Column logo>
            {!isPageWide ? (
              <div onClick={() => navigate("/home")} className="title">
                <Logo /> <h3 className="title">Houzing</h3>
              </div>
            ) : (
              <ButtonA style={{padding:'0'}} type="secondary" onClick={showDrawer}>
                <Menu  />
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
            {token !== "undefined" && token !== null ? (
              <Dropdown
                menu={{
                  items,
                }}
                open={opens}
                onOpenChange={onOpenChange}
                placement="bottomRight"
                trigger={"click"}
              >
                <div>
                  {isPageWide ? (
                    <User />
                  ) : (
                    <Button
                      type={"third"}
                      width={"120"}
                      height={"44"}
                      gap={"10"}
                    >
                      Profile
                    </Button>
                  )}
                </div>
              </Dropdown>
            ) : (
              <Button
                onclick={() => navigate("/register")}
                type={"third"}
                width={"120"}
                height={"44"}
                gap={"10"}
                mr={"0"}
              >
                SignIn
              </Button>
            )}
          </Nav.Column>
        </Nav>
      </Wrapper>
            {
              handleRoute()
            }
      <Outlet />
      <Footer />

      {/* Drawer start */}
      <Drawer
        title="Houzing"
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
            <span>
              <Icons.Facebook />
            </span>
            <span>
              <Icons.Instagram />
            </span>
            <span>
              <Icons.Linkedin />
            </span>
            <span>
              <Icons.Twiter />
            </span>
          </Icons>
        </div>
      </Drawer>
      {/* Drawer end */}
    </Container>
  ); 
};

export default Navbar;
