import React from "react";
import { Container, Content, ImgWrapper } from "./style";
import noimg from "../../assets/img/category.png";
const CategoryCard = ({onClick , data: {name} }) => {
  return (
    <div>
      <Container onClick={onClick}>
        <Content>{name || 'Category name'}</Content>
        <ImgWrapper src={noimg} />
      </Container>
    </div>
  );
};

export default CategoryCard;
