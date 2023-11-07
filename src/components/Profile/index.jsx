import { Container, Content, Icons, ListWrap } from "./style";
import { useLocation, useNavigate } from "react-router-dom";
import { Table } from "antd";
import noimg from "../../assets/img/noimg.jpeg";
import Button from "../../Generics/Button";
import { useQuery } from "react-query";
import { useMediaQuery } from "../../hooks/useMediaQuery";

const Profile = () => {
  const tablet = useMediaQuery("(max-width: 834px)");

  const Swal = require("sweetalert2");
  const search = useLocation();
  const navigate = useNavigate();
  const { REACT_APP_BASE_URL: url } = process.env;

  const { data, refetch } = useQuery([search], async () => {
    return await fetch(`${url}/houses/me`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      method: "GET",
    }).then((res) => res.json());
  });

  const forSale = (id) => {
    navigate(`/properties/${id}`);
  };
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
            <ListWrap flex tablet={tablet ? true:undefined}>
              <ListWrap tablet={tablet ? true:undefined}>
                <h3 className="title">
                  New Apartment Nice <br /> Wiew
                </h3>
                <p className="textCard">{data.description}</p>
              </ListWrap>
              <Button
                width={"71"}
                type={"card"}
                height={"23"}
                mt={"auto"}
                position={tablet ? "absolute":undefined}
                left={tablet? "-138":undefined}
                onclick={() => forSale(data?.id)}
              >
                FORSALE
              </Button>
            </ListWrap>
            <ListWrap flex>
              <div>
                <del className="textCard">{`$ ${data.price}`}</del>
                <h3>{`$ ${data.salePrice}`}</h3>
              </div>
              <span style={!tablet ? {display:'none'} : {display:'block'}}>
                <Icons.Edit onClick={() => navigate(`editHouse/${data?.id}`)} />
                <Icons.Trash onClick={() => onDelete(data?.id)} />
              </span>
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
      responsive: ["sm"],
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      responsive: ["sm"],
    },
    {
      title: "Price",
      render: (data) => <span>{`$ ${data.price}`}</span>,
      key: "price",
      responsive: ["sm"],
    },
    {
      title: "Action",
      render: (data) => (
        <span>
          <Icons.Edit onClick={() => navigate(`editHouse/${data?.id}`)} />
          <Icons.Trash onClick={() => onDelete(data?.id)} />
        </span>
      ),
      key: "action",
      responsive: ["sm"],
    },
  ];

  const onDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const { REACT_APP_BASE_URL: url } = process.env;
        fetch(`${url}/houses/${id}`, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
          method: "DELETE",
        });
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        refetch();
      }
    });
  };

  return (
    <Container key={data?.id}>
      <Content>
        <h3 className="contents">My properties</h3>
        <Button
          mr={"0"}
          width={tablet && "100"}
          onclick={() => navigate("/profile/newhouse")}
        >
          AddHouse
        </Button>
      </Content>
      <Table columns={columns} responsive dataSource={data?.data || []} />
    </Container>
  );
};

export default Profile;
