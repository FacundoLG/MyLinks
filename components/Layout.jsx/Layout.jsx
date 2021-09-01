import React from "react";
import Header from "../Header";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div
        style={{
          width: "90vw",
          margin: "0 auto",
          height: "82vh",
          padding: "2vh 10px",
          overflowX: "auto",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Layout;
