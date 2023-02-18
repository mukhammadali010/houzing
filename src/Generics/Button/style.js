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

    default:
      return {
        background: `var(--backgroundPrimary)`,
        color: `#fff`,
      };
  }
};
const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 40px;
  gap: ${({ gap }) => (gap ? `${gap}px` : "10px")};
  width: ${({ width }) => (width ? `${width}px` : "fit-content")};
  height: ${({ height }) => (height ? `${height}px` : "30px")};
  cursor: pointer;
  border-radius: 2px;
  ${getType}

  &:active{
    transform:scale(.97);
    opacity: 0.7;
  }
`;
export { Container };
