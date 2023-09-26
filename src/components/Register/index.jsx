import React, { useState } from "react";
import { Tabs } from 'antd';


import Signin from "../Signin";
import Signup from "../Signup";
import { Container } from "./style";


const Register
 = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const onChange = ({ target: { value, placeholder } }) => {
    setData({...data , [placeholder]: value });
  };

  

  const items = [
    {
      key: '1',
      label: 'Sign In',
      children: <Signin/>,
    },
    {
      key: '2',
      label: 'Sign Up',
      children: <Signup/>,
    },
  ];
  return (
    <Container>
    <Tabs defaultActiveKey="1" items={items} onChange={onChange} className="tab"/>
    </Container>
    
  );
};

export default Register
;
