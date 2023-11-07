import React, { useEffect, useState } from "react";
import { Container, Content } from "./style";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import Card from "../Card";

const Favourites = () => {
  const [data, setData] = useState([]);
  const tablet = useMediaQuery("(max-width: 834px)");
  const navigate = useNavigate();

  const getData = ()=>{
    const { REACT_APP_BASE_URL: url } = process.env;
  
    fetch(`${url}/houses/getAll/favouriteList`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        setData(res?.data);
      });
  }
  useEffect(() => {
    getData()
  }, []);
  return (
    <Container>
      <Content>
        <h3 className="contents">Favourites</h3>
        <p className="textCard">
          {tablet
            ? "112 Glenwood Ave Hyde Park, Boston, MA  ."
            : "Nulla quis curabitur velit volutpat auctor bibendum consectetur sit"}
        </p>
      </Content>
      <div className="wrap">
        {data.map((value , index) => {
          return <Card key={value.id} data={value} getData={getData} />;
        })}
      </div>
    </Container>
  );
};

export default Favourites;
