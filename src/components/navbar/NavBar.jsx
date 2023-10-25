import React from "react";
import "./navbar.scss";

const NavBar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <div className="wrapper">
        <span>
          const {"<"} Dave {"/>"}
        </span>
        <div className="social">
          <a href="">
            <img src="/facebook.png" alt="" />
            <img src="/instagram.png" alt="" />
            <img src="/x.png" alt="" />
            <img src="/github.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
