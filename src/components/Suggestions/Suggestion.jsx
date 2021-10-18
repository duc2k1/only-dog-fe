import React from "react";

export default function Suggestion({ name }) {
  return (
    <div className="col-4 col-sm-2 text-center mb-3">
      <img
        className="rounded-circle mb-2"
        src="https://i.imgflip.com/4/4t0m5.jpg"
        alt=""
        width="60"
      />
      <div style={{ cursor: "pointer" }}>{name}</div>
      <div style={{ cursor: "pointer", color: "blue" }}>Follow</div>
    </div>
  );
}
