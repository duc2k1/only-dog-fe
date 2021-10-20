import React from "react";
import { AiOutlineDislike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";

export default function Dislike({ like, setLike, dislike, setDislike }) {
  const handleSetDislike = () => {
    dislike ? setDislike(!dislike) : setDislike(true);
    like && setLike(!like);
  };

  return (
    <div onClick={handleSetDislike}>
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
  );
}
