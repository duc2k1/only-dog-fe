import React from "react";

export default function Header() {
  return (
    <div>
      <div className="row p-5">
        <div className="col-md-4 text-center">
          <img
            src="https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg"
            alt=""
            width="200"
            className="rounded-circle"
          />
        </div>
        <div className="col-md-8" style={{ marginTop: 65 }}>
          <h3 className="text-center">Your name</h3>
          <div className="d-flex justify-content-around">
            <p className="me-3">
              <b>10</b> posts
            </p>
            <p className="me-3">
              <b>20</b> followers
            </p>
            <p className="me-3">
              <b>10</b> following
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
