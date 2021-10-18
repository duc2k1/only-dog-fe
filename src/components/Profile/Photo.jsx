import React from "react";

export default function Photo() {
  return (
    <div className="col-sm-6 col-lg-4 mb-4">
      <div className="card">
        <img
          className="card-img img-fluid"
          src="https://placedog.net/500?random"
          alt=""
        />
      </div>
    </div>
  );
}
