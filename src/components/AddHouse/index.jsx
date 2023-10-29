import React, { useEffect, useState } from "react";
import { Container, Content, Icons, Section, SelectAnt } from "./style";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { Checkbox , message } from "antd";
import Button from "../../Generics/Button";
import { Input } from "../../Generics";

import { useFormik } from "formik";
import TextArea from "antd/es/input/TextArea";
import axios from "axios";
import {useNavigate, useParams } from "react-router-dom";

const AddHouse = () => {
  const navigate =useNavigate()
  const [category, setCategory] = useState([]);
  const [imgs, setImgs] = useState([]);
  const [img, setImg] = useState("");
  const {id} = useParams()


  const [messageApi, contextHolder] = message.useMessage();

  const success = () => {
    messageApi.open({
      type: 'success',
      content: id? 'Successfully Updated ' : 'Successfully added !',
    });
    
  
  };

  const [initial, setInitial] = useState({ 
    componentsDto: {},
    homeAmenitiesDto: {},
    houseDetails: {},
    
    status: true,
    locations: {
      latitude: 0,
      longitude: 0,
    },
   });
  const isPageWide = useMediaQuery("(max-width: 834px)");

  const { REACT_APP_BASE_URL: url } = process.env;
  useEffect(() => {
    
    fetch(`${url}/categories/list`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        setCategory(res?.data || []);
      });
  }, []);


  //single house 
  useEffect(() => {
    
    id &&
    fetch(`${url}/houses/id/${id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        setImgs(res?.data?.attachments || [])
        setInitial({...res?.data} || {});
      });
  }, []);

  const formik = useFormik({
    initialValues: initial,
     enableReinitialize: true,
    
     onSubmit: async (values) => {
      success()
      setTimeout(() => {
        navigate('/profile')
      }, 2000);
      
      const data = await axios[id ? "put":"post"](
        id ?`${url}/houses/${id}` :  `${url}/houses`,
        {...values , attachments: imgs, name:'name' },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      // const res = await data.json();
    },
  });

  const addImgs = () => {
    if (!(imgs.length >= 10) && img) {
      setImgs([
        ...imgs,
        { imgPath: img, id: `${img.length * Math.random()}${img}$` },
      ]);

      setImg("");
    }
  };


  return (
    
    <Container>
       {contextHolder}
      <h3 className="contents">Add new property</h3>
      <form onSubmit={formik.handleSubmit}>
        <Content>
          <h3>Additional</h3>

          <div className="dropdown">
            <h4>Address</h4>
            <Input
              onChange={formik.handleChange}
              typing={"login"}
              value={formik.values.country}
              width={`${!isPageWide ? "305" : "160"}`}
              placeholder={"country"}
              name={"country"}
            />
            
            <Input
              onChange={formik.handleChange}
              typing={"login"}
              value={formik.values.region}
              width={`${!isPageWide ? "250" : "160"}`}
              placeholder={"region"}
              name={"region"}
            />
            <Input
              onChange={formik.handleChange}
              typing={"login"}
              value={formik.values.city}
              width={`${!isPageWide ? "210" : "160"}`}
              placeholder={"city"}
              name={"city"}
            />
            <Input
              onChange={formik.handleChange}
              typing={"login"}
              value={formik.values.address}
              width={`${!isPageWide ? "210" : "160"}`}
              placeholder={"address"}
              name={"address"}
            />
          </div>
          <div>
            <h4>Apartment info</h4>
            <Input
              width={`${!isPageWide ? "165" : "160"}`}
              placeholder={"area"}
              onChange={formik.handleChange}
              value={formik.values.houseDetails.area}
              name="houseDetails.area"
              typing={"login"}
              type={"number"}
            />
            <Input
              width={`${!isPageWide ? "110" : "160"}`}
              typing={"login"}
              type={"number"}
              placeholder={"bath"}
              onChange={formik.handleChange}
              value={formik.values.houseDetails.bath}
              name="houseDetails.bath"
            />
            <Input
              width={`${!isPageWide ? "110" : "160"}`}
              typing={"login"}
              type={"number"}
              placeholder={"beds"}
              onChange={formik.handleChange}
              value={formik.values.houseDetails.beds}
              name="houseDetails.beds"
            />
            <Input
              width={`${!isPageWide ? "110" : "160"}`}
              typing={"login"}
              type={"number"}
              placeholder={"garage"}
              onChange={formik.handleChange}
              value={formik.values.houseDetails.garage}
              name="houseDetails.garage"
            />
            <Input
              width={`${!isPageWide ? "110" : "160"}`}
              typing={"login"}
              type={"number"}
              placeholder={"room"}
              onChange={formik.handleChange}
              value={formik.values.houseDetails.room}
              name="houseDetails.room"
            />
            <Input
              width={`${!isPageWide ? "110" : "160"}`}
              typing={"login"}
              type={"number"}
              placeholder={"yearBuilt"}
              onChange={formik.handleChange}
              value={formik.values.houseDetails.yearBuilt}
              name="houseDetails.yearBuilt"
            />

            {/* category select */}
            <SelectAnt
              placeholder={"Select"}
              value={formik.values.category}
              name="category"
              onChange={(value) => {
                formik.setFieldValue("category", value);
              }}
              width={`${!isPageWide ? "250" : "160"}`}
            >
              <SelectAnt.Option>Select Category</SelectAnt.Option>
              {category.map((value) => {
                return (
                  <SelectAnt.Option key={value?.id} value={value?.id}>
                    {value?.name}
                  </SelectAnt.Option>
                );
              })}
            </SelectAnt>
          </div>
          <div>
            <h4>Price</h4>
            <Input
              onChange={formik.handleChange}
              typing={"login"}
              value={formik.values.name}
              width={`${!isPageWide ? "305" : "160"}`}
              placeholder={"name"}
              name={"name"}
            />
            <Input
              onChange={formik.handleChange}
              typing={"login"}
              type={'number'}
              value={formik.values.zipCode}
              width={`${!isPageWide ? "210" : "160"}`}
              placeholder={"zip_code"}
              name={"zipCode"}
            />
            <Input
              typing={"login"}
              type={"number"}
              width={`${!isPageWide ? "170" : "160"}`}
              placeholder={"Min Price"}
              onChange={formik.handleChange}
              value={formik.values.price}
              name="price"
            />
            <Input
              typing={"login"}
              type={"number"}
              width={`${!isPageWide ? "170" : "160"}`}
              placeholder={"Max Price"}
              onChange={formik.handleChange}
              value={formik.values.salePrice}
              name="salePrice"
            />
          </div>

          {/* adding image url */}

          <h3>Media</h3>
          <Section section>
            <Input
              placeholder={"enter image url..."}
              typing={"login"}
              mt={"0"}
              ml={"auto"}
              value={img}
              onChange={({ target: { value } }) => setImg(value)}
            />

            <Button
              width={"200"}
              type={"button"}
              onclick={addImgs}
              disabled={imgs.length >= 10}
            >
              Add Image
            </Button>
          </Section>
          {imgs?.map((value) => {
            return (
              <pre className="pre">
                {value.imgPath}
                <Icons.Trash
                  onClick={() => {
                    let res = imgs.filter((vl) => {
                      return vl !== value;
                    });
                    setImgs(res);
                  }}
                />
              </pre>
            );
          })}
          <h3>Description</h3>
          <TextArea
            rows={6}
            onChange={formik.handleChange}
            value={formik.values.description}
            placeholder={"description..."}
            name={"description"}
          />
        </Content>

        <Content>
          <h3>Amenities</h3>
          <Section section>
            <Section>
              <Checkbox
                name="homeAmenitiesDto.stop"
                onChange={formik.handleChange}
                value={formik.values.stop}
              >
                Bus Stop
              </Checkbox>
              <Checkbox
                name="homeAmenitiesDto.garden"
                onChange={formik.handleChange}
                value={formik.values.garden}
              >
                Garden
              </Checkbox>
              <Checkbox
                name="homeAmenitiesDto.market"
                onChange={formik.handleChange}
                value={formik.values.market}
              >
                Market
              </Checkbox>
              <Checkbox
                name="homeAmenitiesDto.park"
                onChange={formik.handleChange}
                value={formik.values.park}
              >
                Park
              </Checkbox>
            </Section>
            <Section>
              <Checkbox
                name="homeAmenitiesDto.parking"
                onChange={formik.handleChange}
                value={formik.values.parking}
              >
                Parking
              </Checkbox>
              <Checkbox
                name="homeAmenitiesDto.school"
                onChange={formik.handleChange}
                value={formik.values.school}
              >
                School
              </Checkbox>
              <Checkbox
                name="homeAmenitiesDto.stadium"
                onChange={formik.handleChange}
                value={formik.values.stadium}
              >
                Stadium
              </Checkbox>
              <Checkbox
                name="homeAmenitiesDto.subway"
                onChange={formik.handleChange}
                value={formik.values.subway}
              >
                Subway
              </Checkbox>
            </Section>
            <Section>
              <Checkbox
                name="homeAmenitiesDto.superMarket"
                onChange={formik.handleChange}
                value={formik.values.superMarket}
              >
                SuperMarket
              </Checkbox>
              <Checkbox
                name="componentsDto.airCondition"
                onChange={formik.handleChange}
                value={formik.values.airCondition}
              >
                AirCondition
              </Checkbox>
              <Checkbox
                name="componentsDto.courtyard"
                onChange={formik.handleChange}
                value={formik.values.courtyard}
              >
                Courtyard
              </Checkbox>
              <Checkbox
                name="componentsDto.furniture"
                onChange={formik.handleChange}
                value={formik.values.furniture}
              >
                Furniture
              </Checkbox>
            </Section>
            <Section>
              <Checkbox
                name="componentsDto.gasStove"
                onChange={formik.handleChange}
                value={formik.values.gasStove}
              >
                Gas Stove
              </Checkbox>
              <Checkbox
                name="componentsDto.internet"
                onChange={formik.handleChange}
                value={formik.values.internet}
              >
                Internet
              </Checkbox>
              <Checkbox
                name="componentsDto.tv"
                onChange={formik.handleChange}
                value={formik.values.tv}
              >
                TV
              </Checkbox>
              <Checkbox
                name=""
              >
                Central Heating
              </Checkbox>
            </Section>
          </Section>
        </Content>
        <Button type={"submit"}  width={"280"} mr={"0"} >
          {id ? 'Update':'Submit'}
        </Button>
      </form>
    </Container>
  );
};

export default AddHouse;
