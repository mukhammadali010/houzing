import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, DownloadWapper, Icon } from "./style";

const Features = () => {
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
      <h3>Features</h3>
      <div className="down">
        <DownloadWapper location>
          <div>
            <p className="address">
              <Icon.Conditioner />
            </p>
            <p className="subTitle">Air Conditioning</p>
          </div>
          <div>
            <p className="address">
              <Icon.Barbeque />
            </p>
            <p className="subTitle">Barbeque</p>
          </div>
          <div>
            <p className="address">
              <Icon.Dryer />
            </p>
            <p className="subTitle">Dryer</p>
          </div>
          <div>
            <p className="address">
              <Icon.Gym />
            </p>
            <p className="subTitle">Gym</p>
          </div>
        </DownloadWapper>
        <DownloadWapper location>
          <div>
            <p className="address">
              <Icon.Lawn />
            </p>
            <p className="subTitle">Lawn</p>
          </div>
          <div>
            <p className="address">
              <Icon.Laundry />
            </p>
            <p className="subTitle">Laundry</p>
          </div>
          <div>
            <p className="address">
              <Icon.Microwave />
            </p>
            <p className="subTitle">Microwave</p>
          </div>
          <div>
            <p className="address">
              <Icon.Outdoor />
            </p>
            <p className="subTitle">Outdoor Shower</p>
          </div>
        </DownloadWapper>
        <DownloadWapper location>
          <div>
            <p className="address">
              <Icon.Refrigerator />
            </p>
            <p className="subTitle">Refrigerator</p>
          </div>
          <div>
            <p className="address">
              <Icon.Sauna />
            </p>
            <p className="subTitle">Sauna</p>
          </div>
          <div>
            <p className="address">
              <Icon.Swimming />
            </p>
            <p className="subTitle">Swimming Pool</p>
          </div>
          <div>
            <p className="address">
              <Icon.Coaxial />
            </p>
            <p className="subTitle">TV Cable</p>
          </div>
        </DownloadWapper>
        <DownloadWapper location>
          <div>
            <p className="address">
              <Icon.Washer />
            </p>
            <p className="subTitle">Washer</p>
          </div>
          <div>
            <p className="address">
              <Icon.Wifi />
            </p>
            <p className="subTitle">Wifi</p>
          </div>
          <div>
            <p className="address">
              <Icon.Blinds />
            </p>
            <p className="subTitle">Window Coverings</p>
          </div>
          <div>
            <p className="address">
              <Icon.Dinning />
            </p>
            <p className="subTitle">Dining room</p>
          </div>
        </DownloadWapper>
      </div>
    </Container>
  );
};

export default Features;
