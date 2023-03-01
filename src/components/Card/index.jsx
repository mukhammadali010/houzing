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
import noimg from '../../assets/img/noimg.jpeg'
import Button from "../../Generics/Button";
const Card = ({url , avatar , title}) => {
  return (
    <div>
          <Container>
              <ImgWrapper src={url || noimg} />
              <div className="sale">
              <Button type={'primary'} width={'100'} height={'23'}>FEATURED</Button>
              <Button type={'card'} width={'100'} height={'23'} id='sale'>FORSALE</Button>
              </div>
              <Avatar src ={avatar || noimg}/>
            <CardBody>
              <h3>{title || 'New Apartment Nice Wiew'}</h3>
              <p className="textCard">Quincy St, Brooklyn, NY, USA</p>
              <Wrapper>
                <Content.Blok>
                  <Icons.Beds />
                  <p className="textCard">4 beds</p>
                </Content.Blok>
                <Content.Blok>
                  <Icons.Baths />
                  <p className="textCard">5 baths</p>
                </Content.Blok>
                <Content.Blok>
                  <Icons.Car />
                  <p className="textCard">1 cars</p>
                </Content.Blok>
                <Content.Blok>
                  <Icons.Ruler />
                  <p className="textCard">1200 sq</p>
                </Content.Blok>
              </Wrapper>
            </CardBody>
            <CardFooter>
              <CardFooter.Price>
                <p className="textCard">$2,800/mo</p>
                <h3>$7,500/mo</h3>
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
