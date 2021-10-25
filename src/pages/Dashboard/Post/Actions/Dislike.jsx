import React, { useContext, useState, memo } from "react";
import { AiOutlineDislike } from "react-icons/ai";
import { AppContext } from "../../../../contexts/AppProvider";
import { AuthContext } from "../../../../contexts/AuthProvider";
//--------------------------------------------------
export default memo(function Dislike({
  like,
  setLike,
  dislike,
  setDislike,
  numberOfDislike,
}) {
  const { setShowModalLogin } = useContext(AppContext);
  const { stateAccessToken } = useContext(AuthContext);
  //--------------------------------------------------
  const handleSetDislike = () => {
    if (stateAccessToken) {
      setDislike(!dislike);
      if (like) {
        setLike(!like);
      }
    } else setShowModalLogin(true);
  };
  //--------------------------------------------------
  return (
    <div onClick={handleSetDislike}>
      <small>{numberOfDislike + dislike}</small>
      <AiOutlineDislike
        size="25"
        role="button"
        className={dislike ? "d-none" : "mt-2"}
      />
      <AiOutlineDislike
        size="25"
        role="button"
        className={dislike ? "mt-2 text-danger" : "d-none"}
      />
    </div>
  );
});
