import React, { useEffect, useState } from "react";
import { Container, Content, Icons, ListWrap } from "./style";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { Table } from "antd";
import noimg from "../../assets/img/noimg.jpeg";
import Button from "../../Generics/Button";

const Profile = () => {
  const columns = [
    {
      title: "Listing Title",
      render: (data) => (
        <ListWrap flex>
          <img
            width={"113px"}
            height={"113px"}
            src={
              data.attachments[0].imgPath ? data?.attachments[0].imgPath : noimg
            }
            alt=""
          />
          <div className="content">
            <ListWrap flex>
              <ListWrap>
                <h3>New Apartment Nice Wiew</h3>
                <p className="textCard">{data.description}</p>
              </ListWrap>
              <Button width={'71'} type={'card'} height={'23'} mt={'auto'}><p className="sale">FORSALE</p></Button>
            </ListWrap>
            <ListWrap>
              <del className="textCard">{`$ ${data.price}`}</del>
              <h3>{`$ ${data.salePrice}`}</h3>
            </ListWrap>
          </div>
        </ListWrap>
      ),
      key: "name",
    },
    {
      title: "Year Built",
      render: (data) => <span>{`${data.houseDetails.yearBuilt}`}</span>,
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Price",
      render: (data) => <span>{`$ ${data.price}`}</span>,
      key: "price",
    },
    {
      title: "Action",
      render: () => (
        <span>
          <Icons.Edit />
          <Icons.Trash />
        </span>
      ),
      key: "action",
    },
  ];

  const [data, setData] = useState([]);
  console.log(data, "dataa");
  const mobile = useMediaQuery("(max-width: 375px)");
  const navigate = useNavigate();

  useEffect(() => {
    const { REACT_APP_BASE_URL: url } = process.env;
    fetch(`${url}/houses/me`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  return (
    <Container>
      <Content>
        <h3 className="contents">My properties</h3>
        <Button>Add House</Button>
      </Content>
      <Table columns={columns} dataSource={data.data} />
    </Container>
  );
};

export default Profile;
