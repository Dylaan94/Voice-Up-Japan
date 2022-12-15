import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";

// component imports
import CustomSwiperPillar from "../Swipers/CustomSwiperPillar";

const content = {
  jp: {
    header: "Our 4 Pillars",
    introText:
      "性暴力など、ジェンダーに基づく暴力の撤廃女性を政治の場面や意思決定の場へ若いリーダーをエンパワーし、ユースの声を意思決定の場にダイバーシティー&インクルージョン",
    moreInfo: "詳細",
  },
  en: {
    header: "Our 4 Pillars",
    introText:
      "性暴力など、ジェンダーに基づく暴力の撤廃女性を政治の場面や意思決定の場へ若いリーダーをエンパワーし、ユースの声を意思決定の場にダイバーシティー&インクルージョン",
    moreInfo: "More Info",
  },
};

export default function Pillars({ lang = "jp" }) {
  let selectedLang = {};
  lang === "jp" ? (selectedLang = content.jp) : (selectedLang = content.en);

  return (
    <Root>
      <Container>
        <IntroDiv>
          <Header> {selectedLang.header}</Header>
          <Underline />
          <Text> {selectedLang.introText} </Text>
        </IntroDiv>
        <PillarDiv>
          <CustomSwiperPillar />
        </PillarDiv>
        <PillarImageDiv></PillarImageDiv>
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

  @media screen and (max-width: 1090px) {
    flex-direction: column;
    text-align: center;
  }
`;

const IntroDiv = styled.div`
  width: 100%;
  // aligns the underline to center
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 1090px) {
    width: 45%;
    display: flex;
    align-items: flex-start;
  }
`;

const Header = styled.h2`
  font-size: 2em;
  color: #555353;
  margin-bottom: 0.2em;
`;

const Underline = styled.div`
  height: 0.4em;
  width: 5em;
  background-color: #dd5871;
  margin-bottom: 1em;
`;

const PillarDiv = styled.div`
  width: 100%;

  @media screen and (min-width: 700px) {
    display: none;
  }
`;

const PillarImageDiv = styled.div`
  background: lightgray;
  border-radius: 2em;
  display: none;

  @media screen and (min-width: 700px) {
    display: block;
    width: 100%;
    height: 10vh;
  }

  @media screen and (min-width: 1090px) {
    display: block;
    width: 45%;
    height: 10vh;
  }
`;

const Text = styled.p``;
