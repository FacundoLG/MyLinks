import React from "react";
import Link from "./Link";

const LinksManager = ({ length }) => {
  let cantidadDeLinks = [1, 2, 3];
  for (var i = 0; i < length; i++) {
    cantidadDeLinks.push(i);
    i++;
  }
  return (
    <div className="LinksManager">
      <p className="linksTitle">Social</p>
      <div className="linksContainer">
        {cantidadDeLinks.map((dato, index) => (
          <Link key={index + dato} />
        ))}
        <Link />
      </div>
    </div>
  );
};

export default LinksManager;
