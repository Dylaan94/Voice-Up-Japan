import React from "react";
import styled from "styled-components";

export default function CustomButton({
  text,
  color,
  border,
  borderColor,
  fontSize,
  fontWeight,
  backgroundColor,
}) {
  return (
    <Button
      style={{
        color: `${color ? color : "black"}`,
        border: `${border ? border : "none"}`,
        borderColor: `${borderColor ? borderColor : "black"}`,
        fontSize: `${fontSize ? fontSize : "1em"}`,
        fontWeight: `${fontWeight ? fontWeight : "400"}`,
        backgroundColor: `${backgroundColor ? backgroundColor : "white"}`,
      }}
    >
      {text}
    </Button>
  );
}

const Button = styled.button`
  width: 120px;
  height: 45px;
  border-radius: 10px;

  :hover {
    opacity: 0.9;
    cursor: pointer;
  }
`;
