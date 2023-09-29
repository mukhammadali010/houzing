import styled from "styled-components";
import {ReactComponent as edit} from '../../assets/icons/edit.svg';
import {ReactComponent as trash} from '../../assets/icons/trash.svg';
const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 1440px;
  padding:var(--padding);
  display: flex;
  flex-direction: column;
  border: 1px solid #e6e9ec;
  box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
  .wrap {
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: repeat(auto-fit, minmax(310px, 1fr));
    grid-gap: 20px;
    width: 100%;
    max-width: 1440px;
    padding: var(--padding);
    @media (max-width: 1366px) {
      padding: 5px 130px;
    }
    @media (max-width: 375px) {
      padding: 5px 20px;
      margin-top: 429px;
    }
  }
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* flex-direction: column; */
  width: 100%;
  margin-bottom: 32px;
 
  .contents{
    margin-right:auto;
  }
`;

const ListWrap = styled.div`
display: ${({flex})=> flex?'flex':'block'};
gap:${({flex})=> flex?'25px':''};
align-items:  ${({flex})=> flex?'start':''};
justify-content:  ${({flex})=> flex?'start':''};

.content{
  display: flex;
  
  flex-direction:column;
  gap:20px;
}
.sale{
  color: var(--color-5, #FFF);
/* font-family: Cerebri Sans; */
font-size: 10px;
font-style: normal;
font-weight: 600;
line-height: normal;
}
`

const Icons = styled.div``;

Icons.Trash = styled(trash)`
margin:16px;
cursor: pointer;
`
Icons.Edit = styled(edit)`
margin: 16px;
cursor: pointer;
`

export { Container, Content ,ListWrap , Icons};
