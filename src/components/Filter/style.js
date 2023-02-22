import styled from "styled-components";

import { ReactComponent as house } from "../../assets/icons/houses.svg";
import { ReactComponent as setting } from "../../assets/icons/setting.svg";
import { ReactComponent as search } from "../../assets/icons/search.svg";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 20px;
  margin: 10px auto;
  padding: var(--padding);
  .inputWrapper {
    position: relative;
    display: flex;
    align-items: center;
  }
  @media (max-width: 1365px) {
    padding: 5px 116px;
  }
`;
const Icons = styled.div``;
Icons.House = styled(house)`
  position: absolute;
  left:20px;
`;
Icons.Setting = styled(setting)`
position:absolute;
left:10px;
`;
Icons.Search = styled(search)``;

export { Container, Icons };
