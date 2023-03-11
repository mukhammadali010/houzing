import styled from "styled-components";
import { ReactComponent as beds } from "../../assets/icons/bed.svg";
import { ReactComponent as baths } from "../../assets/icons/bath.svg";
import { ReactComponent as car } from "../../assets/icons/car.svg";
import { ReactComponent as sq } from "../../assets/icons/resize.svg";
import { ReactComponent as love } from "../../assets/icons/love.svg";
import { ReactComponent as ruler } from "../../assets/icons/ruler.svg";

const Container = styled.div`
  width: 100%;
  max-width:381px;
  min-width:33px;
  border: 1px solid #E6E9EC;
  position: relative;
  .sale{
    width:88%;
    display:flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    top:20px;
    left:20px;
    right:20px;
    font-size:10px;
    font-weight:600;  

  }
`;

const ImgWrapper = styled.img`
  width: 100%;
  height: 220px;
`;
const Avatar = styled.img`
  width:38px;
  height:38px;
  border-radius:50%;
  position: absolute;
  top:201px;
  right:23px;
`

const Wrapper = styled.div`
  display: flex;
  gap: 20px;
  font-size: 14px;
`;
const Content = styled.div``;
Content.Blok = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 16px 0;
  gap: 10px;
  @media (max-width: 375px) {
    font-size: 14px;
  }
`;

const CardBody = styled.div`
  padding: 16px 20px;
  border-bottom: 1px solid #E6E9EC;
  h3 {
    text-align: left;
    line-height: 4px;
  }
`;
const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 20px;
`;
CardFooter.Price = styled.div`
  p {
    text-decoration: line-through;
  }
`;
CardFooter.Like = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const Icons = styled.div``;

Icons.Beds = styled(beds)``;
Icons.Baths = styled(baths)``;
Icons.Car = styled(car)``;
Icons.Ruler = styled(ruler)``;

Icons.Love = styled(love)`
  cursor: pointer;
  background: #eee;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  padding: 10px;
`;
Icons.Arrow = styled(sq)`
  cursor: pointer;
`;

export { Container, ImgWrapper, Icons, Wrapper, Content, CardBody, CardFooter, Avatar };
