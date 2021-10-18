import React from "react";

export default function Header({ user }) {
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
          />
        </div>
        <div className="col-md-8" style={{ marginTop: 65 }}>
          <h3 className="text-center">{user?.name}</h3>
          <div className="d-flex justify-content-around">
            <p className="me-3">
              <b>{user?.posts?.length}</b> posts
            </p>
            <p className="me-3">
              <b>{user?.followers?.length}</b> followers
            </p>
            <p className="me-3">
              <b>{user?.following?.length}</b> following
            </p>
          </div>
          <div className="text-center">
            <button className="btn btn-outline-primary">Follow</button>
          </div>
        </div>
      </div>
    </div>
  );
}
