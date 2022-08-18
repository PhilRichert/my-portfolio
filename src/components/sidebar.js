import React from "react";
import "./components.css";

export default function Sidenav() {
  return (
    <div className="sidenav">
      <ul>
        <li>
          <img
            src={require("./images/github.png")}
            alt="
      github"
            className="icon"
          ></img>
        </li>
        <li>
          <img
            src={require("./images/linkedin.png")}
            alt="
      linkedin"
            className="icon"
          ></img>
        </li>
        <li>
          <img
            src={require("./images/email.png")}
            alt="
      email"
            className="icon"
          ></img>
        </li>
      </ul>
    </div>
  );
}
