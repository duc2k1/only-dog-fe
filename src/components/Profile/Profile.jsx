import React from "react";
import Header from "./Header";
import Photos from "./Photos";

export default function Profile({ page }) {
  return (
    <div className={page === "profile" ? "container" : "d-none"}>
      <Header />
      <Photos />
    </div>
  );
}
