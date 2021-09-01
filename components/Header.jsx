import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { BsSearch } from "react-icons/bs";
const Header = () => {
  const [navStatus, setNavStaus] = useState(false);
  useEffect(() => {
    document.addEventListener("click", (event) => {
      var id = event.target.id;
      HandleNavBar(id);
    });
    return () => {
      document.removeEventListener("click", () => {});
    };
  }, []);
  const HandleNavBar = (clickId) => {
    if (
      (navStatus === false && clickId === "inputGroup3") ||
      clickId === "inputGroup2" ||
      clickId === "inputGroup1"
    ) {
      setNavStaus(true);
    } else {
      setNavStaus(false);
    }
  };

  return (
    <>
      <div className="Header">
        <h2>Linking</h2>
        <div className="iconsContainer">
          <div
            id="inputGroup3"
            className={navStatus ? "navbarButton expanded" : "navbarButton"}
          >
            <BsSearch id="inputGroup1" />
            <input
              className={navStatus ? "searchInput display" : "searchInput"}
              type="text"
              id="inputGroup2"
            />
          </div>
        </div>
        <div className="userImage"></div>
      </div>
      <Navbar state={navStatus} />
    </>
  );
};

export default Header;
