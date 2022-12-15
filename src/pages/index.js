import * as React from "react";
import Layout from "../components/LayoutComponents/Layout";
import styled from "styled-components";

// Component imports
import TaglineSection from "../components/Homepage/TaglineSection";
import Pillars from "../components/Homepage/Pillars";
import Impact from "../components/Homepage/Impact";
import Voices from "../components/Homepage/Voices";

const IndexPage = () => {
  return (
    <Layout>
      <TaglineSection />
      <Pillars />
      <Impact />
      <Voices />
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
