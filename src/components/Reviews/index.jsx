import { Progress } from "antd";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, DownloadWapper } from "./style";

const Reviews = () => {
  let { id } = useParams();
  const [data, setData] = useState({});
  useEffect(() => {
    const { REACT_APP_BASE_URL: url } = process.env;

    fetch(`${url}/houses/id/${id}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setData(res.data);
      });
  }, []);

  return (
    <Container>
      <div className="title">
        <h3>4.67 (14 reviews)</h3>
      </div>

      <div className="down">
        <DownloadWapper location>
          <div className="cleanless">
            <p className="subTitle">Cleanliness</p>
            <div className="pro">
            <Progress percent={70} status="active" />
            </div>
          </div>
          <div className="cleanless">
            <p className="subTitle">Communication</p>
            <div className="pro">
            <Progress percent={80} status="active" />
            </div>
          </div>
          <div className="cleanless">
            <p className="subTitle">Check-in</p>
            <div className="pro">
            <Progress percent={50} status="active" />
            </div>
          </div>
        </DownloadWapper>
        <DownloadWapper location>
          <div className="cleanless">
            <p className="subTitle">Accuracy</p>
            <div className="pro">
            <Progress percent={50} status="active" />
            </div>
          </div>
          <div className="cleanless">
            <p className="subTitle">Location</p>
            <div className="pro">
            <Progress percent={50} status="active" />
            </div>
          </div>
          <div className="cleanless">
            <p className="subTitle">Value</p>
            <div className="pro">
            <Progress percent={50} status="active" />
            </div>
          </div>
        </DownloadWapper>
      </div>
    </Container>
  );
};

export default Reviews;
