import React, { useState, memo, useEffect } from "react";
import Dislike from "./Dislike";
import Like from "./Like";
//--------------------------------------------------
export default memo(function Actions({ dataPost }) {
  const [like, setLike] = useState(false);
  const [dislike, setDislike] = useState(false);
  const [numberOfLike, setNumberOfLike] = useState(dataPost.likes.length);
  const [numberOfDislike, setNumberOfDislike] = useState(
    dataPost.dislikes.length
  );
  //--------------------------------------------------
  useEffect(() => {
    // fetch(
    //   import.meta.env.VITE_DOMAIN_API +
    //     import.meta.env.VITE_ENDPOINT_LIKE_POST+"/"+"",
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
        dataPost={dataPost}
      />
      <Dislike
        like={like}
        setLike={setLike}
        dislike={dislike}
        setDislike={setDislike}
        numberOfDislike={numberOfDislike}
        dataPost={dataPost}
      />
    </div>
  );
});
