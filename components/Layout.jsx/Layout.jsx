import React from "react";
import styled from "styled-components";
import Navbar from "../Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
