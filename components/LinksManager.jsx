import React, { useEffect, useState } from "react";
import Link from "./Link";
let colors = [1, 2, 3, 4, 5, 6];

colors = colors.map((color) => {
  return (
    <div
      className="color"
      style={{ backgroundColor: `var(--usefull-color${color})` }}
    ></div>
  );
});

const LinksManager = ({ index, data }) => {
  const [titleValue, setTitleValue] = useState("");
  let id = `${index}_${data.GrupName}`;

  useEffect(() => {
    setTitleValue(data.GrupName);
    document.getElementById(id).value = titleValue;
  }, [titleValue]);

  return (
    <div className="LinksManager">
      <input
        id={id}
        type="text"
        onChange={(e) => {
          setTitleValue(e.target.value);
        }}
        className="linksTitle"
      />

      <div className="linksContainer">
        <Link data={""} />
      </div>
    </div>
  );
};

export default LinksManager;
