import React, { useState } from "react";
import Navbar from "./Navbar";
import { BsSearch } from "react-icons/bs";
const Header = () => {
  const [navStatus, setNavStaus] = useState(false);
  const HandleNavBar = () => {
    setNavStaus(!navStatus);
  };
  return (
    <>
      <div className="Header">
        <h2>Linking</h2>
        <button id="navbutton" className="navbarButton" onClick={HandleNavBar}>
          <BsSearch />
        </button>
        <div className="userImage"></div>
      </div>
      <Navbar state={navStatus} />
    </>
  );
};

export default Header;
