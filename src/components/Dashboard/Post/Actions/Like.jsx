import React, { useContext, useState, memo } from "react";
import { AiFillLike } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";
import { AppContext } from "../../../../contexts/AppProvider";
//--------------------------------------------------
export default memo(function Like({ like, setLike, dislike, setDislike }) {
  const { setShowModalLogin, stateAccessToken } = useContext(AppContext);
  const [numberOfLike, setNumberOfLike] = useState(0);
  //--------------------------------------------------
  const handleSetLike = () => {
    if (stateAccessToken) {
      numberOfLike === 0
        ? setNumberOfLike(numberOfLike + 1)
        : setNumberOfLike(numberOfLike - 1);
      setLike(!like);
      dislike && setDislike(!dislike);
      console.log("set like");
    } else setShowModalLogin(true);
  };
  return (
    <div onClick={() => handleSetLike()}>
      <small>{numberOfLike}</small>
      <AiOutlineLike
        size="25"
        role="button"
        className={like ? "d-none" : ""}
        style={{ marginBottom: 10 }}
      />
      <AiFillLike
        size="25"
        role="button"
        className={like ? "" : "d-none"}
        style={{ marginBottom: 10 }}
      />
    </div>
  );
});
