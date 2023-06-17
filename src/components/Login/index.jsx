import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../Generics/Button";
import Input from "../../Generics/Input";
import { message , Space} from 'antd';

import {
  Check,
  CheckBlok,
  Container,
  Content,
  Forgot,
  Remember,
  WrapperForgot,
} from "./style";
import useRequest from "../../hooks/useRequest";


const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const onChange = ({ target: { value, placeholder } }) => {
    setData({...data , [placeholder]: value });
  };
  const navigate = useNavigate();

  // message 
  const [messageApi ,  contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'This is a success message',
    });
  };

  const error = () => {
    messageApi.open({
      type: 'error',
      content: 'This is an error message',
    });
  };

const request = useRequest()
  const onSubmit = () => {
    request({url:'/public/auth/login' , method:'POST' , data , me:true })
      .then((res) => {
        console.log(res);
        localStorage.setItem('token' , res?.authenticationToken
        )
        if(res?.authenticationToken){  
          navigate('/home');
          success()
       }
     });
    
    fetch(
      "http://localhost:8081/api/public/auth/login" , {
        method: 'POST',
        headers:{
          'Content-Type': 'application/json',
        },
        body:JSON.stringify(data)
      }
      )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        localStorage.setItem('token' , res?.authenticationToken
        )
        if(res?.authenticationToken){  
          navigate('/home');
          success()
        }
      });
     

  };
  return (
    <Container>
      <Content>
        <h3>Sign in</h3>
        <label className="label">
          Login
        </label>
        <Input
          ml={"0"}
          onChange={onChange}
          typing={"login"}
          placeholder={"email"}
          type={'email'}
        />
        <Input
          ml={"0"}
          onChange={onChange}
          typing={"login"}
          placeholder={"password"}
          type={'password'}
        />
        <WrapperForgot>
          <CheckBlok>
            <Check type={"checkbox"} />
            <Remember>Remember me</Remember>
          </CheckBlok>
          <Forgot>Forgot</Forgot>
        </WrapperForgot>
        {contextHolder}
        <Button width={"%"} mt={"32"} onclick={onSubmit} >
          Submit
        </Button>
      </Content>
    </Container>
  );
};

export default Login;
