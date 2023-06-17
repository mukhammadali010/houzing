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
    fetch(`${url}/categories/1`,{
      headers: { Authentication: 'Bearer eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJzZWxmIiwic3ViIjoibXVoYW1tYWRhbGlub3Npcm92MzRAZ21haWwuY29tIiwiZXhwIjoxNzA0MzMzOTE2LCJpYXQiOjE2ODYzMzM5MTYsInNjb3BlIjoiUk9MRV9VU0VSIn0.fZ5aGVH9BJC3XfabiFObWeAcx_nKVHrvyUFo42vryL_fGWURaoLw99xiOKOjCOufeYK3F1Ls4zDjFK2HhdMCGkeEKfvdUJxJ8ODuuGE1l0Orrj-qAqWwxgoHGxUFrwxyW4H3oQZshAmb7bLVZqBCQtrZFyY7mHWVVJPaeyMTdVftqcV_ZYsb5p8WxGBElb1XRRqvel8dWycFy0U1neuPD4YPgc6yAE2OW7ET3cyWKWRSAohbzqsFUYKKA_GlWPa2VuijU6y5ESDC-y-mNdEdwtCpJzm3QftYDpHvcleOdnLVstJM3FuYK1VS5LgCMf7-WiHQpgTsNs5hjtUC6_tB-Q'}
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
