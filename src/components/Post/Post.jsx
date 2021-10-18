import React from "react";
import { AiOutlineDislike } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";

export default function Post() {
  return (
    <div className="col-sm-6 col-lg-4 mb-4">
      <div className="card">
        <div className="d-flex">
          <img
            src="https://provplan.org/wp-content/uploads/2021/07/4d4afbdc56a85edb2855b25122116f74.jpg"
            alt="Avatar"
            width="40"
            className="rounded-circle m-1"
          />
          <div>
            <b>nameeeeee</b>
            <br />
            <small className="text-muted">1/10/2001</small>
          </div>
        </div>

        <img
          className="card-img img-fluid"
          src="https://provplan.org/wp-content/uploads/2021/07/4d4afbdc56a85edb2855b25122116f74.jpg"
          alt="Image Post"
          style={{ borderRadius: 0 }}
        />
        <div className="d-flex justify-content-around m-2">
          {/* <AiFillDislike />
          <AiFillLike /> */}
          <div>
            <AiOutlineLike size="25" role="button" className="mb-1" />
            <small>25</small>
          </div>
          <div>
            <AiOutlineDislike size="25" role="button" />
            <small>25</small>
          </div>
        </div>
      </div>
    </div>
  );
}
