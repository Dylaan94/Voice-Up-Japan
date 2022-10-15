import React from "react";
import styled from "styled-components";

const content = {
  jp: {
    tagline: "これはタグラインです",
    text: "テクスト",
  },
  en: {
    tagline: "This is the tagline",
    text: "text",
  },
};

export default function TaglineSection() {
  return (
    <Root>
      <Tagline> {content.jp.tagline} </Tagline>
      <Text> {content.jp.text} </Text>
    </Root>
  );
}

const Root = styled.div``;

const Tagline = styled.h2``;

const Text = styled.p``;
