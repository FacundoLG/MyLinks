import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { BsSearch } from "react-icons/bs";
const Header = () => {
  const [navStatus, setNavStaus] = useState(false);
  document.addEventListener("click", (event) => {
    return (clickId = event.target.id);
  });
  const HandleNavBar = () => {
    if (navStatus === false) {
      setNavStaus(true);
    } else {
      if (clickId === "inputGroup3" || "inputGroup2" || "inputGroup1") {
        setNavStaus(true);
      } else {
        setNavStaus(false);
      }
    }
  };

  return (
    <>
      <div className="Header">
        <h2>Linking</h2>
        <div
          id="inputGroup3"
          className={navStatus ? "navbarButton expanded" : "navbarButton"}
          onClick={HandleNavBar}
        >
          <BsSearch className="searchIcon" id="inputGroup1" />
          <input
            className={navStatus ? "searchInput display" : "searchInput"}
            type="text"
            id="inputGroup2"
          />
        </div>
        <div className="userImage"></div>
      </div>
      <Navbar state={navStatus} />
    </>
  );
};

export default Header;
