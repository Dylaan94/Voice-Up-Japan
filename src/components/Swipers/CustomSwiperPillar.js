import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { EffectCreative } from "swiper";
import styled from "styled-components";

export default function CustomSwiperPillar() {
  return (
    <CustomSwiper
      grabCursor={true}
      effect={"creative"}
      creativeEffect={{
        prev: {
          shadow: true,
          translate: [0, 0, -400],
        },
        next: {
          translate: ["100%", 0, 0],
        },
      }}
      modules={[EffectCreative]}
    >
      <SwiperSlide>
        <PillarOne>
          <Header>Pillar 1</Header>
        </PillarOne>
      </SwiperSlide>
      <SwiperSlide>
        <PillarTwo>
          <Header>Pillar 2</Header>
        </PillarTwo>
      </SwiperSlide>
      <SwiperSlide>
        <PillarThree>
          <Header>Pillar 3</Header>
        </PillarThree>
      </SwiperSlide>
      <SwiperSlide>
        <PillarFour>
          <Header>Pillar 4</Header>
        </PillarFour>
      </SwiperSlide>
    </CustomSwiper>
  );
}

const CustomSwiper = styled(Swiper)`
  width: 50px;
  height: 50px;
  max-width: 600px;
  max-height: 400px;
  margin: 2em 0;
`;

const PillarOne = styled.div`
  height: 90%;
  border: 0.5em solid #8dd8b3;
  border-radius: 2em;
  box-shadow: 0 0.5em 0.5em -0.4em rgba(0, 0, 0, 0.2);
  background-color: white;
`;

const PillarTwo = styled.div`
  height: 90%;
  border: 0.5em solid #c58dd8;
  border-radius: 2em;
  box-shadow: 0 0.5em 0.5em -0.4em rgba(0, 0, 0, 0.2);
  background-color: white;
`;

const PillarThree = styled.div`
  height: 90%;
  border: 0.5em solid #edd582;
  border-radius: 2em;
  box-shadow: 0 0.5em 0.5em -0.4em rgba(0, 0, 0, 0.2);
  background-color: white;
`;

const PillarFour = styled.div`
  height: 90%;
  border: 0.5em solid #dc5067;
  border-radius: 2em;
  box-shadow: 0 0.5em 0.5em -0.4em rgba(0, 0, 0, 0.2);
  background-color: white;
`;

const Header = styled.h2``;
