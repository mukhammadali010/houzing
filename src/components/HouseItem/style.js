import styled from "styled-components";
import { ReactComponent as share } from "../../assets/icons/share.svg";
import { ReactComponent as like } from "../../assets/icons/love.svg";
import { ReactComponent as beds } from "../../assets/icons/bed.svg";
import { ReactComponent as baths } from "../../assets/icons/bath.svg";
import { ReactComponent as car } from "../../assets/icons/car.svg";
import { ReactComponent as sq } from "../../assets/icons/resize.svg";
import { ReactComponent as year } from "../../assets/icons/calendar.svg";
import { ReactComponent as download } from "../../assets/icons/download.svg";

const Container = styled.div`
  display: ${({flex})=> flex? 'flex': 'block'};
  /* flex-direction: column; */
  gap:20px;
  border:${({card})=>card? '1px solid #eee' : 'none'};
  width: 100%;
  max-width: 1440px;
  flex: ${({ card }) => (!card ? 3 : 1)};
  padding:${({card})=>card ? '25px' : 'none'};

  @media (max-width: 375px) {
    height: 100%;
  }
  h2 {
    color: #000;
  }
  .down{
    display:flex;
    width: 100%;
    justify-content: space-between;
    gap:20px;
  }
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction:${({img})=>img?'column':''};
  width: 100%;
  max-width: 1440px;
  padding:var(--padding);
  gap:10px;
  .nocard{
    border: none;
  }
`;
const Section = styled.div`
  display: ${({grid})=>grid?'grid':'flex'};
  margin-bottom: ${({flex})=>flex?'24px':'0'};
  grid-template-columns: auto auto ;
  gap: 20px;
  justify-content: space-between;
  width: 100%;
`;
const Content = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: ${({ flex }) => (flex ? "none" : "column  ")};
  gap: ${({ flex }) => (flex ? "20px" : "0")};
  margin-top: ${({ icons }) => (icons ? "35px" : "0")};
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    h2{
      font-size:24px;
    }
  }
  .description{
    margin-top:48px;
  }
`;

const CardContent = styled.div`
  width: 100%;
`

const Avatar = styled.img`
  width: 52px;
  height:52px;
  border-radius:50%;
`
const CardHead = styled.div`
  display: flex;
  align-items: center;
  gap:10px;
`
const CardBody = styled.div`
width: 100%;
h3{
  margin-top:20px;
  margin-bottom:0;
}
.check {
  display:flex;
  align-items: center;
  justify-content: center;
  margin-top:24px;
  gap:10px;
}
`
const DownloadWapper = styled.div`
display:flex;
justify-content: flex-start;
flex-direction:${({location})=>location? 'column':'none'};
gap:15px;
.address{
  font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 20px;
color: #0D263B;
}
div{
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap:10px;
}
`

// const Image = styled.img`
// width: ${({main})=>main?'510px':'270px'};
// height:${({main})=>main?'400px':'190px'};
// `
const Blur = styled.div`
  width: 270px;
  height:190px;
  background-color:rgba(0,0,0,0.7);
  position: absolute;
  cursor:pointer;
  top:0;
  left: 0;
  right:0;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index:999;
`

const ImgWrap = styled.div`
  width:270px;
  height:190px;
  position:relative;
  color: #FFF;
 

/* Heading/H2/Semibold/Desktop */
font-family: Montserrat;
font-size: 36px;
font-style: normal;
font-weight: 600;
line-height: 44px; /* 122.222% */
letter-spacing: -0.72px;
`
const Br = styled.div`
  width:100%;
  background: #eee;
  height:1px;
  margin-top:40px;
`

const Icons = styled.div``;
Icons.Share = styled(share)`
  padding: 10px;
  width: 35px;
  height: 35px;
  background: #f6f8f9;
  border-radius: 60px;
  cursor: pointer;
  :active {
    transform: scale(0.92);
  }
`;

Icons.Like = styled(like)`
  padding: 10px;
  width: 35px;
  height: 35px;
  background: #f6f8f9;
  border-radius: 60px;
  cursor: pointer;
  :active {
    transform: scale(0.92);
  }
`;

Icons.Beds = styled(beds)`
  & path {
    fill: #696969;
  }
`;
Icons.Baths = styled(baths)`
  & path {
    fill: #696969;
  }
`;
Icons.Car = styled(car)`
  & path {
    fill: #696969;
  }
`;
Icons.Sq = styled(sq)`
  & path {
    fill: #696969;
  }
`;
Icons.Years = styled(year)`
  & path {
    fill: #696969;
  }
`;
Icons.Download = styled(download)`
  & path {
    fill: #696969;
  }
`;
export { Container, Content, Section, Icons, Wrapper , CardContent , Avatar , CardHead , CardBody , DownloadWapper , ImgWrap, Blur,  Br};
