import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (max-width:375px) {
    padding:var(--paddingMobile);
  }
  padding:0 20px;
`  
export {
  Container,

};
