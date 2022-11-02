import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

// component imports
import CustomButton from "../CustomButton";

// image imports
import logo from "../../images/vuj-logo.png";

const content = {
  jp: {
    aboutUs: "私たちについて",
    action: "私たちのアクション",
    news: "ニュース",
    ourVoice: "私たちの声",
    resources: "リソース",
    getInvolved: "参加",
    donate: "寄付",
  },
  en: {
    aboutUs: "Who We Are",
    action: "What We Do",
    news: "News",
    ourVoice: "Our Voices",
    resources: "Resources",
    getInvolved: "Get Involved",
    donate: "Donate",
  },
};



const Navbar = ({ lang = "jp" }) => {
  let selectedLang = {};
  lang === "jp" ? (selectedLang = content.jp) : (selectedLang = content.en);

  return (
    <Nav>
      <Container>
        <LogoLinksDiv>
          <LogoDiv>
            <StyledLink to="/">
              <Logo src={logo} />
            </StyledLink>
          </LogoDiv>
          <Links>
            <StyledLink to="/about">{selectedLang.aboutUs}</StyledLink>
            <StyledLink to="/action">{selectedLang.action}</StyledLink>
            <StyledLink to="/news">{selectedLang.news}</StyledLink>
            <StyledLink to="/ourVoice">{selectedLang.ourVoice} </StyledLink>
            <StyledLink to="/resources">{selectedLang.resources}</StyledLink>
          </Links>
          <HamburgerDiv>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </HamburgerDiv>
        </LogoLinksDiv>
        <Buttons>
          <CustomButton
            text={selectedLang.getInvolved}
            color="white"
            borderColor="#DD5871"
            fontSize="1.2em"
            backgroundColor="#DD5871"
          />

          <CustomButton
            text={selectedLang.donate}
            color="white"
            borderColor="#44798E"
            fontSize="1.2em"
            backgroundColor="#44798E"
          />
        </Buttons>
      </Container>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  position: sticky;
  top: 0;
  background-color: white;
  //border-bottom: solid 1px #44798e;
`;

const Container = styled.div`
  width: 70%;
  height: 8em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  @media screen and (max-width: 1480px) {
    width: 90%;
  }

  // switch to mobile view
  @media screen and (max-width: 1090px) {
    margin: 1em 0vh;
    flex-direction: column;
  }
`;

const LogoLinksDiv = styled.div`
  display: flex;
  align-items: center;
  width: 80%;

  // switch to mobile view
  @media screen and (max-width: 1090px) {
    width: 100%;
    justify-content: space-between;
  }
`;

const LogoDiv = styled.div`
`;

const Logo = styled.img`
  height: 4rem;

`;

const HamburgerDiv = styled.div`
  display: none;
  // when switch to mobile mode, update display
  @media screen and (max-width: 1090px) {
    display: inline;
  }

  // css hamburger menu
  .bar1,
  .bar2,
  .bar3 {
    width: 40px;
    height: 2px;
    background-color: black;
    margin: 10px 0px;
  }
`;

const Links = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  @media screen and (max-width: 1090px) {
    display: none;
  }
`;

const Buttons = styled.div`
  display: flex;
  justify-content: flex-start;
  button {
    margin: 0.5em;
  }

  // switch to mobile view
  @media screen and (max-width: 1090px) {
    width: 100%;
    justify-content: space-around;

    button {
      width: 40%;
    }
  }

  @media screen and (max-width: 700px) {
    button {
      width: 50%;
    }
  }
`;

const StyledLink = styled(Link)`
  padding: 2%;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  color: black;

  :visited {
    color: black;
  }

  :hover {
    opacity: 0.7;
  }
`;

export default Navbar;
