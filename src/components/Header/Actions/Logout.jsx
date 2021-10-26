import React from "react";
import { RiLogoutBoxRLine } from "react-icons/ri";
//--------------------------------------------------------
export default function Logout({ setStateAccessToken }) {
  return (
    <RiLogoutBoxRLine
      role="button"
      size="30"
      onClick={() => {
        setStateAccessToken("");
        localStorage.removeItem("accessToken");
      }}
    />
  );
}
