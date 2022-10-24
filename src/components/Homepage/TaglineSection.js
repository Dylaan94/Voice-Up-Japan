import React from "react";
import styled from "styled-components";

// image imports

import logo from "../../images/vuj-logo2.svg";

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

export default function TaglineSection({ lang = "jp" }) {
  return (
    <Root>
      <Container>
        <Image src={logo} />
        <TextDiv>
          <Tagline> {content.jp.tagline} </Tagline>
          <Text> {content.jp.text} </Text>
        </TextDiv>
      </Container>
    </Root>
  );
}

const Root = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  max-width: 1000px;
  width: 80%;
  display: flex;
  align-items: center;
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

const Tagline = styled.h2``;

const Text = styled.p``;
