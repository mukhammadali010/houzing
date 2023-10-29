import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../Generics/Button";
import Input from "../../Generics/Input";
import { message } from 'antd';

import {
  Check,
  CheckBlok,
  Container,
  Content,
  Forgot,
  Remember,
  WrapperForgot,
} from "../Signin/style";

const Signin = () => {

  const [messageApi, contextHolder] = message.useMessage();

  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'Successfully logged in',
    });
  };
  const error = () => {
    messageApi.open({
      type: 'error',
      content: 'Incorrect email or password !',
    });
  };

  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const onChange = ({ target: { value, placeholder } }) => {
    setData({ ...data, [placeholder]: value });
  };
  const navigate = useNavigate();

  const onSubmit = () => {

    fetch("http://localhost:8081/api/public/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.authenticationToken || "");
        if (res?.authenticationToken) {
          success()
          setTimeout(() => {
            navigate("/home");
          }, 1500);
        }else{
          error()
        }
      });
  };

  return (
    <Container>
      {contextHolder}
      <Content>
        <h3>Sign in</h3>
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

export default Signin;
