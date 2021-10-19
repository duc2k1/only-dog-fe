import React, { useState } from "react";
import Actions from "./Actions";
import Dislike from "./Dislike";
import Like from "./Like";

export default function Post() {
  return (
    <div className="col-sm-6 col-lg-4 mb-4">
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
      <img
        className="img-fluid"
        src="https://placedog.net/500?random"
        alt="Image Post"
        style={{ objectFit: "cover", userSelect: "none" }}
      />

      <Actions />
    </div>
  );
}
