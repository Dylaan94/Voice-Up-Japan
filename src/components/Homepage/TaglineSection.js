/* Tagline section component. Changes to mobile view at 700px */

import React from "react";
import styled from "styled-components";

// image imports
import logo from "../../images/vuj-logo2.svg";

// component imports
import CustomButton from "../CustomButton";

const content = {
  jp: {
    tagline: "Voicing up for Equality in Japan",
    text: "一般社団法人Voice Up Japanは、ジェンダー、セクシュアリティー、人種、国籍、信じる宗教に関係なく誰もが平等な権利をもち、そして誰もが声を上げやすい社会を作ることをビジョンとして掲げ活動しています。",
  },
  en: {
    tagline: "Voicing up for Equality in Japan",
    text: "text",
  },
};

const buttonContent = {
  jp: {
    getInvolved: "参加",
  },
  en: {
    getInvolved: "Get Involved",
  },
};

export default function TaglineSection({ lang = "jp" }) {
  let selectedLang = {};

  lang === "jp"
    ? (selectedLang = buttonContent.jp)
    : (selectedLang = buttonContent.en);
  return (
    <Root>
      <Container>
        <Image src={logo} />
        <TextDiv>
          <Tagline> {content.jp.tagline} </Tagline>
          <Text> {content.jp.text} </Text>
        </TextDiv>
        <ButtonDiv>
          <CustomButton
            text={selectedLang.getInvolved}
            color="white"
            borderColor="#DD5871"
            fontSize="1.2em"
            backgroundColor="#DD5871"
          />
        </ButtonDiv>
      </Container>
    </Root>
  );
}

const Root = styled.div`
  display: flex;
  justify-content: center;
  margin: 5vh 0;

  @media screen and (max-width: 700px) {
    background-color: #2d536d;
    min-height: 60vh;
  }
`;

const Container = styled.div`
  max-width: 70em;
  width: 80%;
  display: flex;
  align-items: center;

  @media screen and (max-width: 700px) {
    flex-direction: column;
    justify-content: space-around;
  }
`;

const Image = styled.img`
  width: 50%;

  @media screen and (max-width: 700px) {
    display: none;
  }
`;

const TextDiv = styled.div`
  padding: 5%;
`;

const Tagline = styled.h2`
  font-size: 2em;
  font-weight: 900;
  padding: 1em 0;
  color: #555353;

  @media screen and (max-width: 700px) {
    color: white;
    text-align: center;
  }
`;

const Text = styled.p`
  font-size: 1em;
  @media screen and (max-width: 700px) {
    color: white;
    text-align: center;
  }
`;

const ButtonDiv = styled.div`
  display: none;
  width: 100%;

  @media screen and (max-width: 700px) {
    display: flex;
    justify-content: center;

    button {
      width: 80%;
    }
  }
`;
