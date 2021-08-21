import React from "react";
import Layout from "../../components/Layout.jsx/Layout";
import Link from "../../components/Link";
import LinksManager from "../../components/LinksManager";

const Home = () => {
  return (
    <Layout>
      <div className="Home">
        <LinksManager />
        <LinksManager />
        <LinksManager />
      </div>
    </Layout>
  );
};

export default Home;
