import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { EffectCreative, Pagination } from "swiper";
import styled from "styled-components";

export default function CustomSwiperPillar() {
  const [page, setPage] = useState(0);
  const [pillarData, setPillarData] = useState([]);

  // graphql query
  const query = `query{
      pillarsCollection{
        items {
          pillarTitle
        }
      }
    }`;

  useEffect(() => {
    window
      .fetch(
        `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
          },
          body: JSON.stringify({ query }),
        }
      )
      .then((response) => response.json())
      .then(({ data, errors }) => {
        if (errors) {
          console.error(errors);
        }

        setPillarData(data.pillarsCollection.items);
      });
  }, []);

  useEffect(() => {
    console.log(pillarData);
  }, [pillarData]);

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
          {pillarData[0] ? <Text> {pillarData[0].pillarTitle} </Text> : <> </>}
        </PillarOne>
      </SwiperSlide>
      <SwiperSlide>
        <PillarTwo>
          <Header>Pillar 2</Header>
          {pillarData[1] ? <Text> {pillarData[1].pillarTitle} </Text> : <> </>}
          <Text> </Text>
        </PillarTwo>
      </SwiperSlide>
      <SwiperSlide>
        <PillarThree>
          <Header>Pillar 3</Header>
          {pillarData[2] ? <Text> {pillarData[2].pillarTitle} </Text> : <> </>}
          <Text> </Text>
        </PillarThree>
      </SwiperSlide>
      <SwiperSlide>
        <PillarFour>
          <Header>Pillar 4</Header>
          {pillarData[3] ? <Text> {pillarData[3].pillarTitle} </Text> : <> </>}
          <Text> </Text>
        </PillarFour>
      </SwiperSlide>
    </CustomSwiper>
  );
}

const CustomSwiper = styled(Swiper)`
  width: 100%;
  aspect-ratio: 1/1;
  margin: 2em 0;
`;

const Text = styled.p``;

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
