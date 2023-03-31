import React from "react";
import { Container, Content, Wrapper, Icons, Devider, FooterLogo, Logo } from "./style";

const Footer = () => {
  return (
    <Container>
      <Content>
        <Wrapper>
          <Content.Blok>
            <h3>Contact Us</h3>
            <Content.Footer>
              <Icons.Maps />
              <p className="textCard1">
                329 Queensberry Street, North Melbourne VIC 3051, Australia.
              </p>
            </Content.Footer>
            <Content.Footer>
              <Icons.Phone />
              <p className="textCard1">+998 90 406 14 30</p>
            </Content.Footer>
            <Content.Footer>
              <Icons.Email />
              <p className="textCard1">muhammadalinosirov34@gmail.com</p>
            </Content.Footer>
            <Content.Footer>
              <span>
                <Icons.Facebook />
              </span>
              <span>
                <Icons.Twitter />
              </span>
              <span>
                <Icons.Instagram />
              </span>
              <span>
                <Icons.Linkedin />
              </span>
            </Content.Footer>
          </Content.Blok>
          <Content.Blok>
            <h3>Discover</h3>
            <p className="textCard1  discover">Chicago</p>
            <p className="textCard1 discover">Los Angeles</p>
            <p className="textCard1 discover">Miami</p>
            <p className="textCard1 discover">New York</p>
          </Content.Blok>
          <Content.Blok>
            <h3>Lists by Category</h3>
            <p className="textCard1  discover">Apartments</p>
            <p className="textCard1  discover">Condos</p>
            <p className="textCard1  discover">Houses</p>
            <p className="textCard1  discover">Offices</p>
            <p className="textCard1  discover">Retail</p>
            <p className="textCard1  discover">Villas</p>
          </Content.Blok>
          <Content.Blok>
            <h3>Lists by Category</h3>
            <p className="textCard1  discover">About Us</p>
            <p className="textCard1  discover">Terms & Conditions</p>
            <p className="textCard1  discover">Houses</p>
            <p className="textCard1  discover">Support Center</p>
            <p className="textCard1  discover">Contact Us</p>
          </Content.Blok>
          
        </Wrapper>
      </Content>
      <Devider/>
      <FooterLogo>
        <div>
          <Logo/>
          <h3 className="title">Houzing</h3>
        </div>
        <div>
          <p className="textCard1">Copyright © 2021 CreativeLayers. All Right Reserved.</p>
        </div>
      </FooterLogo>
    </Container>
  );
};
export default Footer;
