import { Dropdown } from "antd";
import React, { useRef, useState } from "react";
import { Button, Input } from "../../Generics";
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

  const items = [
    {
      key: "1",
      label: (
        <div>
          <h3>Address</h3>
          <Input ref={countryRef} width={"200"} placeholder={"Country"} />
          <Input ref={regionRef} width={"200"} placeholder={"Region"} />
          <Input ref={cityRef} width={"200"} placeholder={"City"} />
          <Input ref={zipRef} width={"200"} placeholder={"Zip code"} />
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <div>
          <h3>Appatment info</h3>
          <Input ref={roomsRef} width={"200"} placeholder={"Rooms"} />
          <Input ref={sizeRef} width={"200"} placeholder={"Size"} />
          <Input ref={sortRef} width={"200"} placeholder={"Sort"} />
        </div>
      ),
    },
    {
      key: "3",
      label: (
        <div>
          <h3>Price</h3>
          <Input ref={minPriceRef} width={"200"} placeholder={"Min Price"} />
          <Input ref={maxPriceRef} width={"200"} placeholder={"Max Price"} />
        </div>
      ),
    },
    {
      key: "4",
      label: (
        <div
          style={{ display: "flex", gap: "10px", justifyContent: "flex-end" }}
        >
          <Button type={"secondary"} width={"128"}>
            Cancel
          </Button>
          <Button type={"primary"} width={"128"}>
            Submit
          </Button>
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
      <div className="inputWrapper">
        <Icons.House />
        <Input
          width={"829"}
          placeholder={"Enter an address, neighborhood, city, or ZIP code"}
        />
      </div>

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

      <Button width={"180"} padding={"12"}>
        <Icons.Search />
        Search
      </Button>
    </Container>
  );
};

export default Filter;
