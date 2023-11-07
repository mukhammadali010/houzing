import React, { useEffect, useState } from "react";
import Card from "../Card";
import { Container } from "./style";
import { useLocation, useNavigate } from "react-router-dom";
const Properties = () => {
  const [data, setData] = useState([]);
  const { search } = useLocation();
  const navigate = useNavigate();
  const getData = () => {
    const { REACT_APP_BASE_URL: url } = process.env;

    fetch(`${url}/houses/list${search}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res?.data || []);
      });
  };
  useEffect(() => {
    getData();
  }, [search]);

  const onSelect = (id) => {
    navigate(`/properties/${id}`);
  };
  return (
      
      <Container>
      {/* <div className="textpro">
        <h3>Properties</h3>
        <p className="textCard">112 Glenwood Ave Hyde Park, Boston, MA</p>
      </div> */}
      
        {data.map((value) => {
          return (
            <Card
              onClick={() => onSelect(value.id)}
              key={value.id}
              data={value}
              getData={getData}
            />
          );
        })}
      </Container>
  );
};

export default Properties;
