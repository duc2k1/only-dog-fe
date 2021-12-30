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
        width={70}
        style={{ userSelect: "none" }}
        className="my-2"
      />
    </Link>
  );
});
