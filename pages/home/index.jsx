import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout.jsx/Layout";
import LinksManager from "../../components/LinksManager";
import Cookies from "universal-cookie";
import Masonry from "react-masonry-css";

const cookies = new Cookies();

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  350: 1,
};

const Home = () => {
  const [group, setGroup] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/api/groups", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: cookies.get("id"),
        password: cookies.get("password"),
      }),
    })
      .then((data) => data.json())
      .then((data) => {
        return setGroup(data);
      });
  }, []);
  console.log(group);
  return (
    <Layout>
      <Masonry breakpointCols={breakpointColumnsObj} className="Home">
        {group?.result?.map((data) => (
          <LinksManager
            key={data.id + data.GrupName}
            index={data.id + data.GrupName}
            data={data}
          />
        ))}
      </Masonry>
    </Layout>
  );
};

export default Home;
