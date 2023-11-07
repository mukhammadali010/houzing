import React from "react";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import {
  Container,
  Content,
  Wrapper,
  Icons,
} from "./style";

const Why =()=>{
  const query = useMediaQuery("(max-width: 550px)");

  return (
    <Container>
      <Content>
        <h3 className="contents">Why Choose Us?</h3>
        <p className="textCard"> {query
            ? "112 Glenwood Ave Hyde Park, Boston, MA  ."
            : "Nulla quis curabitur velit volutpat auctor bibendum consectetur sit"}</p>
        <Wrapper>
          <Content.Blok>
            <Icons.Beds />
            <h3>Trusted By Thousands</h3>
            <p className="textCard1">With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.</p>
          </Content.Blok>
          <Content.Blok>
            <Icons.Baths />
            <h3>Wide Renge Of Properties</h3>
            <p className="textCard1">With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.</p>
          </Content.Blok>
          <Content.Blok>
            <Icons.Car />
            <h3>Financing Made Easy</h3>
            <p className="textCard1">With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.</p>
          </Content.Blok>
          <Content.Blok>
            <Icons.Sq />
            <h3>See Neighborhoods</h3>
            <p className="textCard1">With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.</p>
          </Content.Blok>
        </Wrapper>
      </Content>
    </Container>
  );
  };
export default Why;
