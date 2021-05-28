import React from "react";
import "./style.css";

function Nav() {
  return (
    <nav style={{ height: 100, textAlign: "center", backgroundColor:"#47576b" }}
    className="navbar navbar-dark bg" >
      <a style={{fontSize: 40, color: "white"}}
         href="/">
        Cryptography
      </a>
      <a style={{textalign:"left", color: "white"}}
      href="/signup/">
        Sign Up 
      </a>

    </nav>
  );
}

export default Nav;