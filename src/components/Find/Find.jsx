import React from "react";
import BackToTop from "../BackToTop";

export default function Find({ page }) {
  return (
    <div className={page === "find" ? "container" : "d-none"}>
      <h1>Find</h1>
    </div>
  );
}
