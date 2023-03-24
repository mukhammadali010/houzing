import React, { useEffect, useState } from "react";
import CategoryCard from "../CategoryCard";
import { Container } from "./style";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";


const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 4,
  className: 'center',
  fade: false
};


const Category = () => {
  const [data, setData] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    const { REACT_APP_BASE_URL: url } = process.env;

    fetch(`${url}/categories/list`)
      .then((res) => res.json())
      .then((res) => {
        setData(res?.data || []);
      });
  }, []);

  
  return (
    <Container> 
      <Slider {...settings} className = 'carusel'>
        {data.map((value) => {
          return <CategoryCard onClick = {()=>navigate(`/properties?category_id=${value.id}`)} key={value.id} data={value} />;
        })}
      </Slider>
    </Container>
  );
};

export default Category;
