import React from "react";
import {
  Avatar,
  CardBody,
  CardFooter,
  Container,
  Content,
  Icons,
  ImgWrapper,
  Wrapper,
} from "./style";
import noimg from "../../assets/img/noimg.jpeg";
import Button from "../../Generics/Button";
const Card = ({
  data: {
    address,
    city,
    country,
    description,
    price,
    salePrice,
    attachments,
    houseDetails: { area, bath, beds, garage},
  },
}) => {
  return (
    <div>
      <Container>
        <ImgWrapper src={(attachments[0] && attachments[0].imgPath) || noimg} />
        <div className="sale">
          <Button type={"primary"} width={"100"} height={"23"}>
            FEATURED
          </Button>
          <Button type={"card"} width={"100"} height={"23"} id="sale">
            FORSALE
          </Button>
        </div>
        <Avatar src={(attachments[1] && attachments[1].imgPath) || noimg} />
        <CardBody>
          <h3 className="descCard">
            {city} {country} {description}
          </h3>
          <p className="textCard">
            {address || "Quincy St, Brooklyn, NY, USA"}
          </p>
          <Wrapper>
            <Content.Blok>
              <Icons.Beds />
              <p className="textCard">
                {beds} <span>beds</span>
              </p>
            </Content.Blok>
            <Content.Blok>
              <Icons.Baths />
              <p className="textCard">
                {bath} <span>baths</span>
              </p>
            </Content.Blok>
            <Content.Blok>
              <Icons.Car />
              <p className="textCard">
                {garage} <span>Garage</span>
              </p>
            </Content.Blok>
            <Content.Blok>
              <Icons.Ruler />
              <p className="textCard">
                {area} <span>SqFt</span>{" "}
              </p>
            </Content.Blok>
          </Wrapper>
        </CardBody>
        <CardFooter>
          <CardFooter.Price>
            <p className="textCard">{`$${price}` || "$2,800/mo"}</p>
            <h3>{`$${salePrice}` || "$7,500/mo"}</h3>
          </CardFooter.Price> 
          <CardFooter.Like>
            <Icons.Arrow className="textCard" />
            <Icons.Love />
          </CardFooter.Like>
        </CardFooter>
      </Container>
    </div>
  );
};

export default Card;