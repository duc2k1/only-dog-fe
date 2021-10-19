import React from "react";
import logo from "../../assets/images/logo.svg";

export default function Logo({ setPage }) {
  return (
    <img
      role="button"
      src={logo}
      alt="Logo OnlyDog"
      width={200}
      onClick={() => {
        setPage("dashboard");
      }}
      style={{ userSelect: "none" }}
    />
  );
}
