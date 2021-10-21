import React, { useState } from "react";
import Dislike from "./Dislike";
import Like from "./Like";
//--------------------------------------------------
export default function Actions() {
  const [like, setLike] = useState(null);
  const [dislike, setDislike] = useState(null);
  //--------------------------------------------------
  return (
    <div
      className="d-flex justify-content-around m-2"
      style={{ userSelect: "none" }}
    >
      <Like
        like={like}
        setLike={setLike}
        dislike={dislike}
        setDislike={setDislike}
      />
      <Dislike
        like={like}
        setLike={setLike}
        dislike={dislike}
        setDislike={setDislike}
      />
    </div>
  );
}
