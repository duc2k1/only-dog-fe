import React from "react";

export default function Header() {
  return (
    <div className="d-flex">
      <img
        src="https://placedog.net/500?random"
        alt="Avatar"
        width="40"
        className="rounded-circle m-1"
        role="button"
        style={{ objectFit: "cover", userSelect: "none" }}
      />
      <div>
        <small>nameeeeee</small>
        <br />
        <small className="text-muted">1/10/2001</small>
      </div>
    </div>
  );
}
