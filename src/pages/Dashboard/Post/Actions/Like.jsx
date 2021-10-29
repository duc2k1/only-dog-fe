import React, { useContext, memo, useState, useEffect } from "react";
import { ImArrowUp2 } from "react-icons/im";
import { AppContext } from "../../../../contexts/AppProvider";
import { AuthContext } from "../../../../contexts/AuthProvider";
import getUserIdFromAccessToken from "../../../../helpers/getUserIdFromAccessToken";
//--------------------------------------------------
export default memo(function Like({
  like,
  setLike,
  dislike,
  setDislike,
  numberOfLike,
}) {
  const { setShowModalLogin } = useContext(AppContext);
  const { stateAccessToken } = useContext(AuthContext);
  //--------------------------------------------------
  const handleSetLike = () => {
    if (stateAccessToken) {
      setLike(!like);
      dislike && setDislike(!dislike);
    } else setShowModalLogin(true);
  };
  //--------------------------------------------------
  return (
    <div onClick={() => handleSetLike()}>
      <small className={like ? "text-primary" : "text-muted"}>
        {numberOfLike + like}
      </small>
      <ImArrowUp2
        size="25"
        role="button"
        className={like ? "d-none" : "text-muted"}
        style={{ marginBottom: 10 }}
      />
      <ImArrowUp2
        size="25"
        role="button"
        className={like ? "text-primary" : "d-none"}
        style={{ marginBottom: 10 }}
      />
    </div>
  );
});
