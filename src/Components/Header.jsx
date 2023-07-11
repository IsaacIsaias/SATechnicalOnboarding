/**
 * Header component
 *
 * Top navigation bar for your site. Set to remain visible as the
 * user scrolls so that they can constantly reach any part of your page.
 */
import React from "react";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <div
      style={{
        position: "fixed",
        display: "flex",
        justifyContent: "center",
        gap: "2rem",
        background: "rgba(255,255,255,0.75)",
        padding: "1rem",
        top: 0,
        width: "100%",
        zIndex: 10,
      }}
    >
      <Link className="active" smooth spy duration={700} to="home">
        Home
      </Link>
      <Link className="active" smooth spy duration={700} to="about">
        About
      </Link>
      <Link className="active" smooth spy duration={700} to="portfolio">
        Portfolio
      </Link>
      <Link className="active" smooth spy duration={700} to="education">
        Education
      </Link>
      <Link className="active" smooth spy duration={700} to="footer">
        Contact
      </Link>
    </div>
  );
};

export default Header;
