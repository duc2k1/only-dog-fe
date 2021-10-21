import React, { useContext, useState } from "react";
import Logo from "./Logo";
import ButtonToggle from "./ButtonToggle";
import Find from "./Find";
import Actions from "./Actions/Actions";
import { AppContext } from "../../contexts/AppProvider";

export default function Header() {
  const [find, setFind] = useState("");

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        background: "white",
      }}
      className="navbar navbar-expand-md navbar-light"
    >
      <div className="container">
        <Logo />
        <ButtonToggle />
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <Find find={find} setFind={setFind} />
          <Actions />
        </div>
      </div>
    </nav>
  );
}
