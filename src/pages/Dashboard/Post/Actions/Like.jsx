import React, { useContext, memo } from "react";
import { AiOutlineLike, AiFillLike } from "react-icons/ai";
import { AppContext } from "../../../../contexts/AppProvider";
import { AuthContext } from "../../../../contexts/AuthProvider";
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
  return (
    <div onClick={() => handleSetLike()}>
      <small className={like ? "text-primary" : ""}>
        {numberOfLike + like}
      </small>
      <AiOutlineLike
        size="25"
        role="button"
        className={like && numberOfLike ? "d-none" : ""}
        style={{ marginBottom: 10 }}
      />
      <AiFillLike
        size="25"
        role="button"
        className={like && numberOfLike ? "text-primary" : "d-none"}
        style={{ marginBottom: 10 }}
      />
    </div>
  );
});
