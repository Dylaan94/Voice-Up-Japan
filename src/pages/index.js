import * as React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";

// Component imports
import TaglineSection from "../components/Homepage/TaglineSection";
import Pillars from "../components/Homepage/Pillars";

const IndexPage = () => {
  return (
    <Layout>
        <TaglineSection />
        <Pillars />
    </Layout>
  );
};


export default IndexPage;

export const Head = () => <title>Home Page</title>;
