import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction:column;
  border-top: 2px solid #eee;
  border-bottom: 2px solid #eee;
  padding:48px 0;
  h3{
    margin-bottom:30px;
  }
`;
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
export {
  Container , DownloadWapper
};
