import React from "react";
import styled from "styled-components";

// component imports
import CustomSwiperPillar from "../CustomSwiperPillar";

const content = {
  jp: {
    header: "Our 4 Pillars",
    introText:
      "性暴力など、ジェンダーに基づく暴力の撤廃女性を政治の場面や意思決定の場へ若いリーダーをエンパワーし、ユースの声を意思決定の場にダイバーシティー&インクルージョン",
  },
  en: {
    header: "Our 4 Pillars",
    introText:
      "性暴力など、ジェンダーに基づく暴力の撤廃女性を政治の場面や意思決定の場へ若いリーダーをエンパワーし、ユースの声を意思決定の場にダイバーシティー&インクルージョン",
  },
};

export default function Pillars({ lang = "jp" }) {
  let selectedLang = {};
  lang === "jp" ? (selectedLang = content.jp) : (selectedLang = content.en);

  return (
    <Root>
      <Container>
        <IntroDiv>
          <Header> {selectedLang.header} </Header>
          <Underline />
          <Text> {selectedLang.introText} </Text>
        </IntroDiv>
        <PillarDiv>The pillar swiper goes here</PillarDiv>
      </Container>
    </Root>
  );
}

const Root = styled.div`
  display: flex;
  justify-content: center;
  margin: 5vh 0;
`;

const Container = styled.div`
  max-width: 70em;
  width: 80%;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`;

const IntroDiv = styled.div`
  width: 45%;

  @media screen and (max-width: 700px) {
    width: 100%
  }
`;

const PillarDiv = styled.div`
  width: 45%;
  background-color: red;

  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;

const Header = styled.h2``;

const Underline = styled.div`
  height: 0.4em;
  width: 5em;
  background-color: #dd5871;
`;

const Text = styled.p``;
