import styled from "styled-components";

const Container = styled.div`
  height: 350px;
  margin-bottom:40px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65));
  /* XXL */
  box-shadow: 0px 20px 38px rgba(0, 0, 0, 0.06),
    0px 7px 46px rgba(0, 0, 0, 0.06), 0px 8px 15px rgba(0, 0, 0, 0.06);
  border-radius: 3px;
  transform: matrix(1, 0, 0, 1, 0, 0);
  cursor: pointer;


`;
const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transform:rotate(0deg);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
`;

const ImgWrapper = styled.img`
  width: 100%;
  height:100%;
`;

const Icons = styled.div``;

export { Container, ImgWrapper, Icons, Content };
