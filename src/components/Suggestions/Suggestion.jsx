import React from "react";

export default function Suggestion({ name }) {
  return (
    <div className="col-4 col-sm-4 text-center mb-3">
      <img
        className="rounded-circle mb-3"
        src="https://i.imgflip.com/4/4t0m5.jpg"
        alt=""
        width="30"
      />
      <div style={{ cursor: "pointer" }}>Follow</div>
    </div>
  );
}
