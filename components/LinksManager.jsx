import React, { useEffect, useState } from "react";
import Link from "./Link";

import {
  BiColorFill,
  BiPencil,
  BiPlusCircle,
  BiSave,
  BiXCircle,
} from "react-icons/bi";

import Cookies from "universal-cookie";
const cookies = new Cookies();

let colors = [1, 5, 3, 4, 6, 2];

const LinksManager = ({ index, data, refresh }) => {
  const [colorPicker, setColorPicker] = useState(false);
  const [titleValue, setTitleValue] = useState("");
  const [links, setLinks] = useState([]);
  const userData = {
    userId: cookies.get("id"),
    key: cookies.get("password"),
  };

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

  const deleteGroup = () => {
    fetch(
      `http://localhost:3000/api/groups?userid=${userData.userId}&password=${userData.key}`,
      {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: cookies.get("id"),
          groupId: data.id,
          password: cookies.get("password"),
        }),
      }
    ).then(() => {
      refresh();
    });
  };

  return (
    <>
      <div
        className="LinksManager"
        style={{ background: `var(--usefull-color${data.color || 2})` }}
      >
        <input
          value={titleValue}
          className="linksTitle"
          onChange={(e) => {
            setTitleValue(e.target.value);
          }}
        />

        <div className="linksContainer">
          {links?.map((data) => (
            <Link data={data} />
          ))}
        </div>
      </div>
      <div className="tools">
        <div className="toolsSection">
          <BiColorFill
            className="toolIcon"
            onClick={() => {
              setColorPicker(!colorPicker);
            }}
          />
          <div className={colorPicker ? "colorPicker" : "colorPicker hide"}>
            {colors.map((color) => {
              return (
                <div
                  onClick={() => {
                    setColorPicker(false);
                  }}
                  className="color"
                  style={{ backgroundColor: `var(--usefull-color${color})` }}
                ></div>
              );
            })}
          </div>
          <BiPlusCircle className="toolIcon" />
          <BiSave className="toolIcon" />
        </div>
        <BiXCircle className="toolIcon warning" onClick={deleteGroup} />
      </div>
    </>
  );
};

export default LinksManager;
