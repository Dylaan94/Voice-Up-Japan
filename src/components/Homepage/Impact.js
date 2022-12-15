import React from "react";
import styled from "styled-components";

const content = {
  jp: {},
  en: {},
};

export default function Impact() {
  return (
    <Root>
      <Container>
        <Header>Impact</Header>
        <PillarDiv></PillarDiv>
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

const PillarDiv = styled.div``;

const Header = styled.h2`
  font-size: 2em;
  color: #555353;
`;
