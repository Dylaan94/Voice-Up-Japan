import * as React from "react";
import Layout from "../components/Layout";

// Component imports

import TaglineSection from "../components/TaglineSection";

const IndexPage = () => {
  return (
    <Layout>
      <TaglineSection />
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
