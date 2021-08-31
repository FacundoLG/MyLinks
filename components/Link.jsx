import React from "react";
import { BsCircleFill } from "react-icons/bs";
const Link = ({ data }) => {
  console.log(data);
  return (
    <div className="Link">
      <div className="linkData">
        <BsCircleFill className="dot" />
        {data ? (
          <a href={data?.link} target="_blank">
            {data?.LinkName}
          </a>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Link;
