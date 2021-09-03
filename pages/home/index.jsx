import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout.jsx/Layout";
import LinksManager from "../../components/LinksManager";
import Cookies from "universal-cookie";
import Masonry from "react-masonry-css";
import { BsPlusCircle } from "react-icons/bs";
import useFetch from "../../hooks/useFetch";
const cookies = new Cookies();

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  350: 1,
};
const Home = () => {
  const [group, setGroup] = useState([]);
  const [refresh, setRefresh] = useState(0);
  const userData = {
    userId: cookies.get("id"),
    key: cookies.get("password"),
  };
  useEffect(() => {
    fetch(
      `http://localhost:3000/api/groups?userid=${userData.userId}&password=${userData.key}`
    )
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        return setGroup(data);
      });
  }, [refresh]);

  const newGroup = () => {
    console.log("New");
    fetch(
      `http://localhost:3000/api/groups?userid=${userData.userId}&password=${userData.key}`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: "Name",
          color: 1,
        }),
      }
    ).then((data) => {
      return setRefresh(refresh + 1);
    });
  };
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
        <div
          className="addGroupButton"
          onClick={() => {
            newGroup();
          }}
        >
          <BsPlusCircle />
        </div>
      </Masonry>
    </Layout>
  );
};

export default Home;
