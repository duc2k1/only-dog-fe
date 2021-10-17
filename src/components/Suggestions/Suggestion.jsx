import React from "react";

export default function Suggestion({ name }) {
  return (
    <div className="col-2 col-sm-2 text-center">
      <img
        className="rounded-circle mb-3"
        src="https://i.imgflip.com/4/4t0m5.jpg"
        alt=""
        width="50"
      />
      <div style={{ color: "blue", cursor: "pointer" }}>Follow</div>
    </div>
  );
}
