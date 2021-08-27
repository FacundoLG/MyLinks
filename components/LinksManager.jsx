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

const LinksManager = ({ length, title, index }) => {
  const [titleValue, setTitleValue] = useState(title);
  let id = `${index}_${title}`;

  useEffect(() => {
    document.getElementById(id).value = titleValue;
  }, [titleValue]);
  let cantidadDeLinks = [1, 2, 3];
  for (var i = 0; i < length; i++) {
    cantidadDeLinks.push(i);
    i++;
  }
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
        {cantidadDeLinks.map((dato, i) => (
          <Link key={index + "_" + dato + i} />
        ))}
        <Link />
      </div>
    </div>
  );
};

export default LinksManager;
