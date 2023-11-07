import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../Generics/Button";
import Input from "../../Generics/Input";

import {
  Check,
  CheckBlok,
  Container,
  Content,
  Forgot,
  Remember,
  WrapperForgot,
} from "../Signup/style";

const Signup = () => {
  const [data, setData] = useState({
    email: "",
    firstname:'',
    lastname:'',
    password: "",
  });
  const onChange = ({ target: { value, placeholder } }) => {
    setData({ ...data, [placeholder]: value });
  };
  const navigate = useNavigate();

  const onSubmit = () => {
   
    fetch("http://localhost:8081/api/public/auth/register", {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        localStorage.setItem("token", res.authenticationToken || "");
        if (res?.authenticationToken) {
          navigate("/register");
        }
      });
  };

  return (
    <Container>
      <Content>
        <h3>Sign up</h3>
        <Input
          ml={"0"}
          onChange={onChange}
          typing={"login"}
          placeholder={"email"}
          type={"email"}
        />
        <Input
          ml={"0"}
          onChange={onChange}
          typing={"login"}
          placeholder={"firstname"}
          type={"text"}
        />
        <Input
          ml={"0"}
          onChange={onChange}
          typing={"login"}
          placeholder={"lastname"}
          type={"text"}
        />
        <Input
          ml={"0"}
          onChange={onChange}
          typing={"login"}
          placeholder={"password"}
          type={"password"}
        />

        <WrapperForgot>
          <CheckBlok>
            <Check type={"checkbox"} />
            <Remember>Remember me</Remember>
          </CheckBlok>
          <Forgot>Forgot</Forgot>
        </WrapperForgot>
        <Button width={"%"} mt={"32"} onclick={onSubmit}>
          Submit
        </Button>
      </Content>
    </Container>
  );
};

export default Signup;
