import React, { forwardRef } from "react";
import { Container } from "./style";

export const Input = forwardRef(
  (
    {
      type,
      width,
      height,
      mt,
      mb,
      mr,
      ml,
      gap,
      padding,
      placeholder,
      onChange,
    },
    ref
  ) => {
    return (
      <Container
        type={type}
        ref={ref}
        width={width}
        height={height}
        mt={mt}
        mb={mb}
        mr={mr}
        ml={ml}
        gap={gap}
        padding={padding}
        placeholder={placeholder}
        onChange={onChange}
      />
    );
  }
);

export default Input;
