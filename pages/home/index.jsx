import React, { useEffect } from "react";
import Layout from "../../components/Layout.jsx/Layout";
import LinksManager from "../../components/LinksManager";
import Cookies from "universal-cookie";
import Masonry from "react-masonry-css";

const cookies = new Cookies();

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1,
};

const Home = () => {
  console.log(cookies.getAll());

  return (
    <Layout>
      <Masonry breakpointCols={breakpointColumnsObj} className="Home">
        <LinksManager length="20" />
        <LinksManager length="10" />
        <LinksManager length="20" />
        <LinksManager length="1" />
        <LinksManager length="20" />
        <LinksManager length="0" />
      </Masonry>
      {/* <div className="Home">
        <LinksManager length="20" />
        <LinksManager length="10" />
        <LinksManager length="20" />
        <LinksManager length="1" />
        <LinksManager length="20" />
        <LinksManager length="0" />
      </div> */}
    </Layout>
  );
};

export default Home;
