import React, { useEffect } from "react";
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
import { useState } from "react";
const Card = ({
  data: {
    address,
    city,
    country,
    description,
    price,
    salePrice,
    attachments,
    category,
    id,
    favorite,
    houseDetails: { area, bath, beds, garage, room },
  },
  getData,
  width,
  mt,
  onClick,
}) => {
  const { REACT_APP_BASE_URL: url } = process.env;
  const [data , setData] = useState([])
  useEffect(() => {
    const { REACT_APP_BASE_URL: url } = process.env;
    fetch(`${url}/houses/getAll/favouriteList`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("resss0 ", res.data);
        setData(res?.data)
      });
  }, []);
  const liked = (event, id, favorite) => {
    console.log(favorite);
    event.stopPropagation();
    // fetch(`${url}/houses/addFavourite/${id}?favourite=true`, {
    //   headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    //   method: "PUT",
    // });

    fetch(`${url}/houses/addFavourite/${id}?favourite=${!favorite}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      method: "PUT",
    }).then(()=>{
      
      getData()
    })
  };
  return (
    <div>
      <Container onClick={onClick} width={width} mt={mt}>
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
            {address || "Quincy St, Brooklyn, NY, USA"} - {category?.name} -{" "}
            {room} rooms
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
          <CardFooter.Like onClick={(e) =>{
            const fav =  data.some((value)=>value.id === id);
            liked(e, id, fav)
          } } >
            <Icons.Arrow className="textCard" />
            <Icons.Love liked={data.some((value)=>{
                    return value.id === id
            })} />
          </CardFooter.Like>
        </CardFooter>
      </Container>
    </div>
  );
};

export default Card;
