import React from "react";
import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="header-section-left">
        <a
          className="header-icons"
          href="http://www.github.com/easymahaffey"
          target="blank"
        >
          GITHUB
        </a>
        <a
          className="header-icons"
          href="http://www.linkedin.com/in/easy-mahaffey"
          target="blank"
        >
          LINKEDIN
        </a>
      </div>
      <a
        className="header-icons header-section-right"
        href="#contact"
        target=""
      >
        CONTACT ME
      </a>
    </div>
  );
}
