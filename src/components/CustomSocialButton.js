import React from "react";
import styled from "styled-components";

export default function CustomSocialButton({ image, onClick, name }) {
  return (
    <Button onClick={onClick} aria-label={`${name} button`}>
      <Image src={image} />
    </Button>
  );
}

const Button = styled.button`
  background: none;
  border: none;

  :hover {
    cursor: pointer;
  }
`;

const Image = styled.img`
  height: 2em;
`;
