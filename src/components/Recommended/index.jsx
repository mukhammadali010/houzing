import React, { useEffect, useState } from "react";
import Card from "../Card";
import { Container, Content } from "./style";
import Slider from "react-slick";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "../../hooks/useMediaQuery";

const Recommended = () => {
  const query = useMediaQuery("(max-width: 1366px)");
  const tablet = useMediaQuery("(max-width: 834px)");
  const mobile = useMediaQuery("(max-width: 375px)");

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: tablet ? 1 : 3,
    slidesToScroll: 4,
    className: "center",
    fade: false,
  };

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
    <Container padding={mobile ? "16" : "130"}>
      <Content>
        <h3 className="contents">Recommended</h3>
        <p className="textCard">
          {
            mobile ? '112 Glenwood Ave Hyde Park, Boston, MA  .' : 'Nulla quis curabitur velit volutpat auctor bibendum consectetur sit'
          }
          
        </p>
      </Content>
      {mobile ? (
        data.map((value) => {
          return <Card key={value.id} data={value} mt={mobile? '90' : ''} />;
        })
      ) : (
        <Slider {...settings} className="carusel">
          {data.map((value) => {
            return (
              <Card key={value.id} data={value} width={query ? "340" : null} />
            );
          })}
        </Slider>
      )}
    </Container>
  );
};

export default Recommended;
