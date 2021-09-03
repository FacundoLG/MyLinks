import React from "react";
import GroupEditor from "../GroupEditor";
import Header from "../Header";

const Layout = ({ children }) => {
  return (
    <div style={{ height: "90vh" }}>
      <GroupEditor />
      <Header />
      <div
        style={{
          width: "90vw",
          margin: "0 auto",
          height: "86vh",
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
