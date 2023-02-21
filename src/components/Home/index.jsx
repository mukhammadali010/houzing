import React from "react";
import Button from "../../Generics/Button";
import Input from "../../Generics/Input";
import { Container } from "./style";

const Home = () => {
  return (
    <Container>
      <Input width={"829"} />
      <Button width={'131'} type={'secondary'} padding={'12'}>Advanced</Button>
      <Button  width={'180'} padding={'12'}>Search</Button>
    </Container>
  );
};

export default Home;
