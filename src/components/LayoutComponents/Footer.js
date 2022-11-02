import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

//image imports
import logo from "../../images/vuj-logo2.svg";
import facebook from "../../images/socialMedia/facebookLogo.svg";
import insta from "../../images/socialMedia/instaLogo.svg";
import twitter from "../../images/socialMedia/twitterLogo.svg";

// component imports
import CustomSocialButton from "../CustomSocialButton";

const content = {
  jp: {
    quickLinks: "Quick Links",
    contact: "お問い合わせ",
    privacyPolicy: "プライバシーポリシー",
    terms: "利用規約",
    conduct: "行動規範",
    siteMap: "サイトマップ",
  },
  en: {
    quickLinks: "Quick Links",
    contact: "Contact",
    privacyPolicy: "Privacy Policy",
    terms: "Terms and Conditions",
    conduct: "Code of Conduct",
    siteMap: "Site Map",
  },
};

export default function Footer({ lang = "jp" }) {
  let selectedLang = {};
  lang === "jp" ? (selectedLang = content.jp) : (selectedLang = content.en);

  return (
    <Foot>
      <Container>
        <Section>
          <Logo src={logo} />
          <Socials>
            <CustomSocialButton name="instagram" image={insta} />
            <CustomSocialButton name="twitter" image={twitter} />
            <CustomSocialButton name="facebook" image={facebook} />
          </Socials>
        </Section>
        <Section>
          <Header>{selectedLang.quickLinks}</Header>
          <StyledLink to="/">{selectedLang.contact}</StyledLink>
          <StyledLink to="/">{selectedLang.privacyPolicy}</StyledLink>
          <StyledLink to="/">{selectedLang.terms}</StyledLink>
          <StyledLink to="/">{selectedLang.conduct}</StyledLink>
          <StyledLink to="/">{selectedLang.siteMap}</StyledLink>
        </Section>
      </Container>
    </Foot>
  );
}

const Foot = styled.footer`
  background: #dd5871;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  width: 70%;
  margin: 1em 0;

  @media screen and (max-width: 1480px) {
    width: 90%;
  }

  // switch to mobile view
  @media screen and (max-width: 1090px) {
    margin: 1em 0vh;
    flex-direction: column;
  }
`;

const Section = styled.section`
  width: 25%;
`;

const Socials = styled.div`
  display: flex;
  width: 10rem;
  justify-content: space-between;
`;

const Logo = styled.img`
  width: 10rem;
`;

const Header = styled.h2`
  color: white;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: column;

  :visited {
    color: white;
  }

  :hover {
    opacity: 0.7;
  }
`;
