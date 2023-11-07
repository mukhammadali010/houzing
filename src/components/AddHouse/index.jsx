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
  const tablet = useMediaQuery("(max-width: 834px)");

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
              width={`${!tablet ? "305" : ""}`}
              placeholder={"country"}
              name={"country"}
            />
            
            <Input
              onChange={formik.handleChange}
              typing={"login"}
              value={formik.values.region}
              width={`${!tablet ? "250" : ""}`}
              placeholder={"region"}
              name={"region"}
              ml={tablet &&  '0'}

            />
            <Input
              onChange={formik.handleChange}
              typing={"login"}
              value={formik.values.city}
              width={`${!tablet ? "210" : ""}`}
              placeholder={"city"}
              name={"city"}
              ml={tablet &&  '0'}
              
            />
            <Input
              onChange={formik.handleChange}
              typing={"login"}
              value={formik.values.address}
              width={`${!tablet ? "210" : ""}`}
              placeholder={"address"}
              name={"address"}
              ml={tablet &&  '0'}

            />
          </div>
          <div>
            <h4>Apartment info</h4>
            <Input
              width={`${!tablet ? "165" : ""}`}
              placeholder={"area"}
              onChange={formik.handleChange}
              value={formik.values.houseDetails.area}
              name="houseDetails.area"
              typing={"login"}
              type={"number"}
               ml={tablet &&  '0'}
            />
            <Input
              width={`${!tablet ? "110" : ""}`}
              typing={"login"}
              type={"number"}
               ml={tablet ?  '0' : ''}
              placeholder={"bath"}
              onChange={formik.handleChange}
              value={formik.values.houseDetails.bath}
              name="houseDetails.bath"
            />
            <Input
              width={`${!tablet ? "110" : ""}`}
              typing={"login"}
              type={"number"}
               ml={tablet ?  '0': ''}
              placeholder={"beds"}
              onChange={formik.handleChange}
              value={formik.values.houseDetails.beds}
              name="houseDetails.beds"
            />
            <Input
              width={`${!tablet ? "110" : ""}`}
              typing={"login"}
              type={"number"}
               ml={tablet &&  '0'}
              placeholder={"garage"}
              onChange={formik.handleChange}
              value={formik.values.houseDetails.garage}
              name="houseDetails.garage"
            />
            <Input
              width={`${!tablet ? "110" : ""}`}
              typing={"login"}
              type={"number"}
               ml={tablet ?  '0': ''}
              placeholder={"room"}
              onChange={formik.handleChange}
              value={formik.values.houseDetails.room}
              name="houseDetails.room"
            />
            <Input
              width={`${!tablet ? "110" : ""}`}
              typing={"login"}
              type={"number"}
               ml={tablet ? '0': ''}
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
              tablet = {tablet ? true : false}
              onChange={(value) => {
                formik.setFieldValue("category", value);
              }}
            >
              <SelectAnt.Option value="Select Category">Select Category</SelectAnt.Option>
              {category.map((value , index) => {
                return (
                  <SelectAnt.Option key={index} value={value?.id}>
                   <p> {value?.name}</p>
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
              width={`${!tablet ? "305" : ""}`}
              placeholder={"name"}
              name={"name"}
              ml={tablet ?  '0' : ''}
            />
            <Input
              onChange={formik.handleChange}
              typing={"login"}
              type={'number'}
              value={formik.values.zipCode}
              width={`${!tablet ? "210" : ""}`}
              placeholder={"zip_code"}
              name={"zipCode"}
              ml={tablet &&  '0'}
            />
            <Input
              typing={"login"}
              type={"number"}
              width={`${!tablet ? "170" : ""}`}
              placeholder={"Min Price"}
              onChange={formik.handleChange}
              value={formik.values.price}
              name="price"
              ml={tablet ?  '0' : ''}
            />
            <Input
              typing={"login"}
              type={"number"}
              width={`${!tablet ? "170" : ""}`}
              placeholder={"Max Price"}
              onChange={formik.handleChange}
              value={formik.values.salePrice}
              name="salePrice"
              ml={tablet ?  '0' : ''}
            />
          </div>

          {/* adding image url */}

          <h3>Media</h3>
          <Section section style={{ display:'flex', width:'100%',  justifyContent:'space-between'}}>
            <Input
              placeholder={"enter image url..."}
              typing={"login"}
              width={""}
              mt={"0"}
              ml={"auto"}
              value={img}
              onChange={({ target: { value } }) => setImg(value)}
            />

            <Button
              width={tablet ?"100" : '200'}
              type={"button"}
              onclick={addImgs}
              disabled={imgs.length >= 10}
            >
              AddImage
            </Button>
          </Section>
          {imgs?.map((value) => {
            return (
              <div className="pre">
                <div>{value.imgPath}</div>
                <Icons.Trash
                  onClick={() => {
                    let res = imgs.filter((vl) => {
                      return vl !== value;
                    });
                    setImgs(res);
                  }}
                />
              </div>
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
          <Section section style={{    display: 'flex',
    justifyContent: 'space-between',
    margin: 'auto',
    width:' 100%',
    flexWrap:'wrap'
}}>
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
        <Button type={"submit"}  width={tablet ? '150' : "280"} mr={"0"} >
          {id ? 'Update':'Submit'}
        </Button>
      </form>
    </Container>
  );
};

export default AddHouse;
