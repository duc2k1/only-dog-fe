import React from "react";
import { AiFillLike } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";

export default function Like({ like, setLike, dislike, setDislike }) {
  const handleSetLike = () => {
    like ? setLike(!like) : setLike(true);
    dislike && setDislike(!dislike);
  };

  return (
    <div onClick={handleSetLike}>
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
  );
}
