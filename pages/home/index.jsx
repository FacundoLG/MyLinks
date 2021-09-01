import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout.jsx/Layout";
import LinksManager from "../../components/LinksManager";
import Cookies from "universal-cookie";
import Masonry from "react-masonry-css";
import { BsPlusCircle } from "react-icons/bs";
import useFetch from "../../hooks/useFetch";
import GroupEditor from "../../components/GroupEditor";
const cookies = new Cookies();

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  350: 1,
};
const Home = () => {
  const [group, setGroup] = useState([]);
  const userData = {
    userId: cookies.get("id"),
    password: cookies.get("password"),
  };
  useEffect(() => {
    fetch("http://localhost:3000/api/groups", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((data) => data.json())
      .then((data) => {
        return setGroup(data);
      });
  }, []);

  const newGroup = () => {
    useFetch("http://localhost:3000/api/groups", "POST", {
      ...userData,
      create: true,
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
        <div className="addGroupButton">
          <BsPlusCircle
            onClick={() => {
              newGroup;
            }}
          />
        </div>
      </Masonry>
    </Layout>
  );
};

export default Home;
