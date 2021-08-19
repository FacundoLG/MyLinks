import React from "react";
import styled from "styled-components";
import { BsList, BsSearch } from "react-icons/bs";
const MyNavbar = styled.div`
  display: flex;
  justify-content: space-between;
  height: 50px;
  align-items: center;
  padding: 0px 10px;
  background: var(--main-color);
  border-bottom: solid var(--border-color) 1px;
  > input {
    height: 30px;
  }
  > .profileImage {
    background: #000;
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  > .icon {
    font-size: 30px;
  }
`;
const Search = styled.div`
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
  width: 70%;
  max-width: 400px;
  height: 34px;
  > input {
    display: flex;
    width: 100%;
    border: none;
    outline: none;
    border: 1px var(--border-color) solid;
    border-right: none;
    font-size: 16px;
    padding: 0px 7px;
    border-radius: 20px 0 0 20px;
  }
  > button {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    padding: 12px;
    border-radius: 0 20px 20px 0;
    border: 1px var(--border-color) solid;
    background: #ffff;
    border-left: none;
  }
`;
const Navbar = () => {
  return (
    <MyNavbar>
      <BsList className="icon" />
      <Search>
        <input type="text" />
        <button>
          <BsSearch />
        </button>
      </Search>
      <div className="profileImage"></div>
    </MyNavbar>
  );
};

export default Navbar;
