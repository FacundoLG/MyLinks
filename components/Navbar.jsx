import React from "react";

const HomeNavbar = [
  {
    name: "Favorites",
    link: "",
    color: "BF1363",
    area: "one",
  },

  {
    name: "Popular",
    link: "",
    color: "FF4848",
    area: "two",
  },
  {
    name: "Social",
    link: "",
    color: "FF4C29",
    area: "three",
  },
  {
    name: "New",
    link: "",
    color: "FF2626",
    area: "four",
  },
  {
    name: "Random",
    link: "",
    color: "64C9CF",
    area: "five",
  },
  {
    name: "Yours",
    link: "",
    color: "D89216",
    area: "six",
  },
];

const Navbar = ({ state }) => {
  return (
    <nav className={state ? "Navbar" : "Navbar hiden"}>
      <div className="container">
        {HomeNavbar.map((page) => (
          <div
            key={page.name}
            className="pageLink"
            style={{ backgroundColor: "#" + page.color, gridArea: page.area }}
          >
            <p className="pageName">{page.name}</p>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
