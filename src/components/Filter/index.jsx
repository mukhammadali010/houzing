import { Dropdown } from "antd";
import React, { useRef, useState } from "react";
import { Button, Input } from "../../Generics";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { Container, Icons } from "./style";

const Filter = () => {
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
  const items = [
    {
      key: "1",
      label: (
        <div className="dropdown">
          <h4>Address</h4>
          <Input
            ref={countryRef}
            width={`${!isPageWide ? "200" : "160"}`}
            placeholder={"Country"}
          />
          <Input
            ref={regionRef}
            width={`${!isPageWide ? "200" : "160"}`}
            placeholder={"Region"}
          />
          <Input
            ref={cityRef}
            width={`${!isPageWide ? "200" : "160"}`}
            placeholder={"City"}
          />
          <Input
            ref={zipRef}
            width={`${!isPageWide ? "200" : "160"}`}
            placeholder={"Zip code"}
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
          />
          <Input
            ref={sizeRef}
            width={`${!isPageWide ? "200" : "160"}`}
            placeholder={"Size"}
          />
          <Input
            ref={sortRef}
            width={`${!isPageWide ? "200" : "160"}`}
            placeholder={"Sort"}
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
          />
          <Input
            ref={maxPriceRef}
            width={`${!isPageWide ? "200" : "160"}`}
            placeholder={"Max Price"}
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
          arrow
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
