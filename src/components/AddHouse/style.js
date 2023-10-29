import styled from "styled-components";
import {ReactComponent as edit} from '../../assets/icons/edit.svg';
import {ReactComponent as trash} from '../../assets/icons/trash.svg';
import { Select} from 'antd';

const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 1440px;
  padding:var(--padding);
  display: flex;
  flex-direction: column;
  border: 1px solid #e6e9ec;
  box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);

  .contents{
   text-align:inherit;
  }
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
  align-items: flex-start;
  justify-content: center;
  flex-direction: ${({section})=> section ? '': 'column'};
  width: 100%;
  margin-bottom: 32px;
  border: 1px solid #eee;
  padding:20px 30px;
 gap:20px;

 .pre{
  display: flex;
  align-items: center;
  /* justify-content: center; */
  white-space:wrap;

  width:100%;
  max-width: 1440px;
  
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
 margin: 16px;
  cursor: pointer;
  :hover{

    & path {
      fill: red; /* This sets the fill color of the SVG path to red */
    }
  }
`
Icons.Edit = styled(edit)`
margin: 16px;
cursor: pointer;
`


const SelectAnt = styled(Select)`
  width:200px;
  margin-left:20px;
  .ant-select-selector{
    height:44px !important;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .ant-select-selection-item {
    display: flex;
    align-items: center;
    justify-content: center;
    gap:10px;
  }
`
SelectAnt.Option = styled.option`

`

const Section = styled.div`
display: flex;
gap:24px;
align-items:flex-start;
justify-content: flex-start;
flex-direction:${({section})=> section? '': 'column'};
width:100%;

.ant-checkbox-wrapper{
  margin-left:8px;
}

`

export { Container, Content ,ListWrap , Icons , SelectAnt , Section};
