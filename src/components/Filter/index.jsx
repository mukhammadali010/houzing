import { Dropdown } from "antd";
import React, { useRef, useState } from "react";
import { Button, Input } from "../../Generics";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { Container, Icons } from "./style";
import { uzeReplace} from "../../hooks/useReplace";
import { useNavigate  , useLocation} from "react-router-dom";
import useSearch from "../../hooks/useSearch";
const Filter = () => {

  const location = useLocation();
  const navigate = useNavigate();


  const countryRef = useRef();
  const regionRef = useRef();
  const cityRef = useRef();
  const zipRef = useRef();

  const roomsRef = useRef();
  const sizeRef = useRef();
  const sortRef = useRef();

  const minPriceRef = useRef();
  const maxPriceRef = useRef();
  const isPageWide = useMediaQuery("(max-width: 834px)");
  const isPageWideMobile = useMediaQuery("(max-width: 375px)");

  const onChange =({target: {value , name}})=>{
    navigate(`${location?.pathname}${uzeReplace(name , value)}`)
  }
  let query = useSearch();
  const items = [
    {
      key: "1",
      label: (
        <div className="dropdown">
          <h4>Address</h4>
          <Input
            onChange = {onChange}
            ref={countryRef}
            width={`${!isPageWide ? "200" : "160"}`}
            placeholder={"country"} 
            name={"country"}
            defaultValue = {query.get('country')}
          />
          <Input
            onChange = {onChange}
            ref={regionRef}
            width={`${!isPageWide ? "200" : "160"}`}
            placeholder={"region"}
            name={'region'}
            defaultValue = {query.get('region')}
          />
          <Input
            onChange = {onChange}
            ref={cityRef}
            width={`${!isPageWide ? "200" : "160"}`}
            placeholder={"city"}
            name={'city'}
            defaultValue = {query.get('city')}
          />
          <Input
            onChange = {onChange}
            ref={zipRef}
            width={`${!isPageWide ? "200" : "160"}`}
            placeholder={"zip_code"}
            name={'zip_code'}
            defaultValue = {query.get('zip_code')}
          />
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <div>
          <h4>Appatment info</h4>
          <Input
            ref={roomsRef}
            width={`${!isPageWide ? "200" : "160"}`}
            placeholder={"Rooms"}
            onChange ={onChange}
            defaultValue ={query.get('room')}
            name='rooms'
          />
          <Input
            ref={sizeRef}
            width={`${!isPageWide ? "200" : "160"}`}
            placeholder={"Size"}
            onChange={onchange}
            defaultValue={query.get('size')}
            name='size'
          />
          <Input
            ref={sortRef}
            width={`${!isPageWide ? "200" : "160"}`}
            placeholder={"Sort"}
            onChange={onChange}
            defaultValue={query.get('sort')}
            name='sort'
          />
        </div>
      ),
    },
    {
      key: "3",
      label: (
        <div>
          <h4>Price</h4>
          <Input
            ref={minPriceRef}
            width={`${!isPageWide ? "200" : "160"}`}
            placeholder={"Min Price"}
             
            defaultValue={query.get('min_price')}
            name='min_price'
          />
          <Input
            ref={maxPriceRef}
            width={`${!isPageWide ? "200" : "160"}`}
            placeholder={"Max Price"}
            onChange={onChange}
            defaultValue={query.get('max_price')}
            name='max_price'
          />
        </div>
      ),
    },
    
  ];

  const [open, setOpen] = useState();

  const onOpenChange = () => {
    setOpen(!open);
  };


  return (
    <Container>
      <Icons.House />
      
      <Input
        placeholder={"Enter an address, neighborhood, city, or ZIP code"} mt= {`${isPageWideMobile && '40'}`}
      />
    
        <Dropdown
          menu={{
            items,
          }}
          open={open}
          onOpenChange={onOpenChange}
          placement="bottomRight"
          trigger={'click'}
          
        >
          <div className="inputWrapper">
            <Button width={"151"} type={"secondary"} padding={"12"}>
              <Icons.Setting />
              Advanced
            </Button>
          </div>
        </Dropdown>

        <Button width={`${!isPageWide ? "180" : "150"}`} padding={"12"}>
          <Icons.Search />
          Search
        </Button>
    </Container>
  );
};

export default Filter;
