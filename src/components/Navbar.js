import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import CustomButton from "./CustomButton";

// image imports

const Content = {
  jp: {},
  en: {},
};

const Navbar = () => {
  return (
    <Nav>
      <Links>
        <StyledLink to="/">私たちについて</StyledLink>
        <StyledLink to="/about">私たちのアクション</StyledLink>
        <StyledLink to="/action">プレスリリース</StyledLink>
        <StyledLink to="/ourVoice">私たちの声</StyledLink>
        <StyledLink to="/resources">リソース</StyledLink>
      </Links>
      <Buttons>
        <CustomButton
          text="参加"
          color="white"
          borderColor="#DD5871"
          fontSize="1.2em"
          backgroundColor="#DD5871"
        />

        <CustomButton
          text="寄付"
          color="white"
          borderColor="#44798E"
          fontSize="1.2em"
          backgroundColor="#44798E"
        />
      </Buttons>
    </Nav>
  );
};

const Nav = styled.nav`
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100vw;
  min-height: 100px;
  background-color: white;
  border-bottom: solid 2px #44798e;
`;

const Links = styled.div``;

const Buttons = styled.div``;

const StyledLink = styled(Link)`
  padding: 15px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1em;
  color: black;

  :visited {
    color: black;
  }

  :hover {
    font-size: 1.05em;
  }
`;

export default Navbar;
