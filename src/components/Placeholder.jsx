import React from "react";
import greyImg from "../assets/images/grey.jpg";

export default function Placeholder({ rounded, width = "100%", height }) {
  return (
    <img
      src={greyImg}
      width={width}
      height={height}
      className={rounded ? "rounded-circle" : ""}
    />
  );
}
