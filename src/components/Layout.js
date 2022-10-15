import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <Container>
      <Navbar />
      {children}
      <h1>Footer</h1>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100%auto;

`;
