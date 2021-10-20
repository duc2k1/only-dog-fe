import React from "react";
import Users from "./Users";

export default function Find({ page }) {
  return (
    <div className={page === "find" ? "" : "d-none"}>
      <Users />
    </div>
  );
}
