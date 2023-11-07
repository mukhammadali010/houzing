import React, { useEffect, useState } from "react";
import CategoryCard from "../CategoryCard";
import { Container, Content } from "./style";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "../../hooks/useMediaQuery";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  fade: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

const Category = () => {
  const [data, setData] = useState([]);
  const query = useMediaQuery("(max-width: 550px)");
  const navigate = useNavigate();

  useEffect(() => {
    const { REACT_APP_BASE_URL: url } = process.env;
    fetch(`${url}/categories`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
      .then((res) => res.json())
      .then((res) => {
        setData(res?.data || []);
      });
  }, []);
  return (
    <Container>
      <Content>
        <h3 className="contents">Category</h3>
        <p className="textCard">
          {query
            ? "112 Glenwood Ave Hyde Park, Boston, MA  ."
            : "Nulla quis curabitur velit volutpat auctor bibendum consectetur sit"}
        </p>
      </Content>
      <Slider {...settings} className="carusel">
          {data.map((value , index) => {
            return (
              <CategoryCard
              onClick={() => navigate(`/properties?category_id=${value?.id}`)}
              key={index}
                data={value}
                />
                );
              })}
         
      
      </Slider>
    </Container>
  );
};

export default Category;
