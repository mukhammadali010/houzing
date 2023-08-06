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
  slidesToScroll: 4,
  className: "center",
  fade: false,
};

const Category = () => {
  const [data, setData] = useState([]);
  const mobile = useMediaQuery("(max-width: 375px)");
  const navigate = useNavigate();



  useEffect(() => {
    const { REACT_APP_BASE_URL: url } = process.env;
    fetch(`${url}/categories`,{
      headers: { Authentication: `Bearer ${localStorage.getItem('token')}`}
    })
      .then((res) => res.json())
      .then((res) => {
        setData(res?.data || []);
      });
  }, []);
console.log( localStorage.getItem('token'));
  return (
    <Container>
      <Content>
        <h3 className="contents">Category</h3>
        <p className="textCard">
          {mobile
            ? "112 Glenwood Ave Hyde Park, Boston, MA  ."
            : "Nulla quis curabitur velit volutpat auctor bibendum consectetur sit"}
        </p>
      </Content>
      <Slider {...settings} className="carusel">
        {data.map((value) => {
          return (
            <CategoryCard
              onClick={() => navigate(`/properties?category_id=${value.id}`)}
              key={value.id}
              data={value}
            />
          );
        })}
      </Slider>
    </Container>
  );
};

export default Category;
