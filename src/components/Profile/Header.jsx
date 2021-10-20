import React from "react";
import ModalAvatar from "./ModalAvatar";

export default function Header() {
  return (
    <div>
      <div className="row p-5">
        <div className="col-md-4 text-center">
          <img
            src="https://placedog.net/500?random"
            alt=""
            width="200"
            height="200"
            className="rounded-circle"
            role="button"
            style={{ objectFit: "cover", userSelect: "none" }}
            data-bs-toggle="modal"
            data-bs-target="#modalAvatar"
          />
          <ModalAvatar />
        </div>
        <div className="col-md-8" style={{ marginTop: 65 }}>
          <h3 className="text-center">aaaaaaaaaa</h3>
          <div className="d-flex justify-content-around">
            <p className="me-3">
              <b>111</b> posts
            </p>
            <p className="me-3">
              <b>11</b> followers
            </p>
            <p className="me-3">
              <b>1</b> following
            </p>
          </div>
          <div className="text-center">
            <button className="btn btn-outline-dark">Follow</button>
          </div>
        </div>
      </div>
    </div>
  );
}
