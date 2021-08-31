import React, { useEffect, useState } from "react";
import Link from "./Link";

import { BiColorFill } from "react-icons/bi";

import Cookies from "universal-cookie";
const cookies = new Cookies();

let colors = [1, 5, 3, 4, 6, 2];

colors = colors.map((color) => {
  return (
    <div
      className="color"
      style={{ backgroundColor: `var(--usefull-color${color})` }}
    ></div>
  );
});

const LinksManager = ({ index, data }) => {
  const [colorPicker, setColorPicker] = useState(false);
  const [titleValue, setTitleValue] = useState("");
  const [links, setLinks] = useState([]);

  useEffect(() => {
    setTitleValue(data.GrupName);
    fetch("http://localhost:3000/api/links", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: cookies.get("id"),
        groupId: data.id,
        password: cookies.get("password"),
      }),
    })
      .then((data) => data.json())
      .then((data) => {
        return setLinks(data.result);
      });
  }, []);

  return (
    <>
      <div className="LinksManager">
        <p className="linksTitle">{titleValue}</p>

        <div className="linksContainer">
          {links?.map((data) => (
            <Link data={data} />
          ))}
        </div>
      </div>
      <div className="tools">
        <BiColorFill
          className="toolIcon"
          onClick={() => {
            setColorPicker(!colorPicker);
          }}
        />
        <div className={colorPicker ? "colorPicker" : "colorPicker hide"}>
          {colors}
        </div>
      </div>
    </>
  );
};

export default LinksManager;
