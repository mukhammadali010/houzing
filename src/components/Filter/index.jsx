import { Dropdown } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { Button, Input } from "../../Generics";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { Container, Icons, SelectAnt } from "./style";
import { uzeReplace } from "../../hooks/useReplace";
import { useNavigate, useLocation } from "react-router-dom";
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

  const minPriceRef = useRef();
  const maxPriceRef = useRef();
  const isPageWide = useMediaQuery("(max-width: 834px)");
  const isPageWideMobile = useMediaQuery("(max-width: 375px)");

  const [data, setData] = useState([]);
  const [value, setValue] = useState([]);

  const { REACT_APP_BASE_URL: url } = process.env;
  useEffect(() => {
    fetch(`${url}/categories/list`)
      .then((res) => res.json())
      .then((res) => {
        setData(res?.data || []);
      });
  }, []);

  useEffect(() => {
    let [d] = data.filter((ctg) => ctg.id === Number(query.get("category_id")));
    d?.name && setValue(d?.name);
    
    !query.get("category_id") && setValue("Select Category");
  }, [location?.search, data]);

  const onChangeCategory = (category_id) => {
    navigate(`/properties${uzeReplace("category_id", category_id)}`);
  };

  const onChangeSort = (sort) => {
    navigate(`/properties${uzeReplace("sort", sort)}`);
  };
  const onChange = ({ target: { value, name } }) => {
    navigate(`${location?.pathname}${uzeReplace(name, value)}`);
  };
  let query = useSearch();
  const items = [
    {
      key: "1",
      label: (
        <div className="dropdown">
          <h4>Address</h4>
          <Input
            onChange={onChange}
            ref={countryRef}
            width={`${!isPageWide ? "200" : "160"}`}
            placeholder={"country"}
            name={"country"}
            defaultValue={query.get("country")}
          />
          <Input
            onChange={onChange}
            ref={regionRef}
            width={`${!isPageWide ? "200" : "160"}`}
            placeholder={"region"}
            name={"region"}
            defaultValue={query.get("region")}
          />
          <Input
            onChange={onChange}
            ref={cityRef}
            width={`${!isPageWide ? "200" : "160"}`}
            placeholder={"city"}
            name={"city"}
            defaultValue={query.get("city")}
          />
          <Input
            onChange={onChange}
            ref={zipRef}
            width={`${!isPageWide ? "200" : "160"}`}
            placeholder={"zip_code"}
            name={"zip_code"}
            defaultValue={query.get("zip_code")}
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
            onChange={onChange}
            defaultValue={query.get("room")}
            name="room"
          />
          <Input
            ref={sizeRef} 
            width={`${!isPageWide ? "200" : "160"}`}
            placeholder={"Size"}
            onChange={onChange}
            defaultValue={query.get("size")}
            name="size"
          />

          {/* Sort select */}

          <SelectAnt
            defaultValue={query.get('sort') || 'Select Sort'}
            name=""
            id=""
            onChange={onChangeSort}
            width={`${!isPageWide ? "200" : "160"}`}
          >
            <SelectAnt.Option value={""}>Default Sort </SelectAnt.Option>
            <SelectAnt.Option value={"asc"}>O'suvchi</SelectAnt.Option>
            <SelectAnt.Option value={"desc"}>Kamayuvchi</SelectAnt.Option>
          </SelectAnt>

          {/* Sort select  ended*/}


              {/* category select */}
          <SelectAnt
            defaultValue={value}
            name=""
            id=""
            onChange={onChangeCategory}
            width={`${!isPageWide ? "200" : "160"}`}
          >
            <SelectAnt.Option value={""}>Select Category</SelectAnt.Option>
            {data.map((value) => {
              return (
                <SelectAnt.Option key={value?.id} value={value?.id}>
                  {value?.name || "no data"}
                </SelectAnt.Option>
              );
            })}
          </SelectAnt>
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
            defaultValue={query.get("min_price")}
            onChange={onChange}
            name="min_price"
          />
          <Input
            ref={maxPriceRef}
            width={`${!isPageWide ? "200" : "160"}`}
            placeholder={"Max Price"}
            onChange={onChange}
            defaultValue={query.get("max_price")}
            name="max_price"
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
        placeholder={"Enter an address, neighborhood, city, or ZIP code"}
        mt={`${isPageWideMobile && "40"}`}
      />

      <Dropdown
        menu={{
          items,
        }}
        open={open}
        onOpenChange={onOpenChange}
        placement="bottomRight"
        trigger={"click"}
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
