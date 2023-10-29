import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, DownloadWapper } from "./style";

const Details = () => {
  let { id } = useParams();
  const [data, setData] = useState({});
  useEffect(() => {
    const { REACT_APP_BASE_URL: url } = process.env;

    fetch(`${url}/houses/id/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res.data);
      });
  }, []);

  return (
    <Container>
      <h3>Property Details</h3>
      <div className="down">
        <DownloadWapper location>
          <div>
            <p className="address">Property ID:</p>
            <p className="subTitle">{data.id}</p>
          </div>
          <div>
            <p className="address">Price:</p>
            <p className="subTitle">${data.price}</p>
          </div>
          <div>
            <p className="address">Property Size:</p>
            <p className="subTitle">{data.houseDetails?.area} Sq Ft</p>
          </div>
          <div>
            <p className="address">Year Bulit:</p>
            <p className="subTitle">{data.houseDetails?.yearBuilt}</p>
          </div>
        </DownloadWapper>
        <DownloadWapper location>
          <div>
            <p className="address">Bedrooms:</p>
            <p className="subTitle">{data.houseDetails?.beds}</p>
          </div>
          <div>
            <p className="address">Bathrooms:</p>
            <p className="subTitle">{data.houseDetails?.bath}</p>
          </div>
          <div>
            <p className="address">Garage:</p>
            <p className="subTitle">{data.houseDetails?.garage}</p>
          </div>
          <div>
            <p className="address">Garage size:</p>
            <p className="subTitle">{data.houseDetails?.garage}</p>
          </div>
        </DownloadWapper>
        <DownloadWapper location>
          <div>
            <p className="address">Property Type:</p>
            <p className="subTitle">{data.category}</p>
          </div>
          <div>
            <p className="address">Property Status:</p>
            <p className="subTitle">{data.status}</p>
          </div>
        </DownloadWapper>
      </div>
    </Container>
  );
};

export default Details;
