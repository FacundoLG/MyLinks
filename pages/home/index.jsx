import React from "react";
import Layout from "../../components/Layout.jsx/Layout";
import Link from "../../components/Link";
import LinksManager from "../../components/LinksManager";
import Cookies from "universal-cookie";
const cookies = new Cookies();
const Home = () => {
  console.log(cookies.getAll());
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
