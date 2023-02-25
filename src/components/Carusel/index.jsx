import React, { useRef } from "react";
import {
  Container,
  Arrow,
  HouseImage,
  Gr,
  Content,
  Wrapper,
  Icons,
} from "./style";
import { Carousel } from "antd";
import house1 from "../../assets/img/house1.png";
import house2 from "../../assets/img/house2.png";
import Button from "../../Generics/Button";

const contentStyle = {
  height: "571px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
};

const CaruselOwn = () => {
  const slider = useRef();
  const onChange = ({
    target: {
      dataset: { name },
    },
  }) => {
    if (name === "right") slider.current.next();
    if (name === "left") slider.current.prev();
  };
  return (
    <Container>
      <Arrow onClick={onChange} data-name="left" left='true' />
      <Arrow onClick={onChange} data-name="right" right='false' />
      <Gr />
      <Content>
        <h1 className="pool">Skyper Pool Partment</h1>
        <p className="textHome">112 Glenwood Ave Hyde Park, Boston, MA </p>
        <Wrapper>
          <Content.Blok>
            <Icons.Beds />
            <p>4 beds</p>
          </Content.Blok>
          <Content.Blok>
            <Icons.Baths />
            <p>5 baths</p>
          </Content.Blok>
          <Content.Blok>
            <Icons.Car />
            <p>1 cars</p>
          </Content.Blok>
          <Content.Blok>
            <Icons.Sq />
            <p>1200 sq</p>
          </Content.Blok>
        </Wrapper>
        <h2 className="temporary">$5,250/mo</h2>
        <Button type={'third'} >Read more</Button>
      </Content>
      <Carousel ref={slider} className="carusel" >
        <div>
          <h5 style={contentStyle}>
            <HouseImage src={house1} />
          </h5>
        </div>
        <div>
          <h5 style={contentStyle}>
            <HouseImage src={house2} />
          </h5>
        </div>
        <div>
          <h5 style={contentStyle}>
            <HouseImage src={house1} />
          </h5>
        </div>
        <div>
          <h5 style={contentStyle}>
            <HouseImage src={house2} />
          </h5>
        </div>
      </Carousel>
    </Container>
  );
};

export default CaruselOwn;
