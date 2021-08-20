import React from "react";

const Link = () => {
  var image = true;
  return (
    <div className="Link">
      {image ? (
        <div className="linkImage" src="" alt="">
          <div className="linkData">
            <p>Facebook</p>
          </div>
        </div>
      ) : (
        ""
      )}
      <div className="linkData">{image ? "" : <p>Facebook</p>}</div>
    </div>
  );
};

export default Link;
