import React from "react";

export default function Suggestion({ name }) {
  return (
    <div className="col-4 col-sm-2 text-center mb-3">
      <img
        className="rounded-circle mb-2"
        src="https://placedog.net/500?random"
        alt=""
        width="60"
        height="60"
        role="button"
        style={{ objectFit: "cover" }}
      />
      <br />
      <small>{name}</small>
      <br />
      <button className="btn btn-outline-primary p-1">Follow</button>
    </div>
  );
}
