import React, { useState } from "react";
import { AiOutlineDislike } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";

export default function Post() {
  const [like, setLike] = useState(null);
  const [dislike, setDislike] = useState(null);

  const handleSetLike = () => {
    like ? setLike(!like) : setLike(true);
    dislike && setDislike(!dislike);
  };
  const handleSetDislike = () => {
    dislike ? setDislike(!dislike) : setDislike(true);
    like && setLike(!like);
  };

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
      <div
        className="d-flex justify-content-around m-2"
        style={{ userSelect: "none" }}
      >
        {/* <AiFillDislike />
          <AiFillLike /> */}
        <div onClick={() => handleSetLike()}>
          <AiOutlineLike
            size="25"
            role="button"
            className={like ? "d-none" : "mb-1"}
          />
          <AiFillLike
            size="25"
            role="button"
            className={like ? "mb-1" : "d-none"}
          />
          <small>25</small>
        </div>
        <div onClick={() => handleSetDislike()}>
          <AiOutlineDislike
            size="25"
            role="button"
            className={dislike ? "d-none" : "mb-1"}
          />
          <AiFillDislike
            size="25"
            role="button"
            className={dislike ? "mb-1" : "d-none"}
          />
          <small>25</small>
        </div>
      </div>
    </div>
  );
}
