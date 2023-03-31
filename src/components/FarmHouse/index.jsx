import React from "react";
import {
  Container,
  HouseImage,
  Gr,
  Content,
} from "./style";
import { Carousel } from "antd";
import house2 from "../../assets/img/house2.png";
import Button from "../../Generics/Button";


const FarmHouse = () => {
 
  return (
    <Container>
      <Content>
        <h2 className="pool">Vermont Farmhouse With Antique Jail Is
the Week's Most Popular Home</h2>
        <Button type={'primary'}>Read more</Button>
      </Content>
      <Carousel  className="carusel" >
        <div>
            <HouseImage src={house2} />
        </div>
      </Carousel>
      <Gr/>
    </Container>
  );
};

export default FarmHouse;
