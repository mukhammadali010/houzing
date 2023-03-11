import React, { useEffect, useState } from "react";
import Card from "../Card";
import { Container } from "./style";
import { useLocation } from "react-router-dom";
const Properties = () => {
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
      {data.map((value) => {
        return <Card key={value.id} data={value} />;
      })}
    </Container>
  );
};

export default Properties;
