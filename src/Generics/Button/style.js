import styled from "styled-components";

const getType = ({ type }) => {
  switch (type) {
    case "primary":
      return {
        background: `var(--backgroundPrimary)`,
        color: `#fff`,
      };
    case "secondary":
      return {
        background: `transparent`,
        color: `var(--colorPrimary)`,
        border: `1px solid var(--colorPrimary)`,
      };
    case "third":
      return {
        background: `transparent`,
        color: `#fff`,
        border: `1px solid #fff`,
      };
    case "card":
      return {
        background: `var(--colorPrimary)`,
        color: `#fff`,
      };

    default:
      return {
        background: `var(--backgroundPrimary)`,
        color: `#fff`,
      };
  }
};
const Container = styled.button`
  border: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 40px;
  gap: ${({ gap }) => (gap ? `${gap}px` : "10px")};
  width: ${({ width }) => (width ? `${width}px` : "fit-content")};
  height: ${({ height }) => (height ? `${height}px` : "44px")};
  margin-bottom: ${({ mb }) => (mb ? `${mb}px` : "auto")};
  margin-top: ${({ mt }) => (mt ? `${mt}px` : "auto")};
  margin-right: ${({ mr }) => (mr ? `${mr}px` : "auto")};
  margin-left: ${({ ml }) => (ml ? `${ml}px` : "auto")};
  opacity: ${({ disabled }) => (disabled ? "0.3" : "1")};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  border-radius: 2px;
  position:${({position})=>position? `${position}` : 'static'};
  top:${({top})=>top? `${top}px` : ''};
  left:${({left})=>left? `${left}px` : ''};
  right:${({right})=>right? `${right}px` : ''};
  bottom:${({bottom})=>bottom? `${bottom}px` : ''};
  ${getType}

  &:active {
    transform: scale(0.97);
    opacity: 0.7;
  }
`;
export { Container };
