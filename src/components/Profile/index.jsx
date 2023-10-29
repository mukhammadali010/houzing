import { Container, Content, Icons, ListWrap } from "./style";
import { useLocation, useNavigate } from "react-router-dom";
import { Table } from "antd";
import noimg from "../../assets/img/noimg.jpeg";
import Button from "../../Generics/Button";
import { useQuery } from "react-query";
// import Swal from "sweetalert2";

const Profile = () => {
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


  const forSale = (id)=>{
    navigate(`/properties/${id}`)
  }
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
              <Button width={"71"} type={"card"} height={"23"} mt={"auto"} onclick={()=>forSale(data?.id)}>
                FORSALE
              </Button>
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
      render: (data) => (
        <span>
          <Icons.Edit onClick ={()=> navigate(`editHouse/${data?.id}`)}/>
          <Icons.Trash onClick={() => onDelete(data?.id)} />
        </span>
      ),
      key: "action",
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
        refetch()
      }
    });

    
  };


  return (
    <Container>
      <Content>
        <h3 className="contents">My properties</h3>
        <Button mr={"0"} onclick={() => navigate("/profile/newhouse")}>
          Add House
        </Button> 
      </Content>
      <Table columns={columns} dataSource={data?.data || []} />
    </Container>
  );
};

export default Profile;
