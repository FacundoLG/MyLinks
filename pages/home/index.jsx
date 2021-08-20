import React from "react";
import Link from "../../components/Link";

const Home = () => {
  return (
    <div className="Home">
      <p className="title">Your Liks</p>
      <div className="linksContainer">
        <p className="linksTitle">All</p>
        <div className="links">
          <Link />
          <Link />
          <Link />
          <Link />
          <Link />
          <Link />
          <Link />
          <Link />
        </div>
      </div>
    </div>
  );
};

export default Home;
