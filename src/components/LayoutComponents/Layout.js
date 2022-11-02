import React from "react";
import styled from "styled-components";

// component imports
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <Container>
      <Navbar />
      {children}
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100%auto;
`;
