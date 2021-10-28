import React, { useState, memo, useEffect } from "react";
import Dislike from "./Dislike";
import Like from "./Like";
//--------------------------------------------------
export default memo(function Actions() {
  const [like, setLike] = useState(false);
  const [dislike, setDislike] = useState(false);
  const [numberOfLike, setNumberOfLike] = useState(0);
  const [numberOfDislike, setNumberOfDislike] = useState(0);
  //--------------------------------------------------
  useEffect(() => {
    // fetch(
    //   import.meta.env.VITE_DOMAIN_API +
    //     import.meta.env.VITE_ENDPOINT_FIND_USER_BY_ID+"/"+"",
    // )
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //   })
    //   .catch((err) => console.log(err));
  }, []);
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
        numberOfLike={numberOfLike}
      />
      <Dislike
        like={like}
        setLike={setLike}
        dislike={dislike}
        setDislike={setDislike}
        numberOfDislike={numberOfDislike}
      />
    </div>
  );
});
