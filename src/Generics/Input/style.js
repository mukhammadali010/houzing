import styled from "styled-components";
const Container = styled.input`
  padding: 12px 40px;
  margin-top:${({ mt }) => (mt ? `${mt}px` : "10px")};
  gap: ${({ gap }) => (gap ? `${gap}px` : "10px")};
  width: ${({ width }) => (width ? `${width}px` : "100%")};
  height: ${({ height }) => (height ? `${height}px` : "44px")};
  border: 1px solid #E6E9EC;
  border-radius: 2px;
  &:not(:nth-child(2)){
    margin-left: ${({ml})=> ml? `${ml}px` : '20px'};
  }
  outline:none;
  text-indent: 20px;
`;

export { Container };
