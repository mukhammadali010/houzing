import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  border-bottom: 2px solid #eee;
  padding: 48px 0;
  .down{
    gap:115px;
    .cleanless{
      width:100%;
      display:flex;
      align-items: center;
      justify-content:space-between;
      .pro{
        width: 200px;
      }
    }
  }
  h3 {
    margin-bottom: 30px;
  }
  .info{
    margin-top:48px;
  }
  .title{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
const DownloadWapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: ${({ location }) => (location ? "column" : "none")};
  gap: 15px;
  width: 100%;
  .address {
    width: 45px;
    height: 45px;
    padding:5px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: var(--bg-1, #f6f8f9);
  }
  div {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
  }
`;

export { Container, DownloadWapper};
