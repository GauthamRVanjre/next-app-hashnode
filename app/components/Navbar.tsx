import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav
      style={{
        backgroundColor: "rebeccapurple",
        padding: "10px",
        margin: "-10px",
      }}
    >
      <ul
        style={{
          display: "flex",
          flexDirection: "row",
          color: "white",
          listStyle: "none",
          paddingRight: "10px",
        }}
      >
        <li>
          <Link
            style={{
              color: "white",
              textDecoration: "none",
              paddingRight: "20px",
            }}
            href={"/"}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            style={{
              color: "white",
              textDecoration: "none",
              paddingRight: "20px",
            }}
            href={"/About"}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            style={{ color: "white", textDecoration: "none" }}
            href={"/Profile"}
          >
            Profile
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
