import React, { useState } from "react";
import useUser from "../../hooks/useUser";
import LoggedInUserContext from "../../context/LoggedInUser";
import Logo from "./Logo";
import ButtonToggle from "./ButtonToggle";
import Find from "./Find";
import Actions from "./Actions";

export default function Header({ setPage, user: loggedInUser }) {
  const [find, setFind] = useState("");

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1051,
        background: "white",
      }}
      className="navbar navbar-expand-md navbar-light"
    >
      <div className="container">
        <Logo setPage={setPage} />
        <ButtonToggle />
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <Find find={find} setFind={setFind} setPage={setPage} />
          <Actions setPage={setPage} />
        </div>
      </div>
    </nav>
  );
}
