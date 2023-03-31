import React from "react";
import { Container, Content, Wrapper } from "./style";
import avatar1 from "../../assets/img/avatar1.png";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Slider from "react-slick";
import { useMediaQuery } from "../../hooks/useMediaQuery";

const Testimonials = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    className: "center",
    fade: false,
  };

  const mobile = useMediaQuery("(max-width: 375px)");

  const [data, setData] = useState([]);
  const { search } = useLocation();
  useEffect(() => {
    const { REACT_APP_BASE_URL: url } = process.env;

    fetch(`${url}/houses/list${search}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res?.data || []);
      });
  }, [search]);

  return (
    <Container>
       <Content>
        <h3 className="contents">Testimonials</h3>
        <p className="textCard">
          {
            mobile ? '112 Glenwood Ave Hyde Park, Boston, MA  .' : 'Nulla quis curabitur velit volutpat auctor bibendum consectetur sit'
          }
          
        </p>
      </Content>
      <Slider {...settings} className="carusel">
        {data.map((value) => {
          return (
            <Content key={value.id}>
              <Wrapper >
                <Content.Blok>
                  <Content.Text>
                    <p className="textCard1">
                      “ I believe in lifelong learning and Skola is a great
                      place to learn from experts. I've learned a lot and
                      recommend it to all my friends “
                    </p>
                  </Content.Text>
                  <Content.Avatar src={avatar1} />
                  <h3 className="test">Marvin McKinney</h3>
                  <p className="textCard1">Designer</p>
                </Content.Blok>
              </Wrapper>
            </Content>
          );
        })}
      </Slider>
    </Container>
  );
};
export default Testimonials;
