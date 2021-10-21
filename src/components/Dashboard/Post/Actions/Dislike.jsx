import React from "react";
import { AiOutlineDislike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
//--------------------------------------------------
export default function Dislike({ like, setLike, dislike, setDislike }) {
  const handleSetDislike = () => {
    dislike ? setDislike(!dislike) : setDislike(true);
    like && setLike(!like);
  };
  //--------------------------------------------------
  return (
    <div onClick={handleSetDislike}>
      <small>25</small>
      <AiOutlineDislike
        size="25"
        role="button"
        className={dislike ? "d-none" : "mt-2"}
      />
      <AiFillDislike
        size="25"
        role="button"
        className={dislike ? "mt-2" : "d-none"}
      />
    </div>
  );
}
