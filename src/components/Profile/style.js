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
  @media (max-width:834px) {
    padding:var(--paddingMobile);
  }
  @media (max-width:1024px) {
    padding:var(--paddingMobile);
  }
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 32px;
 
  .contents{
    margin-right:auto;
    @media (max-width:375px){
      font-size:25px;
    }
  }
`;

const ListWrap = styled.div`
display: ${({flex})=> flex?'flex':'block'};
gap:${({flex})=> flex?'25px':''};
align-items:  ${({flex})=> flex?'start':''};
justify-content:  ${({flex})=> flex?'start':''};
position:relative;

.content{
  display: flex;
  flex-direction:column;
  gap:20px;
  flex-wrap:wrap;
}
.sale{
  color: var(--color-5, #FFF);
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
:hover{
  & path{
    fill:red;
  }
}
`
Icons.Edit = styled(edit)`
margin: 16px;
cursor: pointer;
:hover{
  & path{
    fill:blue;
  }
}
`

export { Container, Content ,ListWrap , Icons};
