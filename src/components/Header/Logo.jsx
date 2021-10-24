import React, { memo } from "react";
import logo from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";
//--------------------------------------------------
export default memo(function Logo() {
  //--------------------------------------------------
  return (
    <Link to="/">
      <img
        role="button"
        src={logo}
        alt="Logo OnlyDog"
        width={200}
        style={{ userSelect: "none" }}
        className="my-2"
        title="Tất nhiên là trừ thằng admin ra, ahihi :33"
      />
    </Link>
  );
});
