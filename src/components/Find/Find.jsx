import React from "react";

export default function Find({ page }) {
  return (
    <div className={page === "find" ? "container" : "d-none"}>
      <h1>Find</h1>
    </div>
  );
}
