import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import avatar from "./avatar.png";
import "./Nav.css";
import { Link } from "react-router-dom";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll", this);
    };
  }, []);
  return (
    <div className={`nav ${show && "nav_black"}`}>
      <Link to="/">
        <img src={logo} alt="Logo" className="nav_logo" />
      </Link>
      <Link to="/login">
        {" "}
        <img src={avatar} alt="profile avatar" className="nav_avatar" />
      </Link>
    </div>
  );
}

export default Nav;
